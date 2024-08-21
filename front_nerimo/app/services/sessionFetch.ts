import apiFetch from "./apiService";
import { getCredentials } from "./credentials/getCredentials";

export interface Session {
  _id: string;
  prenom: string;
  choixSauvegarde?: string,
  texteSauvegarde?: string,
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

interface UpdateSessionResponse {
  message: string;
  data: Session;
}
interface UpdateSessionData {
  choixSauvegarde: string;
  texteSauvegarde: string;
}

type DeleteSessionResponse = {
  message: string;
  data: Session;
};

interface SessionsResponse {
  data: Session[];
}

export async function getSessions(): Promise<Session[]> {
  try {
    const { token } = await getCredentials();
    if (!token) {
      throw new Error("Token non trouvé");
    }

    const response = await apiFetch<SessionsResponse>("session", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des sessions:", error);
    throw error;
  }
}

export async function deleteSession(sessionId: string): Promise<Session> {
  try {
    const { token } = await getCredentials();
    if (!token) {
      throw new Error("Token non trouvé");
    }

    const response = await apiFetch<DeleteSessionResponse>(`session/${sessionId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Réponse du backend après suppression de session :", response);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la suppression de la session:", error);
    throw error;
  }
}

export async function updateSession(
  sessionId: string,
  choixSauvegarde: string,
  texteSauvegarde: string,
): Promise<Session> {
  try {
    const { token } = await getCredentials();
    if (!token) {
      throw new Error("Token non trouvé");
    }

    const body: UpdateSessionData = { choixSauvegarde: choixSauvegarde, texteSauvegarde: texteSauvegarde };

    const response = await apiFetch<UpdateSessionResponse>(`session/${sessionId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body,
    });

    console.log("Réponse du backend après mise à jour de la session :", response);

    return response.data;
  } catch (error) {
    console.error("Erreur lors de la mise à jour de la session :", error);
    throw error;
  }
}

export async function getSession(sessionId: string): Promise<Session> {
  try {
    const { token } = await getCredentials();
    if (!token) {
      throw new Error("Token non trouvé");
    }

    const response = await apiFetch<{ data: Session }>(`session/${sessionId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération de la session:", error);
    throw error;
  }
}