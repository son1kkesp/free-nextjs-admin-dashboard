import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Buscar si es una demo
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

    const user = {
      id: demo.id,
      email: demo.email,
      embyUserId: demo.embyUserName,
      serverName: demo.server.name,
      status: demo.isActive ? 'ACTIVO' : 'INACTIVO',
      expirationDate: demo.expirationDate,
      creditType: 'ONE_CONNECTION',
      credits: demo.hoursDuration,
      createdAt: demo.createdAt,
      updatedAt: demo.updatedAt
    };

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error al obtener usuario:", error);
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
    const { email, password, serverId, creditType, credits, isActive } = body;

    const demo = await prisma.demo.findUnique({
      where: { id },
      include: {
        server: true
      }
    });

    if (!demo) {
      return NextResponse.json({ message: "Usuario no encontrado" }, { status: 404 });
    }

    // Update demo
    await prisma.demo.update({
      where: { id },
      data: {
        ...(email && { email }),
        ...(password && { password }),
        ...(isActive !== undefined && { isActive })
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
      return NextResponse.json({ message: "Usuario no encontrado" }, { status: 404 });
    }

    // Delete demo
    await prisma.demo.delete({
      where: { id }
    });

    return NextResponse.json({ message: "Usuario eliminado exitosamente" });
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
    return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 });
  }
}