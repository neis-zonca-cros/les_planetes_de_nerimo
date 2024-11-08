import React from 'react';

import { View, TouchableOpacity, Dimensions, Image, StyleSheet } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/commonjs/src/types';

import TopBar from '@/app/components/TopBar';
import { useTheme } from '@/app/hooks/themeContext';
import { RootStackParamList } from '@/app/types';
import { ThemedStyles } from '@/app/utils/styles';

type BienvenueScreen = StackNavigationProp<RootStackParamList, 'Bienvenue'>;

const Bienvenue: React.FC = () => {
  const navigation = useNavigation<BienvenueScreen>();
  const { theme } = useTheme();
  const screenHeight = Dimensions.get('window').height;
  const maxSize = 150;
  const iconSize = Math.min(screenHeight * 0.2, maxSize);
  const styleTheme = ThemedStyles(theme);

  return (
    <View style={styleTheme.container}>
      <TopBar titre="Bienvenue sur les" prenom="planètes de Nérimo !" />
      <View style={styles.contentContainer}>
        <Image style={styles.image} source={require('@/app/assets/images/planete_nerimo.gif')} />
      </View>
      <TouchableOpacity
        onPress={() => navigation.replace('AccueilAvantConnexion')}
        style={styles.iconButton}
      >
        <View style={theme.colors.effectShadow}>
          <Ionicons
            name="arrow-forward-circle"
            size={iconSize}
            color={theme.colors.neutralButton}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Bienvenue;

const { height: screenHeight } = Dimensions.get('window');
const styles = StyleSheet.create({
  contentContainer: {
    flex: 0.75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: screenHeight * 0.6,
    height: screenHeight * 0.6,
    resizeMode: 'contain',
  },
  iconButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
});
