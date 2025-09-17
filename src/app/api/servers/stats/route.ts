import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    // Get all servers with their user counts
    const servers = await prisma.embyServer.findMany({
      include: {
        _count: {
          select: {
            userServerLinks: {
              where: {
                isDemo: false
              }
            }
          }
        }
      },
      orderBy: {
        name: 'asc'
      }
    });

    // Get demo counts per server
    const demoCounts = await prisma.demo.groupBy({
      by: ['serverId'],
      _count: {
        serverId: true
      },
      where: {
        isActive: true,
        expirationDate: {
          gt: new Date()
        }
      }
    });

    // Create a map of server ID to demo count
    const demoCountMap = demoCounts.reduce((acc, item) => {
      acc[item.serverId] = item._count.serverId;
      return acc;
    }, {} as Record<string, number>);

    // Format server stats
    const serverStats = servers.map(server => ({
      id: server.id,
      name: server.name,
      url: server.url,
      maxUsers: server.maxUsers,
      currentUsers: server._count.userServerLinks,
      currentDemos: demoCountMap[server.id] || 0,
      usagePercentage: Math.round((server._count.userServerLinks / server.maxUsers) * 100),
      isActive: server.isActive,
      createdAt: server.createdAt
    }));

    // Calculate overall statistics
    const totalServers = servers.length;
    const activeServers = servers.filter(s => s.isActive).length;
    const totalMaxUsers = servers.reduce((sum, s) => sum + s.maxUsers, 0);
    const totalCurrentUsers = servers.reduce((sum, s) => sum + s._count.userServerLinks, 0);
    const totalCurrentDemos = Object.values(demoCountMap).reduce((sum, count) => sum + count, 0);
    const overallUsagePercentage = totalMaxUsers > 0 ? Math.round((totalCurrentUsers / totalMaxUsers) * 100) : 0;

    const overallStats = {
      totalServers,
      activeServers,
      totalMaxUsers,
      totalCurrentUsers,
      totalCurrentDemos,
      overallUsagePercentage,
      averageUsagePerServer: totalServers > 0 ? Math.round(totalCurrentUsers / totalServers) : 0
    };

    return NextResponse.json({
      servers: serverStats,
      overallStats
    });
  } catch (error) {
    console.error("Error al obtener estadísticas de servidores:", error);
    return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 });
  }
}