import { prisma } from "@/lib/prisma";
import PackagesWidget from "./packages.widget";

export default async function PackagesPage() {
  // Obtener paquetes con sus librerías y servidor asociado
  const packages = await prisma.package.findMany({
    include: {
      libraries: true,
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

  return (
    <PackagesWidget 
      packages={packages} 
      servers={servers}
    />
  );
}
