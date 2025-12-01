import { PomodoroMode, PomodoroModes } from "@/utils/Constants";
import { Button } from "../../ui/button";

type ButtonerProps = {
  time: PomodoroMode;
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
  setTime: (newTime: PomodoroMode) => void;
  lockModes: boolean;
};

function Buttoner({ time, setTime, lockModes }: ButtonerProps) {
  const modes = [
    { label: "Clásico", value: PomodoroModes.Classic, color: "CuteRed" },
    { label: "Intenso", value: PomodoroModes.Intense, color: "CuteGold" },
    { label: "The Muse", value: PomodoroModes.Muse, color: "CuteFuchsia" },
    { label: "Modo Flow", value: PomodoroModes.Flow, color: "CuteGreen" },
  ];

  const colorClasses: Record<string, string> = {
    CuteRed: "bg-CuteRed hover:bg-CuteRed/80 shadow-[0_0_10px_color-mix(in_oklab,var(--color-CuteRed)_50%,transparent)] hover:shadow-[0_0_14px_color-mix(in_oklab,var(--color-CuteRed)_70%,transparent)]",
    CuteGold: "bg-CuteGold hover:bg-CuteGold/80 shadow-[0_0_10px_color-mix(in_oklab,var(--color-CuteGold)_50%,transparent)] hover:shadow-[0_0_14px_color-mix(in_oklab,var(--color-CuteGold)_70%,transparent)]",
    CuteFuchsia: "bg-CuteFuchsia hover:bg-CuteFuchsia/80 shadow-[0_0_10px_color-mix(in_oklab,var(--color-CuteFuchsia)_50%,transparent)] hover:shadow-[0_0_14px_color-mix(in_oklab,var(--color-CuteFuchsia)_70%,transparent)]",
    CuteGreen: "bg-CuteGreen hover:bg-CuteGreen/80 shadow-[0_0_10px_color-mix(in_oklab,var(--color-CuteGreen)_50%,transparent)] hover:shadow-[0_0_14px_color-mix(in_oklab,var(--color-CuteGreen)_70%,transparent)]",
  };


  return (
    <div className="flex flex-wrap gap-3">
      {modes.map((m) => {
        const isActive = time === m.value;

        return (
          <Button
            variant="ghost"
            disabled={lockModes}
            onClick={() => !isActive && setTime(m.value)}
            className={`
              relative px-6 py-3 rounded-xl font-bold tracking-wide
              transition-all duration-200
              border border-white/10 text-white hover:text-white
              active:scale-95
              ${isActive ? "scale-[1.10] opacity-100" : "opacity-80 hover:opacity-100"}
              ${colorClasses[m.color]}
            `}
          >
            {m.label}
          </Button>
        );
      })}
    </div>
  );
}

export default Buttoner;