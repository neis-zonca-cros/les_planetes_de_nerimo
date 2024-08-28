import React from "react";
import { View, StyleSheet, Text, Platform, Alert } from "react-native";
import { useTheme } from "@/app/hooks/themeContext";
import TopBar from "@/app/components/TopBar";
import { Dimensions } from "react-native";
import { ProfilRondIcon } from "@/app/assets/icons/profilRondIcon";
import { darkTheme } from "@/app/themes/dark";
import { useUser } from "../../hooks/userContext";
import ProfilItems from "@/app/components/profilItems";
import useGoBack from "@/app/navigation/useGoBack";
import { ThemedStyles } from "@/app/utils/styles";
import { RootStackParamList } from "@/app/types";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";


type MesInformationsScreen = StackNavigationProp<RootStackParamList, "MesInformations">;

const MesInformations: React.FC = () => {
  const navigation = useNavigation<MesInformationsScreen>();
  const { theme } = useTheme();
  const { utilisateur, deconnexion } = useUser();
  const screenHeight = Dimensions.get("window").height;
  const goBack = useGoBack();
  const styleTheme = ThemedStyles(theme);

  const handleLogout = async () => {
    try {
      await deconnexion();
      navigation.navigate("Bienvenue");
    } catch (error) {
      console.error("Erreur lors de la déconnexion:", error);
    }
  };

  function toggleMusic(value: boolean): void {
    if (value) {
      Alert.alert('Switch musique activé !', 'Le switch est maintenant activé.');
    } else {
      Alert.alert('Switch musique désactivé !', 'Le switch est maintenant désactivé.');
    };
  }
  return (
    <View style={styleTheme.container}>
      <TopBar titre="Profil de" prenom={utilisateur?.prenom} iconeDroiteAction={goBack} iconeDroiteNom={"close-outline"} />
      <View style={styles.mainContainer}>
        <View style={styles.leftContainer}>
          <View style={theme.colors.effectShadow}>
            <ProfilRondIcon
              width={screenHeight * 0.25}
              fill={theme.colors.primaryButton}
              background={theme.colors.background}
            />
          </View>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.containerBoutton}>
            <ProfilItems text="Mes informations" iconName="arrow-forward-outline"></ProfilItems>
            <ProfilItems text="Musique" isSwitch={true} onSwitchToggle={toggleMusic}></ProfilItems>
            <ProfilItems text="Lightmode" isSwitch={true}></ProfilItems>
            <ProfilItems text="Partir" iconName="log-out-sharp" onPress={handleLogout}></ProfilItems>
          </View></View>
      </View>
    </View>
  );
};
export default MesInformations;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "row",
  },
  leftContainer: {
    flex: 0.40,
    justifyContent: "center",
    alignItems: "center",
  },
  rightContainer: {
    flex: 0.60,
    justifyContent: "center",
    paddingTop: 20,
  },
  containerBoutton: {
    width: '100%',
    alignItems: 'flex-start'
  }
});