import { useState, useEffect, useRef } from 'react';

interface ServerStats {
  id: string;
  name: string;
  url: string;
  maxUsers: number;
  currentUsers: number;
  currentDemos: number;
  usagePercentage: number;
  isActive: boolean;
  createdAt: Date;
}

// interface OverallStats {
//   totalServers: number;
//   activeServers: number;
//   totalMaxUsers: number;
//   totalCurrentUsers: number;
//   totalCurrentDemos: number;
//   overallUsagePercentage: number;
//   averageUsagePerServer: number;
// }

// Cache global para evitar llamadas duplicadas
let globalCache: { data: ServerStats[]; timestamp: number } | null = null;
const CACHE_DURATION = 30000; // 30 segundos

// Función para limpiar el caché (útil para forzar actualizaciones)
export function clearServerStatsCache() {
  globalCache = null;
}

export function useServerStats(forceRefresh: boolean = false) {
  const [serverStats, setServerStats] = useState<ServerStats[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Verificar cache global (saltar si se fuerza actualización)
        const now = Date.now();
        if (!forceRefresh && globalCache && (now - globalCache.timestamp) < CACHE_DURATION) {
          setServerStats(globalCache.data);
          setLoading(false);
          return;
        }

        setLoading(true);
        const response = await fetch('/api/servers/stats', {
          headers: {
            'Cache-Control': 'max-age=30',
          },
        });
        
        if (!response.ok) {
          throw new Error('Error al obtener estadísticas de servidores');
        }
        
        const data = await response.json();
        
        // Extraer el array de servidores de la respuesta
        const stats = data.servers || [];
        
        // Actualizar cache global
        globalCache = {
          data: stats,
          timestamp: now,
        };
        
        setServerStats(stats);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
        setServerStats([]);
      } finally {
        setLoading(false);
      }
    };

    // Cargar datos iniciales
    fetchStats();

    // Configurar actualización periódica (cada 30 segundos)
    intervalRef.current = setInterval(fetchStats, 30000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [forceRefresh]);

  return { serverStats, loading, error };
}
