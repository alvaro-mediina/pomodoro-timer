import { PomodoroMode } from "@/utils/Constants";
import { ModeInfo, ModeKeys } from "@/utils/Constants";

type Props = {
  mode: PomodoroMode;
  onClose?: () => void;
};

export default function ModeInfoCard({ mode, onClose }: Props) {
  const key = ModeKeys[mode.work];

  const info = key ? ModeInfo[key] : undefined;

  return (
    <div
      className="
        absolute top-4 right-4 z-40
        w-[300px] max-w-full
        bg-secondary/90 backdrop-blur-md
        border border-white/10
        rounded-2xl shadow-lg
        p-4
        animate-fade-in
      "
      role="dialog"
      aria-label="Información del modo"
    >
      {!info ? (
        <div className="text-sm">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold">Modo desconocido</h2>
            <button onClick={onClose} className="px-2 py-1 rounded bg-primary/30">X</button>
          </div>
          <p className="text-sm">No se encontró información para este modo.</p>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold">{info.name}</h2>
            <button
              onClick={onClose}
              className="px-2 py-1 text-sm bg-primary/30 hover:bg-primary/50 rounded-lg transition"
              aria-label="Cerrar información del modo"
            >
              X
            </button>
          </div>

          <p className="mt-2 text-sm opacity-90">{info.desc}</p>

          <div className="mt-3 text-sm space-y-1">
            <p><strong>Trabajo:</strong> {info.work / 60} min</p>
            <p><strong>Descanso:</strong> {info.break / 60} min</p>
          </div>

          <ul className="mt-3 text-sm list-disc list-inside space-y-1">
            {info.details.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
        </>
      )}
    </div>
  );
}
