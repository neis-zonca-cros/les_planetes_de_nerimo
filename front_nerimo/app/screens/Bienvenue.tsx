import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/themes/themeContext';
import LightThemeIcon from '@/themes/icones/lightThemIcon'
import { DarkThemeIcon } from '@/themes/icones/darkThemIcon';
import { lightTheme } from '@/themes/light';
import { darkTheme } from '@/themes/dark';


type BienvenueScreen = StackNavigationProp<RootStackParamList, 'Bienvenue'>;

const Bienvenue: React.FC = () => {
  const navigation = useNavigation<BienvenueScreen>();
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={theme.container}>
      <Text style={theme.titre}>Bienvenue sur les planètes de Nérimo !</Text>
      <TouchableOpacity
        onPress={() => navigation.replace('Connexion')}
        style={theme.iconeContainer}
      >
        <Ionicons
          name="arrow-forward-circle"
          size={110}
          style={theme.iconeColor}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={toggleTheme}
        style={theme.iconeContainer}
      >
        {theme === lightTheme ? (
          <LightThemeIcon width={80} />
        ) : (
          <DarkThemeIcon width={80}  />
        )}

    
        
      </TouchableOpacity>
    </View>
  );
};

export default Bienvenue;
