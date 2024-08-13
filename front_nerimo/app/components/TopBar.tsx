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
import { ThemedStyles } from "../utils/styles";

export function TabBarIcon({
  style,
  ...rest
}: ComponentProps<typeof Ionicons>) {
  const screenHeight = Dimensions.get("window").height;
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
  const styleTheme = ThemedStyles(theme);

  return (
    <View style={styles.containerTopBar}>
      <View style={styles.pointerEvent}>
        <View style={styles.directionIconsTopBar}>
          <View style={styles.textContainerTopBar}>
            <Text style={styleTheme.textLarge}>{titre}</Text>
            <Text style={styleTheme.textLarge}>{prenom} </Text>
          </View>
        </View></View>
      <View style={styles.directionIconsTopBar}>
        {iconeZeroNom ? (
          <TouchableOpacity onPress={iconeZeroAction}>
            <TabBarIcon name={iconeZeroNom} style={styleTheme.icon} />
          </TouchableOpacity>
        ) : null}
        {iconeGaucheNom ? (
          <TouchableOpacity onPress={iconeGaucheAction}>
            <TabBarIcon name={iconeGaucheNom} style={styleTheme.icon} />
          </TouchableOpacity>
        ) : null}
        {iconeDroiteNom ? (
          <TouchableOpacity onPress={iconeDroiteAction}>
            <TabBarIcon name={iconeDroiteNom} style={styleTheme.icon} />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};
export default TopBar;

const styles = StyleSheet.create({
  pointerEvent: {
    pointerEvents: 'none',
  },
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
    paddingHorizontal: 16,
    marginVertical: 15,

  },
  textContainerTopBar: {
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 10,
  },
  directionIconsTopBar: {
    flexDirection: "row",
  },
})