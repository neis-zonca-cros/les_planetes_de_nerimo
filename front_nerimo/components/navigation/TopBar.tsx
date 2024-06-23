import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ComponentProps } from "react";
import { useTheme } from "@/themes/themeContext";

export function TabBarIcon({
  style,
  ...rest
}: ComponentProps<typeof Ionicons>) {
  return <Ionicons size={40} style={[{ marginBottom: -3 }, style]} {...rest} />;
}

interface TopBarProps {
  prenom?: string;
  titre: string;
  iconeAvantTitre?: ComponentProps<typeof Ionicons>["name"] | null;
  iconeAvantTitreAction?: () => void;
  iconeGaucheNom?: ComponentProps<typeof Ionicons>["name"] | null;
  iconeGaucheAction?: () => void;
  iconeDroiteNom?: ComponentProps<typeof Ionicons>["name"] | null;
  iconeDroiteAction?: () => void;
}

const TopBar: React.FC<TopBarProps> = ({
  titre,
  prenom,
  iconeGaucheNom,
  iconeGaucheAction,
  iconeDroiteNom,
  iconeDroiteAction,
  iconeAvantTitre,
  iconeAvantTitreAction,
}) => {
  const { theme } = useTheme();

  return (
    <View style={theme.containerTopBar}>
      <View style={theme.iconsTopBar}>
        {iconeAvantTitre ? (
          <TouchableOpacity onPress={iconeAvantTitreAction}>
            <TabBarIcon name={iconeAvantTitre} style={theme.iconTopBar} />
          </TouchableOpacity>
        ) : null}
        <View style={theme.textContainerTopBar}>
          <Text style={theme.titreLargeTopBar}>{titre}</Text>
          <Text style={theme.titreLargeTopBar}>{prenom} </Text>
        </View>
      </View>
      <View style={theme.iconsTopBar}>
        {iconeGaucheNom ? (
          <TouchableOpacity onPress={iconeGaucheAction}>
            <TabBarIcon name={iconeGaucheNom} style={theme.iconTopBar} />
          </TouchableOpacity>
        ) : null}
        {iconeDroiteNom ? (
          <TouchableOpacity onPress={iconeDroiteAction}>
            <TabBarIcon name={iconeDroiteNom} style={theme.iconTopBar} />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};
export default TopBar;
