"use client"

import { ReactNode, useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { usePermissions } from "@/hooks/usePermissions"
import AdminLayout from "./AdminLayout"
import TechLayout from "./TechLayout"
import ResellerLayout from "./ResellerLayout"

interface DynamicLayoutProps {
  children: ReactNode
}

export default function DynamicLayout({ children }: DynamicLayoutProps) {
  const pathname = usePathname()
  const { isSuperAdmin, isTechAdmin } = usePermissions()
  const [is404Page, setIs404Page] = useState(false)

  // Detectar si estamos en una página 404
  useEffect(() => {
    if (pathname) {
      // Lista de rutas válidas del sistema
      const validRoutes = [
        '/',
        '/auth',
        '/error',
        '/404',
        '/500',
        '/users',
        '/servers',
        '/demos',
        '/packages',
        '/policies',
        '/settings',
        '/resellers',
        '/my-users',
        '/dev',
        '/api'
      ]
      
      // Verificar si la ruta actual es válida
      const isValidRoute = validRoutes.some(route => {
        if (route === '/') return pathname === '/'
        if (route === '/api') return pathname.startsWith('/api')
        return pathname.startsWith(route)
      })
      
      setIs404Page(!isValidRoute)
    }
  }, [pathname])

  // Si estamos en páginas de autenticación, no aplicar layout
  if (pathname?.startsWith('/auth')) {
    return <>{children}</>
  }

  // Si estamos en páginas de error, no aplicar layout
  if (pathname?.startsWith('/error') || pathname === '/404' || pathname === '/500') {
    return <>{children}</>
  }

  // Si detectamos que es una página 404, no aplicar layout
  if (is404Page) {
    return <>{children}</>
  }

  // Si estamos en páginas públicas, no aplicar layout
  if (pathname === '/' && !isSuperAdmin() && !isTechAdmin()) {
    return <>{children}</>
  }

  // Determinar el layout según el rol
  if (isSuperAdmin()) {
    return <AdminLayout>{children}</AdminLayout>
  }

  if (isTechAdmin()) {
    return <TechLayout>{children}</TechLayout>
  }

  // Para resellers
  return <ResellerLayout>{children}</ResellerLayout>
}
