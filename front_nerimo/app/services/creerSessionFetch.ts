import apiFetch from './apiService';
import { getCredentials } from './credentials/getCredentials';
import { Session } from './sessionFetch';

export interface Planete {
  _id: string;
  nom: string;
}

export interface Personnage {
  _id: string;
  nom: string;
  histoire: string;
  planeteRef: {
    _id: string;
    nom: string;
  };
}

export interface CreateSessionData {
  prenom: string;
  planeteRef: string;
  personnageRef: string;
}

interface PlanetesResponse {
  data: Planete[];
}

interface PersonnagesResponse {
  data: Personnage[];
}

interface CreateSessionResponse {
  message: string;
  data: Session;
}

export async function getPlanetes(): Promise<Planete[]> {
  try {
    const { token } = await getCredentials();
    if (!token) {
      throw new Error('Token non trouvé');
    }

    const response = await apiFetch<PlanetesResponse>('planete', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des planètes:', error);
    throw error;
  }
}

export async function getPersonnagesByPlanete(planeteId: string): Promise<Personnage[]> {
  try {
    const { token } = await getCredentials();
    if (!token) {
      throw new Error('Token non trouvé');
    }

    const response = await apiFetch<PersonnagesResponse>(`personnage/${planeteId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('Response from API: ', response);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des personnages:', error);
    throw error;
  }
}

export async function createSession(sessionData: CreateSessionData): Promise<Session> {
  try {
    const { token } = await getCredentials();
    if (!token) {
      throw new Error('Token non trouvé');
    }
    console.log(sessionData);
    const response = await apiFetch<CreateSessionResponse>('session/creer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: sessionData,
    });

    console.log('Réponse du backend après création de session :', response);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la création de la session:', error);
    throw error;
  }
}
