import { db } from '@/../firebase';
import { collection, addDoc } from 'firebase/firestore';

interface PomodoroSession {
  userId: string;
  startTime: Date;
  endTime: Date;
  duration: number; 
  type: 'classic' | 'intensive' | 'the-muse' | 'flow';
}

export async function savePomodoroSession (session : PomodoroSession){
  try{
    await addDoc(collection(db,'pomodoroSessions'), {
      userId: session.userId,
      startTime: session.startTime,
      endTime: session.endTime,
      duration: session.duration,
      type: session.type 
    });
    console.log("Sesión guardada.")
  } catch(error){
    console.error("Error guardando sesión: ", error);
  }
}