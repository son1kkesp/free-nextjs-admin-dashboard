export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  
  if (isNaN(d.getTime())) {
    return 'Fecha inválida';
  }
  
  return d.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function formatDateOnly(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  
  if (isNaN(d.getTime())) {
    return 'Fecha inválida';
  }
  
  return d.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
}

export function formatTimeRemaining(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  
  if (isNaN(d.getTime())) {
    return 'Fecha inválida';
  }
  
  const diffMs = d.getTime() - now.getTime();
  
  if (diffMs <= 0) {
    return 'Expirado';
  }
  
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  
  if (days > 0) {
    return `${days}d ${hours}h`;
  } else if (hours > 0) {
    return `${hours}h ${minutes}m`;
  } else {
    return `${minutes}m`;
  }
}

export function isExpired(date: Date | string): boolean {
  const d = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  
  if (isNaN(d.getTime())) {
    return true;
  }
  
  return d.getTime() <= now.getTime();
}

export function isNearExpired(date: Date | string, daysThreshold: number = 5): boolean {
  const d = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  
  if (isNaN(d.getTime())) {
    return false;
  }
  
  const diffMs = d.getTime() - now.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  
  return diffDays <= daysThreshold && diffDays > 0;
}

export function formatExpirationDate(date: Date | string | null): string {
  if (!date) {
    return 'Sin fecha';
  }
  
  const d = typeof date === 'string' ? new Date(date) : date;
  
  if (isNaN(d.getTime())) {
    return 'Fecha inválida';
  }
  
  return formatDate(d);
}