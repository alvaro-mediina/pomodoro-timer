// src/services/authService.ts
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from '@/../firebase';

export const register = async (email: string, password: string, username?: string) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  // Crear doc en Firestore para este UID
  await setDoc(doc(db, "users", user.uid), {
    username: username || "TomateX",
    email: email,
    streak: 0,
    totalMinutes: 0,
    sessionCount: 0
  });

  return userCredential;
};

export const login = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  return signOut(auth);
};
