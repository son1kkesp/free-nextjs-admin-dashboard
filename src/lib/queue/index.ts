import Queue from 'bull'
import { cleanupExpiredDemos } from '../jobs/demo-cleanup'
import { syncUsers } from '../jobs/user-sync'

// Configuración de Redis (usando memoria en desarrollo)
const redisConfig = {
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT || '6379'),
  password: process.env.REDIS_PASSWORD,
  // En desarrollo, usar memoria si no hay Redis
  ...(process.env.NODE_ENV === 'development' && !process.env.REDIS_HOST && {
    host: 'localhost',
    port: 6379,
    maxRetriesPerRequest: null,
    enableReadyCheck: false,
    retryDelayOnFailover: 100,
    lazyConnect: true,
  })
}

// Crear colas
export const demoCleanupQueue = new Queue('demo cleanup', {
  redis: redisConfig,
  defaultJobOptions: {
    removeOnComplete: 10,
    removeOnFail: 5,
    attempts: 3,
    backoff: {
      type: 'exponential',
      delay: 2000,
    },
  },
})

export const userSyncQueue = new Queue('user sync', {
  redis: redisConfig,
  defaultJobOptions: {
    removeOnComplete: 10,
    removeOnFail: 5,
    attempts: 3,
    backoff: {
      type: 'exponential',
      delay: 2000,
    },
  },
})

export const maintenanceQueue = new Queue('maintenance', {
  redis: redisConfig,
  defaultJobOptions: {
    removeOnComplete: 5,
    removeOnFail: 3,
    attempts: 2,
    backoff: {
      type: 'fixed',
      delay: 5000,
    },
  },
})

// Procesadores de trabajos
demoCleanupQueue.process('cleanup-expired-demos', async (job) => {
  console.log(`🧹 Procesando limpieza de demos (Job ${job.id})`)
  
  try {
    const result = await cleanupExpiredDemos()
    
    job.progress(100)
    
    return {
      success: true,
      result,
      processedAt: new Date().toISOString()
    }
  } catch (error) {
    console.error(`❌ Error en limpieza de demos (Job ${job.id}):`, error)
    throw error
  }
})

userSyncQueue.process('sync-all-users', async (job) => {
  console.log(`🔄 Procesando sincronización de usuarios (Job ${job.id})`)
  
  try {
    const { options = {} } = job.data
    const result = await syncUsers(options)
    
    job.progress(100)
    
    return {
      success: true,
      result,
      processedAt: new Date().toISOString()
    }
  } catch (error) {
    console.error(`❌ Error en sincronización de usuarios (Job ${job.id}):`, error)
    throw error
  }
})

userSyncQueue.process('sync-server-users', async (job) => {
  console.log(`🔄 Procesando sincronización de servidor (Job ${job.id})`)
  
  try {
    const { serverId, options = {} } = job.data
    const result = await syncUsers({ ...options, serverId })
    
    job.progress(100)
    
    return {
      success: true,
      result,
      processedAt: new Date().toISOString()
    }
  } catch (error) {
    console.error(`❌ Error en sincronización de servidor (Job ${job.id}):`, error)
    throw error
  }
})

maintenanceQueue.process('daily-maintenance', async (job) => {
  console.log(`🔧 Procesando mantenimiento diario (Job ${job.id})`)
  
  try {
    // Ejecutar limpieza de demos
    const cleanupResult = await cleanupExpiredDemos()
    
    // Ejecutar sincronización de usuarios
    const syncResult = await syncUsers()
    
    job.progress(100)
    
    return {
      success: true,
      cleanup: cleanupResult,
      sync: syncResult,
      processedAt: new Date().toISOString()
    }
  } catch (error) {
    console.error(`❌ Error en mantenimiento diario (Job ${job.id}):`, error)
    throw error
  }
})

// Eventos de las colas
demoCleanupQueue.on('completed', (job, result) => {
  console.log(`✅ Limpieza de demos completada (Job ${job.id}):`, result.result)
})

demoCleanupQueue.on('failed', (job, err) => {
  console.error(`❌ Limpieza de demos falló (Job ${job.id}):`, err.message)
})

userSyncQueue.on('completed', (job, result) => {
  console.log(`✅ Sincronización de usuarios completada (Job ${job.id}):`, result.result)
})

userSyncQueue.on('failed', (job, err) => {
  console.error(`❌ Sincronización de usuarios falló (Job ${job.id}):`, err.message)
})

maintenanceQueue.on('completed', (job, result) => {
  console.log(`✅ Mantenimiento diario completado (Job ${job.id})`)
})

maintenanceQueue.on('failed', (job, err) => {
  console.error(`❌ Mantenimiento diario falló (Job ${job.id}):`, err.message)
})

// Función para programar trabajos recurrentes
export function scheduleRecurringJobs() {
  // Limpieza de demos cada 5 minutos
  demoCleanupQueue.add(
    'cleanup-expired-demos',
    {},
    {
      repeat: { cron: '*/5 * * * *' },
      jobId: 'recurring-demo-cleanup'
    }
  )

  // Sincronización de usuarios cada 15 minutos
  userSyncQueue.add(
    'sync-all-users',
    { options: { dryRun: false } },
    {
      repeat: { cron: '*/15 * * * *' },
      jobId: 'recurring-user-sync'
    }
  )

  // Mantenimiento diario a las 2:00 AM
  maintenanceQueue.add(
    'daily-maintenance',
    {},
    {
      repeat: { cron: '0 2 * * *' },
      jobId: 'recurring-daily-maintenance'
    }
  )

  console.log('📅 Trabajos recurrentes programados')
}

// Función para obtener estadísticas de las colas
export async function getQueueStats() {
  const [demoStats, userStats, maintenanceStats] = await Promise.all([
    demoCleanupQueue.getJobCounts(),
    userSyncQueue.getJobCounts(),
    maintenanceQueue.getJobCounts()
  ])

  return {
    demoCleanup: demoStats,
    userSync: userStats,
    maintenance: maintenanceStats,
    lastUpdated: new Date().toISOString()
  }
}

// Función para limpiar trabajos completados
export async function cleanCompletedJobs() {
  await Promise.all([
    demoCleanupQueue.clean(24 * 60 * 60 * 1000, 'completed'), // 24 horas
    userSyncQueue.clean(24 * 60 * 60 * 1000, 'completed'),
    maintenanceQueue.clean(7 * 24 * 60 * 60 * 1000, 'completed') // 7 días
  ])
  
  console.log('🧹 Trabajos completados limpiados')
}

// Función para pausar/reanudar colas
export async function pauseQueues() {
  await Promise.all([
    demoCleanupQueue.pause(),
    userSyncQueue.pause(),
    maintenanceQueue.pause()
  ])
  
  console.log('⏸️ Colas pausadas')
}

export async function resumeQueues() {
  await Promise.all([
    demoCleanupQueue.resume(),
    userSyncQueue.resume(),
    maintenanceQueue.resume()
  ])
  
  console.log('▶️ Colas reanudadas')
}
