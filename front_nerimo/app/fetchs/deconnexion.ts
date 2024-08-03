// fetchs/deconnexion.ts

import AsyncStorage from "@react-native-async-storage/async-storage";

export const logout = async () => {
  try {
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("utilisateurId");
  } catch (error) {
    console.error("Erreur lors de la déconnexion:", error);
    throw error;
  }
};
