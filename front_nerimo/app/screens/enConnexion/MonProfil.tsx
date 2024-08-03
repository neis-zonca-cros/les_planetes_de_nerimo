import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useTheme } from "@/themes/themeContext";
import TopBar from "@/components/navigation/TopBar";
import { Dimensions } from "react-native";
import { ProfilRondIcon } from "@/themes/icones/profilRondIcon";
import { darkTheme } from "@/themes/dark";
import { useUser } from "../userContext";

const MonProfil: React.FC = () => {
  const { theme } = useTheme();
  const {utilisateur} = useUser();
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
          <Text>Mes informations</Text>
        </View>
      </View>
    </View>
  );
};
export default MonProfil;

const styles = StyleSheet.create ({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftContainer: {
    flex: 0.5, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

})
