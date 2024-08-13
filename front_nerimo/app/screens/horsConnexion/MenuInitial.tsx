import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/app/types";
import { useTheme } from "@/app/hooks/themeContext";
import TopBar from "@/app/components/TopBar";
import { CompteRondIcon } from "@/app/assets/icons/compteRondIcon";
import { ConnexionRondIcon } from "@/app/assets/icons/connexionRondIcon";
import { AProposIcon } from "@/app/assets/icons/aProposIcon";
import useGoToConnect from "@/app/navigation/useGoToConnect";
import useGoToCreerUnCompte from "@/app/navigation/useGoToCreerCompte";
import { ScrollView } from "react-native-gesture-handler";
import { ThemedStyles } from "@/app/utils/styles";

type MenuInitialScreen = StackNavigationProp<RootStackParamList, "MenuInitial">;

const MenuInitial: React.FC = () => {
  const navigation = useNavigation<MenuInitialScreen>();
  const { theme } = useTheme();
  const goBackToAccueil = () => {
    navigation.navigate("AccueilAvantConnexion");
  };
  const styleTheme = ThemedStyles(theme);
  const goSeConnecter = useGoToConnect();
  const goCreerUnCompte = useGoToCreerUnCompte();
  const screenHeight = Dimensions.get("window").height;

  return (
    <View style={styleTheme.container}>
      <TopBar
        titre="Menu d'embarcation"
        prenom="sur Nérimo"
        iconeDroiteNom="close-outline"
        iconeDroiteAction={goBackToAccueil}
      />
      <ScrollView contentContainerStyle={styleTheme.scrollViewContent}>
        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={goCreerUnCompte}>
              <View style={theme.colors.effectShadow}>
                <CompteRondIcon
                  width={screenHeight * 0.25}
                  fill={theme.colors.secondaryButton}
                  background={theme.colors.background}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={goSeConnecter}>
              <View style={theme.colors.effectShadow}>
                <ConnexionRondIcon
                  width={screenHeight * 0.25}
                  fill={theme.colors.primaryButton}
                  background={theme.colors.background}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <View style={theme.colors.effectShadow}>
                <AProposIcon
                  width={screenHeight * 0.25}
                  fill={theme.colors.neutralButton}
                  background={theme.colors.background}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
});
export default MenuInitial;
