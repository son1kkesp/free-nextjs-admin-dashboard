import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const server = await prisma.embyServer.findUnique({
      where: { id }
    });

    if (!server) {
      return NextResponse.json({ message: "Servidor no encontrado" }, { status: 404 });
    }

    // Get libraries from Emby API
    const { EmbyService } = await import("@/lib/emby");
    const embyService = new EmbyService(server.apiKey, server.url);
    
    try {
      const libraries = await embyService.getLibraries();
      
      // Save/update libraries in database
      for (const library of libraries) {
        await prisma.library.upsert({
          where: {
            embyId_serverId: {
              embyId: library.Id,
              serverId: id
            }
          },
          update: {
            name: library.Name
          },
          create: {
            embyId: library.Id,
            name: library.Name,
            serverId: id
          }
        });
      }

      return NextResponse.json(libraries);
    } catch (embyError) {
      console.error("Error al obtener librerías de Emby:", embyError);
      return NextResponse.json({ 
        message: "Error al conectar con el servidor Emby" 
      }, { status: 500 });
    }
  } catch (error) {
    console.error("Error al obtener librerías:", error);
    return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 });
  }
}