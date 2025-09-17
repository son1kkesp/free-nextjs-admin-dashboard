"use client"

import { useState, useEffect } from "react"
import Button from "@/components/ui/button/Button"
import { 
  ArrowRightIcon, 
  CloseIcon, 
  ArrowRightIcon as RefreshIcon, 
  TrashBinIcon, 
  PlusIcon,
  PlugInIcon,
  UserIcon,
  PlugInIcon as SettingsIcon
} from "@/icons/index"

interface QueueStats {
  demoCleanup: {
    waiting: number
    active: number
    completed: number
    failed: number
    delayed: number
  }
  userSync: {
    waiting: number
    active: number
    completed: number
    failed: number
    delayed: number
  }
  maintenance: {
    waiting: number
    active: number
    completed: number
    failed: number
    delayed: number
  }
  lastUpdated: string
}

export default function QueueManagerWidget() {
  const [stats, setStats] = useState<QueueStats | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const fetchStats = async () => {
    setIsLoading(true)
    setError("")
    setSuccess("")
    
    try {
      const response = await fetch("/api/jobs/queue")
      if (!response.ok) {
        throw new Error("Error al obtener estadísticas de colas")
      }
      
      const data = await response.json()
      setStats(data.stats)
    } catch (error) {
      setError(error instanceof Error ? error.message : "Error desconocido")
    } finally {
      setIsLoading(false)
    }
  }

  const executeAction = async (action: string, options: any = {}) => {
    setIsProcessing(true)
    setError("")
    setSuccess("")
    
    try {
      const response = await fetch("/api/jobs/queue", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ action, ...options })
      })
      
      if (!response.ok) {
        throw new Error("Error al ejecutar acción")
      }
      
      const data = await response.json()
      setSuccess(data.message)
      
      // Actualizar estadísticas
      setStats(data.stats)
      
    } catch (error) {
      setError(error instanceof Error ? error.message : "Error desconocido")
    } finally {
      setIsProcessing(false)
    }
  }

  useEffect(() => {
    fetchStats()
    
    // Actualizar estadísticas cada 30 segundos
    const interval = setInterval(fetchStats, 30000)
    return () => clearInterval(interval)
  }, [])

  if (isLoading && !stats) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-4"></div>
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Gestión de Colas
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Monitorea y gestiona trabajos en cola
          </p>
        </div>
        <Button
          onClick={fetchStats}
          variant="outline"
          startIcon={<RefreshIcon />}
          disabled={isLoading}
        >
          {isLoading ? "Cargando..." : "Actualizar"}
        </Button>
      </div>

      {error && (
        <div className="mb-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm">
          {error}
        </div>
      )}

      {success && (
        <div className="mb-4 bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-md text-sm">
          {success}
        </div>
      )}

      {stats && (
        <div className="space-y-6">
          {/* Estadísticas de colas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrashBinIcon className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                  Limpieza de Demos
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-blue-600 dark:text-blue-400">Esperando:</span>
                  <span className="ml-1 font-semibold">{stats.demoCleanup.waiting}</span>
                </div>
                <div>
                  <span className="text-blue-600 dark:text-blue-400">Activos:</span>
                  <span className="ml-1 font-semibold">{stats.demoCleanup.active}</span>
                </div>
                <div>
                  <span className="text-blue-600 dark:text-blue-400">Completados:</span>
                  <span className="ml-1 font-semibold">{stats.demoCleanup.completed}</span>
                </div>
                <div>
                  <span className="text-blue-600 dark:text-blue-400">Fallidos:</span>
                  <span className="ml-1 font-semibold">{stats.demoCleanup.failed}</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <UserIcon className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-green-700 dark:text-green-300">
                  Sincronización
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-green-600 dark:text-green-400">Esperando:</span>
                  <span className="ml-1 font-semibold">{stats.userSync.waiting}</span>
                </div>
                <div>
                  <span className="text-green-600 dark:text-green-400">Activos:</span>
                  <span className="ml-1 font-semibold">{stats.userSync.active}</span>
                </div>
                <div>
                  <span className="text-green-600 dark:text-green-400">Completados:</span>
                  <span className="ml-1 font-semibold">{stats.userSync.completed}</span>
                </div>
                <div>
                  <span className="text-green-600 dark:text-green-400">Fallidos:</span>
                  <span className="ml-1 font-semibold">{stats.userSync.failed}</span>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <PlugInIcon className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
                  Mantenimiento
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-purple-600 dark:text-purple-400">Esperando:</span>
                  <span className="ml-1 font-semibold">{stats.maintenance.waiting}</span>
                </div>
                <div>
                  <span className="text-purple-600 dark:text-purple-400">Activos:</span>
                  <span className="ml-1 font-semibold">{stats.maintenance.active}</span>
                </div>
                <div>
                  <span className="text-purple-600 dark:text-purple-400">Completados:</span>
                  <span className="ml-1 font-semibold">{stats.maintenance.completed}</span>
                </div>
                <div>
                  <span className="text-purple-600 dark:text-purple-400">Fallidos:</span>
                  <span className="ml-1 font-semibold">{stats.maintenance.failed}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Controles de colas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Button
              onClick={() => executeAction('schedule-recurring')}
              variant="outline"
              startIcon={<PlusIcon />}
              disabled={isProcessing}
              className="text-sm"
            >
              Programar Jobs
            </Button>

            <Button
              onClick={() => executeAction('clean-completed')}
              variant="outline"
              startIcon={<TrashBinIcon />}
              disabled={isProcessing}
              className="text-sm"
            >
              Limpiar Completados
            </Button>

            <Button
              onClick={() => executeAction('pause')}
              variant="outline"
              startIcon={<CloseIcon />}
              disabled={isProcessing}
              className="text-sm bg-yellow-50 border-yellow-200 text-yellow-700 hover:bg-yellow-100"
            >
              Pausar Colas
            </Button>

            <Button
              onClick={() => executeAction('resume')}
              variant="outline"
              startIcon={<ArrowRightIcon />}
              disabled={isProcessing}
              className="text-sm bg-green-50 border-green-200 text-green-700 hover:bg-green-100"
            >
              Reanudar Colas
            </Button>
          </div>

          {/* Trabajos manuales */}
          <div className="border-t pt-4">
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
              Ejecutar Trabajos Manualmente
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Button
                onClick={() => executeAction('add-demo-cleanup')}
                variant="outline"
                startIcon={<TrashBinIcon />}
                disabled={isProcessing}
                className="text-sm"
              >
                Limpiar Demos
              </Button>

              <Button
                onClick={() => executeAction('add-user-sync')}
                variant="outline"
                startIcon={<UserIcon />}
                disabled={isProcessing}
                className="text-sm"
              >
                Sincronizar Usuarios
              </Button>

              <Button
                onClick={() => executeAction('add-maintenance')}
                variant="outline"
                startIcon={<PlugInIcon />}
                disabled={isProcessing}
                className="text-sm"
              >
                Mantenimiento
              </Button>
            </div>
          </div>

          {stats.lastUpdated && (
            <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
              Última actualización: {new Date(stats.lastUpdated).toLocaleString()}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
