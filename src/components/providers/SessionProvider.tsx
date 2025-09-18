"use client"

import { ReactNode } from "react"

interface SessionProviderProps {
  children: ReactNode
}

export default function SessionProvider({ children }: SessionProviderProps) {
  // Ya no necesitamos NextAuth SessionProvider
  // Nuestro hook useAuth maneja la sesión directamente
  return <>{children}</>
}