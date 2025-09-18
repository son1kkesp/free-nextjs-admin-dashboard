"use client"

import { useAuth } from "@/hooks/useAuth"
import { useRouter } from "next/navigation"
import Button from "@/components/ui/button/Button"

export default function LogoutButton() {
  const router = useRouter()
  const { signOut } = useAuth()

  const handleLogout = async () => {
    await signOut()
  }

  return (
    <Button
      onClick={handleLogout}
      variant="outline"
      className="text-sm"
    >
      Cerrar Sesión
    </Button>
  )
}
