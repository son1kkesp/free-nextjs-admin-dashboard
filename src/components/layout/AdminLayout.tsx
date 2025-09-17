"use client"

import { ReactNode } from "react"
import { useSidebar } from "@/context/SidebarContext"
import { usePermissions } from "@/hooks/usePermissions"
import AppHeader from "@/layout/AppHeader"
import AppSidebar from "@/layout/AppSidebar"
import Backdrop from "@/layout/Backdrop"
import { ToastProvider } from "@/components/providers/ToastProvider"
import PermissionInfo from "@/components/auth/PermissionInfo"

interface AdminLayoutProps {
  children: ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar()
  const { userPermissions, isSuperAdmin } = usePermissions()

  // Dynamic class for main content margin based on sidebar state
  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
    ? "lg:ml-[260px]"
    : "lg:ml-[90px]"

  return (
    <ToastProvider>
      <div className="min-h-screen xl:flex overflow-x-hidden">
        {/* Sidebar and Backdrop */}
        <AppSidebar />
        <Backdrop />
        {/* Main Content Area */}
        <div
          className={`flex-1 transition-all duration-300 ease-in-out overflow-x-hidden ${mainContentMargin}`}
        >
          {/* Header */}
          <AppHeader />
          {/* Page Content */}
          <div className="p-3 md:p-4 overflow-x-hidden w-full">
            {/* Admin Info Banner */}
            <div className="mb-6 bg-blue-50 border-l-4 border-blue-500 text-blue-700 p-4 dark:bg-blue-900/20 dark:border-blue-400 dark:text-blue-300">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium">
                    👑 <strong>{isSuperAdmin() ? 'Panel de Super Administración' : 'Panel de Administración Técnica'}</strong>
                  </p>
                  <p className="text-sm mt-1">
                    {userPermissions?.role?.replace('_', ' ')} - Gestión completa del sistema
                  </p>
                </div>
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </ToastProvider>
  )
}
