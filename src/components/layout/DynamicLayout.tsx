"use client"

import { ReactNode } from "react"
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
  const { isSuperAdmin, isTechAdmin, userPermissions } = usePermissions()

  console.log('🔍 DynamicLayout - userPermissions:', userPermissions);
  console.log('🔍 DynamicLayout - isSuperAdmin:', isSuperAdmin());
  console.log('🔍 DynamicLayout - isTechAdmin:', isTechAdmin());

  // Función para verificar si una ruta es válida
  const isValidRoute = (path: string) => {
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
    
    return validRoutes.some(route => {
      if (route === '/') return path === '/'
      if (route === '/api') return path.startsWith('/api')
      return path.startsWith(route)
    })
  }

  // Si estamos en páginas de autenticación, no aplicar layout
  if (pathname?.startsWith('/auth')) {
    return <>{children}</>
  }

  // Si estamos en páginas de error, no aplicar layout
  if (pathname?.startsWith('/error') || pathname === '/404' || pathname === '/500') {
    return <>{children}</>
  }

  // Si la ruta no es válida, no aplicar layout (página 404)
  if (pathname && !isValidRoute(pathname)) {
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
