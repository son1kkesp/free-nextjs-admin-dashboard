import { NextRequest, NextResponse } from "next/server"
import { getSessionFromRequest } from "@/lib/auth-simple"
import { cleanupExpiredDemos, getDemoStats } from "@/lib/jobs/demo-cleanup"

export async function POST(request: NextRequest) {
  try {
    // Verificar autenticación
    const session = await getSessionFromRequest(request)
    if (!session) {
      return NextResponse.json({ message: "No autorizado" }, { status: 401 })
    }

    // Verificar permisos (solo admins pueden ejecutar jobs)
    const adminRoles = ["SUPER_ADMIN", "TECH_ADMIN"]
    if (!adminRoles.includes(session.user.role)) {
      return NextResponse.json({ message: "Permisos insuficientes" }, { status: 403 })
    }

    console.log(`🧹 Iniciando limpieza de demos por usuario: ${session.user.email}`)

    // Ejecutar limpieza
    const result = await cleanupExpiredDemos()

    // Obtener estadísticas actualizadas
    const stats = await getDemoStats()

    return NextResponse.json({
      message: "Limpieza de demos completada",
      result,
      stats,
      executedBy: session.user.email,
      executedAt: new Date().toISOString()
    })

  } catch (error) {
    console.error("Error en limpieza de demos:", error)
    return NextResponse.json(
      { 
        message: "Error interno del servidor",
        error: error instanceof Error ? error.message : "Error desconocido"
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    // Verificar autenticación
    const session = await getSessionFromRequest(request)
    if (!session) {
      return NextResponse.json({ message: "No autorizado" }, { status: 401 })
    }

    // Obtener estadísticas de demos
    const stats = await getDemoStats()

    return NextResponse.json({
      stats,
      lastChecked: new Date().toISOString()
    })

  } catch (error) {
    console.error("Error obteniendo estadísticas de demos:", error)
    return NextResponse.json(
      { 
        message: "Error interno del servidor",
        error: error instanceof Error ? error.message : "Error desconocido"
      },
      { status: 500 }
    )
  }
}
