import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const policies = await prisma.policy.findMany({
      orderBy: {
        name: 'asc'
      }
    });

    const formattedPolicies = policies.map(policy => ({
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
    }));

    return NextResponse.json(formattedPolicies);
  } catch (error) {
    console.error("Error al obtener políticas:", error);
    return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      name, 
      description, 
      isGlobal = false,
      allowCameraUpload = false,
      allowPasswordChange = false,
      allowTranscoding = false,
      allowRemuxing = false,
      allowAudioTranscoding = false,
      enableNotifications = false,
      policyData = {}
    } = body;

    if (!name) {
      return NextResponse.json({ 
        message: "El nombre de la política es requerido" 
      }, { status: 400 });
    }

    const newPolicy = await prisma.policy.create({
      data: {
        name,
        description,
        isGlobal,
        allowCameraUpload,
        allowPasswordChange,
        allowTranscoding,
        allowRemuxing,
        allowAudioTranscoding,
        enableNotifications,
        policyData,
        userId: "temp-user-id" // TODO: Replace with actual user ID when auth is implemented
      }
    });

    return NextResponse.json({
      ...newPolicy,
      message: "Política creada exitosamente"
    }, { status: 201 });
  } catch (error) {
    console.error("Error al crear política:", error);
    return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 });
  }
}