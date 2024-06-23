import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/themes/themeContext";
import LightThemeIcon from "@/themes/icones/lightThemIcon";
import { DarkThemeIcon } from "@/themes/icones/darkThemIcon";
import { lightTheme } from "@/themes/light";
import { darkTheme } from "@/themes/dark";


type AccueilApresConnexionScreen = StackNavigationProp<RootStackParamList, "AccueilApresConnexion">;

const AccueilApresConnexion: React.FC = () => {
  const navigation = useNavigation<AccueilApresConnexionScreen>();
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={theme.container}>
      <Text style={theme.titreMedium}>Bienvenue, tu es connectée ! !</Text>

    </View>
  );
};

export default AccueilApresConnexion;
