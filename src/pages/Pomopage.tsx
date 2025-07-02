import Nav from "@/components/Nav/Nav"
import Pomodoro from "@/components/Pomopage/Pomodoro";
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button";
import { Start, PomodoroMode } from "@/utils/Constants";

function Pomopage() {
    const [start, setStart] = useState<Start>(false);
    const [time, setTime] = useState<PomodoroMode>(PomodoroMode.Classic);

    const startTimer = () => {
        setStart(true);
    }

    const classicConfig = () => {
        if (start) return;
        if (time === PomodoroMode.Classic) return;
        setTime(PomodoroMode.Classic)
    }

    const intenseConfig = () => {
        if (start) return;
        if (time === PomodoroMode.Intense) return;
        setTime(PomodoroMode.Intense)
    }

    const TheMuseConfig = () => {
        if (start) return;
        if (time === PomodoroMode.Muse) return;
        setTime(PomodoroMode.Muse)
    }

    const FlowConfig = () => {
        if (start) return;
        if (time === PomodoroMode.Flow) return;
        setTime(PomodoroMode.Flow)
    }

    return (
        <div className="w-screen h-screen bg-background flex flex-col">
            <div className="w-full h-[100px] flex justify-center items-center">
                <div className="flex flex-wrap items-center gap-2 md:flex-row">
                    <Button className="bg-CuteRed" disabled={start} onClick={classicConfig}>Clásico</Button>
                    <Button className="bg-CuteGold" disabled={start} onClick={intenseConfig}>Intenso</Button>
                    <Button className="bg-fuchsia-500" disabled={start} onClick={TheMuseConfig}>The Muse</Button>
                    <Button className="bg-CuteGreen" disabled={start} onClick={FlowConfig}>Modo Flow</Button>
                </div>    
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center">
                <Pomodoro start={start} time={time} />
                <div className="flex justify-center p-6">
                    <button className="button" onClick={startTimer}>COMENZAR</button>
                </div>
            </div>
        </div>
    );
}

export default Pomopage;
