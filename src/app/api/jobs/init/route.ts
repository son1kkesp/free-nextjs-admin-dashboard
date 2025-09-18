import { NextRequest, NextResponse } from "next/server"
import { getSessionFromRequest } from "@/lib/auth-simple"
import { initializeQueues } from "@/lib/queue/init"

export async function POST(request: NextRequest) {
  try {
    // Verificar autenticación
    const session = await getSessionFromRequest(request)
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
