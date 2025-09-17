import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const server = await prisma.embyServer.findUnique({
      where: { id },
      include: {
        userServerLinks: {
          where: {
            isDemo: false
          }
        },
        _count: {
          select: {
            userServerLinks: {
              where: {
                isDemo: false
              }
            }
          }
        }
      }
    });

    if (!server) {
      return NextResponse.json({ message: "Servidor no encontrado" }, { status: 404 });
    }

    const serverWithStats = {
      id: server.id,
      name: server.name,
      url: server.url,
      apiKey: server.apiKey,
      maxUsers: server.maxUsers,
      isActive: server.isActive,
      currentUsers: server._count.userServerLinks,
      createdAt: server.createdAt,
      updatedAt: server.updatedAt
    };

    return NextResponse.json(serverWithStats);
  } catch (error) {
    console.error("Error al obtener servidor:", error);
    return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await request.json();
    const { name, url, apiKey, maxUsers, isActive } = body;

    const existingServer = await prisma.embyServer.findUnique({
      where: { id }
    });

    if (!existingServer) {
      return NextResponse.json({ message: "Servidor no encontrado" }, { status: 404 });
    }

    // If URL or API Key changed, test connection
    if ((url && url !== existingServer.url) || (apiKey && apiKey !== existingServer.apiKey)) {
      const { EmbyService } = await import("@/lib/emby");
      const embyService = new EmbyService(apiKey || existingServer.apiKey, url || existingServer.url);
      
      const isConnected = await embyService.testConnection();
      if (!isConnected) {
        return NextResponse.json({ message: "No se pudo conectar al servidor Emby. Verifica la URL y API Key." }, { status: 400 });
      }
    }

    const updatedServer = await prisma.embyServer.update({
      where: { id },
      data: {
        ...(name && { name }),
        ...(url && { url }),
        ...(apiKey && { apiKey }),
        ...(maxUsers !== undefined && { maxUsers }),
        ...(isActive !== undefined && { isActive })
      }
    });

    return NextResponse.json(updatedServer);
  } catch (error) {
    console.error("Error al actualizar servidor:", error);
    return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const existingServer = await prisma.embyServer.findUnique({
      where: { id },
      include: {
        _count: {
          select: {
            userServerLinks: true
          }
        }
      }
    });

    if (!existingServer) {
      return NextResponse.json({ message: "Servidor no encontrado" }, { status: 404 });
    }

    if (existingServer._count.userServerLinks > 0) {
      return NextResponse.json({ 
        message: "No se puede eliminar el servidor porque tiene usuarios asignados" 
      }, { status: 400 });
    }

    await prisma.embyServer.delete({
      where: { id }
    });

    return NextResponse.json({ message: "Servidor eliminado exitosamente" });
  } catch (error) {
    console.error("Error al eliminar servidor:", error);
    return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 });
  }
}