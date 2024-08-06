import React from "react";
import { View, StyleSheet, Text, Platform } from "react-native";
import { useTheme } from "@/app/hooks/themeContext";
import TopBar from "@/app/components/TopBar";
import { Dimensions } from "react-native";
import { ProfilRondIcon } from "@/app/assets/icons/profilRondIcon";
import { darkTheme } from "@/app/constants/dark";
import { useUser } from "../../hooks/userContext";
import ProfilItems from "@/app/components/profilItems";

const MonProfil: React.FC = () => {
  const { theme } = useTheme();
  const { utilisateur } = useUser();
  const screenHeight = Dimensions.get("window").height;

  return (
    <View style={theme.container}>
      <TopBar titre="Profil de" prenom={utilisateur?.prenom} />
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
          <ProfilItems text="Musique" iconName="toggle-sharp"></ProfilItems>
          <ProfilItems text="Lightmode" iconName="toggle-sharp"></ProfilItems>
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
