import { prisma } from "@/lib/prisma";
import DemosWidget from "./demos.widget";

export default async function DemosPage() {
  // Simplificar consultas para evitar errores
  const demos = await prisma.demo.findMany({
    include: {
      server: {
        select: {
          id: true,
          name: true,
          url: true,
          maxUsers: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  
  const servers = await prisma.embyServer.findMany({
    select: {
      id: true,
      name: true,
      url: true,
      maxUsers: true,
    },
    orderBy: {
      name: "asc",
    },
  });
  
  const packages = await prisma.package.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      libraries: {
        select: {
          id: true,
          libraryId: true,
          library: {
            select: {
              name: true,
            },
          },
        },
      },
    },
    orderBy: {
      name: "asc",
    },
  });

  // Transformar servidores para que coincidan con el tipo esperado
  const transformedServers = servers.map(server => ({
    id: server.id,
    name: server.name,
    baseUrl: server.url,
    maxUsers: server.maxUsers,
  }));

  // Transformar paquetes para que coincidan con el tipo esperado
  const transformedPackages = packages.map(pkg => ({
    id: pkg.id,
    name: pkg.name,
    description: pkg.description,
    libraries: pkg.libraries.map(lib => ({
      id: lib.id,
      libraryId: lib.libraryId,
      libraryName: lib.library?.name || null,
    })),
  }));

  return (
    <DemosWidget 
      demos={demos} 
      servers={transformedServers}
      packages={transformedPackages}
    />
  );
}
