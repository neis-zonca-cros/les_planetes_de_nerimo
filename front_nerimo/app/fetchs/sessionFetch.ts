import AsyncStorage from "@react-native-async-storage/async-storage";
import apiFetch from "./apiService";

export interface Session {
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
  };
}

interface SessionsResponse {
  data: Session[];
}

export async function getSessions(): Promise<Session[]> {
  try {
    const token = await AsyncStorage.getItem("token");
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
