import tomato  from '@/assets/0xnjt5jp.jpg';
import pencil from '@/assets/pencil.png';
import checked from '@/assets/checked.png';
import nop from '@/assets/cross.png';
import { useState } from 'react';
import { updateUserProfile } from '@/lib/firestore/users';
import { useAuthContext } from '@/contexts/AuthContext';

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
  const { user, profile, setProfile } = useAuthContext();
  const [editing, setEditing] = useState(false);
  const [newUsername, setNewUsername] = useState(username || "");
  const [loading, setLoading] = useState(false);
  const handleSave = async () => {
    if (!user) return;
    setLoading(true);
    await updateUserProfile(user.uid, newUsername);
    setLoading(false);
    setEditing(false);
    // Actualiza el contexto para reflejar el cambio sin recargar
    if (setProfile) setProfile({
      ...(profile || {}),
      username: newUsername
    });
  };
  return (
    <div className="bg-secondary p-4 shadow-lg w-60 h-screen flex flex-col gap-3">
        <img src={tomato} className="w-[100px] h-auto rounded-xl border-3 border-CuteGray" />

        <div className="flex flex-col">
        <div className="flex flex-row items-center gap-2">
          {editing ? (
            <>
              <input
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                className="
                  w-30
                  border-b-2 border-primary
                  bg-transparent
                  text-sm font-bold text-primary
                  focus:outline-none focus:border-accent
                  px-1
                  "
              />
              <button
                onClick={handleSave}
                disabled={loading}
                className="    
                group                    
                min-w-6 min-h-6 flex items-center justify-center p-1 rounded
                transition-all  
                "
              >
                <img src={checked} className="
                w-6 h-6 
                group-hover:drop-shadow-[0_0_8px_rgba(0,255,0,0.8)]
                transition-all
                group-hover:scale-110
                " />
              </button>
              <button
                onClick={() => { setEditing(false); setNewUsername(username || ""); }}
                className="
                group min-w-6 min-h-6 flex items-center justify-center p-1 rounded
                "
              >
                <img src={nop} className="
                  w-6 h-6
                  group-hover:drop-shadow-[0_0_8px_rgba(255,0,0,0.8)]
                  transition-all
                  group-hover:scale-110
                "/>
              </button>
            </>
          ) : (
            <>
              <h2 className="text-xl font-bold text-primary">{username}</h2>
              <button
                onClick={() => setEditing(true)}
                className="group p-1 rounded-xl transition"
              >
                <img src={pencil} className="
                w-4 h-4
                transition-all
                group-hover:scale-110
                group-hover:drop-shadow-[0_0_8px_rgba(255,255,0,0.9)]"
                />
              </button>
            </>
          )}
        </div>
        {!editing && <p className="text-sm text-muted-foreground">Tu semana en números</p>}
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