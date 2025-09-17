import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { credits, creditType } = body;

    if (!credits || credits <= 0) {
      return NextResponse.json({ 
        message: "Los créditos deben ser mayores a 0" 
      }, { status: 400 });
    }

    // Buscar si es una demo
    const demo = await prisma.demo.findUnique({
      where: { id },
      include: {
        server: true
      }
    });

    if (!demo) {
      return NextResponse.json({ message: "Demo no encontrada" }, { status: 404 });
    }

    // Calculate new expiration date
    const currentExpiration = demo.expirationDate || new Date();
    const now = new Date();
    const baseDate = currentExpiration > now ? currentExpiration : now;
    
    const newExpirationDate = new Date(baseDate.getTime() + (credits * 30 * 24 * 60 * 60 * 1000)); // Approximate month calculation

    // Update demo expiration
    await prisma.demo.update({
      where: { id },
      data: {
        expirationDate: newExpirationDate,
        hoursDuration: demo.hoursDuration + (credits * 24 * 30) // Convertir créditos a horas aproximadas
      }
    });

    return NextResponse.json({
      message: "Demo renovada exitosamente",
      newExpirationDate,
      credits,
      creditType: creditType || 'ONE_CONNECTION'
    });
  } catch (error) {
    console.error("Error al renovar usuario:", error);
    return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 });
  }
}