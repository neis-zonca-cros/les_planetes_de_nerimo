import React from 'react';

import { View } from 'react-native';

import TopBar from '@/app/components/TopBar';
import { useTheme } from '@/app/hooks/themeContext';
import useGoBack from '@/app/navigation/useGoBack';
import { ThemedStyles } from '@/app/utils/styles';

import { useUser } from '../../hooks/userContext';

const MesInformations: React.FC = () => {
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
