import { prisma } from "@/lib/prisma";
import DashboardWidget from "./dashboard.widget";

export default async function DashboardPage() {
  try {
    // Obtener métricas básicas
    const [serversCount, usersCount, demosCount] = await Promise.all([
      prisma.embyServer.count(),
      prisma.user.count({ where: { isActive: true } }),
      prisma.demo.count({ where: { isActive: true } })
    ]);

    return (
      <DashboardWidget 
        serversCount={serversCount}
        usersCount={usersCount}
        demosCount={demosCount}
      />
    );
  } catch (error) {
    console.error("Error loading dashboard:", error);
    return <div>Error loading dashboard</div>;
  }
}

