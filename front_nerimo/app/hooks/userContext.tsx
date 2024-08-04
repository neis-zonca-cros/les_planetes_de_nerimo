import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getUtilisateur } from '@/app/services/utilisateurFetch';
import { logout } from '../services/deconnexion';
import login from '../services/connexionFetch';

interface User {
  _id: string;
  prenom: string;
  email: string;
}

interface UserContextType {
  utilisateur: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  refreshUser: () => void;
  resetUser: () => void;
  connexion: (email: string, mdp: string) => Promise<void>;
  deconnexion: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [utilisateur, setUser] = useState<User | null>(null);

  const fetchUser = async () => {
    try {
      const userData = await getUtilisateur();
      setUser(userData);
    } catch (error) {
      console.error("Erreur lors de la récupération des données utilisateur:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const refreshUser = async () => {
    await fetchUser();
  };

  const resetUser = () => {
    setUser(null);
  };

  const loginHandler = async (email: string, mdp: string) => {
    try {
      await login(email, mdp);
      await fetchUser();
    } catch (error) {
      console.error("Erreur lors de la connexion:", error);
      throw error; 
    }
  };

  const logoutHandler = async () => {
    try {
      await logout(); 
      resetUser();
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
      throw error;
    }
  };
  
  return (
    <UserContext.Provider value={{ utilisateur, setUser, refreshUser, resetUser, connexion: loginHandler, deconnexion: logoutHandler }}>
      {children}
    </UserContext.Provider>
  );
};


export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
