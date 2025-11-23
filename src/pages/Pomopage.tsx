import Pomodoro from "@/components/Pomopage/Pomodoro";
import Buttoner from "@/components/Pomopage/Buttoner/Buttoner";
import { Start, PomodoroMode, PomodoroModes } from "@/utils/Constants";
import { useState } from "react"
import PomoFlow from "@/components/Pomopage/PomoFlow";

function Pomopage() {
    const [start, setStart] = useState<Start>(false);
    const [time, setTime] = useState<PomodoroMode>(PomodoroModes.Classic);


    const startTimer = () => {
        setStart(true);
    }

    const stopTimer = () => {
        setStart(false);
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
                    {
                        start
                            ? (<button className="button" onClick={stopTimer}>PAUSAR</button>)
                            : (<button className="button" onClick={startTimer}>COMENZAR</button>)    
                    }
                </div>
            </div>
        </div>
    );
}

export default Pomopage;
