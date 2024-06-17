import React from "react";
import {
  View,
  Text,
  useColorScheme,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { darkTheme } from "@/themes/dark";
import { lightTheme } from "@/themes/light";
import { Ionicons } from "@expo/vector-icons";

type BienvenueScreen = StackNavigationProp<RootStackParamList, "Bienvenue">;

const Bienvenue: React.FC = () => {
  const navigation = useNavigation<BienvenueScreen>();

  const theme = useColorScheme();
  const styles = theme === "dark" ? darkTheme : lightTheme;

  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Bienvenue sur les planètes de Nérimo !</Text>
      <TouchableOpacity
        onPress={() => navigation.replace("Connexion")}
        style={styles.iconeContainer}
      >
        <Ionicons
          name="arrow-forward-circle"
          size={100}
          style={styles.iconeColor}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Bienvenue;
