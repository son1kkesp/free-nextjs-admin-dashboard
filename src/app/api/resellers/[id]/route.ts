import { NextRequest, NextResponse } from "next/server";
import { getSessionFromRequest } from "@/lib/auth-simple";
import { prisma } from "@/lib/prisma";
import { UserRole } from "@prisma/client";
import bcrypt from "bcryptjs";

// GET - Obtener un reseller específico
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
    const session = await getSessionFromRequest(request);

  if (!session || !session.user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const userRole = session.user.role as UserRole;

  // Solo SUPER_ADMIN puede ver detalles de resellers
  if (userRole !== UserRole.SUPER_ADMIN) {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  try {
    const reseller = await prisma.user.findFirst({
      where: {
        id: params.id,
        role: {
          in: [UserRole.PREMIUM_RESELLER, UserRole.ADVANCED_RESELLER, UserRole.BASIC_RESELLER],
        },
        isTest: false,
      },
      select: {
        id: true,
        email: true,
        role: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
        createdBy: true,
      },
    });

    if (!reseller) {
      return NextResponse.json({ message: "Reseller not found" }, { status: 404 });
    }

    return NextResponse.json(reseller, { status: 200 });
  } catch (error) {
    console.error("Error fetching reseller:", error);
    return NextResponse.json(
      { message: "Error fetching reseller" },
      { status: 500 }
    );
  }
}

// PUT - Actualizar un reseller
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
    const session = await getSessionFromRequest(request);

  if (!session || !session.user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const userRole = session.user.role as UserRole;

  // Solo SUPER_ADMIN puede actualizar resellers
  if (userRole !== UserRole.SUPER_ADMIN) {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  try {
    const body = await request.json();
    const { email, password, role, isActive } = body;

    // Verificar que el reseller existe
    const existingReseller = await prisma.user.findFirst({
      where: {
        id: params.id,
        role: {
          in: [UserRole.PREMIUM_RESELLER, UserRole.ADVANCED_RESELLER, UserRole.BASIC_RESELLER],
        },
        isTest: false,
      },
    });

    if (!existingReseller) {
      return NextResponse.json({ message: "Reseller not found" }, { status: 404 });
    }

    // Preparar datos para actualizar
    const updateData: any = {};

    if (email && email !== existingReseller.email) {
      // Verificar si el nuevo email ya existe
      const emailExists = await prisma.user.findUnique({
        where: { email },
      });

      if (emailExists) {
        return NextResponse.json(
          { message: "El email ya está en uso" },
          { status: 400 }
        );
      }
      updateData.email = email;
    }

    if (password) {
      updateData.hashedPassword = await bcrypt.hash(password, 10);
    }

    if (role) {
      const validResellerRoles = [
        UserRole.PREMIUM_RESELLER,
        UserRole.ADVANCED_RESELLER,
        UserRole.BASIC_RESELLER,
      ];

      if (!validResellerRoles.includes(role)) {
        return NextResponse.json(
          { message: "Role inválido para reseller" },
          { status: 400 }
        );
      }
      updateData.role = role;
    }

    if (typeof isActive === "boolean") {
      updateData.isActive = isActive;
    }

    // Actualizar el reseller
    const updatedReseller = await prisma.user.update({
      where: { id: params.id },
      data: updateData,
      select: {
        id: true,
        email: true,
        role: true,
        isActive: true,
        updatedAt: true,
      },
    });

    return NextResponse.json(updatedReseller, { status: 200 });
  } catch (error) {
    console.error("Error updating reseller:", error);
    return NextResponse.json(
      { message: "Error updating reseller" },
      { status: 500 }
    );
  }
}

// DELETE - Eliminar un reseller
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
    const session = await getSessionFromRequest(request);

  if (!session || !session.user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const userRole = session.user.role as UserRole;

  // Solo SUPER_ADMIN puede eliminar resellers
  if (userRole !== UserRole.SUPER_ADMIN) {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  try {
    // Verificar que el reseller existe
    const existingReseller = await prisma.user.findFirst({
      where: {
        id: params.id,
        role: {
          in: [UserRole.PREMIUM_RESELLER, UserRole.ADVANCED_RESELLER, UserRole.BASIC_RESELLER],
        },
        isTest: false,
      },
    });

    if (!existingReseller) {
      return NextResponse.json({ message: "Reseller not found" }, { status: 404 });
    }

    // Verificar si el reseller tiene usuarios asociados
    const associatedUsers = await prisma.user.count({
      where: {
        createdBy: params.id,
      },
    });

    if (associatedUsers > 0) {
      return NextResponse.json(
        { 
          message: `No se puede eliminar el reseller porque tiene ${associatedUsers} usuarios asociados. Primero elimine o transfiera estos usuarios.` 
        },
        { status: 400 }
      );
    }

    // Eliminar el reseller
    await prisma.user.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: "Reseller eliminado exitosamente" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting reseller:", error);
    return NextResponse.json(
      { message: "Error deleting reseller" },
      { status: 500 }
    );
  }
}
