import { NextRequest, NextResponse } from "next/server";
import { getSessionFromRequest } from "@/lib/auth-simple";
import { prisma } from "@/lib/prisma";
import { EmbyService } from "@/lib/emby";
import { UserRole } from "@prisma/client";

// DELETE /api/emby/users/[userId]/sessions/[sessionId] - Terminar una sesión específica
export async function DELETE(
  request: NextRequest,
  { params }: { params: { userId: string; sessionId: string } }
) {
    const session = await getSessionFromRequest(request);

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

    // Terminar la sesión específica
    await embyService.killUserSession(params.sessionId);

    return NextResponse.json({ 
      message: "Session terminated successfully",
      sessionId: params.sessionId,
      userId: params.userId
    }, { status: 200 });

  } catch (error) {
    console.error("Error terminating session:", error);
    return NextResponse.json({ message: "Error terminating session" }, { status: 500 });
  }
}
