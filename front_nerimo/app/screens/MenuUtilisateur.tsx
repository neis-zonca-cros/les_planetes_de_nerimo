import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { useTheme } from "@/themes/themeContext";
import TopBar from "@/components/navigation/TopBar";
import { darkTheme } from "@/themes/dark";
import { AProposIcon } from "@/themes/icones/aProposIcon";
import useGoBack from "@/components/navigation/useGoBack";
import { ScrollView } from "react-native-gesture-handler";
import { ProfilRondIcon } from "@/themes/icones/profilRondIcon";
import { DeconnexionRondIcon } from "@/themes/icones/deconnexionRondIcon";

type MenuUtilisateurScreen = StackNavigationProp<
  RootStackParamList,
  "MenuUtilisateur"
>;

const MenuUtilisateur: React.FC = () => {
  const navigation = useNavigation<MenuUtilisateurScreen>();
  const { theme } = useTheme();
  const goBack = useGoBack();

  return (
    <View style={theme.container}>
      <TopBar
        titre=""
        iconeAvantTitre="arrow-back"
        iconeAvantTitreAction={goBack}
      />
      <ScrollView contentContainerStyle={theme.scrollViewContent}>
        <Text style={theme.titreMedium}>MENU</Text>
        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <View style={theme.iconeShadow}>
                <ProfilRondIcon
                  width={120}
                  fill={theme === darkTheme ? "#FFCD69" : "#E7A74F"}
                  background={theme === darkTheme ? "#23363E" : "#FAE6BB"}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <View style={theme.iconeShadow}>
                <DeconnexionRondIcon
                  width={120}
                  fill={theme === darkTheme ? "#FFAD80" : "#825C6E"}
                  background={theme === darkTheme ? "#23363E" : "#FAE6BB"}
                />
              </View>
            </TouchableOpacity>
          </View>
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
    flexDirection: "column",
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
