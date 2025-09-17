import { prisma } from "@/lib/prisma";
import PackagesWidget from "./packages.widget";

export default async function PackagesPage() {
  // Obtener paquetes con sus librerías y servidor asociado
  const packages = await prisma.package.findMany({
    include: {
      libraries: {
        include: {
          library: {
            select: {
              id: true,
              name: true,
              embyId: true,
            }
          }
        }
      },
      server: {
        select: {
          id: true,
          name: true,
          url: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  // Obtener servidores para el formulario de creación
  const servers = await prisma.embyServer.findMany({
    select: {
      id: true,
      name: true,
      url: true,
    },
    orderBy: {
      name: "asc",
    },
  });

  // Transformar los datos para que coincidan con el tipo esperado
  const transformedPackages = packages.map(pkg => ({
    ...pkg,
    libraries: pkg.libraries.map(pkgLib => ({
      id: pkgLib.library.id,
      name: pkgLib.library.name,
      embyId: pkgLib.library.embyId,
      packageId: pkgLib.packageId,
    })),
    server: {
      id: pkg.server.id,
      name: pkg.server.name,
      baseUrl: pkg.server.url,
    }
  }));

  // Transformar servidores para que coincidan con el tipo esperado
  const transformedServers = servers.map(server => ({
    id: server.id,
    name: server.name,
    baseUrl: server.url,
  }));

  return (
    <PackagesWidget 
      packages={transformedPackages} 
      servers={transformedServers}
    />
  );
}
