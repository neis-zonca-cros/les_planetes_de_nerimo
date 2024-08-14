import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { RootStackParamList } from "@/app/types";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "@/app/hooks/themeContext";
import { TouchableOpacity } from "react-native-gesture-handler";
import { darkTheme } from "@/app/themes/dark";
import { CompteIcon } from "@/app/assets/icons/compteIcon";
import TopBar from "@/app/components/TopBar";
import useGoToConnect from "@/app/navigation/useGoToConnect";
import { creerUtilisateur } from "@/app/services/utilisateurFetch";
import { useUser } from "@/app/hooks/userContext";
import { normalizeKey } from "@/app/utils/normalizeKey";
import { ThemedStyles } from "@/app/utils/styles";

type CreerUnCompteScreen = StackNavigationProp<
  RootStackParamList,
  "CreerUnCompte"
>;

const CreerUnCompte: React.FC = () => {
  const navigation = useNavigation<CreerUnCompteScreen>();
  const { theme } = useTheme();
  const { connexion } = useUser();
  const goBackToAccueil = () => {
    navigation.navigate("AccueilAvantConnexion");
  };
  const styleTheme = ThemedStyles(theme);
  const seConnecter = useGoToConnect();
  const screenWidth = Dimensions.get("window").width;
  const signUpValidationSchema = Yup.object().shape({
    firstName: Yup.string().required(
      "Oups, tu as oublié de mettre ton prénom !"
    ),
    email: Yup.string()
      .email("Email invalide")
      .required("Oups, tu as oublié de mettre ton email !"),
    password: Yup.string().required(
      "Oups, tu as oublié de mettre ton mot de passe !"
    ),
    confirmPassword: Yup.string()
      .oneOf(
        [Yup.ref("password"), undefined],
        "Les mots de passe ne correspondent pas"
      )
      .required("Oups, tu as oublié de répéter ton mot de passe !"),
  });

  const handleSignUp = async (values: {
    firstName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    try {
      const response = await creerUtilisateur({
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
      navigation.navigate("AccueilApresConnexion", { refresh: true });
    } catch (error) {
      console.error("Erreur lors de la création du compte:", error);
    }
  };


  return (
    <View style={styleTheme.container}>
      <TopBar
        titre="Créer un compte"
        prenom="Nérimo"
        iconeDroiteNom="close-outline"
        iconeDroiteAction={goBackToAccueil}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styleTheme.scrollViewContent}>
          <Formik
            initialValues={{
              firstName: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={signUpValidationSchema}
            onSubmit={handleSignUp}
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
                <View style={styles.inputContainer}>
                  <View style={[
                    styleTheme.rectangleForm,
                    theme.colors.effectShadow,

                  ]}>
                    <TextInput
                      style={[styleTheme.text]}
                      placeholder="Prénom"
                      pointerEvents="auto" 
                      placeholderTextColor={
                        theme.colors.text
                      }
                      onChangeText={handleChange("firstName")}
                      onBlur={handleBlur("firstName")}
                      value={values.firstName}
                    />
                  </View>
                  {errors.firstName && touched.firstName && (
                    <Text style={styleTheme.errorText}>{errors.firstName}</Text>
                  )}
                  <View style={[
                    styleTheme.rectangleForm,
                    theme.colors.effectShadow,

                  ]}>
                    <TextInput
                      style={styleTheme.text}
                      placeholder="Adresse mail"
                      placeholderTextColor={
                        theme.colors.text
                      }
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                      keyboardType="email-address"
                    />
                  </View>
                  {errors.email && touched.email && (
                    <Text style={styleTheme.errorText}>{errors.email}</Text>
                  )}
                  <View style={[
                    theme.colors.effectShadow, styleTheme.rectangleForm
                  ]}>
                    <TextInput
                      style={styleTheme.text}
                      placeholder="Mot de passe"
                      placeholderTextColor={
                        theme.colors.text
                      }
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      value={values.password}
                      secureTextEntry
                    />
                  </View>
                  {errors.password && touched.password && (
                    <Text style={styleTheme.errorText}>{errors.password}</Text>
                  )}
                  <View style={[
                    styleTheme.rectangleForm,
                    theme.colors.effectShadow,

                  ]}>
                    <TextInput
                      style={styleTheme.text}
                      placeholder="Répétez le mot de passe"
                      placeholderTextColor={
                        theme.colors.text
                      }
                      onChangeText={handleChange("confirmPassword")}
                      onBlur={handleBlur("confirmPassword")}
                      value={values.confirmPassword}
                      secureTextEntry
                    />
                  </View>
                  {errors.confirmPassword && touched.confirmPassword && (
                    <Text style={styleTheme.errorText}>
                      {errors.confirmPassword}
                    </Text>
                  )}
                </View>
                <View style={styles.marginBottomContainer}>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      onPress={handleSubmit as any}
                      style={styles.icon}
                    >
                      <View style={theme.colors.effectShadow}>
                        <CompteIcon
                          width={screenWidth * 0.22}
                          fill={theme.colors.secondaryButton}
                          background={theme.colors.background}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.buttonContainer}>
                    <Text onPress={seConnecter} style={styleTheme.text}>
                      Déjà un compte ?
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
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  marginBottomContainer: {
    marginBottom: 20,
  },
  buttonContainer: {
    paddingTop: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  icon: {
    alignItems: "center",
    paddingTop: 10,
  },
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',

  },
});

export default CreerUnCompte;
