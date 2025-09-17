import { prisma } from "@/lib/prisma"
import { EmbyService } from "@/lib/emby"

export interface CleanupResult {
  totalExpired: number
  cleanedUp: number
  errors: string[]
  success: boolean
}

/**
 * Limpia demos expirados automáticamente
 * - Encuentra demos que han expirado
 * - Elimina usuarios de Emby
 * - Marca demos como inactivos en la BD
 */
export async function cleanupExpiredDemos(): Promise<CleanupResult> {
  const result: CleanupResult = {
    totalExpired: 0,
    cleanedUp: 0,
    errors: [],
    success: true
  }

  try {
    console.log("🧹 Iniciando limpieza de demos expirados...")

    // 1. Encontrar demos expirados
    const expiredDemos = await prisma.demo.findMany({
      where: {
        expirationDate: { lt: new Date() },
        isActive: true
      },
      include: {
        server: true
      }
    })

    result.totalExpired = expiredDemos.length
    console.log(`📊 Encontrados ${result.totalExpired} demos expirados`)

    if (expiredDemos.length === 0) {
      console.log("✅ No hay demos expirados para limpiar")
      return result
    }

    // 2. Procesar cada demo expirado
    for (const demo of expiredDemos) {
      try {
        console.log(`🔄 Procesando demo: ${demo.email} (${demo.id})`)

        // Conectar con el servidor Emby
        const embyService = new EmbyService(demo.server.apiKey, demo.server.url)

        // Verificar si el usuario existe en Emby
        try {
          const embyUser = await embyService.getUser(demo.embyUserId)
          
          if (embyUser) {
            // Eliminar usuario de Emby
            await embyService.deleteUser(demo.embyUserId)
            console.log(`✅ Usuario eliminado de Emby: ${demo.embyUserId}`)
          }
        } catch (embyError) {
          // El usuario ya no existe en Emby o hay error de conexión
          console.log(`⚠️ Usuario no encontrado en Emby o error de conexión: ${demo.embyUserId}`)
        }

        // Marcar demo como inactivo en la BD
        await prisma.demo.update({
          where: { id: demo.id },
          data: { 
            isActive: false,
            updatedAt: new Date()
          }
        })

        result.cleanedUp++
        console.log(`✅ Demo marcado como inactivo: ${demo.email}`)

      } catch (error) {
        const errorMsg = `Error procesando demo ${demo.id}: ${error instanceof Error ? error.message : 'Error desconocido'}`
        result.errors.push(errorMsg)
        console.error(`❌ ${errorMsg}`)
      }
    }

    console.log(`🎉 Limpieza completada: ${result.cleanedUp}/${result.totalExpired} demos procesados`)
    
    if (result.errors.length > 0) {
      result.success = false
      console.log(`⚠️ Errores encontrados: ${result.errors.length}`)
    }

  } catch (error) {
    result.success = false
    const errorMsg = `Error general en limpieza de demos: ${error instanceof Error ? error.message : 'Error desconocido'}`
    result.errors.push(errorMsg)
    console.error(`❌ ${errorMsg}`)
  }

  return result
}

/**
 * Obtiene estadísticas de demos para monitoreo
 */
export async function getDemoStats() {
  const now = new Date()
  const oneHourFromNow = new Date(now.getTime() + 60 * 60 * 1000)
  const oneDayFromNow = new Date(now.getTime() + 24 * 60 * 60 * 1000)

  const stats = await prisma.demo.groupBy({
    by: ['isActive'],
    where: {
      isActive: true
    },
    _count: {
      id: true
    }
  })

  const expiringSoon = await prisma.demo.count({
    where: {
      isActive: true,
      expirationDate: {
        gte: now,
        lte: oneHourFromNow
      }
    }
  })

  const expiringToday = await prisma.demo.count({
    where: {
      isActive: true,
      expirationDate: {
        gte: now,
        lte: oneDayFromNow
      }
    }
  })

  const activeCount = stats.find(s => s.isActive)?._count.id || 0
  const inactiveCount = stats.find(s => !s.isActive)?._count.id || 0

  return {
    active: activeCount,
    inactive: inactiveCount,
    expiringSoon, // En la próxima hora
    expiringToday, // En las próximas 24 horas
    total: activeCount + inactiveCount
  }
}
