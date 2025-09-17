import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const packages = await prisma.package.findMany({
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
                id: true,
                name: true,
                embyId: true
              }
            }
          }
        },
        _count: {
          select: {
            libraries: true
          }
        }
      },
      orderBy: {
        name: 'asc'
      }
    });

    const formattedPackages = packages.map(pkg => ({
      id: pkg.id,
      name: pkg.name,
      description: pkg.description,
      serverName: pkg.server.name,
      isActive: pkg.isActive,
      librariesCount: pkg._count.libraries,
      libraries: pkg.libraries.map(pl => ({
        id: pl.library.id,
        name: pl.library.name,
        embyId: pl.library.embyId
      })),
      createdAt: pkg.createdAt,
      updatedAt: pkg.updatedAt
    }));

    return NextResponse.json(formattedPackages);
  } catch (error) {
    console.error("Error al obtener paquetes:", error);
    return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, description, serverId, libraryIds = [] } = body;

    if (!name || !serverId) {
      return NextResponse.json({ 
        message: "Nombre y servidor son requeridos" 
      }, { status: 400 });
    }

    // Verify server exists
    const server = await prisma.embyServer.findUnique({
      where: { id: serverId }
    });

    if (!server) {
      return NextResponse.json({ message: "Servidor no encontrado" }, { status: 404 });
    }

    // Create package
    const newPackage = await prisma.package.create({
      data: {
        name,
        description,
        serverId,
        userId: "temp-user-id", // TODO: Replace with actual user ID when auth is implemented
        isActive: true
      }
    });

    // Add libraries to package if provided
    if (libraryIds.length > 0) {
      const packageLibraries = libraryIds.map((libraryId: string) => ({
        packageId: newPackage.id,
        libraryId
      }));

      await prisma.packageLibrary.createMany({
        data: packageLibraries
      });
    }

    // Return package with libraries
    const packageWithLibraries = await prisma.package.findUnique({
      where: { id: newPackage.id },
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
                id: true,
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
      message: "Paquete creado exitosamente"
    }, { status: 201 });
  } catch (error) {
    console.error("Error al crear paquete:", error);
    return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 });
  }
}