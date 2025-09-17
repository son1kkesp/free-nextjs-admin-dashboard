import { prisma } from "@/lib/prisma";
import ServerUsersWidget from "./server-users.widget";

export default async function ServerUsersPage() {
  // Simplificar consultas para evitar errores
  const serverUsers = await prisma.userServerLink.findMany({
    where: {
      isDemo: false, // Solo usuarios reales, no demos
    },
    include: {
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
  
  const packages = await prisma.package.findMany({
    select: {
      id: true,
      name: true,
      description: true,
    },
    orderBy: {
      name: "asc",
    },
  });

  return (
    <ServerUsersWidget 
      serverUsers={serverUsers} 
      servers={servers}
      packages={packages}
    />
  );
}
