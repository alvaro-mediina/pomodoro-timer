import Pomodoro from "@/components/Pomopage/Pomodoro";
import Buttoner from "@/components/Pomopage/Buttoner/Buttoner";
import StatsCard from "@/components/Pomopage/StatsCard";
import WeekStatsCard from "@/components/Pomopage/WeekStatsCard";
import ModeInfoCard from "@/components/Pomopage/ModeInfoCard";
import { Start, PomodoroMode, PomodoroModes, PomodoroPhases } from "@/utils/Constants";
import { useNavigate } from "react-router-dom";
import { logout } from "@/lib/authService";
import { useState } from "react"
import PomoFlow from "@/components/Pomopage/PomoFlow";
import home from "@/assets/home.png";
import exit from "@/assets/exit.png";
import { formatTime } from "@/utils/Utils";
import { useAuthContext } from "@/contexts/AuthContext";


function Pomopage() {
    const navigate = useNavigate();
    const { profile } = useAuthContext();
    const [start, setStart] = useState<Start>(false);
    const [time, setTime] = useState<PomodoroMode>(PomodoroModes.Classic);
    const [showPanel, setShowPanel] = useState(false);
    const [sessionCount, setSessionCount] = useState<number>(0);
    const [phase, setPhase] = useState<PomodoroPhases>(PomodoroPhases.Work);
    const [streak, setStreak] = useState<number>(1);
    const [lastStudyDate, setLastStudyDate] = useState<string | null>(null);
    const [animateStreak, setAnimateStreak] = useState(false);
    
    const [totalMinutes, setTotalMinutes] = useState(0);
    const [flowElapsed, setFlowElapsed] = useState(0);

    const [showModeInfo, setShowModeInfo] = useState(true);


    const startTimer = () => setStart(true);
    const stopTimer = () =>setStart(false);
    
    const handleLogout = () => {
        navigate("/");
        logout();
    };

    const handleFinish = (finished: PomodoroPhases) => {

        if (time === PomodoroModes.Flow) return; //Si es FLOW por acá no es.

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
                    setStreak((prev) => {
                        const newStreak = prev + 1;
                        setAnimateStreak(true);
                        return newStreak;
                    });
                } else if (diffDays > 1) {
                    // faltó → reset
                    setStreak(1);
                }
                // si diffDays === 0 → no cambia la racha
            }

            // guardar fecha normalizada
            setLastStudyDate(new Date(todayMid).toISOString());
            setSessionCount(prev => prev + 1);

            const duration = Math.floor(time.work / 60);
            setTotalMinutes(prev => prev + duration);
            setPhase(PomodoroPhases.Break);
            setStart(true);
        } else {
            setPhase(PomodoroPhases.Work);
            setStart(false);
        }
    };

    const handleSaveFlow = () => {
        const minutes = Math.floor(flowElapsed / 60);
        if (minutes === 0) return;

        const today = new Date();

        // Normalizar fecha a medianoche
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
                // Ayer → incrementar racha
                setStreak(prev => {
                    const next = prev + 1;
                    setAnimateStreak(true);
                    return next;
                });
            } else if (diffDays > 1) {
                // Rompió racha
                setStreak(1);
            }
            // diffDays == 0 → mismo día → no cambia racha
        }

        // Guardar nueva fecha
        setLastStudyDate(new Date(todayMid).toISOString());

        // Sumar sesiones y tiempo como antes
        setTotalMinutes(prev => prev + minutes);
        setSessionCount(prev => prev + 1);

        // Reset flow
        setFlowElapsed(0);
    };

    const handleTimeChange = (newTime: PomodoroMode) => {
        setTime(newTime);
        setShowModeInfo(true); // <- mostrar cuadro automáticamente
    };


    return (
        <div className="w-screen h-screen bg-background flex flex-col relative overflow-hidden">

        {showModeInfo && (
            <ModeInfoCard 
                mode={time} 
                onClose={() => setShowModeInfo(false)} 
            />
        )}

            

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
                    username={profile?.username}
                    weeklySessions={sessionCount}
                    weeklyTime={formatTime(totalMinutes)}
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
                <Buttoner
                    time={time}
                    setStart={setStart}
                    setTime={handleTimeChange}
                    lockModes={ start || (time === PomodoroModes.Flow && flowElapsed >= 60)}
                />
            </div>
            
            <div className="w-full h-full flex flex-col justify-center items-center">
                <div className= "flex flex-col justify-center items-center">
                {time === PomodoroModes.Flow ? (
                    <PomoFlow
                        key={flowElapsed === 0 ? "flow-reset" : "flow-running"}
                        start={start}
                        onTick={(t) => setFlowElapsed(t)}
                    />
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
                            <StatsCard title="Tiempo Total" value={formatTime(totalMinutes)} />
                            <StatsCard title="Racha" value={streak} isStreak animate={animateStreak} />
                        </div>
                    </div>
                </div>

                
            </div>
            <div className="flex justify-center p-6 overflow-hidden mb-3">
                <div
                    className={`
                        transition-all duration-500
                        ${phase === PomodoroPhases.Break 
                            ? "opacity-0 translate-y-10 pointer-events-none"
                            : "opacity-100 translate-y-0"
                        }
                    `}
                >
                {time === PomodoroModes.Flow ? (
                    // ----- FLOW MODE -----
                    start ? (
                        <button className="button" onClick={stopTimer}>
                            Pausar
                        </button>
                    ) : (
                        <button className="button" onClick={startTimer}>
                            {flowElapsed > 0 ? "Reanudar" : "Comenzar"}
                        </button>
                    )
                ) : (
                    // ----- MODOS CLÁSICOS -----
                    start ? (
                        <button className="button" onClick={stopTimer}>
                            Pausar
                        </button>
                    ) : (
                        <button className="button" onClick={startTimer}>
                            Comenzar
                        </button>
                    )
                )}
                {time === PomodoroModes.Flow && !start && flowElapsed > 0 && (
                    flowElapsed >= 60 ? (
                        // ---- BOTÓN GUARDAR ----
                        <button
                            className="button ml-4"
                            onClick={handleSaveFlow}
                        >
                            Guardar sesión
                        </button>
                    ) : (
                        // ---- BOTÓN CANCELAR ----
                        <button
                            className="button ml-4 bg-red-500"
                            onClick={() => setFlowElapsed(0)}
                        >
                            Cancelar Flow
                        </button>
                    )
                )}
                    
                </div>
        </div>
    </div>
    );
}

export default Pomopage;
