import { PomoFlowProps } from "@/utils/Constants"
import { useEffect, useRef, useState } from "react"


function PomoFlow({ start }: PomoFlowProps) {
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalRef = useRef<number | null>(null);


    useEffect(() => {
        if (start && intervalRef.current === null) {
            // Iniciar el temporizador
            intervalRef.current = window.setInterval(() => {
                setElapsedTime(prev => prev + 1);
            }, 1000);
        }

        if (!start && intervalRef.current !== null) {
            // Si se detiene, limpiar el temporizador
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        // Limpieza cuando el componente se desmonta
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
                {`${String(Math.floor(elapsedTime / 60)).padStart(2, "0")}:${String(elapsedTime % 60)
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
    )
}

export default PomoFlow