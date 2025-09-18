"use client"

// Este hook ya no es necesario - useAuth maneja la sesión directamente
// import { useSession } from "next-auth/react"
// import { useEffect } from "react"

export function useForceSession() {
  // Hook deprecado - usar useAuth en su lugar
  console.warn('useForceSession está deprecado. Usar useAuth en su lugar.')
  return { session: null, status: 'unauthenticated', update: () => {} }
}
