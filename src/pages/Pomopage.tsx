import Nav from "@/components/Nav/Nav"
import Pomodoro from "@/components/Pomopage/Pomodoro";
import { useState } from "react"

function Pomopage() {
    const [init, setInit] = useState(false);
    const startTimer = () => {
        setInit(true);
    }

    return (
        <div className="w-screen h-screen bg-background flex flex-col">
            <Nav scrolledInfo={false} />
            <div className="w-full h-full flex flex-col justify-center items-center">
                <Pomodoro init={init} />
                <div className="flex justify-center p-6">
                    <button className="button" onClick={startTimer}>COMENZAR</button>
                </div>
            </div>
        </div>
    );
}

export default Pomopage;
