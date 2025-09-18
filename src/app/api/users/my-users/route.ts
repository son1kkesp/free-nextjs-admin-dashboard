import { NextRequest, NextResponse } from "next/server"
import { getSessionFromRequest } from "@/lib/auth-simple"
import { prisma } from "@/lib/prisma"

export async function GET(request: NextRequest) {
  try {
    // Verificar autenticación
    const session = await getSessionFromRequest(request)
    if (!session) {
      return NextResponse.json({ message: "No autorizado" }, { status: 401 })
    }

    // Verificar permisos
    const userRole = session.user.role
    const resellerRoles = ["PREMIUM_RESELLER", "ADVANCED_RESELLER", "BASIC_RESELLER"]
    
    if (!resellerRoles.includes(userRole)) {
      return NextResponse.json({ message: "Solo resellers pueden acceder a esta información" }, { status: 403 })
    }

    // Obtener usuarios creados por este reseller
    const users = await prisma.user.findMany({
      where: {
        // TODO: Agregar campo createdBy cuando se implemente
        // createdBy: session.user.id,
        role: {
          in: ["BASIC_RESELLER", "ADVANCED_RESELLER", "PREMIUM_RESELLER"]
        }
      },
      include: {
        embyAccounts: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    // Formatear datos para el frontend
    const formattedUsers = users.map(user => {
      const embyAccount = user.embyAccounts[0]

      return {
        id: user.id,
        email: user.email,
        creditType: 'ONE_CONNECTION', // TODO: Obtener desde UserServerLink cuando se implemente
        expirationDate: null, // TODO: Obtener desde UserServerLink cuando se implemente
        isActive: user.isActive,
        createdAt: user.createdAt,
        embyAccount: embyAccount ? {
          id: embyAccount.id,
          embyUserId: embyAccount.embyUserId,
          embyUserEmail: embyAccount.embyUserEmail
        } : null
      }
    })

    return NextResponse.json({
      users: formattedUsers,
      total: formattedUsers.length,
      resellerRole: userRole
    })

  } catch (error) {
    console.error("Error obteniendo usuarios del reseller:", error)
    return NextResponse.json(
      { 
        message: "Error interno del servidor",
        error: error instanceof Error ? error.message : "Error desconocido"
      },
      { status: 500 }
    )
  }
}
