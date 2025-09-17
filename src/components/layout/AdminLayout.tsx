"use client"

import { ReactNode } from "react"
import { usePermissions } from "@/hooks/usePermissions"
import RoleBasedNavigation from "@/components/navigation/RoleBasedNavigation"
import PermissionInfo from "@/components/auth/PermissionInfo"

interface AdminLayoutProps {
  children: ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const { userPermissions, isSuperAdmin } = usePermissions()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                {isSuperAdmin() ? 'Panel de Super Administración' : 'Panel de Administración Técnica'}
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {userPermissions?.role?.replace('_', ' ')} - Gestión completa del sistema
              </p>
            </div>
            <div className="flex items-center gap-4">
              <PermissionInfo showDetails={false} />
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 min-h-screen">
          <div className="p-4">
            <RoleBasedNavigation />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
