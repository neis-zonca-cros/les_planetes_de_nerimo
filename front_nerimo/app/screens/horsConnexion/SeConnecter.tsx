import React from 'react';

import { Alert, Dimensions, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
// eslint-disable-next-line import/named
import { StackNavigationProp } from '@react-navigation/stack';
import * as Yup from 'yup';

import FormulaireAuth from '@/app/components/FormulaireAuth';
import TopBar from '@/app/components/TopBar';
import { useTheme } from '@/app/hooks/themeContext';
import { useUser } from '@/app/hooks/userContext';
import { RootStackParamList } from '@/app/types';
import { ThemedStyles } from '@/app/utils/styles';

type SeConnecterScreen = StackNavigationProp<RootStackParamList, 'SeConnecter'>;

const SeConnecter: React.FC = () => {
  const navigation = useNavigation<SeConnecterScreen>();
  const { theme } = useTheme();
  const { connexion } = useUser();
  const screenWidth = Dimensions.get('window').width;

  const styleTheme = ThemedStyles(theme);
  const goBackToAccueil = () => {
    navigation.navigate('AccueilAvantConnexion');
  };

  const handleLogin = async (values: { email: string; password: string }) => {
    try {
      const emailNormalized = values.email.toLowerCase();
      const mdp = values.password;
      await connexion(emailNormalized, mdp);
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Connexion impossible', 'Veuillez vérifier vos identifiants.');
    }
  };

  const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email invalide')
      .required('Oups, tu as oublié de mettre ton email !'),
    password: Yup.string().required('Oups, tu as oublié de mettre ton mot de passe !'),
  });

  return (
    <View style={styleTheme.container}>
      <TopBar
        titre="Rentrer dans le "
        prenom="monde de Nérimo"
        iconeDroiteNom="close-outline"
        iconeDroiteAction={goBackToAccueil}
      />
      <FormulaireAuth
        theme={theme}
        initialValues={{ email: '', password: '' }}
        validationSchema={loginValidationSchema}
        onSubmit={handleLogin}
        screenWidth={screenWidth}
        isLogin={true}
        goToCreerUnCompte={() => navigation.navigate('CreerUnCompte')}
      />
    </View>
  );
};

export default SeConnecter;
