import tomato  from '@/assets/0xnjt5jp.jpg';

type WeekStatsCardProps = {
  username?: string;
  weeklySessions: number;
  weeklyTime: string;
  streak: number;
};

function WeekStatsCard({
  username,
  weeklySessions,
  weeklyTime,
  streak
}: WeekStatsCardProps) {
    return (
    <div className="bg-secondary p-4 shadow-lg w-60 h-screen flex flex-col gap-3">
        <img src={tomato} className="w-[100px] h-auto rounded-xl border-3 border-CuteGray" />
        <div>
            <h2 className="text-xl font-bold text-primary">{username}</h2>
            <p className="text-sm text-muted-foreground">Tu semana en números</p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
            <p><span className="font-semibold">Sesiones semanales:</span> {weeklySessions}</p>
            <p><span className="font-semibold">Minutos:</span> {weeklyTime}</p>
            <p><span className="font-semibold">Racha:</span> {streak} días 🔥</p>
        </div>

        <div className="mt-2 text-xs text-muted-foreground italic">
            “Un pequeño progreso cada día suma grandes resultados.”
        </div>
    </div>
  );
}

export default WeekStatsCard;