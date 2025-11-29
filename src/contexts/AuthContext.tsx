// contexts/AuthContext.tsx
import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { getUserProfile } from '@/lib/firestore/users';
import { auth } from '@/../firebase'; // tu config

const AuthContext = createContext<{
  user: User | null;
  profile: any | null;
}>({
  user: null,
  profile: null
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<any | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        const data = await getUserProfile(firebaseUser.uid);
        setProfile(data);
      } else {
        setProfile(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, profile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
