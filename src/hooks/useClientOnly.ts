import { useEffect, useState } from 'react';

/**
 * Hook que retorna true solo después de que el componente se haya montado en el cliente
 * Útil para evitar errores de hidratación
 */
export function useClientOnly(): boolean {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}

