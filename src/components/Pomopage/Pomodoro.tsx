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
                <span className="flex gap-2">
                {`${String(Math.floor(timeLeft / 60)).padStart(2, "0")}:${String(timeLeft % 60).padStart(2, "0")}`
                    .split("")
                    .map((char, i) => (
                    <span
                        key={i}
                        className="inline-block w-[6rem] text-center"
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