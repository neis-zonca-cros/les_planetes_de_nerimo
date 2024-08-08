// sessionContext.ts
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getSessions, deleteSession } from '@/app/services/sessionFetch'; 
import { createSession } from '@/app/services/creerSessionFetch'; 

interface CreateSessionData {
  prenom: string;
  sauvegarde: string;
  planeteRef: string;
  personnageRef: string;
}

interface Session {
  _id: string;
  prenom: string;
  utilisateurRef: {
    _id: string;
    prenom: string;
  };
  planeteRef: {
    _id: string;
    nom: string;
  };
  personnageRef: {
    _id: string;
    nom: string;
    histoire: string;
  };
}

interface SessionContextType {
  sessions: Session[] | null;
  setSessions: React.Dispatch<React.SetStateAction<Session[] | null>>;
  refreshSessions: () => Promise<void>;
  createNewSession: (sessionData: CreateSessionData) => Promise<void>;
  removeSession: (sessionId: string) => Promise<void>;
  currentSession: Partial<CreateSessionData> | null;
  setCurrentSession: React.Dispatch<React.SetStateAction<Partial<CreateSessionData> | null>>;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const SessionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sessions, setSessions] = useState<Session[] | null>(null);
  const [currentSession, setCurrentSession] = useState<Partial<CreateSessionData> | null>(null);

  const fetchSessions = async () => {
    try {
      const sessionData = await getSessions();
      setSessions(sessionData);
    } catch (error) {
      console.error("Erreur lors de la récupération des sessions:", error);
    }
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  const refreshSessions = async () => {
    await fetchSessions();
  };

  const createNewSession = async (sessionData: CreateSessionData) => {
    try {
      await createSession(sessionData);
      await fetchSessions();
      setCurrentSession(null); 
    } catch (error) {
      console.error("Erreur lors de la création de la session:", error);
      throw error;
    }
  };

  const removeSession = async (sessionId: string) => {
    try {
      await deleteSession(sessionId);
      await fetchSessions();
    } catch (error) {
      console.error("Erreur lors de la suppression de la session:", error);
      throw error;
    }
  };

  return (
    <SessionContext.Provider value={{ 
      sessions, 
      setSessions, 
      refreshSessions, 
      createNewSession, 
      removeSession,
      currentSession, 
      setCurrentSession 
    }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error('useSession must be used within a SessionProvider');
  }
  return context;
};
