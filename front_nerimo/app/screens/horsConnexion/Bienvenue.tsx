import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/app/types";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/themes/themeContext";
import TopBar from "@/components/navigation/TopBar";
import { Dimensions } from 'react-native';



type BienvenueScreen = StackNavigationProp<RootStackParamList, "Bienvenue">;

const Bienvenue: React.FC = () => {
  const navigation = useNavigation<BienvenueScreen>();
  const { theme } = useTheme();
  const screenHeight = Dimensions.get('window').height;

  return (
    <View style={theme.container}>
      <TopBar
        titre="Bienvenue sur les"
        prenom="planètes de Nérimo"
 
      />
      <View style={theme.iconeContainer}>
      <TouchableOpacity
        onPress={() => navigation.replace("AccueilAvantConnexion")}
        
      >
        <View style={theme.iconeShadow}>
          <Ionicons
            name="arrow-forward-circle"
            size={screenHeight *0.2}
            style={theme.iconeColor}
          />
        </View>
      </TouchableOpacity></View>

    </View>
  );
};

export default Bienvenue;
