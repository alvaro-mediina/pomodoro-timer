import { useEffect, useRef, useState } from "react";

type PomodoroProps = {
    init: boolean;
}

function Pomodoro({ init }: PomodoroProps) {
    const [timeLeft, setTimeLeft] = useState(3600);
    const intervalRef = useRef<number | null>(null);

    useEffect(() => { 
        if (!init) return;
        if (intervalRef.current !== null) return;
        intervalRef.current = window.setInterval(() => {
        setTimeLeft((prev) => Math.max(prev - 1, 0)); 
        }, 1000);
    },[init])

    return (
        <div>
            <div className="flex justify-center items-center text-[10rem] font-[400] text-white">
                <span>{String(Math.floor(timeLeft / 60)).padStart(2, "0")}</span>
                <span>:</span>
                <span>{String(timeLeft % 60).padStart(2, "0")}</span>
            </div>
        </div>
    )
}

export default Pomodoro