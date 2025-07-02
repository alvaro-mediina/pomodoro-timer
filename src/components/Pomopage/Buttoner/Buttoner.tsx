import { ButtonerProps, PomodoroMode } from "@/utils/Constants";
import { Button } from "../../ui/button";

function Buttoner({ start, time, setTime}: ButtonerProps) {

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
        <div className="flex flex-wrap items-center gap-2 md:flex-row">
            <Button className="bg-CuteRed" disabled={start} onClick={classicConfig}>Clásico</Button>
            <Button className="bg-CuteGold" disabled={start} onClick={intenseConfig}>Intenso</Button>
            <Button className="bg-fuchsia-500" disabled={start} onClick={TheMuseConfig}>The Muse</Button>
            <Button className="bg-CuteGreen" disabled={start} onClick={FlowConfig}>Modo Flow</Button>
        </div>    
    )
}
export default Buttoner