/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState, ReactNode } from 'react';

import login from '@/app/services/connexionFetch';
import { logout } from '@/app/services/deconnexion';
import { getUtilisateur } from '@/app/services/utilisateurFetch';

interface User {
  _id: string;
  prenom: string;
  email: string;
}

interface UserContextType {
  utilisateur: User | null;
  isLoading: boolean;
  error: string | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  refreshUser: () => Promise<void>;
  resetUser: () => void;
  connexion: (email: string, mdp: string) => Promise<void>;
  deconnexion: () => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [utilisateur, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const userData = await getUtilisateur();
      setUser(userData);
    } catch (error) {
      console.error('Erreur lors de la récupération des données utilisateur:', error);
      setError('Erreur lors de la récupération des données utilisateur.');
    } finally {
      setIsLoading(false);
    }
  };

  const refreshUser = async () => {
    if (utilisateur) {
      await fetchUser();
    }
  };

  const resetUser = () => {
    setUser(null);
  };

  const loginHandler = async (email: string, mdp: string) => {
    setError(null);
    setIsLoading(true);
    const mail = email;
    const password = mdp;
    try {
      await login(mail, password);
      await fetchUser();
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      setError('Erreur lors de la connexion.');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logoutHandler = async () => {
    setError(null);
    try {
      await logout();
      resetUser();
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
      setError('Erreur lors de la déconnexion.');
      throw error;
    }
  };

  return (
    <UserContext.Provider
      value={{
        utilisateur,
        isLoading,
        error,
        setUser,
        refreshUser,
        resetUser,
        connexion: loginHandler,
        deconnexion: logoutHandler,
      }}
    >
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
