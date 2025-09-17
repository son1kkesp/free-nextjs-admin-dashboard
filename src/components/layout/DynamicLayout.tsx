"use client"

import { ReactNode } from "react"
import { usePermissions } from "@/hooks/usePermissions"
import AdminLayout from "./AdminLayout"
import TechLayout from "./TechLayout"
import ResellerLayout from "./ResellerLayout"

interface DynamicLayoutProps {
  children: ReactNode
}

export default function DynamicLayout({ children }: DynamicLayoutProps) {
  const { isSuperAdmin, isTechAdmin } = usePermissions()

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
