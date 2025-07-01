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