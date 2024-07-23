import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/app/types";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/themes/themeContext";
import LightThemeIcon from "@/themes/icones/lightThemIcon";
import { DarkThemeIcon } from "@/themes/icones/darkThemIcon";
import { lightTheme } from "@/themes/light";
import { darkTheme } from "@/themes/dark";
import TopBar from "@/components/navigation/TopBar";

type BienvenueScreen = StackNavigationProp<RootStackParamList, "Bienvenue">;

const Bienvenue: React.FC = () => {
  const navigation = useNavigation<BienvenueScreen>();
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={theme.container}>
      <TopBar
        titre="Bienvenue sur les"
        prenom="planètes de Nérimo"
 
      />
      <View style={theme.iconeContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate("AccueilAvantConnexion")}
        
      >
        <View style={theme.iconeShadow}>
          <Ionicons
            name="arrow-forward-circle"
            size={110}
            style={theme.iconeColor}
          />
        </View>
      </TouchableOpacity></View>

    </View>
  );
};

export default Bienvenue;
