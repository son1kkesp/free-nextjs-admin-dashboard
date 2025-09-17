import { prisma } from "@/lib/prisma";
import PoliciesWidget from "./policies.widget";

export default async function PoliciesPage() {
  // Obtener políticas existentes
  const policies = await prisma.policy.findMany({
    include: {
      user: {
        select: {
          id: true,
          email: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  // Obtener servidores para crear políticas
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
    <div>
      <PoliciesWidget policies={policies} servers={servers} />
    </div>
  );
}

