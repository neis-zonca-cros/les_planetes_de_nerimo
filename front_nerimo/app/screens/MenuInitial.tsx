import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Animated, { runOnJS, useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { useTheme } from '@/themes/themeContext';
import TopBar from '@/components/navigation/TopBar';
import { CompteRondIcon } from '@/themes/icones/compteRondIcon';
import { darkTheme } from '@/themes/dark';
import { ConnexionRondIcon } from '@/themes/icones/connexionRondIcon';
import { AProposIcon } from '@/themes/icones/aProposIcon';
import { lightTheme } from '@/themes/light';
import LightThemeIcon from '@/themes/icones/lightThemIcon';
import { DarkThemeIcon } from '@/themes/icones/darkThemIcon';

type MenuInitialScreen = StackNavigationProp<RootStackParamList, 'MenuInitial'>;

const MenuInitial: React.FC = () => {
  const navigation = useNavigation<MenuInitialScreen>();
  const { theme, toggleTheme } = useTheme();
  const scrollY = useSharedValue(0);
  const routesLength = useNavigationState(state => state.routes.length);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
      if (event.contentOffset.y < -100) {
        if (routesLength > 1) {
          runOnJS(navigation.goBack)();
        } else {
          console.warn("pas d'écran pour revenir en arrière");
        }
      }
    },
  });

  const iconeDroitePress = () => {
    if (routesLength > 1) {
      navigation.goBack();
    } else {
      console.warn("pas d'écran pour revenir en arrière");
    }
    console.log("Bouton fermer pressé");
  };

  const connexionTouched = () => {
    console.log('Bouton se connecter touché');
  };

  const compteTouched = () => {
    console.log('Bouton créer un compte touché');
  };



  return (
    <Animated.ScrollView style={theme.container} onScroll={scrollHandler} scrollEventThrottle={16}>
      <TopBar
        titre=""
        iconeDroiteNom="close-outline"
        iconeDroiteAction={iconeDroitePress}
      />
      <Text style={theme.menu}>MENU</Text>
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
          <CompteRondIcon width={120} fill={theme === darkTheme ? '#FFCD69' : '#E7A74F'} />
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
          <ConnexionRondIcon width={120} fill={theme === darkTheme ? '#FFAD80' : '#825C6E'} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.iconContainer}>
        <TouchableOpacity
        onPress={toggleTheme}
        
      >
        {theme === lightTheme ? (
          <LightThemeIcon width={120} />
        ) : (
          <DarkThemeIcon width={120}  />
        )}

    
        
      </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
          <AProposIcon width={120} fill={theme === darkTheme ? '#FAE6BB' : '#23363E'} />
          </TouchableOpacity>
        </View>
      </View>
   
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 

  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconContainer: {

    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,

  },
});
export default MenuInitial;
