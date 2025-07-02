import { useEffect, useRef, useState } from "react";
import type { PomodoroProps } from "@/utils/Constants";
import { PomodoroPhases } from "@/utils/Constants";

function Pomodoro({ start, time }: PomodoroProps) {
    const [timeLeft, setTimeLeft] = useState(time.work);
    const [phase, setPhase] = useState<PomodoroPhases>(PomodoroPhases.Work);
    const [completedSession, setCompletedSession] = useState(0);
    const intervalRef = useRef<number | null>(null);


    // Resetea el tiempo cuando cambia el modo y no está corriendo
    useEffect(() => {
        if (!start) {
        setTimeLeft(phase === PomodoroPhases.Work ? time.work : time.break);
        }
    }, [time, phase, start]);

    //Lógica del timer
    useEffect(() => {
        if (!start) return;
        if (intervalRef.current !== null) return;

        // Restar 1 segundo
        intervalRef.current = window.setInterval(() => {
            setTimeLeft(prev => {
                if (prev === 0) {
                    handlePhaseSwitch();
                    return 0; // Esperamos a que el switch setee el tiempo
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

    // Manejo de la Fase Work o Break
    const handlePhaseSwitch = () => {
        setPhase(prevPhase => {
            const nextPhase =
            prevPhase === PomodoroPhases.Work
                ? PomodoroPhases.Break
                : PomodoroPhases.Work;

            if (prevPhase === PomodoroPhases.Work) {
            setCompletedSession(prev => prev + 1);
            }

            setTimeLeft(nextPhase === PomodoroPhases.Work ? time.work : time.break);
            return nextPhase;
        });
    };

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
