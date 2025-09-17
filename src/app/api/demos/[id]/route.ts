import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const demo = await prisma.demo.findUnique({
      where: { id },
      include: {
        server: {
          select: {
            name: true,
            url: true,
            apiKey: true
          }
        }
      }
    });

    if (!demo) {
      return NextResponse.json({ message: "Demo no encontrada" }, { status: 404 });
    }

    const now = new Date();
    const isExpired = demo.expirationDate < now;
    const timeRemaining = Math.max(0, demo.expirationDate.getTime() - now.getTime());
    const hoursRemaining = Math.floor(timeRemaining / (1000 * 60 * 60));
    const minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));

    const demoData = {
      id: demo.id,
      email: demo.email,
      password: demo.password,
      embyUserName: demo.embyUserName,
      serverName: demo.server?.name || 'Servidor no encontrado',
      hoursDuration: demo.hoursDuration,
      expirationDate: demo.expirationDate,
      isActive: demo.isActive && !isExpired,
      isExpired,
      timeRemaining,
      hoursRemaining,
      minutesRemaining,
      createdAt: demo.createdAt,
      updatedAt: demo.updatedAt
    };

    return NextResponse.json(demoData);
  } catch (error) {
    console.error("Error al obtener demo:", error);
    return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { email, password, hoursDuration, isActive } = body;

    const demo = await prisma.demo.findUnique({
      where: { id },
      include: {
        server: true
      }
    });

    if (!demo) {
      return NextResponse.json({ message: "Demo no encontrada" }, { status: 404 });
    }

    // Update Emby user if email or password changed
    if (email || password) {
      const { EmbyService } = await import("@/lib/emby");
      const embyService = new EmbyService(
        demo.server.apiKey,
        demo.server.url
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
          if (email) {
            await embyService.updateUser(embyAccount.embyUserId, { Name: demo.embyUserName });
          }
          if (password) {
            await embyService.setUserPassword(embyAccount.embyUserId, password);
          }
        }
      } catch (embyError) {
        console.error("Error al actualizar demo en Emby:", embyError);
        return NextResponse.json({ 
          message: "Error al actualizar demo en el servidor Emby" 
        }, { status: 500 });
      }
    }

    // Update expiration date if hours duration changed
    let newExpirationDate = demo.expirationDate;
    if (hoursDuration && hoursDuration !== demo.hoursDuration) {
      const createdAt = demo.createdAt;
      newExpirationDate = new Date(createdAt.getTime() + (hoursDuration * 60 * 60 * 1000));
    }

    // Update demo in database
    const updatedDemo = await prisma.demo.update({
      where: { id },
      data: {
        ...(email && { email }),
        ...(password && { password }),
        ...(hoursDuration && { 
          hoursDuration,
          expirationDate: newExpirationDate
        }),
        ...(isActive !== undefined && { isActive })
      }
    });

    // TODO: Update UserServerLink expiration date when implemented
    // if (newExpirationDate !== demo.expirationDate) {
    //   await prisma.userServerLink.update({
    //     where: { id: demo.userServerLink.id },
    //     data: {
    //       expirationDate: newExpirationDate
    //     }
    //   });
    // }

    return NextResponse.json({ 
      message: "Demo actualizada exitosamente",
      demo: updatedDemo
    });
  } catch (error) {
    console.error("Error al actualizar demo:", error);
    return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const demo = await prisma.demo.findUnique({
      where: { id },
      include: {
        server: true
      }
    });

    if (!demo) {
      return NextResponse.json({ message: "Demo no encontrada" }, { status: 404 });
    }

    // Delete from Emby server
    const { EmbyService } = await import("@/lib/emby");
    const embyService = new EmbyService(
      demo.server.apiKey,
      demo.server.url
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
        await embyService.deleteUser(embyAccount.embyUserId);
      }
    } catch (embyError) {
      console.error("Error al eliminar demo de Emby:", embyError);
      // Continue with database deletion even if Emby deletion fails
    }

    // TODO: Delete UserServerLink when implemented
    // await prisma.userServerLink.delete({
    //   where: { id: demo.userServerLink.id }
    // });

    await prisma.demo.delete({
      where: { id }
    });

    // Delete Emby account if exists
    await prisma.embyAccount.deleteMany({
      where: {
        embyUserEmail: demo.email,
        serverId: demo.serverId
      }
    });

    return NextResponse.json({ message: "Demo eliminada exitosamente" });
  } catch (error) {
    console.error("Error al eliminar demo:", error);
    return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 });
  }
}

