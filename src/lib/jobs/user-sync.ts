import { prisma } from "@/lib/prisma"
import { EmbyService } from "@/lib/emby"

export interface SyncResult {
  totalUsers: number
  syncedUsers: number
  errors: string[]
  warnings: string[]
  success: boolean
  changes: {
    enabled: number
    disabled: number
    passwordUpdated: number
    policyUpdated: number
  }
}

export interface UserSyncOptions {
  serverId?: string
  userId?: string
  forceUpdate?: boolean
  dryRun?: boolean
}

/**
 * Sincroniza usuarios entre la base de datos local y los servidores Emby
 * - Verifica estado de usuarios en Emby
 * - Actualiza políticas y configuraciones
 * - Detecta inconsistencias
 */
export async function syncUsers(options: UserSyncOptions = {}): Promise<SyncResult> {
  const result: SyncResult = {
    totalUsers: 0,
    syncedUsers: 0,
    errors: [],
    warnings: [],
    success: true,
    changes: {
      enabled: 0,
      disabled: 0,
      passwordUpdated: 0,
      policyUpdated: 0
    }
  }

  try {
    console.log("🔄 Iniciando sincronización de usuarios...")

    // 1. Obtener usuarios a sincronizar
    const whereClause: any = {
      isDemo: false
    }

    if (options.serverId) {
      whereClause.serverId = options.serverId
    }

    if (options.userId) {
      whereClause.userId = options.userId
    }

    const userServerLinks = await prisma.userServerLink.findMany({
      where: whereClause,
      include: {
        server: true,
        embyAccount: true
      }
    })

    result.totalUsers = userServerLinks.length
    console.log(`📊 Encontrados ${result.totalUsers} usuarios para sincronizar`)

    if (userServerLinks.length === 0) {
      console.log("✅ No hay usuarios para sincronizar")
      return result
    }

    // 2. Procesar cada usuario
    for (const userLink of userServerLinks) {
      try {
        console.log(`🔄 Sincronizando usuario: ${userLink.embyAccount?.embyUserEmail || 'N/A'} (${userLink.id})`)

        // Conectar con el servidor Emby
        const embyService = new EmbyService(userLink.server.apiKey, userLink.server.url)

        // Verificar si el usuario existe en Emby
        let embyUser
        try {
          embyUser = await embyService.getUser(userLink.embyAccount?.embyUserId || '')
        } catch (embyError) {
          result.warnings.push(`Usuario no encontrado en Emby: ${userLink.embyAccount?.embyUserEmail}`)
          continue
        }

        if (!embyUser) {
          result.warnings.push(`Usuario no encontrado en Emby: ${userLink.embyAccount?.embyUserEmail}`)
          continue
        }

        // 3. Verificar y sincronizar estado del usuario
        const shouldBeActive = userLink.expirationDate ? new Date(userLink.expirationDate) > new Date() : true
        const isActiveInEmby = !embyUser.Policy.IsDisabled

        if (shouldBeActive !== isActiveInEmby) {
          if (!options.dryRun) {
            await embyService.setUserEnabled(embyUser.Id, shouldBeActive)
            console.log(`✅ Estado actualizado: ${shouldBeActive ? 'habilitado' : 'deshabilitado'}`)
          }
          
          if (shouldBeActive) {
            result.changes.enabled++
          } else {
            result.changes.disabled++
          }
        }

        // 4. Verificar y sincronizar políticas
        const expectedMaxSessions = userLink.creditType === 'TWO_CONNECTIONS' ? 2 : 1
        const currentMaxSessions = embyUser.Policy.MaxActiveSessions

        if (expectedMaxSessions !== currentMaxSessions) {
          if (!options.dryRun) {
            await embyService.updateUserPolicy(embyUser.Id, {
              MaxActiveSessions: expectedMaxSessions
            })
            console.log(`✅ Política actualizada: ${expectedMaxSessions} conexiones simultáneas`)
          }
          result.changes.policyUpdated++
        }

        // 5. Verificar políticas adicionales basadas en el tipo de usuario
        const policyUpdates: any = {}

        // Configurar políticas según el tipo de crédito
        if (userLink.creditType === 'TWO_CONNECTIONS') {
          // Usuario premium - más permisos
          policyUpdates.EnableVideoPlaybackTranscoding = true
          policyUpdates.EnableAudioPlaybackTranscoding = true
          policyUpdates.EnableContentDownloading = true
        } else {
          // Usuario básico - permisos limitados
          policyUpdates.EnableVideoPlaybackTranscoding = false
          policyUpdates.EnableAudioPlaybackTranscoding = false
          policyUpdates.EnableContentDownloading = false
        }

        // Aplicar políticas si hay cambios
        const hasPolicyChanges = Object.keys(policyUpdates).some(key => 
          embyUser.Policy[key as keyof typeof embyUser.Policy] !== policyUpdates[key]
        )

        if (hasPolicyChanges) {
          if (!options.dryRun) {
            await embyService.updateUserPolicy(embyUser.Id, policyUpdates)
            console.log(`✅ Políticas adicionales actualizadas`)
          }
          result.changes.policyUpdated++
        }

        result.syncedUsers++
        console.log(`✅ Usuario sincronizado: ${userLink.embyAccount?.embyUserEmail}`)

      } catch (error) {
        const errorMsg = `Error sincronizando usuario ${userLink.id}: ${error instanceof Error ? error.message : 'Error desconocido'}`
        result.errors.push(errorMsg)
        console.error(`❌ ${errorMsg}`)
      }
    }

    console.log(`🎉 Sincronización completada: ${result.syncedUsers}/${result.totalUsers} usuarios procesados`)
    
    if (result.errors.length > 0) {
      result.success = false
      console.log(`⚠️ Errores encontrados: ${result.errors.length}`)
    }

    if (result.warnings.length > 0) {
      console.log(`⚠️ Advertencias: ${result.warnings.length}`)
    }

  } catch (error) {
    result.success = false
    const errorMsg = `Error general en sincronización: ${error instanceof Error ? error.message : 'Error desconocido'}`
    result.errors.push(errorMsg)
    console.error(`❌ ${errorMsg}`)
  }

  return result
}

/**
 * Obtiene estadísticas de sincronización para monitoreo
 */
export async function getSyncStats() {
  const now = new Date()

  // Usuarios activos vs expirados
  const activeUsers = await prisma.userServerLink.count({
    where: {
      isDemo: false,
      OR: [
        { expirationDate: null },
        { expirationDate: { gt: now } }
      ]
    }
  })

  const expiredUsers = await prisma.userServerLink.count({
    where: {
      isDemo: false,
      expirationDate: { lt: now }
    }
  })

  // Usuarios por tipo de crédito
  const creditTypeStats = await prisma.userServerLink.groupBy({
    by: ['creditType'],
    where: {
      isDemo: false
    },
    _count: {
      id: true
    }
  })

  // Usuarios por servidor
  const serverStats = await prisma.userServerLink.groupBy({
    by: ['serverId'],
    where: {
      isDemo: false
    },
    _count: {
      id: true
    }
  })

  return {
    active: activeUsers,
    expired: expiredUsers,
    total: activeUsers + expiredUsers,
    creditTypes: creditTypeStats.reduce((acc, stat) => {
      acc[stat.creditType] = stat._count.id
      return acc
    }, {} as Record<string, number>),
    servers: serverStats.length
  }
}
