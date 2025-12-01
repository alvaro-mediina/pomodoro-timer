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
                    border border-white/10
                    text-white hover:text-white

                    ${isActive ? "scale-[1.10]" : "opacity-80 hover:opacity-100"}
                    bg-${m.color}
                    hover:bg-${m.color}/80
                    active:scale-95

                    shadow-[0_0_10px_color-mix(in_oklab,var(--color-${m.color})_50%,transparent)]
                    hover:shadow-[0_0_14px_color-mix(in_oklab,var(--color-${m.color})_70%,transparent)]
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