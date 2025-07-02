import { useEffect, useRef, useState } from "react";
import type { PomodoroProps } from "@/utils/Constants";

function Pomodoro({ start , time } : PomodoroProps) {
    const [timeLeft, setTimeLeft] = useState(time);
    const intervalRef = useRef<number | null>(null);

    // Cambios de tiempo antes de empezar
    useEffect(() => {
        if (!start) {
            setTimeLeft(time)
        }
    }, [time])

    // Cambios de tiempo uno a uno
    useEffect(() => { 
        if (!start) return;
        if (intervalRef.current !== null) return;
        intervalRef.current = window.setInterval(() => {
        setTimeLeft((prev) => Math.max(prev - 1, 0)); 
        }, 1000);
    },[start, time])

    return (
        <div>
            <div className="flex justify-center items-center text-[10rem] font-[400] text-white">
                <span className="flex gap-2">
                {`${String(Math.floor(timeLeft / 60)).padStart(2, "0")}:${String(timeLeft % 60).padStart(2, "0")}`
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
    )
}

export default Pomodoro