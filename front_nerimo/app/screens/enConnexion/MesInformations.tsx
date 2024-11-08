import React from 'react';

import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import TopBar from '@/app/components/TopBar';
import { useTheme } from '@/app/hooks/themeContext';
import useGoBack from '@/app/navigation/useGoBack';
import { RootStackParamList } from '@/app/types';
import { ThemedStyles } from '@/app/utils/styles';

import { useUser } from '../../hooks/userContext';

type MesInformationsScreen = StackNavigationProp<RootStackParamList, 'MesInformations'>;

const MesInformations: React.FC = () => {
  const navigation = useNavigation<MesInformationsScreen>();
  const { theme } = useTheme();
  const { utilisateur } = useUser();
  const goBack = useGoBack();
  const styleTheme = ThemedStyles(theme);

  return (
    <View style={styleTheme.container}>
      <TopBar
        titre="Informations de"
        prenom={utilisateur?.prenom}
        iconeDroiteAction={goBack}
        iconeDroiteNom={'close-outline'}
      />
    </View>
  );
};
export default MesInformations;
