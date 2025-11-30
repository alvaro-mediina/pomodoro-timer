import { PomodoroMode, PomodoroModes } from "@/utils/Constants";
import { Button } from "../../ui/button";

// Propiedades para la botonera
export type ButtonerProps = {
    time: PomodoroMode;
    setStart: React.Dispatch<React.SetStateAction<boolean>>;
    setTime: (newTime: PomodoroMode) => void; 
    lockModes: boolean;
};

function Buttoner({ time, setTime, lockModes }: ButtonerProps) {
    
    const classicConfig = () => {
        if (time === PomodoroModes.Classic) return;
        setTime(PomodoroModes.Classic);
    };

    const intenseConfig = () => {
        if (time === PomodoroModes.Intense) return;
        setTime(PomodoroModes.Intense);
    };

    const museConfig = () => {
        if (time === PomodoroModes.Muse) return;
        setTime(PomodoroModes.Muse);
    };

    const flowConfig = () => {
        if (time === PomodoroModes.Flow) return;
        setTime(PomodoroModes.Flow);
    };

    return (
        <div className="flex flex-wrap items-center gap-2 md:flex-row">
            <Button className="bg-CuteRed" disabled={lockModes} onClick={classicConfig}>
                Clásico
            </Button>
            <Button className="bg-CuteGold" disabled={lockModes} onClick={intenseConfig}>
                Intenso
            </Button>
            <Button className="bg-CuteFuchsia" disabled={lockModes} onClick={museConfig}>
                The Muse
            </Button>
            <Button className="bg-CuteGreen" disabled={lockModes} onClick={flowConfig}>
                Modo Flow
            </Button>
        </div>
    );
}
export default Buttoner