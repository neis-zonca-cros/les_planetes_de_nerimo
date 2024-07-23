import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";

type NavigationProp = StackNavigationProp<RootStackParamList>;

export const logout = async (
  navigation: NavigationProp,
  routeName: keyof RootStackParamList
) => {
  try {
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("utilisateurId");

    navigation.replace(routeName);
  } catch (error) {
    console.error("Erreur lors de la déconnexion:", error);
    throw error;
  }
};
