import { NextRequest, NextResponse } from "next/server"
import { getSessionFromRequest } from "@/lib/auth-simple"
import { syncUsers, getSyncStats } from "@/lib/jobs/user-sync"

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

    // Obtener opciones del body
    const body = await request.json().catch(() => ({}))
    const options = {
      serverId: body.serverId,
      userId: body.userId,
      forceUpdate: body.forceUpdate || false,
      dryRun: body.dryRun || false
    }

    console.log(`🔄 Iniciando sincronización de usuarios por: ${session.user.email}`)
    console.log(`📋 Opciones:`, options)

    // Ejecutar sincronización
    const result = await syncUsers(options)

    // Obtener estadísticas actualizadas
    const stats = await getSyncStats()

    return NextResponse.json({
      message: "Sincronización de usuarios completada",
      result,
      stats,
      options,
      executedBy: session.user.email,
      executedAt: new Date().toISOString()
    })

  } catch (error) {
    console.error("Error en sincronización de usuarios:", error)
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

    // Obtener estadísticas de sincronización
    const stats = await getSyncStats()

    return NextResponse.json({
      stats,
      lastChecked: new Date().toISOString()
    })

  } catch (error) {
    console.error("Error obteniendo estadísticas de sincronización:", error)
    return NextResponse.json(
      { 
        message: "Error interno del servidor",
        error: error instanceof Error ? error.message : "Error desconocido"
      },
      { status: 500 }
    )
  }
}
