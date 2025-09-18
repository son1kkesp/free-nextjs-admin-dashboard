import { NextRequest, NextResponse } from "next/server"
import { getSessionFromRequest } from "@/lib/auth-simple"
import { 
  demoCleanupQueue, 
  userSyncQueue, 
  maintenanceQueue,
  getQueueStats,
  scheduleRecurringJobs,
  cleanCompletedJobs,
  pauseQueues,
  resumeQueues
} from "@/lib/queue"

export async function GET() {
  try {
    // Verificar autenticación
    const session = await getSessionFromRequest(request)
    if (!session) {
      return NextResponse.json({ message: "No autorizado" }, { status: 401 })
    }

    // Verificar permisos (solo admins pueden ver estadísticas de colas)
    const adminRoles = ["SUPER_ADMIN", "TECH_ADMIN"]
    if (!adminRoles.includes(session.user.role)) {
      return NextResponse.json({ message: "Permisos insuficientes" }, { status: 403 })
    }

    // Obtener estadísticas de las colas
    const stats = await getQueueStats()

    return NextResponse.json({
      stats,
      lastChecked: new Date().toISOString()
    })

  } catch (error) {
    console.error("Error obteniendo estadísticas de colas:", error)
    return NextResponse.json(
      { 
        message: "Error interno del servidor",
        error: error instanceof Error ? error.message : "Error desconocido"
      },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    // Verificar autenticación
    const session = await getSessionFromRequest(request)
    if (!session) {
      return NextResponse.json({ message: "No autorizado" }, { status: 401 })
    }

    // Verificar permisos (solo admins pueden gestionar colas)
    const adminRoles = ["SUPER_ADMIN", "TECH_ADMIN"]
    if (!adminRoles.includes(session.user.role)) {
      return NextResponse.json({ message: "Permisos insuficientes" }, { status: 403 })
    }

    const body = await request.json()
    const { action, queueName, options = {} } = body

    console.log(`🔧 Acción de cola ejecutada por ${session.user.email}:`, { action, queueName })

    let result: any = {}

    switch (action) {
      case 'schedule-recurring':
        scheduleRecurringJobs()
        result = { message: "Trabajos recurrentes programados" }
        break

      case 'clean-completed':
        await cleanCompletedJobs()
        result = { message: "Trabajos completados limpiados" }
        break

      case 'pause':
        await pauseQueues()
        result = { message: "Colas pausadas" }
        break

      case 'resume':
        await resumeQueues()
        result = { message: "Colas reanudadas" }
        break

      case 'add-demo-cleanup':
        const demoJob = await demoCleanupQueue.add('cleanup-expired-demos', options)
        result = { message: "Trabajo de limpieza de demos agregado", jobId: demoJob.id }
        break

      case 'add-user-sync':
        const syncJob = await userSyncQueue.add('sync-all-users', options)
        result = { message: "Trabajo de sincronización de usuarios agregado", jobId: syncJob.id }
        break

      case 'add-server-sync':
        if (!options.serverId) {
          return NextResponse.json({ message: "serverId es requerido" }, { status: 400 })
        }
        const serverSyncJob = await userSyncQueue.add('sync-server-users', options)
        result = { message: "Trabajo de sincronización de servidor agregado", jobId: serverSyncJob.id }
        break

      case 'add-maintenance':
        const maintenanceJob = await maintenanceQueue.add('daily-maintenance', options)
        result = { message: "Trabajo de mantenimiento agregado", jobId: maintenanceJob.id }
        break

      default:
        return NextResponse.json({ message: "Acción no válida" }, { status: 400 })
    }

    // Obtener estadísticas actualizadas
    const stats = await getQueueStats()

    return NextResponse.json({
      ...result,
      stats,
      executedBy: session.user.email,
      executedAt: new Date().toISOString()
    })

  } catch (error) {
    console.error("Error gestionando colas:", error)
    return NextResponse.json(
      { 
        message: "Error interno del servidor",
        error: error instanceof Error ? error.message : "Error desconocido"
      },
      { status: 500 }
    )
  }
}
