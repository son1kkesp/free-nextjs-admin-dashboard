import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const servers = await prisma.embyServer.findMany({
      select: {
        id: true,
        name: true,
        url: true,
        maxUsers: true,
        isActive: true,
        isTest: true,
        createdAt: true,
        updatedAt: true,
        _count: {
          select: {
            userServerLinks: {
              where: {
                isDemo: false
              }
            }
          }
        }
      },
      orderBy: {
        name: 'asc'
      }
    });

    const serversWithStats = servers.map(server => ({
      id: server.id,
      name: server.name,
      url: server.url,
      apiKey: server.apiKey,
      maxUsers: server.maxUsers,
      isActive: server.isActive,
      currentUsers: server._count.userServerLinks,
      createdAt: server.createdAt,
      updatedAt: server.updatedAt
    }));

    return NextResponse.json(serversWithStats);
  } catch (error) {
    console.error("Error al obtener servidores:", error);
    return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, url, apiKey, maxUsers = 100 } = body;

    if (!name || !url || !apiKey) {
      return NextResponse.json({ message: "Nombre, URL y API Key son requeridos" }, { status: 400 });
    }

    // Test connection to Emby server
    const { EmbyService } = await import("@/lib/emby");
    const embyService = new EmbyService(apiKey, url);
    
    const isConnected = await embyService.testConnection();
    if (!isConnected) {
      return NextResponse.json({ message: "No se pudo conectar al servidor Emby. Verifica la URL y API Key." }, { status: 400 });
    }

    // Create server
    const server = await prisma.embyServer.create({
      data: {
        name,
        url,
        apiKey,
        maxUsers,
        userId: "temp-user-id", // TODO: Replace with actual user ID when auth is implemented
        isActive: true
      }
    });

    return NextResponse.json(server, { status: 201 });
  } catch (error) {
    console.error("Error al crear servidor:", error);
    return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 });
  }
}
