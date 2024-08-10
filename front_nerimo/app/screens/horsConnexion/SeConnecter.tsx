
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
import { Formik } from 'formik';
import * as Yup from 'yup';
import { RootStackParamList } from '@/app/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@/app/hooks/themeContext';
import { ConnexionIcon } from '@/app/assets/icons/connexionIcon';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { darkTheme } from '@/app/constants/dark';
import TopBar from '@/app/components/TopBar';
import useGoToCreerUnCompte from '@/app/navigation/useGoToCreerCompte';
import { useUser } from '@/app/hooks/userContext'; 

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
    <View style={theme.container}>
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
        <ScrollView contentContainerStyle={theme.scrollViewContent}>
          <Formik
            initialValues={{ email: '', mdp: '' }}
            validationSchema={loginValidationSchema}
            onSubmit={handleLogin}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <>
                <View style={theme.inputContainer}>
                  <View style={theme.input}>
                    <TextInput
                      style={theme.textInput}
                      placeholder="Adresse mail"
                      placeholderTextColor={
                        theme === darkTheme ? '#FAE6BB' : '#23363E'
                      }
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      keyboardType="email-address"
                    />
                  </View>
                  {errors.email && touched.email && (
                    <Text style={theme.errorText}>{errors.email}</Text>
                  )}

                  <View style={theme.input}>
                    <TextInput
                      style={theme.textInput}
                      placeholder="Mot de passe"
                      placeholderTextColor={
                        theme === darkTheme ? '#FAE6BB' : '#23363E'
                      }
                      onChangeText={handleChange('mdp')}
                      onBlur={handleBlur('mdp')}
                      value={values.mdp}
                      secureTextEntry
                    />
                  </View>
                  {errors.mdp && touched.mdp && (
                    <Text style={theme.errorText}>{errors.mdp}</Text>
                  )}
                </View>
                <View style={styles.marginBottomContainer}>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      onPress={handleSubmit as any}
                      style={styles.icon}
                    >
                      <View style={theme.iconeShadow}>
                        <ConnexionIcon
                          width={screenWidth * 0.26}
                          fill={theme === darkTheme ? '#FFAD80' : '#825C6E'}
                          background={
                            theme === darkTheme ? '#23363E' : '#FAE6BB'
                          }
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.buttonContainer}>
                    <Text onPress={creerUnCompte} style={theme.titreSmall}>
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

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  marginBottomContainer: {
    marginBottom: screenHeight * 0.03,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  icon: {
    alignItems: 'center',
    paddingTop: 10,
  },
});

export default SeConnecter;
