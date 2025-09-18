import { NextRequest, NextResponse } from "next/server";
import { getSessionFromRequest } from "@/lib/auth-simple";
import { UserRole } from "@prisma/client";

// Tipos comunes para respuestas de API
export interface ApiResponse<T = any> {
  data?: T;
  message?: string;
  error?: string;
  status: number;
}

// Utilidades para manejo de errores
export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public code?: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

// Función para crear respuestas consistentes
export function createResponse<T>(
  data: T,
  message?: string,
  status: number = 200
): NextResponse<ApiResponse<T>> {
  return NextResponse.json({
    data,
    message,
    status
  }, { status });
}

// Función para crear respuestas de error
export function createErrorResponse(
  message: string,
  status: number = 500,
  code?: string
): NextResponse<ApiResponse> {
  return NextResponse.json({
    error: message,
    code,
    status
  }, { status });
}

// Middleware para autenticación
export async function requireAuth(request: NextRequest) {
  const session = await getSessionFromRequest(request);
  
  if (!session?.user) {
    throw new ApiError(401, "No autorizado");
  }
  
  return session;
}

// Middleware para verificar roles específicos
export async function requireRole(
  request: NextRequest,
  allowedRoles: UserRole[]
) {
  const session = await requireAuth(request);
  
  if (!allowedRoles.includes(session.user.role)) {
    throw new ApiError(403, "Permisos insuficientes");
  }
  
  return session;
}

// Middleware para SUPER_ADMIN
export async function requireSuperAdmin(request: NextRequest) {
  return requireRole(request, [UserRole.SUPER_ADMIN]);
}

// Middleware para administradores (SUPER_ADMIN y TECH_ADMIN)
export async function requireAdmin(request: NextRequest) {
  return requireRole(request, [UserRole.SUPER_ADMIN, UserRole.TECH_ADMIN]);
}

// Utilidades para validación de parámetros
export function validateRequiredFields(
  body: any,
  requiredFields: string[]
): void {
  const missingFields = requiredFields.filter(field => !body[field]);
  
  if (missingFields.length > 0) {
    throw new ApiError(
      400,
      `Campos requeridos faltantes: ${missingFields.join(', ')}`
    );
  }
}

// Utilidades para paginación
export interface PaginationParams {
  page?: number;
  limit?: number;
  orderBy?: string;
  order?: 'asc' | 'desc';
}

export function parsePaginationParams(request: NextRequest): PaginationParams {
  const { searchParams } = new URL(request.url);
  
  return {
    page: parseInt(searchParams.get('page') || '1'),
    limit: Math.min(parseInt(searchParams.get('limit') || '50'), 100), // Máximo 100
    orderBy: searchParams.get('orderBy') || 'createdAt',
    order: (searchParams.get('order') as 'asc' | 'desc') || 'desc'
  };
}

// Utilidades para filtros comunes
export interface CommonFilters {
  search?: string;
  status?: string;
  isActive?: boolean;
  createdBy?: string;
  serverId?: string;
}

export function parseCommonFilters(request: NextRequest): CommonFilters {
  const { searchParams } = new URL(request.url);
  
  return {
    search: searchParams.get('search') || undefined,
    status: searchParams.get('status') || undefined,
    isActive: searchParams.get('isActive') === 'true' ? true : 
              searchParams.get('isActive') === 'false' ? false : undefined,
    createdBy: searchParams.get('createdBy') || undefined,
    serverId: searchParams.get('serverId') || undefined
  };
}

// Wrapper para manejo de errores en APIs
export function withErrorHandling<T extends any[], R>(
  handler: (...args: T) => Promise<NextResponse<R>>
) {
  return async (...args: T): Promise<NextResponse<R>> => {
    try {
      return await handler(...args);
    } catch (error) {
      console.error('API Error:', error);
      
      if (error instanceof ApiError) {
        return createErrorResponse(error.message, error.status, error.code);
      }
      
      return createErrorResponse(
        'Error interno del servidor',
        500,
        'INTERNAL_SERVER_ERROR'
      );
    }
  };
}

// Utilidades para validación de IDs
export function validateId(id: string): void {
  if (!id || typeof id !== 'string' || id.trim().length === 0) {
    throw new ApiError(400, 'ID inválido');
  }
}

// Utilidades para fechas
export function parseDate(dateString: string): Date {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    throw new ApiError(400, 'Fecha inválida');
  }
  return date;
}

// Utilidades para validación de emails
export function validateEmail(email: string): void {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new ApiError(400, 'Email inválido');
  }
}

// Utilidades para validación de URLs
export function validateUrl(url: string): void {
  try {
    new URL(url);
  } catch {
    throw new ApiError(400, 'URL inválida');
  }
}

// Utilidades para formateo de respuestas
export function formatUserResponse(user: any) {
  return {
    id: user.id,
    email: user.email,
    role: user.role,
    isActive: user.isActive,
    isTest: user.isTest,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt
  };
}

export function formatServerResponse(server: any) {
  return {
    id: server.id,
    name: server.name,
    url: server.url,
    maxUsers: server.maxUsers,
    isActive: server.isActive,
    isTest: server.isTest,
    currentUsers: server._count?.userServerLinks || 0,
    createdAt: server.createdAt,
    updatedAt: server.updatedAt
  };
}

// Utilidades para logging
export function logApiCall(
  method: string,
  endpoint: string,
  userId?: string,
  duration?: number
) {
  const logData = {
    method,
    endpoint,
    userId,
    duration,
    timestamp: new Date().toISOString()
  };
  
  console.log('API Call:', JSON.stringify(logData));
}

// Utilidades para rate limiting (básico)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export function checkRateLimit(
  identifier: string,
  limit: number = 100,
  windowMs: number = 15 * 60 * 1000 // 15 minutos
): boolean {
  const now = Date.now();
  const key = identifier;
  const current = rateLimitMap.get(key);
  
  if (!current || now > current.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (current.count >= limit) {
    return false;
  }
  
  current.count++;
  return true;
}
