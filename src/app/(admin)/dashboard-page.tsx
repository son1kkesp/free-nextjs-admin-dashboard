import { prisma } from "@/lib/prisma";
import DashboardWidget from "./dashboard.widget";

export default async function DashboardPage() {
  try {
    // Obtener métricas básicas
    const [serversCount, usersCount, totalCredits, recentActivity] = await Promise.all([
      prisma.embyServer.count(),
      prisma.user.count({ where: { isActive: true } }),
      prisma.creditBalance.aggregate({ _sum: { balance: true } }),
      prisma.creditLog.findMany({ 
        take: 5, 
        orderBy: { createdAt: "desc" },
        include: { actor: { select: { email: true } } }
      })
    ]);

    return (
      <DashboardWidget 
        serversCount={serversCount}
        usersCount={usersCount}
        totalCredits={totalCredits._sum.balance || 0}
        recentActivity={recentActivity}
      />
    );
  } catch (error) {
    console.error("Error loading dashboard:", error);
    return <div>Error loading dashboard</div>;
  }
}

