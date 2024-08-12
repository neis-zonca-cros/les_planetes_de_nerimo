import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useTheme } from "@/app/hooks/themeContext";
import TopBar from "@/app/components/TopBar";
import { darkTheme } from "@/app/themes/dark";
import { AProposIcon } from "@/app/assets/icons/aProposIcon";
import useGoBack from "@/app/navigation/useGoBack";
import { ScrollView } from "react-native-gesture-handler";
import { ProfilRondIcon } from "@/app/assets/icons/profilRondIcon";
import { DeconnexionRondIcon } from "@/app/assets/icons/deconnexionRondIcon";
import { useUser } from "../../hooks/userContext";
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
      await deconnexion();
      navigation.navigate("Bienvenue");
    } catch (error) {
      console.error("Erreur lors de la déconnexion:", error);
    }
  };

  const goToProfil = () => { 
    navigation.navigate("MonProfil");
   };

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <TopBar
        titre="Menu de"
        prenom={utilisateur?.prenom}
        iconeDroiteNom="close-outline"
        iconeDroiteAction={goBack}
      />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={goToProfil}>
              <View style={theme.colors.effectShadow}>
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
              <View style={theme.colors.effectShadow}>
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
              <View style={theme.colors.effectShadow}>
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
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
});
export default MenuUtilisateur;
