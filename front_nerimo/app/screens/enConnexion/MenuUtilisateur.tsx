import React from 'react';

import { View, StyleSheet, Dimensions } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/commonjs/src/types';
import { ScrollView } from 'react-native-gesture-handler';

import { AProposIcon } from '@/app/assets/icons/aProposIcon';
import { DeconnexionRondIcon } from '@/app/assets/icons/deconnexionRondIcon';
import { ProfilRondIcon } from '@/app/assets/icons/profilRondIcon';
import IconButton from '@/app/components/IconButton';
import TopBar from '@/app/components/TopBar';
import { useTheme } from '@/app/hooks/themeContext';
import { useUser } from '@/app/hooks/userContext';
import useGoBack from '@/app/navigation/useGoBack';
import { RootStackParamList } from '@/app/types';
import { ThemedStyles } from '@/app/utils/styles';

type MenuUtilisateurScreen = StackNavigationProp<RootStackParamList, 'MenuUtilisateur'>;

const MenuUtilisateur: React.FC = () => {
  const navigation = useNavigation<MenuUtilisateurScreen>();
  const { utilisateur, deconnexion } = useUser();
  const { theme } = useTheme();
  const goBack = useGoBack();
  const screenHeight = Dimensions.get('window').height;
  const styleTheme = ThemedStyles(theme);
  const handleLogout = async () => {
    try {
      await deconnexion();
      navigation.navigate('Bienvenue');
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
    }
  };

  const goToProfil = () => {
    navigation.navigate('MonProfil');
  };

  return (
    <View style={styleTheme.CONTAINER}>
      <TopBar
        titre="Menu de"
        prenom={utilisateur?.prenom}
        iconeDroiteNom="close-outline"
        iconeDroiteAction={goBack}
      />
      <ScrollView contentContainerStyle={styleTheme.SCROLL_VIEW_CONTENT}>
        <View style={styles.row}>
          <IconButton
            icon={
              <ProfilRondIcon
                width={screenHeight * 0.25}
                fill={theme.colors.primaryButton}
                background={theme.colors.background}
              />
            }
            onPress={goToProfil}
          />
          <IconButton
            icon={
              <DeconnexionRondIcon
                width={screenHeight * 0.25}
                fill={theme.colors.secondaryButton}
                background={theme.colors.background}
              />
            }
            onPress={handleLogout}
          />
          <IconButton
            icon={
              <AProposIcon
                width={screenHeight * 0.25}
                fill={theme.colors.neutralButton}
                background={theme.colors.background}
              />
            }
            onPress={() => console.log('A propos cliqué')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default MenuUtilisateur;
