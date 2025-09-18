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
  const { isSuperAdmin, isTechAdmin } = usePermissions()

  // Si estamos en páginas de autenticación, no aplicar layout
  if (pathname?.startsWith('/auth')) {
    return <>{children}</>
  }

  // Si estamos en páginas de error, no aplicar layout
  if (pathname?.startsWith('/error') || pathname === '/404' || pathname === '/500') {
    return <>{children}</>
  }

  // Si estamos en páginas públicas, no aplicar layout
  if (pathname === '/' && !isSuperAdmin() && !isTechAdmin()) {
    return <>{children}</>
  }

  // Verificar si estamos en una página 404 (URL no válida)
  // Si no hay sesión y no estamos en una ruta válida, mostrar sin layout
  if (!isSuperAdmin() && !isTechAdmin() && pathname && !pathname.startsWith('/api')) {
    // Lista de rutas válidas para usuarios no autenticados
    const validRoutes = ['/auth', '/error', '/404', '/500']
    const isValidRoute = validRoutes.some(route => pathname.startsWith(route))
    
    if (!isValidRoute) {
      return <>{children}</>
    }
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
