import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { 
  withErrorHandling, 
  requireAdmin, 
  createResponse, 
  parsePaginationParams,
  parseCommonFilters,
  validateRequiredFields,
  validateEmail,
  formatUserResponse
} from "@/lib/api-utils";
import { UserRole } from "@prisma/client";

// GET /api/demos - Listar demos con paginación y filtros
async function getDemos(request: NextRequest) {
  const session = await requireAdmin(request);
  
  const pagination = parsePaginationParams(request);
  const filters = parseCommonFilters(request);
  
  const whereClause: any = {};
  
  // Filtro por entorno (producción vs desarrollo)
  if (session.user.role === UserRole.TECH_ADMIN) {
    whereClause.server = { isTest: true };
  } else if (session.user.role === UserRole.SUPER_ADMIN) {
    whereClause.server = { isTest: false };
  }
  
  if (filters.search) {
    whereClause.OR = [
      { email: { contains: filters.search, mode: 'insensitive' } },
      { embyUserName: { contains: filters.search, mode: 'insensitive' } }
    ];
  }
  
  if (filters.serverId && filters.serverId !== 'all') {
    whereClause.serverId = filters.serverId;
  }
  
  if (filters.status && filters.status !== 'all') {
    const now = new Date();
    switch (filters.status) {
      case 'active':
        whereClause.isActive = true;
        whereClause.expirationDate = { gt: now };
        break;
      case 'expired':
        whereClause.expirationDate = { lt: now };
        break;
      case 'near-expired':
        const oneHourFromNow = new Date(now.getTime() + 60 * 60 * 1000);
        whereClause.expirationDate = {
          gte: now,
          lte: oneHourFromNow
        };
        whereClause.isActive = true;
        break;
      case 'inactive':
        whereClause.isActive = false;
        break;
    }
  }

  const [demos, total] = await Promise.all([
    prisma.demo.findMany({
      where: whereClause,
      include: {
        server: {
          select: {
            id: true,
            name: true,
            isTest: true
          }
        },
        user: {
          select: {
            id: true,
            email: true,
            role: true
          }
        }
      },
      orderBy: { [pagination.orderBy]: pagination.order },
      skip: (pagination.page - 1) * pagination.limit,
      take: pagination.limit
    }),
    prisma.demo.count({ where: whereClause })
  ]);

  const formattedDemos = demos.map(demo => {
    const now = new Date();
    const isExpired = demo.expirationDate < now;
    const timeRemaining = Math.max(0, demo.expirationDate.getTime() - now.getTime());
    const hoursRemaining = Math.floor(timeRemaining / (1000 * 60 * 60));
    const minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    
    let status = 'INACTIVO';
    if (demo.isActive && !isExpired) {
      if (hoursRemaining <= 1) {
        status = 'CASI EXPIRADO';
      } else {
        status = 'ACTIVO';
      }
    } else if (isExpired) {
      status = 'EXPIRADO';
    }

    return {
      id: demo.id,
      email: demo.email,
      password: demo.password,
      embyUserName: demo.embyUserName,
      serverId: demo.serverId,
      serverName: demo.server?.name || 'Servidor no encontrado',
      serverIsTest: demo.server?.isTest || false,
      hoursDuration: demo.hoursDuration,
      expirationDate: demo.expirationDate,
      isActive: demo.isActive && !isExpired,
      isExpired,
      status,
      timeRemaining: isExpired ? 0 : timeRemaining,
      hoursRemaining,
      minutesRemaining,
      createdAt: demo.createdAt,
      updatedAt: demo.updatedAt,
      createdBy: demo.user?.email || 'Sistema',
      createdByRole: demo.user?.role || 'UNKNOWN'
    };
  });
  
  return createResponse({
    items: formattedDemos,
    pagination: {
      page: pagination.page,
      limit: pagination.limit,
      total,
      totalPages: Math.ceil(total / pagination.limit)
    }
  });
}

