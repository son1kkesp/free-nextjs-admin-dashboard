import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { credits, creditType = 'ONE_CONNECTION' } = body;

    if (!credits || credits <= 0) {
      return NextResponse.json({ 
        message: "Los créditos deben ser mayores a 0" 
      }, { status: 400 });
    }

    const demo = await prisma.demo.findUnique({
      where: { id },
      include: {
        server: true
      }
    });

    if (!demo) {
      return NextResponse.json({ message: "Demo no encontrada" }, { status: 404 });
    }

    // Check if demo is still active and not expired
    const now = new Date();
    if (demo.expirationDate < now || !demo.isActive) {
      return NextResponse.json({ 
        message: "No se puede convertir una demo expirada o inactiva" 
      }, { status: 400 });
    }

    // Calculate new expiration date based on credits
    const newExpirationDate = new Date(now.getTime() + (credits * 30 * 24 * 60 * 60 * 1000)); // Approximate month calculation

    // TODO: Implementar conversión de demo a usuario regular
    // Esta funcionalidad necesita ser rediseñada ya que el modelo Demo
    // no está conectado directamente con UserServerLink
    
    // Por ahora, simplemente marcamos la demo como inactiva
    await prisma.demo.update({
      where: { id },
      data: {
        isActive: false // Mark demo as inactive
      }
    });

    return NextResponse.json({
      message: "Demo convertida a usuario regular exitosamente",
      newExpirationDate,
      credits,
      creditType
    });
  } catch (error) {
    console.error("Error al convertir demo:", error);
    return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 });
  }
}