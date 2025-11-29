export function formatTime(totalMinutes: number): string {
  if (totalMinutes <= 0) return "0m";

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  // Menos de 1 hora → solo minutos
  if (hours === 0) return `${minutes}m`;

  // Menos de 24 horas
  if (hours < 24) {
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  }

  // Más de 24 horas → días
  const days = Math.floor(hours / 24);
  const remHours = hours % 24;

  return `${days}d${remHours > 0 ? ` ${remHours}h` : ""}`;
}
