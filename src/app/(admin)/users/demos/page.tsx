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
    },
    orderBy: {
      name: "asc",
    },
  });

  return (
    <DemosWidget 
      demos={demos} 
      servers={servers}
      packages={packages}
    />
  );
}
