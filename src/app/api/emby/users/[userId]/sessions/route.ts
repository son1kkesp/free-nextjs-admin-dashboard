import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { EmbyService } from "@/lib/emby";
import { UserRole } from "@prisma/client";

// GET /api/emby/users/[userId]/sessions - Obtener sesiones activas de un usuario
export async function GET(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const serverId = searchParams.get('serverId');

    if (!serverId) {
      return NextResponse.json({ message: "Server ID is required" }, { status: 400 });
    }

    // Obtener servidor
    const server = await prisma.embyServer.findUnique({
      where: { id: serverId }
    });

    if (!server) {
      return NextResponse.json({ message: "Server not found" }, { status: 404 });
    }

    // Conectar con Emby
    const embyService = new EmbyService(server.apiKey, server.url);
    
    // Verificar conexión
    const isConnected = await embyService.testConnection();
    if (!isConnected) {
      return NextResponse.json({ message: "Cannot connect to Emby server" }, { status: 503 });
    }

    // Obtener sesiones del usuario
    const userSessions = await embyService.getUserSessions(params.userId);

    return NextResponse.json({
      server: {
        id: server.id,
        name: server.name,
        url: server.url
      },
      userId: params.userId,
      sessions: userSessions,
      totalSessions: userSessions.length
    }, { status: 200 });

  } catch (error) {
    console.error("Error fetching user sessions:", error);
    return NextResponse.json({ message: "Error fetching user sessions" }, { status: 500 });
  }
}

// DELETE /api/emby/users/[userId]/sessions - Terminar todas las sesiones de un usuario
export async function DELETE(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const serverId = searchParams.get('serverId');

    if (!serverId) {
      return NextResponse.json({ message: "Server ID is required" }, { status: 400 });
    }

    // Verificar permisos
    const userRole = session.user.role;
    if (userRole === UserRole.BASIC_RESELLER) {
      return NextResponse.json({ message: "Insufficient permissions" }, { status: 403 });
    }

    // Obtener servidor
    const server = await prisma.embyServer.findUnique({
      where: { id: serverId }
    });

    if (!server) {
      return NextResponse.json({ message: "Server not found" }, { status: 404 });
    }

    // Conectar con Emby
    const embyService = new EmbyService(server.apiKey, server.url);
    
    // Verificar conexión
    const isConnected = await embyService.testConnection();
    if (!isConnected) {
      return NextResponse.json({ message: "Cannot connect to Emby server" }, { status: 503 });
    }

    // Obtener sesiones del usuario
    const userSessions = await embyService.getUserSessions(params.userId);

    // Terminar todas las sesiones
    const killPromises = userSessions.map(session => 
      embyService.killUserSession(session.Id)
    );

    await Promise.all(killPromises);

    return NextResponse.json({ 
      message: `Terminated ${userSessions.length} sessions successfully`,
      terminatedSessions: userSessions.length
    }, { status: 200 });

  } catch (error) {
    console.error("Error terminating user sessions:", error);
    return NextResponse.json({ message: "Error terminating sessions" }, { status: 500 });
  }
}
