import TopBar from "@/app/components/TopBar";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { RootStackParamList } from "@/app/types";
import { StackNavigationProp } from "@react-navigation/stack";
import { useTheme } from "@/app/hooks/themeContext";
import { useNavigation } from "@react-navigation/native";
import { darkTheme } from "@/app/themes/dark";
import { CompteIcon } from "@/app/assets/icons/compteIcon";
import { ConnexionIcon } from "@/app/assets/icons/connexionIcon";
import useGoToConnect from "@/app/navigation/useGoToConnect";
import useGoToCreerUnCompte from "@/app/navigation/useGoToCreerCompte";
import { ThemedStyles } from "@/app/utils/styles";

type AccueilAvantConnexionScreen = StackNavigationProp<
  RootStackParamList,
  "AccueilAvantConnexion"
>;
const AccueilAvantConnexion: React.FC = () => {
  const navigation = useNavigation<AccueilAvantConnexionScreen>();
  const { theme } = useTheme();
  const goSeConnecter = useGoToConnect();
  const goCreerUnCompte = useGoToCreerUnCompte();
  const screenWidth = Dimensions.get("window").width;
  const styleTheme = ThemedStyles(theme);

  const iconeDroitePress = () => {
    navigation.navigate("MenuInitial");
    console.log("bouton 2 pressé");
  };

  const mdpOublie = () => {
    console.log("bouton mdp oublié touché");
  };

  return (
    <View style={styleTheme.container}>
      <TopBar
        titre=""
        iconeDroiteNom="planet-outline"
        iconeDroiteAction={iconeDroitePress}
      />

      <View style={styles.bottomIconsContainer}>
        <TouchableOpacity onPress={goSeConnecter} style={{ paddingVertical: 2 }}>
          <View style={theme.colors.effectShadow}>
            <ConnexionIcon
              width={screenWidth * 0.22}
              fill={theme.colors.primaryButton}
              background={theme.colors.background}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={goCreerUnCompte} style={{ paddingVertical: 2 }}>
          <View style={theme.colors.effectShadow}>
            <CompteIcon
              width={screenWidth * 0.22}
              fill={theme.colors.secondaryButton}
              background={theme.colors.background}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
        <Text onPress={mdpOublie} style={styleTheme.text}>
          Mot de passe oublié ?
        </Text>
      </View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomIconsContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    paddingTop: 5,
  }
});

export default AccueilAvantConnexion;
