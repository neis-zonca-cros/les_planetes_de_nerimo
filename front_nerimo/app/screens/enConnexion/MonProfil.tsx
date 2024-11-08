import React from 'react';

import { View, Alert, StyleSheet, Dimensions } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { ProfilRondIcon } from '@/app/assets/icons/profilRondIcon';
import ProfilItems from '@/app/components/profilItems';
import TopBar from '@/app/components/TopBar';
import { useTheme } from '@/app/hooks/themeContext';
import useGoBack from '@/app/navigation/useGoBack';
import { RootStackParamList } from '@/app/types';
import { ThemedStyles } from '@/app/utils/styles';

import { useUser } from '../../hooks/userContext';

type MonProfilScreen = StackNavigationProp<RootStackParamList, 'MonProfil'>;

const MonProfil: React.FC = () => {
  const navigation = useNavigation<MonProfilScreen>();
  const { theme } = useTheme();
  const { utilisateur, deconnexion } = useUser();
  const screenHeight = Dimensions.get('window').height;
  const goBack = useGoBack();
  const styleTheme = ThemedStyles(theme);

  const handleLogout = async () => {
    try {
      await deconnexion();
      navigation.navigate('Bienvenue');
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
    }
  };

  function toggleMusic(value: boolean): void {
    if (value) {
      Alert.alert('Switch musique activé !', 'Le switch est maintenant activé.');
    } else {
      Alert.alert('Switch musique désactivé !', 'Le switch est maintenant désactivé.');
    }
  }
  const goToMesInformations = async () => {
    navigation.navigate('MesInformations');
  };

  return (
    <View style={styleTheme.container}>
      <TopBar
        titre="Profil de"
        prenom={utilisateur?.prenom}
        iconeDroiteAction={goBack}
        iconeDroiteNom={'close-outline'}
      />
      <View style={styles.mainContainer}>
        <View style={styles.leftContainer}>
          <View style={theme.colors.effectShadow}>
            <ProfilRondIcon
              width={screenHeight * 0.25}
              fill={theme.colors.primaryButton}
              background={theme.colors.background}
            />
          </View>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.containerBoutton}>
            <ProfilItems
              text="Mes informations"
              iconName="arrow-forward-outline"
              onPress={goToMesInformations}
            ></ProfilItems>
            <ProfilItems text="Musique" isSwitch={true} onSwitchToggle={toggleMusic}></ProfilItems>
            <ProfilItems text="Lightmode" isSwitch={true}></ProfilItems>
            <ProfilItems
              text="Partir"
              iconName="log-out-sharp"
              onPress={handleLogout}
            ></ProfilItems>
          </View>
        </View>
      </View>
    </View>
  );
};
export default MonProfil;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    flex: 0.6,
    justifyContent: 'center',
    paddingTop: 20,
  },
  containerBoutton: {
    width: '100%',
    alignItems: 'flex-start',
  },
});
