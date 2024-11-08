import React from 'react';

import {
  View,
  TextInput,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
  Dimensions,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/commonjs/src/types';
import { Formik } from 'formik';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Yup from 'yup';

import { ConnexionIcon } from '@/app/assets/icons/connexionIcon';
import TopBar from '@/app/components/TopBar';
import { useTheme } from '@/app/hooks/themeContext';
import { useUser } from '@/app/hooks/userContext';
import useGoToCreerUnCompte from '@/app/navigation/useGoToCreerCompte';
import { RootStackParamList } from '@/app/types';
import PasswordInput from '@/app/utils/PasswordInput';
import { ThemedStyles } from '@/app/utils/styles';

type SeConnecterScreen = StackNavigationProp<RootStackParamList, 'SeConnecter'>;

const SeConnecter: React.FC = () => {
  const navigation = useNavigation<SeConnecterScreen>();
  const { theme } = useTheme();
  const goBackToAccueil = () => {
    navigation.navigate('AccueilAvantConnexion');
  };
  const creerUnCompte = useGoToCreerUnCompte();
  const screenWidth = Dimensions.get('window').width;
  const { connexion } = useUser();
  const styleTheme = ThemedStyles(theme);

  const handleLogin = async (values: { email: string; mdp: string }) => {
    try {
      const emailNormalized = values.email.toLowerCase();
      await connexion(emailNormalized, values.mdp);
      navigation.navigate('AccueilApresConnexion', { refresh: true });
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Connexion impossible', 'Veuillez vérifier vos identifiants.');
    }
  };

  const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email invalide')
      .required('Oups, tu as oublié de mettre ton email !'),
    mdp: Yup.string().required('Oups, tu as oublié de mettre ton mot de passe !'),
  });

  return (
    <View style={styleTheme.container}>
      <TopBar
        titre="Rentrer dans le "
        prenom="monde de Nérimo"
        iconeDroiteNom="close-outline"
        iconeDroiteAction={goBackToAccueil}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styleTheme.scrollViewContent}>
          <Formik
            initialValues={{ email: '', mdp: '' }}
            validationSchema={loginValidationSchema}
            onSubmit={handleLogin}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <>
                <View style={styles.inputContainer}>
                  <View style={[styleTheme.rectangleForm, theme.colors.effectShadow]}>
                    <TextInput
                      style={styleTheme.text}
                      placeholder="Adresse mail"
                      placeholderTextColor={theme.colors.text}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      keyboardType="email-address"
                    />
                  </View>
                  {errors.email && touched.email && (
                    <Text style={styleTheme.errorText}>{errors.email}</Text>
                  )}

                  <View style={[styleTheme.rectangleForm, theme.colors.effectShadow]}>
                    <PasswordInput
                      styleTheme={styleTheme}
                      theme={theme}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      values={values}
                    />
                  </View>
                  {errors.mdp && touched.mdp && (
                    <Text style={styleTheme.errorText}>{errors.mdp}</Text>
                  )}
                </View>
                <View style={styles.marginBottomContainer}>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={handleSubmit as any} style={styles.icon}>
                      <View style={theme.colors.effectShadow}>
                        <ConnexionIcon
                          width={screenWidth * 0.22}
                          fill={theme.colors.primaryButton}
                          background={theme.colors.background}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.buttonContainer}>
                    <Text onPress={creerUnCompte} style={styleTheme.text}>
                      Pas inscrit ?
                    </Text>
                  </View>
                </View>
              </>
            )}
          </Formik>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  marginBottomContainer: {
    marginBottom: 20,
  },
  buttonContainer: {
    paddingTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  icon: {
    alignItems: 'center',
    paddingTop: 10,
  },
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default SeConnecter;
