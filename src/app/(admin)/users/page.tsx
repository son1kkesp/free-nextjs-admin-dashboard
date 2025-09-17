import { prisma } from "@/lib/prisma";
import ServerUsersWidget from "./server-users.widget";

export default async function ServerUsersPage() {
  // Obtener usuarios con sus datos de Emby
  const userServerLinks = await prisma.userServerLink.findMany({
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

  // Obtener los datos de EmbyAccount para cada UserServerLink
  const serverUsers = await Promise.all(
    userServerLinks.map(async (link) => {
      const embyAccount = await prisma.embyAccount.findFirst({
        where: {
          userId: link.userId,
          serverId: link.serverId,
        },
      });

      return {
        ...link,
        embyUserEmail: embyAccount?.embyUserEmail || '',
        embyUserName: embyAccount?.embyUserName || '',
      };
    })
  );
  
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
