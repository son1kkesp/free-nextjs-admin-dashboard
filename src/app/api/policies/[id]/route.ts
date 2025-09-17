import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const policy = await prisma.policy.findUnique({
      where: { id }
    });

    if (!policy) {
      return NextResponse.json({ message: "Política no encontrada" }, { status: 404 });
    }

    const formattedPolicy = {
      id: policy.id,
      name: policy.name,
      description: policy.description,
      isGlobal: policy.isGlobal,
      allowCameraUpload: policy.allowCameraUpload,
      allowPasswordChange: policy.allowPasswordChange,
      allowTranscoding: policy.allowTranscoding,
      allowRemuxing: policy.allowRemuxing,
      allowAudioTranscoding: policy.allowAudioTranscoding,
      enableNotifications: policy.enableNotifications,
      policyData: policy.policyData,
      createdAt: policy.createdAt,
      updatedAt: policy.updatedAt
    };

    return NextResponse.json(formattedPolicy);
  } catch (error) {
    console.error("Error al obtener política:", error);
    return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await request.json();
    const { 
      name, 
      description, 
      isGlobal,
      allowCameraUpload,
      allowPasswordChange,
      allowTranscoding,
      allowRemuxing,
      allowAudioTranscoding,
      enableNotifications,
      policyData
    } = body;

    const existingPolicy = await prisma.policy.findUnique({
      where: { id }
    });

    if (!existingPolicy) {
      return NextResponse.json({ message: "Política no encontrada" }, { status: 404 });
    }

    const updatedPolicy = await prisma.policy.update({
      where: { id },
      data: {
        ...(name && { name }),
        ...(description !== undefined && { description }),
        ...(isGlobal !== undefined && { isGlobal }),
        ...(allowCameraUpload !== undefined && { allowCameraUpload }),
        ...(allowPasswordChange !== undefined && { allowPasswordChange }),
        ...(allowTranscoding !== undefined && { allowTranscoding }),
        ...(allowRemuxing !== undefined && { allowRemuxing }),
        ...(allowAudioTranscoding !== undefined && { allowAudioTranscoding }),
        ...(enableNotifications !== undefined && { enableNotifications }),
        ...(policyData !== undefined && { policyData })
      }
    });

    return NextResponse.json({
      ...updatedPolicy,
      message: "Política actualizada exitosamente"
    });
  } catch (error) {
    console.error("Error al actualizar política:", error);
    return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const existingPolicy = await prisma.policy.findUnique({
      where: { id }
    });

    if (!existingPolicy) {
      return NextResponse.json({ message: "Política no encontrada" }, { status: 404 });
    }

    await prisma.policy.delete({
      where: { id }
    });

    return NextResponse.json({ message: "Política eliminada exitosamente" });
  } catch (error) {
    console.error("Error al eliminar política:", error);
    return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 });
  }
}