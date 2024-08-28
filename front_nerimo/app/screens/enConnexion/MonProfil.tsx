import React from "react";
import { View, Alert } from "react-native";
import { useTheme } from "@/app/hooks/themeContext";
import TopBar from "@/app/components/TopBar";
import { Dimensions } from "react-native";
import { useUser } from "../../hooks/userContext";
import useGoBack from "@/app/navigation/useGoBack";
import { ThemedStyles } from "@/app/utils/styles";
import { RootStackParamList } from "@/app/types";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";


type MonProfilScreen = StackNavigationProp<RootStackParamList, "MonProfil">;

const MonProfil: React.FC = () => {
  const navigation = useNavigation<MonProfilScreen>();
  const { theme } = useTheme();
  const { utilisateur } = useUser();
  const goBack = useGoBack();
  const styleTheme = ThemedStyles(theme);

  return (
    <View style={styleTheme.container}>
      <TopBar titre="Informations de" prenom={utilisateur?.prenom} iconeDroiteAction={goBack} iconeDroiteNom={"close-outline"} />

    </View>
  );
};
export default MonProfil;


