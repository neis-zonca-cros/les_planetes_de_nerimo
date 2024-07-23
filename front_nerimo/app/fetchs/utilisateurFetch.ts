import AsyncStorage from "@react-native-async-storage/async-storage";
import apiFetch from "./apiService";

interface UtilisateurResponse {
  data: {
    _id: string;
    prenom: string;
    email: string;
  };
  message: string;
}

export async function getUtilisateur(): Promise<UtilisateurResponse["data"]> {
  try {
    const token = await AsyncStorage.getItem("token");
    const utilisateurId = await AsyncStorage.getItem("utilisateurId");
    if (!token) {
      throw new Error("Token non trouvé");
    }
    if (!utilisateurId) {
      throw new Error("ID utilisateur non trouvé");
    }

    const response = await apiFetch<UtilisateurResponse>(
      `utilisateur/${utilisateurId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response || !response.data) {
      throw new Error("Réponse de l'API invalide");
    }

    return response.data;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des informations utilisateur:",
      error
    );
    throw error;
  }
}
