import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/app/types";
import { useTheme } from "@/themes/themeContext";
import TopBar from "@/components/navigation/TopBar";
import { CompteRondIcon } from "@/themes/icones/compteRondIcon";
import { darkTheme } from "@/themes/dark";
import { ConnexionRondIcon } from "@/themes/icones/connexionRondIcon";
import { AProposIcon } from "@/themes/icones/aProposIcon";
import { lightTheme } from "@/themes/light";
import LightThemeIcon from "@/themes/icones/lightThemIcon";
import { DarkThemeIcon } from "@/themes/icones/darkThemIcon";
import useGoBack from "@/components/navigation/useGoBack";
import useGoToConnect from "@/components/navigation/useGoToConnect";
import useGoToCreerUnCompte from "@/components/navigation/useGoToCreerCompte";
import { ScrollView } from "react-native-gesture-handler";

type MenuInitialScreen = StackNavigationProp<RootStackParamList, "MenuInitial">;

const MenuInitial: React.FC = () => {
  const navigation = useNavigation<MenuInitialScreen>();
  const { theme, toggleTheme } = useTheme();
  const goBack = useGoBack();
  const goSeConnecter = useGoToConnect();
  const goCreerUnCompte = useGoToCreerUnCompte();

  return (
    <View style={theme.container}>
      <TopBar
        titre="Menu d'embarcation"
        prenom="sur Nérimo"
        iconeDroiteNom="close-outline"
        iconeDroiteAction={goBack}
      />
      <ScrollView contentContainerStyle={theme.scrollViewContent}>
        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={goCreerUnCompte}>
              <View style={theme.iconeShadow}>
                <CompteRondIcon
                  width={120}
                  fill={theme === darkTheme ? "#FFCD69" : "#E7A74F"}
                  background={theme === darkTheme ? "#23363E" : "#FAE6BB"}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={goSeConnecter}>
              <View style={theme.iconeShadow}>
                <ConnexionRondIcon
                  width={120}
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
                  width={120}
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
export default MenuInitial;
