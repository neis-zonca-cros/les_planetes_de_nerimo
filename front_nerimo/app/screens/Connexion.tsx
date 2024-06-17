import TopBar from "@/components/navigation/TopBar";
import { darkTheme } from "@/themes/dark";
import { lightTheme } from "@/themes/light";
import React from "react";
import { View, Text, useColorScheme } from "react-native";
import { RootStackParamList } from "../types";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

type ConnexionScreen = StackNavigationProp<RootStackParamList, "Connexion">;
const Connexion: React.FC = () => {
  const navigation = useNavigation<ConnexionScreen>();
  const theme = useColorScheme();
  const styles = theme === "dark" ? darkTheme : lightTheme;

  const iconeDroitePress = () => {
    console.log("bouton 2 pressé");
  };

  return (
    <View style={styles.container}>
      <TopBar
        titre=""
        iconeDroiteNom="planet-outline"
        iconeDroiteAction={iconeDroitePress}
      />
      <Text style={styles.text}>PAGE DE CONNEXION</Text>
    </View>
  );
};

export default Connexion;
