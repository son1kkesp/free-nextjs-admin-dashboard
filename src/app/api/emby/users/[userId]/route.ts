import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { EmbyService } from "@/lib/emby";
import { UserRole } from "@prisma/client";

// GET /api/emby/users/[userId] - Obtener información detallada de un usuario
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

    // Obtener información del usuario
    const userData = await embyService.syncUserData(params.userId);

    return NextResponse.json({
      server: {
        id: server.id,
        name: server.name,
        url: server.url
      },
      user: userData
    }, { status: 200 });

  } catch (error) {
    console.error("Error fetching user details:", error);
    return NextResponse.json({ message: "Error fetching user details" }, { status: 500 });
  }
}

// PUT /api/emby/users/[userId] - Actualizar usuario
export async function PUT(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const { serverId, action, data } = await request.json();

    if (!serverId || !action) {
      return NextResponse.json({ message: "Server ID and action are required" }, { status: 400 });
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

    let result;

    switch (action) {
      case 'block':
        await embyService.blockUser(params.userId, true);
        result = { message: "User blocked successfully" };
        break;

      case 'unblock':
        await embyService.blockUser(params.userId, false);
        result = { message: "User unblocked successfully" };
        break;

      case 'changePassword':
        if (!data?.newPassword) {
          return NextResponse.json({ message: "New password is required" }, { status: 400 });
        }
        await embyService.setUserPassword(params.userId, data.newPassword);
        result = { message: "Password changed successfully" };
        break;

      case 'updatePolicy':
        if (!data?.policy) {
          return NextResponse.json({ message: "Policy data is required" }, { status: 400 });
        }
        await embyService.updateUserPolicy(params.userId, data.policy);
        result = { message: "User policy updated successfully" };
        break;

      default:
        return NextResponse.json({ message: "Invalid action" }, { status: 400 });
    }

    return NextResponse.json(result, { status: 200 });

  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json({ message: "Error updating user" }, { status: 500 });
  }
}

// DELETE /api/emby/users/[userId] - Eliminar usuario
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

    // Verificar permisos - Solo SUPER_ADMIN puede eliminar usuarios
    const userRole = session.user.role;
    if (userRole !== UserRole.SUPER_ADMIN) {
      return NextResponse.json({ message: "Only SUPER_ADMIN can delete users" }, { status: 403 });
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

    // Eliminar usuario de Emby
    await embyService.deleteUser(params.userId);

    return NextResponse.json({ message: "User deleted successfully" }, { status: 200 });

  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json({ message: "Error deleting user" }, { status: 500 });
  }
}