// POST /api/demos - Crear nuevo demo
async function createDemo(request: NextRequest) {
  const session = await requireAdmin(request);
  
  const body = await request.json();
  validateRequiredFields(body, ['email', 'password', 'serverId']);
  validateEmail(body.email);
  
  const { 
    email, 
    password, 
    serverId, 
    hoursDuration = 24,
    embyUserName 
  } = body;
  
  // Validar duración máxima
  if (hoursDuration > 24) {
    return NextResponse.json({ 
      error: "La duración máxima de demo es 24 horas",
      status: 400 
    }, { status: 400 });
  }

  // Get server information
  const server = await prisma.embyServer.findUnique({
    where: { id: serverId }
  });

  if (!server) {
    return NextResponse.json({ 
      error: "Servidor no encontrado",
      status: 404 
    }, { status: 404 });
  }

  // Verificar que el servidor corresponda al entorno del usuario
  if (session.user.role === UserRole.TECH_ADMIN && !server.isTest) {
    return NextResponse.json({ 
      error: "TECH_ADMIN solo puede crear demos en servidores de prueba",
      status: 403 
    }, { status: 403 });
  }
  
  if (session.user.role === UserRole.SUPER_ADMIN && server.isTest) {
    return NextResponse.json({ 
      error: "SUPER_ADMIN solo puede crear demos en servidores de producción",
      status: 403 
    }, { status: 403 });
  }

  // Check if server has capacity
  const currentUsers = await prisma.userServerLink.count({
    where: { serverId }
  });

  if (currentUsers >= server.maxUsers) {
    return NextResponse.json({ 
      error: `El servidor ${server.name} ha alcanzado su límite máximo de usuarios (${server.maxUsers})`,
      status: 400 
    }, { status: 400 });
  }

  // Generate Emby username if not provided
  const finalEmbyUserName = embyUserName || `demo_${email.replace('@', '_').replace(/[^a-zA-Z0-9_]/g, '')}_${Date.now()}`;

  // Calculate expiration date
  const expirationDate = new Date();
  expirationDate.setHours(expirationDate.getHours() + hoursDuration);

  // Create Emby user
  const { EmbyService } = await import("@/lib/emby");
  const embyService = new EmbyService(server.apiKey, server.url);
  
  let embyUser;
  try {
    embyUser = await embyService.createUser({
      Name: finalEmbyUserName,
      Password: password
    });

    // Apply demo policies (disable camera upload, transcoding, etc.)
    const demoPolicies = {
      AllowCameraUpload: false,
      EnableAudioPlaybackTranscoding: false,
      EnableVideoPlaybackTranscoding: false,
      EnableVideoPlaybackRemuxing: false,
      EnableNotifications: false,
      AllowPasswordChange: false,
      EnableRemoteAccess: false,
      EnableContentDownloading: false
    };

    await embyService.updateUserPolicy(embyUser.Id, demoPolicies);
  } catch (embyError: any) {
    console.error("Error al crear demo en Emby:", embyError);
    return NextResponse.json({ 
      error: `Error al crear demo en el servidor Emby: ${embyError.message}`,
      status: 500 
    }, { status: 500 });
  }

  // Create demo in database
  const demo = await prisma.demo.create({
    data: {
      email,
      password,
      embyUserName: finalEmbyUserName,
      serverId,
      hoursDuration,
      expirationDate,
      userId: session.user.id,
      isActive: true
    },
    include: {
      server: {
        select: {
          id: true,
          name: true,
          isTest: true
        }
      },
      user: {
        select: {
          id: true,
          email: true,
          role: true
        }
      }
    }
  });

  // Create Emby account record
  await prisma.embyAccount.create({
    data: {
      embyUserId: embyUser.Id,
      embyUserName: embyUser.Name,
      embyUserEmail: email,
      serverId,
      userId: session.user.id,
      isActive: true
    }
  });

  // Create UserServerLink for demo tracking
  await prisma.userServerLink.create({
    data: {
      userId: session.user.id,
      serverId,
      embyUserId: embyUser.Id,
      embyUserEmail: email,
      isDemo: true,
      expirationDate,
      creditType: 'ONE_CONNECTION',
      credits: 0,
      isActive: true
    }
  });

  const now = new Date();
  const isExpired = demo.expirationDate < now;
  const timeRemaining = Math.max(0, demo.expirationDate.getTime() - now.getTime());
  const hoursRemaining = Math.floor(timeRemaining / (1000 * 60 * 60));
  const minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));

  return createResponse({
    id: demo.id,
    email: demo.email,
    password: demo.password,
    embyUserName: demo.embyUserName,
    serverId: demo.serverId,
    serverName: demo.server.name,
    serverIsTest: demo.server.isTest,
    hoursDuration: demo.hoursDuration,
    expirationDate: demo.expirationDate,
    isActive: demo.isActive && !isExpired,
    isExpired,
    status: demo.isActive && !isExpired ? 'ACTIVO' : 'EXPIRADO',
    timeRemaining: isExpired ? 0 : timeRemaining,
    hoursRemaining,
    minutesRemaining,
    createdAt: demo.createdAt,
    createdBy: demo.user.email,
    createdByRole: demo.user.role
  }, "Demo creada exitosamente", 201);
}

// Exportar handlers con manejo de errores
export const GET = withErrorHandling(getDemos);
export const POST = withErrorHandling(createDemo);
