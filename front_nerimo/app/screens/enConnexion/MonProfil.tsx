import React from "react";
import { View, StyleSheet, Text, Platform, Alert } from "react-native";
import { useTheme } from "@/app/hooks/themeContext";
import TopBar from "@/app/components/TopBar";
import { Dimensions } from "react-native";
import { ProfilRondIcon } from "@/app/assets/icons/profilRondIcon";
import { darkTheme } from "@/app/constants/dark";
import { useUser } from "../../hooks/userContext";
import ProfilItems from "@/app/components/profilItems";
import useGoBack from "@/app/navigation/useGoBack";

const MonProfil: React.FC = () => {
  const { theme } = useTheme();
  const { utilisateur } = useUser();
  const screenHeight = Dimensions.get("window").height;
  const goBack = useGoBack();

  function toggleMusic(value: boolean): void {
    if (value) {
      Alert.alert('Switch musique activé !', 'Le switch est maintenant activé.');
    } else {
      Alert.alert('Switch musique désactivé !', 'Le switch est maintenant désactivé.');
    };
  }
  return (
    <View style={theme.container}>
      <TopBar titre="Profil de" prenom={utilisateur?.prenom} iconeDroiteAction={goBack} iconeDroiteNom={"close-outline"}/>
      <View style={styles.mainContainer}>
        <View style={styles.leftContainer}>
          <View style={theme.iconeShadow}>
            <ProfilRondIcon
              width={screenHeight * 0.25}
              fill={theme === darkTheme ? "#FFAD80" : "#825C6E"}
              background={theme === darkTheme ? "#23363E" : "#FAE6BB"}
            />
          </View>
        </View>
        <View style={styles.rightContainer}>
          <ProfilItems text="Musique" isSwitch={true} onSwitchToggle={toggleMusic}></ProfilItems>
          <ProfilItems text="Lightmode" isSwitch={true}></ProfilItems>
          <ProfilItems text="Mes informations" iconName="arrow-forward-outline"></ProfilItems>
          <ProfilItems text="Partir" iconName="log-out-sharp"></ProfilItems>
        </View>
      </View>
    </View>
  );
};
export default MonProfil;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftContainer: {
    flex: 0.40,
    justifyContent: "center",
    alignItems: "center",
  },
  rightContainer: {
    flex: 0.60,
    justifyContent: "center",
    alignItems: "flex-start",
  },
});
