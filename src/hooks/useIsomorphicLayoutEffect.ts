import { useEffect, useLayoutEffect } from 'react';

/**
 * Hook que usa useLayoutEffect en el cliente y useEffect en el servidor
 * para evitar errores de hidratación
 */
export const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

