import React from 'react';

import { Dimensions, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
// eslint-disable-next-line import/named
import { StackNavigationProp } from '@react-navigation/stack';
import * as Yup from 'yup';

import FormulaireAuth from '@/app/components/FormulaireAuth';
import TopBar from '@/app/components/TopBar';
import { useTheme } from '@/app/hooks/themeContext';
import { useUser } from '@/app/hooks/userContext';
import { creerUtilisateur } from '@/app/services/utilisateurFetch';
import { RootStackParamList } from '@/app/types';
import { normalizeKey } from '@/app/utils/normalizeKey';
import { ThemedStyles } from '@/app/utils/styles';

type CreerUnCompteScreen = StackNavigationProp<RootStackParamList, 'CreerUnCompte'>;

const CreerUnCompte: React.FC = () => {
  const navigation = useNavigation<CreerUnCompteScreen>();
  const { theme } = useTheme();
  const { connexion } = useUser();
  const goBackToAccueil = () => {
    navigation.navigate('AccueilAvantConnexion');
  };
  const styleTheme = ThemedStyles(theme);

  const screenWidth = Dimensions.get('window').width;
  const signUpValidationSchema = Yup.object().shape({
    firstName: Yup.string().required('Oups, tu as oublié de mettre ton prénom !'),
    email: Yup.string()
      .email('Email invalide')
      .required('Oups, tu as oublié de mettre ton email !'),
    password: Yup.string().required('Oups, tu as oublié de mettre ton mot de passe !'),
    confirmPassword: Yup.string()
      .required('La confirmation du mot de passe est requise')
      .oneOf([Yup.ref('password')], 'Les mots de passe ne correspondent pas'),
  });

  const handleSignUp = async (values: {
    firstName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    try {
      await creerUtilisateur({
        prenom: values.firstName,
        email: normalizeKey(values.email),
        mdp: values.password,
        mdp_repeat: values.confirmPassword,
      });
      try {
        await connexion(normalizeKey(values.email), values.password);
        navigation.navigate('AccueilApresConnexion', { refresh: true });
      } catch (loginError) {
        console.error('Erreur lors de la connexion:', loginError);
      }
      navigation.navigate('AccueilApresConnexion', { refresh: true });
    } catch (error) {
      console.error('Erreur lors de la création du compte:', error);
    }
  };

  return (
    <View style={styleTheme.CONTAINER}>
      <TopBar
        titre="Créer un compte"
        prenom="Nérimo"
        iconeDroiteNom="close-outline"
        iconeDroiteAction={goBackToAccueil}
      />
      <FormulaireAuth
        theme={theme}
        initialValues={{ email: '', firstName: '', password: '', confirmPassword: '' }}
        validationSchema={signUpValidationSchema}
        onSubmit={handleSignUp}
        screenWidth={screenWidth}
        isSignup={true}
        goToCreerUnCompte={() => navigation.navigate('SeConnecter')}
      />
    </View>
  );
};

export default CreerUnCompte;
