import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await request.json();
    const { credits, creditType = 'ONE_CONNECTION' } = body;

    if (!credits || credits <= 0) {
      return NextResponse.json({ 
        message: "Los créditos deben ser mayores a 0" 
      }, { status: 400 });
    }

    const demo = await prisma.demo.findUnique({
      where: { id },
      include: {
        userServerLink: {
          include: {
            server: true
          }
        }
      }
    });

    if (!demo || !demo.userServerLink) {
      return NextResponse.json({ message: "Demo no encontrada" }, { status: 404 });
    }

    // Check if demo is still active and not expired
    const now = new Date();
    if (demo.expirationDate < now || !demo.isActive) {
      return NextResponse.json({ 
        message: "No se puede convertir una demo expirada o inactiva" 
      }, { status: 400 });
    }

    // Calculate new expiration date based on credits
    const newExpirationDate = new Date(now.getTime() + (credits * 30 * 24 * 60 * 60 * 1000)); // Approximate month calculation

    // Update UserServerLink to convert from demo to regular user
    await prisma.userServerLink.update({
      where: { id: demo.userServerLink.id },
      data: {
        isDemo: false,
        credits,
        creditType,
        expirationDate: newExpirationDate
      }
    });

    // Update demo record to mark as converted
    await prisma.demo.update({
      where: { id },
      data: {
        isActive: false // Mark demo as inactive since it's now a regular user
      }
    });

    // Update Emby user policies to remove demo restrictions
    const { EmbyService } = await import("@/lib/emby");
    const embyService = new EmbyService(
      demo.userServerLink.server.apiKey,
      demo.userServerLink.server.url
    );

    try {
      // Find Emby account
      const embyAccount = await prisma.embyAccount.findFirst({
        where: {
          embyUserEmail: demo.email,
          serverId: demo.serverId
        }
      });

      if (embyAccount) {
        // Apply regular user policies (remove demo restrictions)
        const regularPolicies = {
          AllowCameraUpload: false, // Keep disabled by default
          EnableAudioPlaybackTranscoding: false, // Keep disabled by default
          EnableVideoPlaybackTranscoding: false, // Keep disabled by default
          EnableVideoPlaybackRemuxing: false, // Keep disabled by default
          EnableNotifications: false, // Keep disabled by default
          AllowPasswordChange: false // Keep disabled by default
        };

        await embyService.updateUserPolicy(embyAccount.embyUserId, regularPolicies);
      }
    } catch (embyError) {
      console.error("Error al actualizar políticas de Emby:", embyError);
      // Continue even if Emby policy update fails
    }

    return NextResponse.json({
      message: "Demo convertida a usuario regular exitosamente",
      newExpirationDate,
      credits,
      creditType
    });
  } catch (error) {
    console.error("Error al convertir demo:", error);
    return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 });
  }
}