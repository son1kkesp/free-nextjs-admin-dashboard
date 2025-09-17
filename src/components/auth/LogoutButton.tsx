"use client"

import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import Button from "@/components/ui/button/Button"

export default function LogoutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    await signOut({ 
      redirect: false,
      callbackUrl: "/auth/signin"
    })
    router.push("/auth/signin")
    router.refresh()
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
