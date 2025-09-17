"use client"

import { useState, useEffect } from "react"
import Button from "@/components/ui/button/Button"
import { TrashBinIcon, ArrowRightIcon, TimeIcon as ClockIcon } from "@/icons/index"

interface DemoStats {
  active: number
  inactive: number
  expiringSoon: number
  expiringToday: number
  total: number
}

interface CleanupResult {
  totalExpired: number
  cleanedUp: number
  errors: string[]
  success: boolean
}

export default function DemoCleanupWidget() {
  const [stats, setStats] = useState<DemoStats | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isCleaning, setIsCleaning] = useState(false)
  const [lastCleanup, setLastCleanup] = useState<CleanupResult | null>(null)
  const [error, setError] = useState("")

  const fetchStats = async () => {
    setIsLoading(true)
    setError("")
    
    try {
      const response = await fetch("/api/jobs/cleanup-demos")
      if (!response.ok) {
        throw new Error("Error al obtener estadísticas")
      }
      
      const data = await response.json()
      setStats(data.stats)
    } catch (error) {
      setError(error instanceof Error ? error.message : "Error desconocido")
    } finally {
      setIsLoading(false)
    }
  }

  const runCleanup = async () => {
    setIsCleaning(true)
    setError("")
    
    try {
      const response = await fetch("/api/jobs/cleanup-demos", {
        method: "POST"
      })
      
      if (!response.ok) {
        throw new Error("Error al ejecutar limpieza")
      }
      
      const data = await response.json()
      setLastCleanup(data.result)
      
      // Actualizar estadísticas
      setStats(data.stats)
      
    } catch (error) {
      setError(error instanceof Error ? error.message : "Error desconocido")
    } finally {
      setIsCleaning(false)
    }
  }

  useEffect(() => {
    fetchStats()
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
            Limpieza de Demos
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Gestiona demos expirados automáticamente
          </p>
        </div>
        <Button
          onClick={fetchStats}
          variant="outline"
          startIcon={<ArrowRightIcon />}
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

      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              <span className="text-sm text-blue-700 dark:text-blue-300">Activos</span>
            </div>
            <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">
              {stats.active}
            </p>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
            <div className="flex items-center gap-2">
              <ClockIcon className="h-4 w-4 text-yellow-600" />
              <span className="text-sm text-yellow-700 dark:text-yellow-300">Expiran en 1h</span>
            </div>
            <p className="text-2xl font-bold text-yellow-900 dark:text-yellow-100">
              {stats.expiringSoon}
            </p>
          </div>

          <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
            <div className="flex items-center gap-2">
              <ClockIcon className="h-4 w-4 text-orange-600" />
              <span className="text-sm text-orange-700 dark:text-orange-300">Expiran hoy</span>
            </div>
            <p className="text-2xl font-bold text-orange-900 dark:text-orange-100">
              {stats.expiringToday}
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-gray-500"></div>
              <span className="text-sm text-gray-700 dark:text-gray-300">Inactivos</span>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {stats.inactive}
            </p>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between">
        <div>
          <Button
            onClick={runCleanup}
            variant="outline"
            startIcon={<TrashBinIcon />}
            disabled={isCleaning}
            className="bg-red-50 border-red-200 text-red-700 hover:bg-red-100 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400"
          >
            {isCleaning ? "Limpiando..." : "Limpiar Demos Expirados"}
          </Button>
        </div>

        {lastCleanup && (
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <p>
              Última limpieza: {lastCleanup.cleanedUp}/{lastCleanup.totalExpired} demos
            </p>
            {lastCleanup.errors.length > 0 && (
              <p className="text-red-600 dark:text-red-400">
                {lastCleanup.errors.length} errores
              </p>
            )}
          </div>
        )}
      </div>

      {lastCleanup && lastCleanup.errors.length > 0 && (
        <div className="mt-4 bg-red-50 border border-red-200 rounded-md p-3">
          <h4 className="text-sm font-medium text-red-800 dark:text-red-200 mb-2">
            Errores en la última limpieza:
          </h4>
          <ul className="text-xs text-red-700 dark:text-red-300 space-y-1">
            {lastCleanup.errors.map((error, index) => (
              <li key={index}>• {error}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
