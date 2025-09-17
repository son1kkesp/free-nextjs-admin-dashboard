"use client"

import { ReactNode } from "react"
import { useSidebar } from "@/context/SidebarContext"
import { usePermissions } from "@/hooks/usePermissions"
import AppHeader from "@/layout/AppHeader"
import AppSidebar from "@/layout/AppSidebar"
import Backdrop from "@/layout/Backdrop"
import { ToastProvider } from "@/components/providers/ToastProvider"
import PermissionInfo from "@/components/auth/PermissionInfo"

interface ResellerLayoutProps {
  children: ReactNode
}

export default function ResellerLayout({ children }: ResellerLayoutProps) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar()
  const { userPermissions } = usePermissions()

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
            {/* Reseller Info Banner */}
            <div className="mb-6 bg-green-50 border-l-4 border-green-500 text-green-700 p-4 dark:bg-green-900/20 dark:border-green-400 dark:text-green-300">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium">
                    💼 <strong>Panel de Reseller</strong>
                  </p>
                  <p className="text-sm mt-1">
                    {userPermissions?.role?.replace('_', ' ')} - Gestión de usuarios y demos
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
