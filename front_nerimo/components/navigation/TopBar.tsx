// src/components/TopBar.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ComponentProps } from 'react';

export function TabBarIcon({ style, ...rest }: ComponentProps<typeof Ionicons>) {
  return <Ionicons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
}

interface TopBarProps {
  titre: string;
  iconeGaucheNom?: ComponentProps<typeof Ionicons>['name'] | null;
  iconeGaucheAction?: () => void;
  iconeDroiteNom?: ComponentProps<typeof Ionicons>['name'] | null;
  iconeDroiteAction?: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ titre, iconeGaucheNom, iconeGaucheAction, iconeDroiteNom, iconeDroiteAction }) => {
  const theme = useColorScheme(); 

 
  const styles = theme === 'dark' ? darkStyles : lightStyles;

  return (
    <View style={styles.container}>
      <Text style={styles.titre}>{titre}</Text>
      <View style={styles.icons}>
      {iconeGaucheNom ? (
        <TouchableOpacity onPress={iconeGaucheAction}>
          <TabBarIcon name={iconeGaucheNom} style={styles.icon} />
        </TouchableOpacity>
      ) : null}
      {iconeDroiteNom ? (
        <TouchableOpacity onPress={iconeDroiteAction}>
          <TabBarIcon name={iconeDroiteNom} style={styles.icon}/>
        </TouchableOpacity>
      ) : null }
      </View>
    </View>
  );
};


const darkStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#23363E', 
  },
  titre: {
    padding:10,
    fontSize: 20,
    fontFamily: 'brother',
    color: '#FAE6BB', 
    textTransform: 'uppercase',  
  },
  icons: {
    flexDirection: 'row',
    
  },
  icon: {
    color: '#FAE6BB', 
    padding: 10,
    
    
  },
});


const lightStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FAE6BB',
  },
  titre: {
    padding: 10,
    fontSize: 20,
    color: '#23363E',
    fontFamily: 'brother',
    textTransform: 'uppercase',  
  },
  icons: {
    flexDirection: 'row',
    
  },
  icon: {
    color: '#23363E',
    padding: 10,
  },
});

export default TopBar;
