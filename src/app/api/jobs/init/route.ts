import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { initializeQueues } from "@/lib/queue/init"

export async function POST() {
  try {
    // Verificar autenticación
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ message: "No autorizado" }, { status: 401 })
    }

    // Verificar permisos (solo super admins pueden inicializar colas)
    if (session.user.role !== "SUPER_ADMIN") {
      return NextResponse.json({ message: "Permisos insuficientes" }, { status: 403 })
    }

    console.log(`🚀 Inicializando colas por usuario: ${session.user.email}`)

    // Inicializar sistema de colas
    await initializeQueues()

    return NextResponse.json({
      message: "Sistema de colas inicializado correctamente",
      executedBy: session.user.email,
      executedAt: new Date().toISOString()
    })

  } catch (error) {
    console.error("Error inicializando colas:", error)
    return NextResponse.json(
      { 
        message: "Error interno del servidor",
        error: error instanceof Error ? error.message : "Error desconocido"
      },
      { status: 500 }
    )
  }
}
