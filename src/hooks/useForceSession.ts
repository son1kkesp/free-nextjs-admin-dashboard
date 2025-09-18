"use client"

import { useSession } from "next-auth/react"
import { useEffect } from "react"

export function useForceSession() {
  const { data: session, status, update } = useSession()

  useEffect(() => {
    // Forzar la actualización de la sesión si está cargando
    if (status === "loading") {
      console.log('🔍 useForceSession - Forcing session update...')
      update()
    }
  }, [status, update])

  return { session, status, update }
}
