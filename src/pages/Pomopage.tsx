import Pomodoro from "@/components/Pomopage/Pomodoro";
import { useState } from "react"
import Buttoner from "@/components/Pomopage/Buttoner/Buttoner";
import { Start, PomodoroMode, PomodoroModes } from "@/utils/Constants";
import PomoFlow from "@/components/Pomopage/PomoFlow";

function Pomopage() {
    const [start, setStart] = useState<Start>(false);
    const [time, setTime] = useState<PomodoroMode>(PomodoroModes.Classic);


    const startTimer = () => {
        setStart(true);
    }

    return (
        <div className="w-screen h-screen bg-background flex flex-col">
            <div className="w-full h-[100px] flex justify-center items-center">
                <Buttoner start={start} time={time} setStart={setStart} setTime={setTime} />
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center">
                {time === PomodoroModes.Flow ?
                    (<PomoFlow start={start} />) : (<Pomodoro start={start} time={time}/>)
                }   
                <div className="flex justify-center p-6">
                    <button className="button" onClick={startTimer}>COMENZAR</button>
                </div>
            </div>
        </div>
    );
}

export default Pomopage;
