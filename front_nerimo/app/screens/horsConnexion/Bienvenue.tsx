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

type BienvenueScreen = StackNavigationProp<RootStackParamList, "Bienvenue">;

const Bienvenue: React.FC = () => {
  const navigation = useNavigation<BienvenueScreen>();
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={theme.container}>
      <Text style={theme.titreLarge}>
        Bienvenue sur les planètes de Nérimo !
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("AccueilAvantConnexion")}
        style={theme.iconeContainer}
      >
        <View style={theme.iconeShadow}>
          <Ionicons
            name="arrow-forward-circle"
            size={110}
            style={theme.iconeColor}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleTheme} style={theme.iconeContainer}>
        {theme === lightTheme ? (
          <View style={theme.iconeShadow}>
            <LightThemeIcon
              width={80}
              background={theme === darkTheme ? "#23363E" : "#FAE6BB"}
            />
          </View>
        ) : (
          <View style={theme.iconeShadow}>
            <DarkThemeIcon
              width={80}
              background={theme === darkTheme ? "#23363E" : "#FAE6BB"}
            />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Bienvenue;
