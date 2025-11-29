interface StatsCardProps {
    title: string;
    value: number | string;
  isStreak?: boolean;
  animate?: boolean;
}
interface StreakStyles {
  gradient: string;
  glow: string;
}

const getStreakIcon = (value: number) => {
    if (value >= 14) return "👑";
    if (value >= 7) return "🔥🔥";
    if (value >= 3) return "🔥";
    return "🥊";
}; 


const streakColor = (value: number) => {
    if (value >= 14) return "from-purple-500 to-red-500";
    if (value >= 7) return "from-red-500 to-orange-400";
    if (value >= 3) return "from-orange-400 to-yellow-300";
    return "from-gray-600 to-gray-800";
};

const streakStyles = (value: number): StreakStyles => {
  if (value >= 14) return {
    gradient: "from-purple-500 to-red-500",
    glow: "rgba(168, 85, 247, 0.9)"
  };
  if (value >= 7) return {
    gradient: "from-red-500 to-orange-400",
    glow: "rgba(255, 69, 58, 0.9)"
  };
  if (value >= 3) return {
    gradient: "from-orange-400 to-yellow-300",
    glow: "rgba(255, 159, 10, 0.9)"
  };
  return {
    gradient: "from-gray-600 to-gray-800",
    glow: "rgba(200, 200, 200, 0.5)"
  };
};



function StatsCard({ title, value, isStreak = false, animate = false }: StatsCardProps) {
  const styles: StreakStyles | null = isStreak ? streakStyles(value as number) : null;
  return (
    <div
      className={`
      p-4 rounded-xl shadow-md
      ${isStreak ? `text-white bg-gradient-to-br ${styles?.gradient}` : "bg-secondary"}
      ${animate && isStreak ? "animate-streak-pulse" : ""}
      `}
      style={{
        "--glow-color": styles?.glow,
      } as React.CSSProperties}
    >
      <p className="text-sm opacity-80">{title}</p>

      <div className="flex items-center justify-center gap-2 mt-1">
        <span className="text-3xl font-bold">{value}</span>
        {isStreak && (
          <span className="text-2xl leading-none">{getStreakIcon(value as number)}</span>
        )}
      </div>
    </div>
    );
}

export default StatsCard;