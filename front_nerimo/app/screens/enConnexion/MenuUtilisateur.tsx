import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";
import { useTheme } from "@/themes/themeContext";
import TopBar from "@/components/navigation/TopBar";
import { darkTheme } from "@/themes/dark";
import { AProposIcon } from "@/themes/icones/aProposIcon";
import useGoBack from "@/components/navigation/useGoBack";
import { ScrollView } from "react-native-gesture-handler";
import { ProfilRondIcon } from "@/themes/icones/profilRondIcon";
import { DeconnexionRondIcon } from "@/themes/icones/deconnexionRondIcon";
import { logout } from "../../fetchs/deconnexion";

type MenuUtilisateurScreen = StackNavigationProp<
  RootStackParamList,
  "MenuUtilisateur"
>;

const MenuUtilisateur: React.FC = () => {
  const navigation = useNavigation<MenuUtilisateurScreen>();
  const { theme } = useTheme();
  const goBack = useGoBack();
  const screenHeight = Dimensions.get("window").height;
  const handleLogout = async () => {
    try {
      await logout(navigation, "Bienvenue");
    } catch (error) {
      console.error("Erreur lors de la déconnexion:", error);
      Alert.alert("Erreur", "La déconnexion a échoué. Veuillez réessayer.");
    }
  };
  return (
    <View style={theme.container}>
      <TopBar
        titre="Menu"
        prenom="sur Nérimo"
        iconeDroiteNom="close-outline"
        iconeDroiteAction={goBack}
      />
      <ScrollView contentContainerStyle={theme.scrollViewContent}>
        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <TouchableOpacity>
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
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100,
    paddingHorizontal: 16,
  },
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
