import TopBar from "@/components/navigation/TopBar";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../types";
import { StackNavigationProp } from "@react-navigation/stack";
import { useTheme } from '@/themes/themeContext';
import { useNavigation } from '@react-navigation/native';
import { ConnexionIcon } from "@/themes/icones/connexionIcon";
import { darkTheme } from "@/themes/dark";
import { CompteIcon } from "@/themes/icones/compteIcon";


type ConnexionScreen = StackNavigationProp<RootStackParamList, "Connexion">;
const Connexion: React.FC = () => {
  const navigation = useNavigation<ConnexionScreen>();
  const { theme, toggleTheme } = useTheme();
  const iconeDroitePress = () => {
    navigation.navigate('MenuInitial');
    console.log("bouton 2 pressé");
  };

  const connexionTouched = () => {
    console.log('Bouton se connecter touché');
  };

  const compteTouched = () => {
    console.log('bouton créer un compte touché');
  };


  return (
    <View style={theme.container}>
      <TopBar
        titre=""
        iconeDroiteNom="planet-outline"
        iconeDroiteAction={iconeDroitePress}
      />
     
      <View style={styles.bottomIconsContainer}>
     <TouchableOpacity onPress={connexionTouched} style={styles.icon}>
      <ConnexionIcon width={250} fill={theme === darkTheme ? '#FFAD80' : '#825C6E'} /> 
      </TouchableOpacity>
      <TouchableOpacity onPress={compteTouched} style={styles.icon}>
      <CompteIcon width={250} fill={theme === darkTheme ? '#FFCD69' : '#E7A74F'} />
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomIconsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center', 
    marginBottom: 50, 
  },
  icon: {
    paddingVertical:5,
  }
});

export default Connexion; 
