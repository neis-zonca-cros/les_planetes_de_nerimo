import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Dimensions,
} from "react-native";
import { useTheme } from "@/themes/themeContext";
import TopBar from "@/components/navigation/TopBar";
import { darkTheme } from "@/themes/dark";
import { AProposIcon } from "@/themes/icones/aProposIcon";
import useGoBack from "@/components/navigation/useGoBack";
import { ScrollView } from "react-native-gesture-handler";
import { ProfilRondIcon } from "@/themes/icones/profilRondIcon";
import { DeconnexionRondIcon } from "@/themes/icones/deconnexionRondIcon";
import { useUser } from "../userContext";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/app/types";
import { useNavigation } from "@react-navigation/native";

type MenuUtilisateurScreen = StackNavigationProp<RootStackParamList, "MenuUtilisateur">;

const MenuUtilisateur: React.FC = () => {
  const navigation = useNavigation<MenuUtilisateurScreen>();
  const { utilisateur, deconnexion } = useUser(); 
  const { theme } = useTheme();
  const goBack = useGoBack();
  const screenHeight = Dimensions.get("window").height;
  const handleLogout = async () => {
    try {
      await deconnexion("Bienvenue");
    } catch (error) {
      console.error("Erreur lors de la déconnexion:", error);
      Alert.alert("Erreur", "La déconnexion a échoué. Veuillez réessayer.");
    }
  };

  const goToProfil = () => { 
    navigation.navigate("MonProfil");
   };

  return (
    <View style={theme.container}>
      <TopBar
        titre="Menu"
        prenom={utilisateur?.prenom}
        iconeDroiteNom="close-outline"
        iconeDroiteAction={goBack}
      />
      <ScrollView contentContainerStyle={theme.scrollViewContent}>
        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={goToProfil}>
              <View style={theme.iconeShadow}>
                <ProfilRondIcon
                  width={screenHeight * 0.25}
                  fill={theme === darkTheme ? "#FFCD69" : "#E7A74F"}
                  background={theme === darkTheme ? "#23363E" : "#FAE6BB"}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={handleLogout}>
              <View style={theme.iconeShadow}>
                <DeconnexionRondIcon
                  width={screenHeight * 0.25}
                  fill={theme === darkTheme ? "#FFAD80" : "#825C6E"}
                  background={theme === darkTheme ? "#23363E" : "#FAE6BB"}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <View style={theme.iconeShadow}>
                <AProposIcon
                  width={screenHeight * 0.25}
                  fill={theme === darkTheme ? "#FAE6BB" : "#23363E"}
                  background={theme === darkTheme ? "#23363E" : "#FAE6BB"}
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
export default MenuUtilisateur;
