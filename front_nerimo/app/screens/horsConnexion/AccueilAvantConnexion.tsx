import TopBar from "@/components/navigation/TopBar";
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
import { useTheme } from "@/themes/themeContext";
import { useNavigation } from "@react-navigation/native";
import { darkTheme } from "@/themes/dark";
import { CompteIcon } from "@/themes/icones/compteIcon";
import { ConnexionIcon } from "@/themes/icones/connexionIcon";
import useGoToConnect from "@/components/navigation/useGoToConnect";
import useGoToCreerUnCompte from "@/components/navigation/useGoToCreerCompte";

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

  const iconeDroitePress = () => {
    navigation.navigate("MenuInitial");
    console.log("bouton 2 pressé");
  };

  const mdpOublie = () => {
    console.log("bouton mdp oublié touché");
  };

  return (
    <View style={theme.container}>
      <TopBar
        titre=""
        iconeDroiteNom="planet-outline"
        iconeDroiteAction={iconeDroitePress}
      />

      <View style={styles.bottomIconsContainer}>
        <TouchableOpacity onPress={goSeConnecter} style={styles.icon}>
          <View style={theme.iconeShadow}>
            <ConnexionIcon
              width={screenWidth * 0.22}
              fill={theme === darkTheme ? "#FFAD80" : "#825C6E"}
              background={theme === darkTheme ? "#23363E" : "#FAE6BB"}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={goCreerUnCompte} style={styles.icon}>
          <View style={theme.iconeShadow}>
            <CompteIcon
              width={screenWidth * 0.22}
              fill={theme === darkTheme ? "#FFCD69" : "#E7A74F"}
              background={theme === darkTheme ? "#23363E" : "#FAE6BB"}
            />
          </View>
        </TouchableOpacity>
        <Text onPress={mdpOublie} style={theme.titreSmall}>
          Mot de passe oublié ?
        </Text>
      </View>
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
  icon: {
    paddingVertical: 5,
  },
});

export default AccueilAvantConnexion;
