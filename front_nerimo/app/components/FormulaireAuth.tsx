import React from 'react';

import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup';

import { ConnexionIcon } from '@/app/assets/icons/connexionIcon';
import PasswordInput from '@/app/utils/PasswordInput';
import { ThemedStyles } from '@/app/utils/styles';

interface FormulaireAuthProps {
  theme: any;
  initialValues: { [key: string]: string };
  validationSchema: Yup.ObjectSchema<any>;
  // eslint-disable-next-line no-unused-vars
  onSubmit: (values: any) => void;
  screenWidth: number;
  isSignup?: boolean;
  isLogin?: boolean;
  goToCreerUnCompte?: () => void;
}

const FormulaireAuth: React.FC<FormulaireAuthProps> = ({
  theme,
  initialValues,
  validationSchema,
  onSubmit,
  screenWidth,
  isSignup,
  isLogin,
  goToCreerUnCompte,
}) => {
  const styleTheme = ThemedStyles(theme);

  return (
    <View style={styleTheme.CONTAINER}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styleTheme.SCROLL_VIEW_CONTENT}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <>
                <View style={styles.inputContainer}>
                  <View style={[styleTheme.BUTTON_FORM, theme.colors.effectShadow]}>
                    <TextInput
                      style={styleTheme.TEXT}
                      placeholder="Adresse mail"
                      placeholderTextColor={theme.colors.text}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      keyboardType="email-address"
                    />
                  </View>
                  {errors.email && touched.email && (
                    <Text style={styleTheme.ERROR_TEXT}>{errors.email}</Text>
                  )}

                  {isSignup && (
                    <View style={[styleTheme.BUTTON_FORM, theme.colors.effectShadow]}>
                      <TextInput
                        style={styleTheme.TEXT}
                        placeholder="Prénom"
                        placeholderTextColor={theme.colors.text}
                        onChangeText={handleChange('firstName')}
                        onBlur={handleBlur('firstName')}
                        value={values.firstName}
                      />
                    </View>
                  )}
                  {isSignup && errors.firstName && touched.firstName && (
                    <Text style={styleTheme.ERROR_TEXT}>{errors.firstName}</Text>
                  )}

                  <View style={[styleTheme.BUTTON_FORM, theme.colors.effectShadow]}>
                    <PasswordInput
                      styleTheme={styleTheme}
                      theme={theme}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      values={values}
                    />
                  </View>
                  {errors.mdp && touched.mdp && (
                    <Text style={styleTheme.ERROR_TEXT}>{errors.mdp}</Text>
                  )}

                  {isSignup && (
                    <View style={[styleTheme.BUTTON_FORM, theme.colors.effectShadow]}>
                      <TextInput
                        style={styleTheme.TEXT}
                        placeholder="Répétez le mot de passe"
                        placeholderTextColor={theme.colors.text}
                        onChangeText={handleChange('confirmPassword')}
                        onBlur={handleBlur('confirmPassword')}
                        value={values.confirmPassword}
                        secureTextEntry
                      />
                    </View>
                  )}
                  {isSignup && errors.confirmPassword && touched.confirmPassword && (
                    <Text style={styleTheme.ERROR_TEXT}>{errors.confirmPassword}</Text>
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
                  {isLogin && (
                    <View style={styles.buttonContainer}>
                      <Text onPress={goToCreerUnCompte} style={styleTheme.TEXT}>
                        Pas inscrit ?
                      </Text>
                    </View>
                  )}
                  {isSignup && (
                    <View style={styles.buttonContainer}>
                      <Text onPress={goToCreerUnCompte} style={styleTheme.TEXT}>
                        Déjà un compte ?
                      </Text>
                    </View>
                  )}
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

export default FormulaireAuth;
