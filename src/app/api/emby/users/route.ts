import { NextRequest, NextResponse } from "next/server";
import { getSessionFromRequest } from "@/lib/auth-simple";
import { prisma } from "@/lib/prisma";
import { EmbyService } from "@/lib/emby";
import { UserRole } from "@prisma/client";

// GET /api/emby/users - Obtener usuarios de un servidor Emby
export async function GET(request: NextRequest) {
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

    // Obtener servidor de la base de datos
    const server = await prisma.embyServer.findUnique({
      where: { id: serverId }
    });

    if (!server) {
      return NextResponse.json({ message: "Server not found" }, { status: 404 });
    }

    // Verificar permisos según el rol
    const userRole = session.user.role;
    if (userRole === UserRole.BASIC_RESELLER || userRole === UserRole.ADVANCED_RESELLER || userRole === UserRole.PREMIUM_RESELLER) {
      // Los resellers solo pueden ver usuarios de servidores que les pertenecen
      // (esto se implementaría con una relación en la base de datos)
      // Por ahora, permitimos acceso a todos los servidores
    }

    // Conectar con Emby
    const embyService = new EmbyService(server.apiKey, server.url);
    
    // Verificar conexión
    const isConnected = await embyService.testConnection();
    if (!isConnected) {
      return NextResponse.json({ message: "Cannot connect to Emby server" }, { status: 503 });
    }

    // Obtener usuarios de Emby
    const embyUsers = await embyService.getUsers();

    // Obtener sesiones activas para cada usuario
    const usersWithSessions = await Promise.all(
      embyUsers.map(async (user) => {
        try {
          const sessions = await embyService.getUserSessions(user.Id);
          return {
            ...user,
            activeSessions: sessions.length,
            isOnline: sessions.length > 0,
            lastActivity: sessions.length > 0 ? sessions[0].LastActivityDate : user.LastActivityDate
          };
        } catch (error) {
          console.error(`Error getting sessions for user ${user.Id}:`, error);
          return {
            ...user,
            activeSessions: 0,
            isOnline: false,
            lastActivity: user.LastActivityDate
          };
        }
      })
    );

    return NextResponse.json({
      server: {
        id: server.id,
        name: server.name,
        url: server.url
      },
      users: usersWithSessions
    }, { status: 200 });

  } catch (error) {
    console.error("Error fetching Emby users:", error);
    return NextResponse.json({ message: "Error fetching users" }, { status: 500 });
  }
}

// POST /api/emby/users - Crear nuevo usuario en Emby
export async function POST(request: NextRequest) {
    const session = await getSessionFromRequest(request);

  if (!session?.user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const { serverId, name, password, isTest = false } = await request.json();

    if (!serverId || !name || !password) {
      return NextResponse.json({ message: "Server ID, name and password are required" }, { status: 400 });
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

    // Verificar que el servidor sea del entorno correcto
    if (server.isTest !== isTest) {
      return NextResponse.json({ 
        message: `Server environment mismatch. Expected ${isTest ? 'test' : 'production'} environment` 
      }, { status: 400 });
    }

    // Conectar con Emby
    const embyService = new EmbyService(server.apiKey, server.url);
    
    // Verificar conexión
    const isConnected = await embyService.testConnection();
    if (!isConnected) {
      return NextResponse.json({ message: "Cannot connect to Emby server" }, { status: 503 });
    }

    // Crear usuario en Emby
    const newUser = await embyService.createUser({
      Name: name,
      Password: password
    });

    // Opcional: Guardar referencia en base de datos local
    // await prisma.embyUser.create({
    //   data: {
    //     embyId: newUser.Id,
    //     name: newUser.Name,
    //     serverId: server.id,
    //     createdBy: session.user.id
    //   }
    // });

    return NextResponse.json({
      message: "User created successfully",
      user: newUser
    }, { status: 201 });

  } catch (error: any) {
    console.error("Error creating Emby user:", error);
    
    if (error.message.includes('already exists') || error.message.includes('duplicate')) {
      return NextResponse.json({ message: "User already exists" }, { status: 409 });
    }
    
    return NextResponse.json({ message: "Error creating user" }, { status: 500 });
  }
}
