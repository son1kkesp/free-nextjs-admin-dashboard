import { prisma } from "@/lib/prisma";
import ServersWidget from "./servers.widget";

export default async function ServersPage() {
  const servers = await prisma.embyServer.findMany({ orderBy: { createdAt: "desc" } });
  
  // Transformar servidores para que coincidan con el tipo esperado
  const transformedServers = servers.map(server => ({
    id: server.id,
    name: server.name,
    baseUrl: server.url,
    apiKey: server.apiKey,
    maxUsers: server.maxUsers,
    createdAt: server.createdAt,
    updatedAt: server.updatedAt,
  }));
  
  return (
    <ServersWidget servers={transformedServers} />
  );
}


