import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ComponentProps } from "react";
import { useTheme } from "@/app/hooks/themeContext";

export function TabBarIcon({
  style,
  ...rest
}: ComponentProps<typeof Ionicons>) 

{const screenHeight = Dimensions.get("window").height;
  const maxSize = 56; 
  const iconSize = Math.min(screenHeight * 0.10, maxSize); 
  return <Ionicons size={iconSize} style={[style]} {...rest} />;
}

interface TopBarProps {
  prenom?: string;
  titre?: string;
  iconeGaucheNom?: ComponentProps<typeof Ionicons>["name"] | null;
  iconeGaucheAction?: () => void;
  iconeDroiteNom?: ComponentProps<typeof Ionicons>["name"] | null;
  iconeDroiteAction?: () => void;
  iconeZeroNom?: ComponentProps<typeof Ionicons>["name"] | null;
  iconeZeroAction?: () => void;
}

const TopBar: React.FC<TopBarProps> = ({
  titre,
  prenom,
  iconeGaucheNom,
  iconeGaucheAction,
  iconeDroiteNom,
  iconeDroiteAction,
  iconeZeroAction,
  iconeZeroNom,
}) => {
  const { theme } = useTheme();

  return (
    <View style={styles.containerTopBar}>
    <View style={styles.iconsTopBar}>
      <View style={styles.textContainerTopBar}>
        <Text style={[styles.titreLargeTopBar, {color: theme.colors.text, fontFamily: theme.typographySize.large.fontFamily, fontSize: theme.typographySize.large.fontSize}]}>{titre}</Text>
        <Text style={[styles.titreLargeTopBar, {color: theme.colors.text, fontFamily: theme.typographySize.large.fontFamily, fontSize: theme.typographySize.large.fontSize}]}>{prenom} </Text>
      </View>
    </View>
    <View style={styles.iconsTopBar}>
    {iconeZeroNom ? (
        <TouchableOpacity onPress={iconeZeroAction}>
          <TabBarIcon name={iconeZeroNom} style={styles.iconTopBar} />
        </TouchableOpacity>
      ) : null}
      {iconeGaucheNom ? (
        <TouchableOpacity onPress={iconeGaucheAction}>
          <TabBarIcon name={iconeGaucheNom} style={styles.iconTopBar} />
        </TouchableOpacity>
      ) : null}
      {iconeDroiteNom ? (
        <TouchableOpacity onPress={iconeDroiteAction}>
          <TabBarIcon name={iconeDroiteNom} style={styles.iconTopBar} />
        </TouchableOpacity>
      ) : null}
    </View>
  </View>
  );
};
export default TopBar;

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  containerTopBar: {
    flexDirection: "row",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 56,
    zIndex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal:16,
    marginVertical: 15,
  },
  textContainerTopBar: {
    flexDirection: "column",
    alignItems: "center",
    paddingTop:10,
  },
  titreLargeTopBar: {
    paddingVertical: 2,
    paddingHorizontal:5,
    textAlign: "center",
  },
  iconsTopBar: {
    flexDirection: "row",
  },
  iconTopBar: {
    color: "#FAE6BB",
    paddingVertical: 2,
    paddingHorizontal:5,
  },
})