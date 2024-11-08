import React, { useState } from 'react';

import { View, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import TopBar from '@/app/components/TopBar';
import { useSession } from '@/app/hooks/sessionContext';
import { useTheme } from '@/app/hooks/themeContext';
import useGoBack from '@/app/navigation/useGoBack';
import { darkTheme } from '@/app/themes/dark';
import { RootStackParamList } from '@/app/types';
import { ThemedStyles } from '@/app/utils/styles';

type CreerSessionPrenomScreenProp = StackNavigationProp<RootStackParamList, 'CreerSessionPrenom'>;

const CreerSessionPrenom: React.FC = () => {
  const navigation = useNavigation<CreerSessionPrenomScreenProp>();
  const { theme } = useTheme();
  const goBack = useGoBack();
  const { setCurrentSession } = useSession();
  const [prenom, setPrenom] = useState('');
  const screenHeight = Dimensions.get('window').height;
  const maxSize = 150;
  const iconSize = Math.min(screenHeight * 0.2, maxSize);
  const styleTheme = ThemedStyles(theme);

  const handleNext = () => {
    if (prenom) {
      setCurrentSession(prev => ({
        ...prev,
        prenom,
      }));
      navigation.navigate('ChoisirPlanete');
    } else {
      alert('Veuillez entrer un prénom.');
    }
  };

  return (
    <View style={styleTheme.container}>
      <TopBar
        titre="Créer une"
        prenom="session"
        iconeGaucheNom="arrow-back-outline"
        iconeGaucheAction={goBack}
        iconeDroiteNom="close-outline"
        iconeDroiteAction={() => navigation.navigate('AccueilApresConnexion', { refresh: true })}
      />

      <View style={styles.bottomIconsContainer}>
        <View style={[styleTheme.rectangleForm, theme.colors.effectShadow]}>
          <TextInput
            style={styleTheme.text}
            value={prenom}
            onChangeText={setPrenom}
            placeholder="Écris ton surnom ici"
            placeholderTextColor={theme.colors.text}
          />
        </View>
        <View style={styles.iconeContainer}>
          <TouchableOpacity onPress={handleNext}>
            <View style={theme.colors.effectShadow}>
              <Ionicons
                name="arrow-forward-circle"
                size={iconSize}
                color={theme.colors.neutralButton}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  bottomIconsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    paddingVertical: 5,
  },
  iconeContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    paddingBottom: 20,
  },
});

export default CreerSessionPrenom;
