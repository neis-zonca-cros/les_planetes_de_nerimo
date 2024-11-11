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
  const iconSize = Math.min(screenHeight * 0.1, maxSize);
  const styleTheme = ThemedStyles(theme);

  return (
    <View style={styleTheme.CONTAINER}>
      <TouchableOpacity
        onPress={() => navigation.replace('AccueilAvantConnexion')}
        style={styles.contentContainer}
      >
        <TopBar titre="Bienvenue sur les" prenom="planètes de Nérimo !" />

        <Image style={styles.image} source={require('@/app/assets/images/planete_nerimo.gif')} />

        <View style={styles.iconButton}>
          <Ionicons name="chevron-forward" size={iconSize} color={theme.colors.neutralButton} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Bienvenue;
const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    height: screenHeight * 0.9,
  },
  iconButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    alignSelf: 'flex-end',
  },
});
