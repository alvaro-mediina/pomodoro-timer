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


// Fases del Pomodoro
export type Phase = "work" | "break"

//Información de modos
export const ModeInfo = {
    Classic: {
        name: "Clásico (25/5)",
        desc: "El método Pomodoro tradicional. Ideal para mantener constancia sin agotarte.",
        work: PomodoroModes.Classic.work,
        break: PomodoroModes.Classic.break,
        details: [
            "25 minutos de foco intenso",
            "5 minutos de descanso",
            "Se recomiendan ciclos de 4 antes de un descanso largo"
        ]
    },

    Intense: {
        name: "Intensive Work (50/10)",
        desc: "Para sesiones largas de concentración sin interrupciones. Exigente para el cerebro.",
        work: PomodoroModes.Intense.work,
        break: PomodoroModes.Intense.break,
        details: [
            "50 minutos de trabajo continuo",
            "10 minutos de descanso profundo",
            "Ideal para tareas largas o complejas"
        ]
    },

    Muse: {
        name: "The Muse (52/17)",
        desc: "Basado en el método 52/17. Estudios sugieren que 52 min de foco + 17 min de descanso maximizan productividad.",
        work: PomodoroModes.Muse.work,
        break: PomodoroModes.Muse.break,
        details: [
            "52 minutos de trabajo sostenido",
            "17 minutos de descanso real para reiniciar",
            "Útil para largas jornadas creativas o cognitivas"
        ]
    },

    Flow: {
        name: "Flow Mode",
        desc: "Un modo libre sin temporizador fijo. Trabaja hasta que pierdas el flow y guarda tu sesión.",
        work: 0,
        break: 0,
        details: [
            "Sin tiempo predeterminado",
            "Cuenta minutos reales trabajados",
            "Ideal para estudiar sin estructura estricta"
        ]
    }
} as const;

export const ModeKeys = {
    [PomodoroModes.Classic.work]: "Classic",
    [PomodoroModes.Intense.work]: "Intense",
    [PomodoroModes.Muse.work]: "Muse",
    [PomodoroModes.Flow.work]: "Flow",
} as const;