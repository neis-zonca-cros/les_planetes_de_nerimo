import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
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
    <View style={theme.containerTopBar}>
    <View style={theme.iconsTopBar}>
      <View style={theme.textContainerTopBar}>
        <Text style={theme.titreLargeTopBar}>{titre}</Text>
        <Text style={theme.titreLargeTopBar}>{prenom} </Text>
      </View>
    </View>
    <View style={theme.iconsTopBar}>
    {iconeZeroNom ? (
        <TouchableOpacity onPress={iconeZeroAction}>
          <TabBarIcon name={iconeZeroNom} style={theme.iconTopBar} />
        </TouchableOpacity>
      ) : null}
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
