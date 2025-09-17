import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await request.json();
    const { credits, creditType } = body;

    if (!credits || credits <= 0) {
      return NextResponse.json({ 
        message: "Los créditos deben ser mayores a 0" 
      }, { status: 400 });
    }

    const embyAccount = await prisma.embyAccount.findUnique({
      where: { id },
      include: {
        userServerLink: true
      }
    });

    if (!embyAccount || !embyAccount.userServerLink) {
      return NextResponse.json({ message: "Usuario no encontrado" }, { status: 404 });
    }

    // Calculate new expiration date
    const currentExpiration = embyAccount.userServerLink.expirationDate || new Date();
    const now = new Date();
    const baseDate = currentExpiration > now ? currentExpiration : now;
    
    const newExpirationDate = new Date(baseDate.getTime() + (credits * 30 * 24 * 60 * 60 * 1000)); // Approximate month calculation
    const newCredits = embyAccount.userServerLink.credits + credits;

    // Update user credits and expiration
    await prisma.userServerLink.update({
      where: { id: embyAccount.userServerLink.id },
      data: {
        credits: newCredits,
        expirationDate: newExpirationDate,
        ...(creditType && { creditType })
      }
    });

    return NextResponse.json({
      message: "Usuario renovado exitosamente",
      newExpirationDate,
      newCredits,
      creditType: creditType || embyAccount.userServerLink.creditType
    });
  } catch (error) {
    console.error("Error al renovar usuario:", error);
    return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 });
  }
}