import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { 
  withErrorHandling, 
  requireAdmin, 
  createResponse, 
  createErrorResponse,
  validateId
} from "@/lib/api-utils";
import { UserRole } from "@prisma/client";

// GET /api/demos/[id] - Obtener demo específico
async function getDemo(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await requireAdmin(request);
  const { id } = await params;
  
  validateId(id);

  const demo = await prisma.demo.findUnique({
    where: { id },
    include: {
      server: {
        select: {
          id: true,
          name: true,
          url: true,
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

  if (!demo) {
    return createErrorResponse("Demo no encontrado", 404);
  }

  // Verificar permisos de entorno
  if (session.user.role === UserRole.TECH_ADMIN && !demo.server.isTest) {
    return createErrorResponse("Acceso denegado: Demo de producción", 403);
  }
  
  if (session.user.role === UserRole.SUPER_ADMIN && demo.server.isTest) {
    return createErrorResponse("Acceso denegado: Demo de desarrollo", 403);
  }

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

  return createResponse({
    id: demo.id,
    email: demo.email,
    password: demo.password,
    embyUserName: demo.embyUserName,
    serverId: demo.serverId,
    serverName: demo.server.name,
    serverUrl: demo.server.url,
    serverIsTest: demo.server.isTest,
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
    createdBy: demo.user.email,
    createdByRole: demo.user.role
  });
}

// PUT /api/demos/[id] - Actualizar demo
async function updateDemo(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await requireAdmin(request);
  const { id } = await params;
  
  validateId(id);

  const body = await request.json();
  const { 
    email, 
    password, 
    hoursDuration, 
    isActive,
    embyUserName 
  } = body;

  // Verificar que el demo existe y obtener información del servidor
  const existingDemo = await prisma.demo.findUnique({
    where: { id },
    include: {
      server: {
        select: {
          id: true,
          name: true,
          url: true,
          apiKey: true,
          isTest: true
        }
      }
    }
  });

  if (!existingDemo) {
    return createErrorResponse("Demo no encontrado", 404);
  }

  // Verificar permisos de entorno
  if (session.user.role === UserRole.TECH_ADMIN && !existingDemo.server.isTest) {
    return createErrorResponse("Acceso denegado: Demo de producción", 403);
  }
  
  if (session.user.role === UserRole.SUPER_ADMIN && existingDemo.server.isTest) {
    return createErrorResponse("Acceso denegado: Demo de desarrollo", 403);
  }

  const updateData: any = {};
  
  if (email !== undefined) {
    updateData.email = email;
  }
  
  if (password !== undefined) {
    updateData.password = password;
  }
  
  if (embyUserName !== undefined) {
    updateData.embyUserName = embyUserName;
  }
  
  if (isActive !== undefined) {
    updateData.isActive = isActive;
  }
  
  if (hoursDuration !== undefined) {
    if (hoursDuration > 24) {
      return createErrorResponse("La duración máxima de demo es 24 horas", 400);
    }
    
    // Recalcular fecha de expiración
    const newExpirationDate = new Date();
    newExpirationDate.setHours(newExpirationDate.getHours() + hoursDuration);
    updateData.hoursDuration = hoursDuration;
    updateData.expirationDate = newExpirationDate;
  }

  // Actualizar en Emby si es necesario
  if (password !== undefined || embyUserName !== undefined) {
    try {
      const { EmbyService } = await import("@/lib/emby");
      const embyService = new EmbyService(existingDemo.server.apiKey, existingDemo.server.url);
      
      // Obtener el usuario Emby actual
      const embyAccount = await prisma.embyAccount.findFirst({
        where: {
          embyUserEmail: existingDemo.email,
          serverId: existingDemo.serverId
        }
      });
      
      if (embyAccount) {
        if (password !== undefined) {
          await embyService.setUserPassword(embyAccount.embyUserId, password);
        }
        
        if (embyUserName !== undefined) {
          await embyService.updateUser(embyAccount.embyUserId, { Name: embyUserName });
        }
      }
    } catch (embyError: any) {
      console.error("Error al actualizar demo en Emby:", embyError);
      return createErrorResponse(`Error al actualizar demo en Emby: ${embyError.message}`, 500);
    }
  }

  // Actualizar en base de datos
  const updatedDemo = await prisma.demo.update({
    where: { id },
    data: updateData,
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

  // Actualizar UserServerLink si cambió la fecha de expiración
  if (hoursDuration !== undefined) {
    await prisma.userServerLink.updateMany({
      where: {
        embyUserEmail: existingDemo.email,
        serverId: existingDemo.serverId,
        isDemo: true
      },
      data: {
        expirationDate: updateData.expirationDate
      }
    });
  }

  const now = new Date();
  const isExpired = updatedDemo.expirationDate < now;
  const timeRemaining = Math.max(0, updatedDemo.expirationDate.getTime() - now.getTime());
  const hoursRemaining = Math.floor(timeRemaining / (1000 * 60 * 60));
  const minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  
  let status = 'INACTIVO';
  if (updatedDemo.isActive && !isExpired) {
    if (hoursRemaining <= 1) {
      status = 'CASI EXPIRADO';
    } else {
      status = 'ACTIVO';
    }
  } else if (isExpired) {
    status = 'EXPIRADO';
  }

  return createResponse({
    id: updatedDemo.id,
    email: updatedDemo.email,
    password: updatedDemo.password,
    embyUserName: updatedDemo.embyUserName,
    serverId: updatedDemo.serverId,
    serverName: updatedDemo.server.name,
    serverIsTest: updatedDemo.server.isTest,
    hoursDuration: updatedDemo.hoursDuration,
    expirationDate: updatedDemo.expirationDate,
    isActive: updatedDemo.isActive && !isExpired,
    isExpired,
    status,
    timeRemaining: isExpired ? 0 : timeRemaining,
    hoursRemaining,
    minutesRemaining,
    createdAt: updatedDemo.createdAt,
    updatedAt: updatedDemo.updatedAt,
    createdBy: updatedDemo.user.email,
    createdByRole: updatedDemo.user.role
  }, "Demo actualizado exitosamente");
}

// DELETE /api/demos/[id] - Eliminar demo
async function deleteDemo(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await requireAdmin(request);
  const { id } = await params;
  
  validateId(id);

  // Verificar que el demo existe y obtener información del servidor
  const existingDemo = await prisma.demo.findUnique({
    where: { id },
    include: {
      server: {
        select: {
          id: true,
          name: true,
          url: true,
          apiKey: true,
          isTest: true
        }
      }
    }
  });

  if (!existingDemo) {
    return createErrorResponse("Demo no encontrado", 404);
  }

  // Verificar permisos de entorno
  if (session.user.role === UserRole.TECH_ADMIN && !existingDemo.server.isTest) {
    return createErrorResponse("Acceso denegado: Demo de producción", 403);
  }
  
  if (session.user.role === UserRole.SUPER_ADMIN && existingDemo.server.isTest) {
    return createErrorResponse("Acceso denegado: Demo de desarrollo", 403);
  }

  // Eliminar usuario de Emby
  try {
    const { EmbyService } = await import("@/lib/emby");
    const embyService = new EmbyService(existingDemo.server.apiKey, existingDemo.server.url);
    
    const embyAccount = await prisma.embyAccount.findFirst({
      where: {
        embyUserEmail: existingDemo.email,
        serverId: existingDemo.serverId
      }
    });
    
    if (embyAccount) {
      await embyService.deleteUser(embyAccount.embyUserId);
    }
  } catch (embyError: any) {
    console.error("Error al eliminar demo de Emby:", embyError);
    // Continuar con la eliminación en BD aunque falle en Emby
  }

  // Eliminar registros relacionados
  await Promise.all([
    // Eliminar EmbyAccount
    prisma.embyAccount.deleteMany({
      where: {
        embyUserEmail: existingDemo.email,
        serverId: existingDemo.serverId
      }
    }),
    // Eliminar UserServerLink
    prisma.userServerLink.deleteMany({
      where: {
        embyUserEmail: existingDemo.email,
        serverId: existingDemo.serverId,
        isDemo: true
      }
    }),
    // Eliminar Demo
    prisma.demo.delete({
      where: { id }
    })
  ]);

  return createResponse(null, "Demo eliminado exitosamente");
}

// Exportar handlers con manejo de errores
export const GET = withErrorHandling(getDemo);
export const PUT = withErrorHandling(updateDemo);
export const DELETE = withErrorHandling(deleteDemo);