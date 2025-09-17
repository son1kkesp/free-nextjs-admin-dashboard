"use client"

import { ReactNode } from "react"
import { usePermissions } from "@/hooks/usePermissions"
import AdminLayout from "./AdminLayout"
import ResellerLayout from "./ResellerLayout"

interface DynamicLayoutProps {
  children: ReactNode
}

export default function DynamicLayout({ children }: DynamicLayoutProps) {
  const { isSuperAdmin, isTechAdmin } = usePermissions()

  // Determinar el layout según el rol
  if (isSuperAdmin() || isTechAdmin()) {
    return <AdminLayout>{children}</AdminLayout>
  }

  // Para resellers
  return <ResellerLayout>{children}</ResellerLayout>
}
