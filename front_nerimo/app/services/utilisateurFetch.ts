import apiFetch from "./apiService";
import { getCredentials } from "./credentials/getCredentials";
import { Alert } from "react-native";

interface UtilisateurResponse {
  data: {
    _id: string;
    prenom: string;
    email: string;
  };
  message: string;
}

interface CreateUserRequest {
  prenom: string;
  email: string;
  mdp: string;
  mdp_repeat: string;
}

interface CreateUserResponse {
  data: {
    _id: string;
    prenom: string;
    email: string;
  };
  message: string;
}

export async function getUtilisateur(): Promise<UtilisateurResponse["data"]> {
  try {
    const { token, utilisateurId } = await getCredentials();
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

export async function creerUtilisateur(
  userData: CreateUserRequest
): Promise<CreateUserResponse["data"]> {
  try {
    const response = await apiFetch<CreateUserResponse>("utilisateur/creer", {
      method: "POST",
      body: userData,
    });

    console.log("Réponse du backend après création de l'utilisateur :", response);

    return response.data;
  } catch (error: any) {
    console.error("Erreur lors de la création de l'utilisateur:", error);

    if (error.message === "L'email est déjà utilisé" || error.statusCode === 400) {
      Alert.alert("Création de compte impossible", "Cet email est déjà utilisé. Veuillez essayer avec un autre email.");
    } else {
      if (error.message !== "L'email est déjà utilisé" && error.statusCode === 400) {
        Alert.alert("Erreur", "Une erreur s'est produite lors de la création du compte. Veuillez réessayer.");
      }
    }

    throw error;
  }
}

