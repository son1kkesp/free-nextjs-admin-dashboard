import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { UserRole } from "@prisma/client";
import bcrypt from "bcryptjs";

// GET - Obtener todos los resellers
export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const userRole = session.user.role as UserRole;

  // Solo SUPER_ADMIN puede ver todos los resellers
  if (userRole !== UserRole.SUPER_ADMIN) {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  try {
    const resellers = await prisma.user.findMany({
      where: {
        role: {
          in: [UserRole.PREMIUM_RESELLER, UserRole.ADVANCED_RESELLER, UserRole.BASIC_RESELLER],
        },
        isTest: false, // Solo resellers de producción
      },
      select: {
        id: true,
        email: true,
        role: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(resellers, { status: 200 });
  } catch (error) {
    console.error("Error fetching resellers:", error);
    return NextResponse.json(
      { message: "Error fetching resellers" },
      { status: 500 }
    );
  }
}

// POST - Crear un nuevo reseller
export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const userRole = session.user.role as UserRole;

  // Solo SUPER_ADMIN puede crear resellers
  if (userRole !== UserRole.SUPER_ADMIN) {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  try {
    const body = await request.json();
    const { email, password, role, isActive = true } = body;

    // Validar datos
    if (!email || !password || !role) {
      return NextResponse.json(
        { message: "Email, password y role son requeridos" },
        { status: 400 }
      );
    }

    // Validar que el role sea un tipo de reseller válido
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

    // Verificar si el email ya existe
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "El email ya está en uso" },
        { status: 400 }
      );
    }

    // Hash de la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear el reseller
    const newReseller = await prisma.user.create({
      data: {
        email,
        hashedPassword,
        role,
        isActive,
        isTest: false, // Resellers de producción
        createdBy: session.user.id,
      },
      select: {
        id: true,
        email: true,
        role: true,
        isActive: true,
        createdAt: true,
      },
    });

    return NextResponse.json(newReseller, { status: 201 });
  } catch (error) {
    console.error("Error creating reseller:", error);
    return NextResponse.json(
      { message: "Error creating reseller" },
      { status: 500 }
    );
  }
}
