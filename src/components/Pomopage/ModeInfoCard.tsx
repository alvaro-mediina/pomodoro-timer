import { PomodoroMode } from "@/utils/Constants";
import { ModeInfo, ModeKeys } from "@/utils/Constants";

type Props = {
  mode: PomodoroMode;
  onClose?: () => void;
};


export default function ModeInfoCard({ mode, onClose }: Props) {
  const key = ModeKeys[Number(mode.work)];
  const info = key ? ModeInfo[key] : undefined;
  
  const modeColors = {
    Classic: "var(--color-CuteRed)",
    Intense: "var(--color-CuteGold)",
    Muse: "var(--color-CuteFuchsia)",
    Flow: "var(--color-CuteGreen)",
  } 
  
  const themeColor = modeColors[key] ?? "var(--color-CuteRed)";

return (
    <div
      style={
        {
          "--card-accent": themeColor,
        } as React.CSSProperties
      }
      className="
        absolute top-6 right-6 z-50
        w-[320px] p-5
        rounded-3xl

        /* Glass bg */
        bg-gradient-to-br from-white/10 via-white/5 to-transparent
        backdrop-blur-xl

        /* Dynamic border + glow */
        border-[1.5px] border-[color:var(--card-accent)]
        shadow-[0_0_14px_color-mix(in_oklab,var(--card-accent)_60%,transparent)]

        animate-[slideIn_0.25s_ease-out]
      "
      role="dialog"
      aria-label="Información del modo"
    >
      <div className="flex justify-between items-start mb-3">
        <h2
          className="
            text-xl font-semibold tracking-wide text-white
            drop-shadow-[0_0_4px_color-mix(in_oklab,var(--card-accent)_40%,transparent)]
          "
        >
          {info ? info.name : "Modo desconocido"}
        </h2>

        <button
          onClick={onClose}
        className="
            w-8 h-8
            flex items-center justify-center
            p-2 rounded-full
            bg-white/10 hover:bg-white/20
            backdrop-blur-md transition active:scale-90
            shadow-[0_0_6px_color-mix(in_oklab,var(--card-accent)_40%,transparent)]
          "
          aria-label="Cerrar"
        >
          ✕
        </button>
      </div>

      {!info ? (
        <p className="text-sm text-white/80">
          No se encontró información para este modo.
        </p>
      ) : (
        <>
          <p className="text-sm text-white/90 leading-relaxed">{info.desc}</p>

          <div
            className="
              mt-4 p-3 rounded-xl
              bg-white/10 border border-white/10 
              backdrop-blur-sm
            "
          >
            <p className="text-sm text-white/90">
              <strong className="text-white">Trabajo:</strong> {info.work / 60} min
            </p>
            <p className="text-sm text-white/90 mt-1">
              <strong className="text-white">Descanso:</strong> {info.break / 60} min
            </p>
          </div>

          <ul className="mt-4 text-sm space-y-2 text-white/90">
            {info.details.map((d, i) => (
              <li
                key={i}
                className="
                  flex items-start gap-2
                  before:content-['•']
                  before:text-[color:var(--card-accent)]
                  before:text-lg before:leading-4
                "
              >
                {d}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
