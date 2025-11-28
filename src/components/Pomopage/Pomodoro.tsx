import { useEffect, useRef, useState } from "react";
import type { PomodoroProps } from "@/utils/Constants";
import { PomodoroPhases } from "@/utils/Constants";

function Pomodoro({ start, time, onFinish, phase }:
    PomodoroProps & { onFinish?: (phaseFinished: PomodoroPhases) => void }) {

    const [timeLeft, setTimeLeft] = useState(
        phase === PomodoroPhases.Work ? time.work : time.break
    );

    const intervalRef = useRef<number | null>(null);
    const phaseRef = useRef<PomodoroPhases>(phase);
    useEffect(() => { phaseRef.current = phase; }, [phase]);

    // Reset de tiempo cuando cambia fase desde el padre
    useEffect(() => {
        setTimeLeft(phase === PomodoroPhases.Work ? time.work : time.break);
    }, [phase, time]);

    // Timer
    useEffect(() => {
        if (!start) return;
        if (intervalRef.current !== null) return; 

        intervalRef.current = window.setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    const finishedPhase = phaseRef.current;

                    // Detener timer para evitar loops
                    clearInterval(intervalRef.current!);
                    intervalRef.current = null;

                    // Avisar al padre
                    if (onFinish) onFinish(finishedPhase);

                    return 0;
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
    }, [start, onFinish]);
    return (
        <div className="flex flex-col items-center">
            <div className="text-3xl font-semibold text-white mb-4">
                {phase === PomodoroPhases.Work ? "Trabajo" : "Descanso"}
            </div>
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
