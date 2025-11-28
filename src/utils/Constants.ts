import { Card } from '../models/utils-models'
import Fatiga from '../assets/medium-shot-guy-expressing-victory.jpg'
import Gestion from '../assets/defocused-smiley-woman-holding-light-bulb-clock.jpg'
import Memoria from '../assets/young-man-writing-notebook-study-session.jpg'

export const FATIGA_TITLE = "😮‍💨 Evita la fatiga mental";
export const FATIGA_DESC = "Trabajar en bloques de tiempo con pausas regulares previene el agotamiento y mejora el enfoque a largo plazo.";

export const GESTION_TITLE = "😉 Mejora la gestión del tiempo";
export const GESTION_DESC = "Saber que tienes un tiempo limitado para trabajar en una tarea ayuda a evitar distracciones y procrastinación.";

export const MEMORIA_TITLE = "😎 Favorece a la memoria y al aprendizaje";
export const MEMORIA_DESC = "Trabajar en bloques de tiempo con pausas regulares previene el agotamiento y mejora el enfoque a largo plazo.";

// Cartas de Información INICIO
export const DataCards: Card[] = [
    {    
        id: 1,
        title: FATIGA_TITLE,
        description: FATIGA_DESC,
        img: Fatiga,
    },
    {
        id: 2,
        title: GESTION_TITLE,
        description: GESTION_DESC,
        img: Gestion,
    },
    {
        id: 3,
        title: MEMORIA_TITLE,
        description: MEMORIA_DESC,
        img: Memoria,
    }
];

// Constantes del Pomodoro
export type Start = boolean;
export const CLASSIC = 25 * 60;
export const INTENSE = 50 * 60;
export const THEMUSE = 52 * 60;
export const FLOW = 0;

// Constantes del descanso;
export const BREAK_SHORT = 5 * 60;
export const BREAK_MEDIUM = 10 * 60;
export const BREAK_MUSE = 17 * 60;
export const BREAK_LONG = 15 * 60;


export const WORK = "work"
export const BREAK = "break"

// Modos de Pomodoro
export const PomodoroModes = {
    Classic: { work: CLASSIC, break: BREAK_SHORT },
    Intense: { work: INTENSE, break: BREAK_MEDIUM },
    Muse: { work: THEMUSE, break: BREAK_MUSE },
    Flow: { work: FLOW, break: FLOW },
} as const;

// Tipo que corresponde a cualquiera de los valores dentro de PomodoroModes.
export type PomodoroMode = (typeof PomodoroModes)[keyof typeof PomodoroModes];


export enum PomodoroPhases {
    Work = WORK,
    Break = BREAK,
}

// Propiedades del Pomodoro
export type PomodoroProps = {
    start: Start;
    time: PomodoroMode;
    phase: PomodoroPhases;
    onFinish?: (finished: PomodoroPhases) => void
}

export type PomoFlowProps = {
    start: Start;
    onTick?: (time: number) => void;
}

// Propiedades para la botonera
export type ButtonerProps = {
    start: boolean;
    time: PomodoroMode;
    setStart: React.Dispatch<React.SetStateAction<boolean>>;
    setTime: React.Dispatch<React.SetStateAction<PomodoroMode>>;
};

// Fases del Pomodoro
export type Phase = "work" | "break"

