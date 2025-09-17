import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const demos = await prisma.demo.findMany({
      include: {
        server: {
          select: {
            name: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    const formattedDemos = demos.map(demo => {
      const now = new Date();
      const isExpired = demo.expirationDate < now;
      const timeRemaining = Math.max(0, demo.expirationDate.getTime() - now.getTime());
      const hoursRemaining = Math.floor(timeRemaining / (1000 * 60 * 60));
      const minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));

      return {
        id: demo.id,
        email: demo.email,
        password: demo.password,
        serverName: demo.server?.name || 'Servidor no encontrado',
        hoursDuration: demo.hoursDuration,
        expirationDate: demo.expirationDate,
        isActive: demo.isActive && !isExpired,
        isExpired,
        timeRemaining: isExpired ? 0 : timeRemaining,
        hoursRemaining,
        minutesRemaining,
        createdAt: demo.createdAt,
        createdBy: 'Sistema' // TODO: Add actual creator when auth is implemented
      };
    });

    return NextResponse.json(formattedDemos);
  } catch (error) {
    console.error("Error al obtener demos:", error);
    return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, serverId, hoursDuration = 24 } = body;

    if (!email || !password || !serverId) {
      return NextResponse.json({ 
        message: "Email, contraseña y servidor son requeridos" 
      }, { status: 400 });
    }

    if (hoursDuration > 24) {
      return NextResponse.json({ 
        message: "La duración máxima de demo es 24 horas" 
      }, { status: 400 });
    }

    // Get server information
    const server = await prisma.embyServer.findUnique({
      where: { id: serverId }
    });

    if (!server) {
      return NextResponse.json({ message: "Servidor no encontrado" }, { status: 404 });
    }

    // Check if server has capacity
    const currentUsers = await prisma.userServerLink.count({
      where: {
        serverId
      }
    });

    if (currentUsers >= server.maxUsers) {
      return NextResponse.json({ 
        message: `El servidor ${server.name} ha alcanzado su límite máximo de usuarios (${server.maxUsers})` 
      }, { status: 400 });
    }

    // Generate Emby username (use email as base)
    const embyUserName = `demo_${email.replace('@', '_').replace(/[^a-zA-Z0-9_]/g, '')}`;

    // Calculate expiration date
    const expirationDate = new Date();
    expirationDate.setHours(expirationDate.getHours() + hoursDuration);

    // Create Emby user
    const { EmbyService } = await import("@/lib/emby");
    const embyService = new EmbyService(server.apiKey, server.url);
    
    let embyUser;
    try {
      embyUser = await embyService.createUser({
        Name: embyUserName,
        Password: password
      });

      // Apply demo policies (disable camera upload, transcoding, etc.)
      const demoPolicies = {
        AllowCameraUpload: false,
        EnableAudioPlaybackTranscoding: false,
        EnableVideoPlaybackTranscoding: false,
        EnableVideoPlaybackRemuxing: false,
        EnableNotifications: false,
        AllowPasswordChange: false
      };

      await embyService.updateUserPolicy(embyUser.Id, demoPolicies);
    } catch (embyError) {
      console.error("Error al crear demo en Emby:", embyError);
      return NextResponse.json({ 
        message: "Error al crear demo en el servidor Emby" 
      }, { status: 500 });
    }

    // Create demo in database
    const demo = await prisma.demo.create({
      data: {
        email,
        password,
        embyUserName,
        serverId,
        hoursDuration,
        expirationDate,
        userId: "temp-user-id", // TODO: Replace with actual user ID when auth is implemented
        isActive: true
      }
    });

    // Create UserServerLink for demo
    const userServerLink = await prisma.userServerLink.create({
      data: {
        userId: demo.id, // Link to demo ID
        serverId,
        isDemo: true,
        expirationDate,
        creditType: 'ONE_CONNECTION',
        credits: 0
      }
    });

    // Create Emby account record
    await prisma.embyAccount.create({
      data: {
        embyUserId: embyUser.Id,
        embyUserName: embyUser.Name,
        embyUserEmail: email,
        serverId,
        userId: "temp-user-id", // TODO: Replace with actual user ID when auth is implemented
        isActive: true
      }
    });

    return NextResponse.json({
      id: demo.id,
      email,
      serverName: server.name,
      hoursDuration,
      expirationDate,
      isActive: true,
      message: "Demo creada exitosamente"
    }, { status: 201 });
  } catch (error) {
    console.error("Error al crear demo:", error);
    return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 });
  }
}
