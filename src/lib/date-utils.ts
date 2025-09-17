export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  
  if (isNaN(d.getTime())) {
    return 'Fecha inválida';
  }
  
  // Usar UTC para evitar diferencias entre servidor y cliente
  const year = d.getUTCFullYear();
  const month = d.getUTCMonth() + 1;
  const day = d.getUTCDate();
  const hours = d.getUTCHours();
  const minutes = d.getUTCMinutes();
  
  const formattedDay = day.toString().padStart(2, '0');
  const formattedMonth = month.toString().padStart(2, '0');
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  
  return `${formattedDay}/${formattedMonth}/${year}, ${formattedHours}:${formattedMinutes}`;
}

export function formatDateOnly(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  
  if (isNaN(d.getTime())) {
    return 'Fecha inválida';
  }
  
  // Usar UTC para evitar diferencias entre servidor y cliente
  const year = d.getUTCFullYear();
  const month = d.getUTCMonth() + 1;
  const day = d.getUTCDate();
  
  const formattedDay = day.toString().padStart(2, '0');
  const formattedMonth = month.toString().padStart(2, '0');
  
  return `${formattedDay}/${formattedMonth}/${year}`;
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
  
  // Usar UTC para evitar diferencias entre servidor y cliente
  const year = d.getUTCFullYear();
  const month = d.getUTCMonth() + 1;
  const day = d.getUTCDate();
  const hours = d.getUTCHours();
  const minutes = d.getUTCMinutes();
  
  const formattedDay = day.toString().padStart(2, '0');
  const formattedMonth = month.toString().padStart(2, '0');
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  
  return `${formattedDay}/${formattedMonth}/${year}, ${formattedHours}:${formattedMinutes}`;
}