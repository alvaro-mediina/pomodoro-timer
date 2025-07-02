import { ButtonerProps, PomodoroModes } from "@/utils/Constants";
import { Button } from "../../ui/button";

function Buttoner({ start, time, setTime}: ButtonerProps) {

    const classicConfig = () => {
        if (start) return;
        if (time === PomodoroModes.Classic) return;
        setTime(PomodoroModes.Classic)
    }

    const intenseConfig = () => {
        if (start) return;
        if (time === PomodoroModes.Intense) return;
        setTime(PomodoroModes.Intense)
    }

    const TheMuseConfig = () => {
        if (start) return;
        if (time === PomodoroModes.Muse) return;
        setTime(PomodoroModes.Muse)
    }

    const FlowConfig = () => {
        if (start) return;
        if (time === PomodoroModes.Flow) return;
        setTime(PomodoroModes.Flow)
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