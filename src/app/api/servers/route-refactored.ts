import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { 
  withErrorHandling, 
  requireAdmin, 
  createResponse, 
  parsePaginationParams,
  parseCommonFilters,
  formatServerResponse,
  validateRequiredFields,
  validateUrl
} from "@/lib/api-utils";

// GET /api/servers - Listar servidores con paginación y filtros
async function getServers(request: NextRequest) {
  await requireAdmin(request);
  
  const pagination = parsePaginationParams(request);
  const filters = parseCommonFilters(request);
  
  const whereClause: any = {};
  
  if (filters.search) {
    whereClause.OR = [
      { name: { contains: filters.search, mode: 'insensitive' } },
      { url: { contains: filters.search, mode: 'insensitive' } }
    ];
  }
  
  if (filters.isActive !== undefined) {
    whereClause.isActive = filters.isActive;
  }
  
  if (filters.serverId) {
    whereClause.id = filters.serverId;
  }

  const [servers, total] = await Promise.all([
    prisma.embyServer.findMany({
      where: whereClause,
      include: {
        _count: {
          select: {
            userServerLinks: {
              where: { isDemo: false }
            }
          }
        }
      },
      orderBy: { [pagination.orderBy]: pagination.order },
      skip: (pagination.page - 1) * pagination.limit,
      take: pagination.limit
    }),
    prisma.embyServer.count({ where: whereClause })
  ]);

  const formattedServers = servers.map(formatServerResponse);
  
  return createResponse({
    items: formattedServers,
    pagination: {
      page: pagination.page,
      limit: pagination.limit,
      total,
      totalPages: Math.ceil(total / pagination.limit)
    }
  });
}

// POST /api/servers - Crear nuevo servidor
async function createServer(request: NextRequest) {
  const session = await requireAdmin(request);
  
  const body = await request.json();
  validateRequiredFields(body, ['name', 'url', 'apiKey']);
  
  const { name, url, apiKey, maxUsers = 100, isTest = false } = body;
  
  validateUrl(url);
  
  // Test connection to Emby server
  const { EmbyService } = await import("@/lib/emby");
  const embyService = new EmbyService(apiKey, url);
  
  const isConnected = await embyService.testConnection();
  if (!isConnected) {
    return NextResponse.json({ 
      error: "No se pudo conectar al servidor Emby. Verifica la URL y API Key.",
      status: 400 
    }, { status: 400 });
  }

  // Create server
  const server = await prisma.embyServer.create({
    data: {
      name,
      url,
      apiKey,
      maxUsers,
      isTest,
      userId: session.user.id,
      isActive: true
    },
    include: {
      _count: {
        select: {
          userServerLinks: {
            where: { isDemo: false }
          }
        }
      }
    }
  });

  return createResponse(
    formatServerResponse(server),
    "Servidor creado exitosamente",
    201
  );
}

// Exportar handlers con manejo de errores
export const GET = withErrorHandling(getServers);
export const POST = withErrorHandling(createServer);
