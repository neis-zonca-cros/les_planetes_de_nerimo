
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ComponentProps } from 'react';
import { useTheme } from '@/themes/themeContext';


export function TabBarIcon({ style, ...rest }: ComponentProps<typeof Ionicons>) {
  return <Ionicons size={40} style={[{ marginBottom: -3 }, style]} {...rest} />;
}

interface TopBarProps {
  titre: string;
  iconeGaucheNom?: ComponentProps<typeof Ionicons>['name'] | null;
  iconeGaucheAction?: () => void;
  iconeDroiteNom?: ComponentProps<typeof Ionicons>['name'] | null;
  iconeDroiteAction?: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ titre, iconeGaucheNom, iconeGaucheAction, iconeDroiteNom, iconeDroiteAction }) => {
  const { theme } = useTheme();

  return (
    <View style={theme.containerTopBar}>
      <Text style={theme.titreTopBar}>{titre}</Text>
      <View style={theme.iconsTopBar}>
      {iconeGaucheNom ? (
        <TouchableOpacity onPress={iconeGaucheAction}>
          <TabBarIcon name={iconeGaucheNom} style={theme.iconTopBar} />
        </TouchableOpacity>
      ) : null}
      {iconeDroiteNom ? (
        <TouchableOpacity onPress={iconeDroiteAction}>
          <TabBarIcon name={iconeDroiteNom} style={theme.iconTopBar}/>
        </TouchableOpacity>
      ) : null }
      </View>
    </View>
  );
};
export default TopBar;

