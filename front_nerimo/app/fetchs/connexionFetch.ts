import AsyncStorage from "@react-native-async-storage/async-storage";
import apiFetch from "./apiService";

interface LoginResponse {
  token: string;
  userId: string;
}

async function login(email: string, mdp: string): Promise<string> {
  try {
    const response = await apiFetch<LoginResponse>("utilisateur/connexion", {
      method: "POST",
      body: { email, mdp },
    });

    const { token, userId } = response;

    await AsyncStorage.setItem("token", token);
    await AsyncStorage.setItem("userId", userId);

    return token;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
}

export default login;
