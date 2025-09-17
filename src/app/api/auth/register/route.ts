import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password, role = "BASIC_RESELLER" } = body

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email y contraseña son requeridos" },
        { status: 400 }
      )
    }

    // Verificar si el usuario ya existe
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return NextResponse.json(
        { message: "El usuario ya existe" },
        { status: 400 }
      )
    }

    // Validar rol
    const validRoles = ["SUPER_ADMIN", "TECH_ADMIN", "PREMIUM_RESELLER", "ADVANCED_RESELLER", "BASIC_RESELLER"]
    if (!validRoles.includes(role)) {
      return NextResponse.json(
        { message: "Rol inválido" },
        { status: 400 }
      )
    }

    // Hash de la contraseña
    const hashedPassword = await bcrypt.hash(password, 12)

    // Crear usuario
    const user = await prisma.user.create({
      data: {
        email,
        hashedPassword,
        role: role as any,
        isActive: true
      }
    })

    // No devolver la contraseña hasheada
    const { hashedPassword: _, ...userWithoutPassword } = user

    return NextResponse.json(
      { 
        message: "Usuario creado exitosamente",
        user: userWithoutPassword 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("Error al crear usuario:", error)
    return NextResponse.json(
      { message: "Error interno del servidor" },
      { status: 500 }
    )
  }
}
