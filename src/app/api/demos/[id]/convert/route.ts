import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { 
  withErrorHandling, 
  requireAdmin, 
  createResponse, 
  createErrorResponse,
  validateId,
  validateRequiredFields
} from "@/lib/api-utils";
import { UserRole, CreditType } from "@prisma/client";

// POST /api/demos/[id]/convert - Convertir demo a usuario permanente
async function convertDemo(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await requireAdmin(request);
  const { id } = await params;
  
  validateId(id);

  const body = await request.json();
  validateRequiredFields(body, ['creditType', 'credits']);
  
  const { 
    creditType = 'ONE_CONNECTION', 
    credits = 1,
    packageId 
  } = body;

  // Verificar que el demo existe
  const demo = await prisma.demo.findUnique({
    where: { id },
    include: {
      server: {
        select: {
          id: true,
          name: true,
          url: true,
          apiKey: true,
          isTest: true,
          maxUsers: true
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

  // Verificar que el demo no haya expirado
  const now = new Date();
  if (demo.expirationDate < now) {
    return createErrorResponse("No se puede convertir un demo expirado", 400);
  }

  // Verificar capacidad del servidor
  const currentUsers = await prisma.userServerLink.count({
    where: {
      serverId: demo.serverId,
      isDemo: false
    }
  });

  if (currentUsers >= demo.server.maxUsers) {
    return createErrorResponse(
      `El servidor ${demo.server.name} ha alcanzado su límite máximo de usuarios (${demo.server.maxUsers})`,
      400
    );
  }

  // Calcular nueva fecha de expiración
  const newExpirationDate = new Date();
  newExpirationDate.setMonth(newExpirationDate.getMonth() + credits);

  try {
    // Actualizar políticas del usuario en Emby para permitir más funcionalidades
    const { EmbyService } = await import("@/lib/emby");
    const embyService = new EmbyService(demo.server.apiKey, demo.server.url);
    
    const embyAccount = await prisma.embyAccount.findFirst({
      where: {
        embyUserEmail: demo.email,
        serverId: demo.serverId
      }
    });
    
    if (embyAccount) {
      // Aplicar políticas de usuario permanente
      const permanentUserPolicies = {
        AllowCameraUpload: true,
        EnableAudioPlaybackTranscoding: true,
        EnableVideoPlaybackTranscoding: true,
        EnableVideoPlaybackRemuxing: true,
        EnableNotifications: true,
        AllowPasswordChange: true,
        EnableRemoteAccess: true,
        EnableContentDownloading: true
      };

      await embyService.updateUserPolicy(embyAccount.embyUserId, permanentUserPolicies);
    }

    // Actualizar UserServerLink para convertir de demo a usuario permanente
    const updatedUserServerLink = await prisma.userServerLink.updateMany({
      where: {
        embyUserEmail: demo.email,
        serverId: demo.serverId,
        isDemo: true
      },
      data: {
        isDemo: false,
        creditType: creditType as CreditType,
        credits,
        expirationDate: newExpirationDate,
        isActive: true
      }
    });

    // Actualizar EmbyAccount
    await prisma.embyAccount.updateMany({
      where: {
        embyUserEmail: demo.email,
        serverId: demo.serverId
      },
      data: {
        isActive: true
      }
    });

    // Marcar demo como convertido (inactivo)
    await prisma.demo.update({
      where: { id },
      data: {
        isActive: false
      }
    });

    // Aplicar políticas del paquete si se especifica
    if (packageId) {
      // TODO: Implementar aplicación de políticas de paquete
      console.log(`Aplicando políticas del paquete ${packageId} al usuario convertido`);
    }

    // Obtener información actualizada del usuario
    const convertedUser = await prisma.userServerLink.findFirst({
      where: {
        embyUserEmail: demo.email,
        serverId: demo.serverId,
        isDemo: false
      },
      include: {
        server: {
          select: {
            name: true
          }
        }
      }
    });

    if (!convertedUser) {
      return createErrorResponse("Error al obtener información del usuario convertido", 500);
    }

    const daysUntilExpiry = Math.ceil((convertedUser.expirationDate!.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    
    let userStatus = 'ACTIVO';
    if (daysUntilExpiry <= 5) {
      userStatus = 'CASI EXPIRADO';
    }

    return createResponse({
      id: convertedUser.id,
      email: demo.email,
      serverName: convertedUser.server.name,
      status: userStatus,
      expirationDate: convertedUser.expirationDate,
      creditType: convertedUser.creditType,
      credits: convertedUser.credits,
      createdAt: convertedUser.createdAt,
      convertedFromDemo: true,
      originalDemoId: demo.id
    }, "Demo convertido a usuario permanente exitosamente");

  } catch (error: any) {
    console.error("Error al convertir demo:", error);
    return createErrorResponse(`Error al convertir demo: ${error.message}`, 500);
  }
}

// Exportar handler con manejo de errores
export const POST = withErrorHandling(convertDemo);