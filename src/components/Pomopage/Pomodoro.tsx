import { useEffect, useRef, useState } from "react";
import type { PomodoroProps } from "@/utils/Constants";
import { PomodoroPhases } from "@/utils/Constants";

function Pomodoro({ start, time }: PomodoroProps) {
    const [timeLeft, setTimeLeft] = useState(time.work);
    const [phase, setPhase] = useState<PomodoroPhases>(PomodoroPhases.Work);
    const intervalRef = useRef<number | null>(null);

    // Resetea el tiempo cuando cambia el modo y no está corriendo
    useEffect(() => {
        if (!start) {
        setTimeLeft(phase === PomodoroPhases.Work ? time.work : time.break);
        }
    }, [time, phase, start]);

    // Lógica de cuenta regresiva
    useEffect(() => {
        if (!start) return;
        if (intervalRef.current !== null) return;

        intervalRef.current = window.setInterval(() => {
            setTimeLeft(prev => {
                if (prev === 0) {
                    const nextPhase =
                        phase === PomodoroPhases.Work
                            ? PomodoroPhases.Break
                            : PomodoroPhases.Work;
                    setPhase(nextPhase);
                    return nextPhase === PomodoroPhases.Work ? time.work : time.break;
                }
                return prev - 1;
            });
    }, 1000);

        return () => {
            if (intervalRef.current !== null) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
            };
    }, [start]);

    return (
        <div>
        <div className="flex justify-center items-center text-[10rem] font-[400] text-white">
            <span className="flex gap-2">
                {`${String(Math.floor(timeLeft / 60)).padStart(2, "0")}:${String(timeLeft % 60)
                    .padStart(2, "0")}`
                    .split("")
                    .map((char, i) => (
                    <span
                        key={i}
                        className="select-none inline-block w-[6rem] text-center"
                    >
                        {char}
                    </span>
                ))}
            </span>
        </div>
        </div>
    );
}

export default Pomodoro;
