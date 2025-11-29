import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "@/../firebase";

export interface UserProfile {
  username: string;
  email: string;
  createdAt: Date;
}

export async function createUserProfile(uid: string, data: UserProfile) {
  await setDoc(doc(db, "users", uid), data);
}
export const getUserProfile = async (uid: string) => {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!", uid);
    return null;
  }
};
