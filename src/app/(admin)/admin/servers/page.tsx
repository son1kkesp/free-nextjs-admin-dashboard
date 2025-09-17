import { prisma } from "@/lib/prisma";
import ServersWidget from "./servers.widget";

export default async function ServersPage() {
  const servers = await prisma.embyServer.findMany({ orderBy: { createdAt: "desc" } });
  return (
    <ServersWidget servers={servers} />
  );
}


