import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const serverId = searchParams.get('serverId');
    const status = searchParams.get('status');
    const createdBy = searchParams.get('createdBy');
    const orderBy = searchParams.get('orderBy') || 'expirationDate';

    const whereClause: Record<string, unknown> = {
      isDemo: false
    };

    if (serverId && serverId !== 'all') {
      whereClause.serverId = serverId;
    }

    if (createdBy && createdBy !== 'all') {
      whereClause.userId = createdBy;
    }

    // Add status filter
    if (status && status !== 'all') {
      const now = new Date();
      switch (status) {
        case 'active':
          whereClause.OR = [
            { expirationDate: null },
            { expirationDate: { gt: now } }
          ];
          whereClause.isActive = true;
          break;
        case 'expired':
          whereClause.expirationDate = { lt: now };
          break;
        case 'near-expired':
          const fiveDaysFromNow = new Date(now.getTime() + 5 * 24 * 60 * 60 * 1000);
          whereClause.expirationDate = {
            gte: now,
            lte: fiveDaysFromNow
          };
          break;
        case 'inactive':
          whereClause.isActive = false;
          break;
      }
    }

    let orderByClause: Record<string, string> = {};
    switch (orderBy) {
      case 'expirationDate':
        orderByClause = { expirationDate: 'asc' };
        break;
      case 'createdAt':
        orderByClause = { createdAt: 'desc' };
        break;
      case 'email':
        orderByClause = { embyUserEmail: 'asc' };
        break;
      default:
        orderByClause = { expirationDate: 'asc' };
    }

    const users = await prisma.userServerLink.findMany({
      where: whereClause,
      include: {
        server: {
          select: {
            name: true
          }
        }
      },
      orderBy: orderByClause,
      take: 100 // Limitar resultados para mejorar rendimiento
    });

    const formattedUsers = users.map(user => {
      const now = new Date();
      let userStatus = 'ACTIVO';
      
      if (!user.isDemo) {
        userStatus = 'INACTIVO';
      } else if (user.expirationDate) {
        if (user.expirationDate < now) {
          userStatus = 'EXPIRADO';
        } else {
          const daysUntilExpiry = Math.ceil((user.expirationDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
          if (daysUntilExpiry <= 5) {
            userStatus = 'CASI EXPIRADO';
          }
        }
      }

      return {
        id: user.id,
        email: 'Usuario Emby', // TODO: Get actual email when embyAccount is included
        serverName: user.server.name,
        status: userStatus,
        expirationDate: user.expirationDate,
        creditType: user.creditType,
        credits: user.credits,
        createdAt: user.createdAt,
        createdBy: 'Sistema', // TODO: Get actual user email when auth is implemented
        userServerLink: user
      };
    });

    return NextResponse.json(formattedUsers);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      email, 
      password, 
      serverId, 
      packageId, 
      creditType = 'ONE_CONNECTION', 
      credits = 1 
    } = body;

    if (!email || !password || !serverId) {
      return NextResponse.json({ 
        message: "Email, contraseña y servidor son requeridos" 
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
        serverId,
        isDemo: false
      }
    });

    if (currentUsers >= server.maxUsers) {
      return NextResponse.json({ 
        message: `El servidor ${server.name} ha alcanzado su límite máximo de usuarios (${server.maxUsers})` 
      }, { status: 400 });
    }

    // Create Emby user
    const { EmbyService } = await import("@/lib/emby");
    const embyService = new EmbyService(server.apiKey, server.url);
    
    let embyUser;
    try {
      embyUser = await embyService.createUser({
        Name: email,
        Password: password
      });
    } catch (embyError) {
      console.error("Error al crear usuario en Emby:", embyError);
      return NextResponse.json({ 
        message: "Error al crear usuario en el servidor Emby" 
      }, { status: 500 });
    }

    // Calculate expiration date
    const expirationDate = new Date();
    expirationDate.setMonth(expirationDate.getMonth() + credits);

    // Create user in database
    const userServerLink = await prisma.userServerLink.create({
      data: {
        userId: "temp-user-id", // TODO: Replace with actual user ID when auth is implemented
        serverId,
        isDemo: false,
        expirationDate,
        creditType,
        credits
      }
    });

    // Create Emby account record
    const embyAccount = await prisma.embyAccount.create({
      data: {
        embyUserId: embyUser.Id,
        embyUserName: embyUser.Name,
        embyUserEmail: email,
        serverId,
        userId: "temp-user-id", // TODO: Replace with actual user ID when auth is implemented
        isActive: true
      }
    });

    // Link EmbyAccount with UserServerLink
    await prisma.userServerLink.update({
      where: { id: userServerLink.id },
      data: { userId: embyAccount.id }
    });

    // Apply policies if package is specified
    if (packageId) {
      // TODO: Apply package policies
    }

    return NextResponse.json({
      id: embyAccount.id,
      email,
      serverName: server.name,
      status: 'ACTIVO',
      expirationDate,
      creditType,
      credits,
      message: "Usuario creado exitosamente"
    }, { status: 201 });
  } catch (error) {
    console.error("Error al crear usuario:", error);
    return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 });
  }
}
