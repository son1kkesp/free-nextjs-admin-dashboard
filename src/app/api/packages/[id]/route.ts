import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const packageData = await prisma.package.findUnique({
      where: { id },
      include: {
        server: {
          select: {
            name: true,
            url: true
          }
        },
        libraries: {
          include: {
            library: {
              select: {
                name: true,
                embyId: true,
                path: true,
                collectionType: true
              }
            }
          }
        }
      }
    });

    if (!packageData) {
      return NextResponse.json({ message: "Paquete no encontrado" }, { status: 404 });
    }

    const formattedPackage = {
      id: packageData.id,
      name: packageData.name,
      description: packageData.description,
      serverName: packageData.server.name,
      serverUrl: packageData.server.url,
      isActive: packageData.isActive,
      libraries: packageData.libraries.map(pl => ({
        id: pl.library.id,
        name: pl.library.name,
        embyId: pl.library.embyId,
        path: pl.library.path,
        collectionType: pl.library.collectionType
      })),
      createdAt: packageData.createdAt,
      updatedAt: packageData.updatedAt
    };

    return NextResponse.json(formattedPackage);
  } catch (error) {
    console.error("Error al obtener paquete:", error);
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
    const { name, description, isActive, libraryIds } = body;

    const existingPackage = await prisma.package.findUnique({
      where: { id }
    });

    if (!existingPackage) {
      return NextResponse.json({ message: "Paquete no encontrado" }, { status: 404 });
    }

    // Update package basic info
    const updatedPackage = await prisma.package.update({
      where: { id },
      data: {
        ...(name && { name }),
        ...(description !== undefined && { description }),
        ...(isActive !== undefined && { isActive })
      }
    });

    // Update libraries if provided
    if (libraryIds !== undefined) {
      // Remove existing libraries
      await prisma.packageLibrary.deleteMany({
        where: { packageId: id }
      });

      // Add new libraries
      if (libraryIds.length > 0) {
        const packageLibraries = libraryIds.map((libraryId: string) => ({
          packageId: id,
          libraryId
        }));

        await prisma.packageLibrary.createMany({
          data: packageLibraries
        });
      }
    }

    // Return updated package with libraries
    const packageWithLibraries = await prisma.package.findUnique({
      where: { id },
      include: {
        server: {
          select: {
            name: true
          }
        },
        libraries: {
          include: {
            library: {
              select: {
                name: true,
                embyId: true
              }
            }
          }
        }
      }
    });

    return NextResponse.json({
      ...packageWithLibraries,
      libraries: packageWithLibraries?.libraries.map(pl => ({
        id: pl.library.id,
        name: pl.library.name,
        embyId: pl.library.embyId
      })) || [],
      message: "Paquete actualizado exitosamente"
    });
  } catch (error) {
    console.error("Error al actualizar paquete:", error);
    return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const existingPackage = await prisma.package.findUnique({
      where: { id }
    });

    if (!existingPackage) {
      return NextResponse.json({ message: "Paquete no encontrado" }, { status: 404 });
    }

    // Delete package libraries first
    await prisma.packageLibrary.deleteMany({
      where: { packageId: id }
    });

    // Delete package
    await prisma.package.delete({
      where: { id }
    });

    return NextResponse.json({ message: "Paquete eliminado exitosamente" });
  } catch (error) {
    console.error("Error al eliminar paquete:", error);
    return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 });
  }
}