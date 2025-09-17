import { prisma } from "@/lib/prisma";
import ServerUsersWidget from "./server-users.widget";

export default async function ServerUsersPage() {
  // Obtener usuarios con sus datos de Emby de manera más eficiente
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

  // Obtener los datos de EmbyAccount para cada UserServerLink de manera más eficiente
  const userIds = [...new Set(serverUsers.map(link => link.userId))];
  const embyAccounts = await prisma.embyAccount.findMany({
    where: {
      userId: {
        in: userIds,
      },
    },
  });

  // Crear un mapa para acceso rápido
  const embyAccountMap = new Map();
  embyAccounts.forEach(account => {
    const key = `${account.userId}-${account.serverId}`;
    embyAccountMap.set(key, account);
  });

  // Combinar los datos
  const serverUsersWithEmby = serverUsers.map(link => {
    const key = `${link.userId}-${link.serverId}`;
    const embyAccount = embyAccountMap.get(key);
    
    return {
      ...link,
      embyUserEmail: embyAccount?.embyUserEmail || '',
      embyUserName: embyAccount?.embyUserName || '',
    };
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
      serverUsers={serverUsersWithEmby} 
      servers={servers}
      packages={packages}
    />
  );
}
