// fetchs/deconnexion.ts
import { clearCredentials } from "./clearCredentials";

export const logout = async () => {
  try {
    await clearCredentials();
    console.log("Déconnexion réussie")
    
  } catch (error) {
    console.error("Erreur lors de la déconnexion:", error);
    throw error;
  }
};
