import { scheduleRecurringJobs } from './index'

let isInitialized = false

export async function initializeQueues() {
  if (isInitialized) {
    console.log('📋 Colas ya inicializadas')
    return
  }

  try {
    console.log('🚀 Inicializando sistema de colas...')
    
    // Programar trabajos recurrentes
    scheduleRecurringJobs()
    
    isInitialized = true
    console.log('✅ Sistema de colas inicializado correctamente')
    
  } catch (error) {
    console.error('❌ Error inicializando sistema de colas:', error)
    throw error
  }
}

export function isQueueSystemInitialized() {
  return isInitialized
}
