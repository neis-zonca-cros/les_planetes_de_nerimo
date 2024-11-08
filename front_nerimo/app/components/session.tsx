import React from 'react';

import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useTheme } from '@/app/hooks/themeContext';
import { darkTheme } from '@/app/themes/dark';

import { ThemedStyles } from '../utils/styles';

interface SessionProps {
  prenom: string;
  textePlanet?: string;
  planeteNom?: string;
  textePersonnage?: string;
  personnageNom?: string;
  imageSource?: ReturnType<typeof require>;
  onPress?: () => void;
  icon?: keyof typeof Ionicons.glyphMap;
}

const SessionComposant: React.FC<SessionProps> = ({
  prenom,
  planeteNom,
  personnageNom,
  textePlanet = 'est sur ',
  textePersonnage = 'avec ',
  imageSource,
  onPress,
  icon = 'play-outline',
}) => {
  const { theme } = useTheme();
  const { height: screenHeight } = Dimensions.get('window');
  const styleTheme = ThemedStyles(theme);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.sessionCard,
        theme.colors.effectShadow,
        { borderColor: theme.colors.background, backgroundColor: theme.colors.background },
      ]}
    >
      <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        {imageSource && <Image source={imageSource} style={styles.roundImage} />}
        <View style={styles.sessionContainer}>
          <Text style={styleTheme.text}>{prenom}</Text>
          <Text style={styleTheme.text}>
            {textePlanet}
            {planeteNom}
          </Text>
          <Text style={styleTheme.text}>
            {textePersonnage}
            {personnageNom}
          </Text>
        </View>
        <Ionicons
          name={icon}
          size={screenHeight * 0.06}
          color={theme.colors.text}
          style={{ alignItems: 'center', justifyContent: 'center', paddingBottom: 5 }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default SessionComposant;

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
const styles = StyleSheet.create({
  roundImage: {
    height: screenHeight * 0.1,
    width: screenWidth * 0.1,
    resizeMode: 'contain',
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  sessionContainer: {
    flexDirection: 'column',
    textAlign: 'center',
    paddingVertical: 5,
  },
  sessionCard: {
    justifyContent: 'center',
    height: screenWidth * 0.23,
    width: screenWidth * 0.23,
    borderRadius: (screenWidth * 0.23) / 2,
    marginBottom: 12,
    marginLeft: 10,
    alignItems: 'center',
    borderWidth: 5,
  },
});
