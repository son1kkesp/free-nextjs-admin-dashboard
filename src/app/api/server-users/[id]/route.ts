import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const embyAccount = await prisma.embyAccount.findUnique({
      where: { id },
      include: {
        userServerLink: {
          include: {
            server: {
              select: {
                name: true,
                url: true,
                apiKey: true
              }
            }
          }
        }
      }
    });

    if (!embyAccount || !embyAccount.userServerLink) {
      return NextResponse.json({ message: "Usuario no encontrado" }, { status: 404 });
    }

    const user = {
      id: embyAccount.id,
      email: embyAccount.embyUserEmail,
      embyUserId: embyAccount.embyUserId,
      serverName: embyAccount.userServerLink.server.name,
      status: embyAccount.isActive ? 'ACTIVO' : 'INACTIVO',
      expirationDate: embyAccount.userServerLink.expirationDate,
      creditType: embyAccount.userServerLink.creditType,
      credits: embyAccount.userServerLink.credits,
      createdAt: embyAccount.createdAt,
      updatedAt: embyAccount.updatedAt
    };

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error al obtener usuario:", error);
    return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await request.json();
    const { email, password, serverId, creditType, credits, isActive } = body;

    const embyAccount = await prisma.embyAccount.findUnique({
      where: { id },
      include: {
        userServerLink: {
          include: {
            server: true
          }
        }
      }
    });

    if (!embyAccount || !embyAccount.userServerLink) {
      return NextResponse.json({ message: "Usuario no encontrado" }, { status: 404 });
    }

    // Update Emby user if email or password changed
    if (email || password) {
      const { EmbyService } = await import("@/lib/emby");
      const embyService = new EmbyService(
        embyAccount.userServerLink.server.apiKey,
        embyAccount.userServerLink.server.url
      );

      try {
        if (email) {
          await embyService.updateUser(embyAccount.embyUserId, { Name: email });
        }
        if (password) {
          await embyService.setUserPassword(embyAccount.embyUserId, password);
        }
      } catch (embyError) {
        console.error("Error al actualizar usuario en Emby:", embyError);
        return NextResponse.json({ 
          message: "Error al actualizar usuario en el servidor Emby" 
        }, { status: 500 });
      }
    }

    // Update expiration date if credits changed
    let newExpirationDate = embyAccount.userServerLink.expirationDate;
    if (credits !== undefined && credits !== embyAccount.userServerLink.credits) {
      const now = new Date();
      newExpirationDate = new Date(now.getTime() + (credits * 30 * 24 * 60 * 60 * 1000)); // Approximate month calculation
    }

    // Update database records
    await prisma.embyAccount.update({
      where: { id },
      data: {
        ...(email && { embyUserEmail: email }),
        ...(isActive !== undefined && { isActive })
      }
    });

    await prisma.userServerLink.update({
      where: { id: embyAccount.userServerLink.id },
      data: {
        ...(creditType && { creditType }),
        ...(credits !== undefined && { 
          credits,
          expirationDate: newExpirationDate
        })
      }
    });

    return NextResponse.json({ message: "Usuario actualizado exitosamente" });
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
    return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const embyAccount = await prisma.embyAccount.findUnique({
      where: { id },
      include: {
        userServerLink: {
          include: {
            server: true
          }
        }
      }
    });

    if (!embyAccount || !embyAccount.userServerLink) {
      return NextResponse.json({ message: "Usuario no encontrado" }, { status: 404 });
    }

    // Delete from Emby server
    const { EmbyService } = await import("@/lib/emby");
    const embyService = new EmbyService(
      embyAccount.userServerLink.server.apiKey,
      embyAccount.userServerLink.server.url
    );

    try {
      await embyService.deleteUser(embyAccount.embyUserId);
    } catch (embyError) {
      console.error("Error al eliminar usuario de Emby:", embyError);
      // Continue with database deletion even if Emby deletion fails
    }

    // Delete from database
    await prisma.embyAccount.delete({
      where: { id }
    });

    await prisma.userServerLink.delete({
      where: { id: embyAccount.userServerLink.id }
    });

    return NextResponse.json({ message: "Usuario eliminado exitosamente" });
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
    return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 });
  }
}