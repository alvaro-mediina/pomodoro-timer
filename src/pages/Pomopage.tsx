import Pomodoro from "@/components/Pomopage/Pomodoro";
import Buttoner from "@/components/Pomopage/Buttoner/Buttoner";
import StatsCard from "@/components/Pomopage/StatsCard";
import WeekStatsCard from "@/components/Pomopage/WeekStatsCard";
import { Start, PomodoroMode, PomodoroModes, PomodoroPhases } from "@/utils/Constants";
import { useNavigate } from "react-router-dom";
import { logout } from "@/lib/authService";
import { useState } from "react"
import PomoFlow from "@/components/Pomopage/PomoFlow";
import home from "@/assets/home.png";
import exit from "@/assets/exit.png";


function Pomopage() {
    const navigate = useNavigate();
    const [start, setStart] = useState<Start>(false);
    const [time, setTime] = useState<PomodoroMode>(PomodoroModes.Classic);
    const [showPanel, setShowPanel] = useState(false);
    const [sessionCount, setSessionCount] = useState<number>(0);
    const [phase, setPhase] = useState<PomodoroPhases>(PomodoroPhases.Work);
    const [streak, setStreak] = useState<number>(1);
    const [lastStudyDate, setLastStudyDate] = useState<string | null>(null);
    
    const startTimer = () => setStart(true);
    const stopTimer = () => setStart(false);
    
    const handleLogout = () => {
        navigate("/");
        logout();
    };

    const handleFinish = (finished: PomodoroPhases) => {
        if (finished === PomodoroPhases.Work) {
            const today = new Date();

            // Normalizar fecha a medianoche (sin horas)
            const todayMid = new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate()
            ).getTime();

            if (lastStudyDate === null) {
                setStreak(1);
            } else {
                const lastMid = new Date(lastStudyDate).getTime();
                const diffDays = (todayMid - lastMid) / (1000 * 60 * 60 * 24);

                if (diffDays === 1) {
                    // ayer → incrementar racha
                    setStreak(prev => prev + 1);
                } else if (diffDays > 1) {
                    // faltó → reset
                    setStreak(1);
                }
                // si diffDays === 0 → no cambia la racha
            }

            // guardar fecha normalizada
            setLastStudyDate(new Date(todayMid).toISOString());

            setSessionCount(prev => prev + 1);
            setPhase(PomodoroPhases.Break);
            setStart(true);
        } else {
            setPhase(PomodoroPhases.Work);
            setStart(false);
        }
    };



    return (
        <div className="w-screen h-screen bg-background flex flex-col relative overflow-hidden">

        <div
            className={`
                absolute top-0 left-0 h-screen z-20 
                transition-transform duration-500
                ${showPanel ? "translate-x-0" : "-translate-x-full"}
            `}
        >
            <div className="relative h-full">
                <button
                    onClick={() => setShowPanel(!showPanel)}
                    className="
                        group
                        absolute top-1/2 -right-9 transform -translate-y-1/2
                        w-10 h-15 bg-secondary 
                        flex justify-center items-center
                        rounded-r-3xl border-primary/20
                        transition-all duration-300
                        hover:shadow-[0_0_12px_2px_rgba(255,255,255,0.4)]
                    "
                >
                    <img
                        src={home}
                        className={`
                            w-6 h-6 transition-transform duration-500
                            ${showPanel ? "rotate-360" : ""}
                        `}
                    />
                </button>

                <WeekStatsCard
                    username="Alvaro"
                    weeklySessions={12}
                    weeklyMinutes={285}
                    favoriteMode="Flow"
                    streak={streak}
                />
                
                <button
                onClick={handleLogout}
                className="
                    absolute bottom-6 left-6
                    flex items-center gap-3
                    p-3 rounded-xl bg-secondary/80
                    transition-all duration-300
                    shadow-md

                    hover:bg-red-500 hover:shadow-[0_0_15px_4px_rgba(255,0,0,0.6)]
                "
                >
                <img src={exit} className="w-6 h-6" />
                </button>
                
            </div>
        </div>

            <div className="w-full h-[100px] flex justify-center items-center">
                <Buttoner start={start} time={time} setStart={setStart} setTime={setTime} />
            </div>
            
            <div className="w-full h-full flex flex-col justify-center items-center">
                <div className= "flex flex-col justify-center items-center">
                {time === PomodoroModes.Flow ? (
                    <PomoFlow key={start ? "flow-running" : "flow-reset"} start={start} />
                ) : (
                   <Pomodoro
                        key={start ? "pomo-running" : "pomo-reset"}
                        start={start}
                        time={time}
                        onFinish={handleFinish}
                        phase={phase}
                    />
                )}
                    <div className="w-full max-w-md">
                        <div className="grid grid-cols-3 gap-4">
                            <StatsCard title="Sesiones" value={sessionCount} />
                            <StatsCard title="Minutos" value={45} />
                            <StatsCard title="Racha" value={streak}/>
                        </div>
                    </div>
                </div>

                
            </div>
            <div className="flex justify-center p-6 overflow-hidden">
                <div
                    className={`
                        transition-all duration-500
                        ${phase === PomodoroPhases.Break 
                            ? "opacity-0 translate-y-10 pointer-events-none"
                            : "opacity-100 translate-y-0"
                        }
                    `}
                >
                    {start ? (
                        <button 
                            className="button"
                            onClick={stopTimer}
                        >
                            PAUSAR
                        </button>
                    ) : (
                        <button 
                            className="button"
                            onClick={startTimer}
                        >
                            COMENZAR
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Pomopage;
