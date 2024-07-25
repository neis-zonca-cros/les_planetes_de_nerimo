import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { RootStackParamList } from "@/app/types";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "@/themes/themeContext";
import { ConnexionIcon } from "@/themes/icones/connexionIcon";
import { TouchableOpacity } from "react-native-gesture-handler";
import { darkTheme } from "@/themes/dark";
import TopBar from "@/components/navigation/TopBar";
import useGoBack from "@/components/navigation/useGoBack";
import login from "@/app/fetchs/connexionFetch";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useGoToCreerUnCompte from "@/components/navigation/useGoToCreerCompte";

type SeConnecterScreen = StackNavigationProp<RootStackParamList, "SeConnecter">;

const SeConnecter: React.FC = () => {
  const navigation = useNavigation<SeConnecterScreen>();
  const { theme } = useTheme();
  const goBack = useGoBack();
  const creerUnCompte = useGoToCreerUnCompte();

  const handleLogin = async (values: { email: string; mdp: string }) => {
    try {
      const emailNormalized = values.email.toLowerCase();

      const token = await login(emailNormalized, values.mdp);

      navigation.navigate("AccueilApresConnexion", { refresh: true });
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert(
        "Login Error",
        "Failed to log in. Please check your credentials."
      );
    }
  };

  const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email invalide")
      .required("Oups, tu as oublié de mettre ton email !"),
    mdp: Yup.string().required(
      "Oups, tu as oublié de mettre ton mot de passe !"
    ),
  });

  return (
    <View style={theme.container}>
      <TopBar

        titre="Rentrer dans le "
        prenom="monde de Nérimo"
        iconeDroiteNom="close-outline"
        iconeDroiteAction={goBack}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={theme.scrollViewContent}>
          <Formik
            initialValues={{ email: "", mdp: "" }}
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
                      placeholder="E-MAIL"
                      placeholderTextColor={
                        theme === darkTheme ? "#FAE6BB" : "#23363E"
                      }
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
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
                      placeholder="MOT DE PASSE"
                      placeholderTextColor={
                        theme === darkTheme ? "#FAE6BB" : "#23363E"
                      }
                      onChangeText={handleChange("mdp")}
                      onBlur={handleBlur("mdp")}
                      value={values.mdp}
                      secureTextEntry
                    />
                  </View>
                  {errors.mdp && touched.mdp && (
                    <Text style={theme.errorText}>{errors.mdp}</Text>
                  )}</View>
                  <View style={styles.marginBottomContainer}>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    onPress={handleSubmit as any}
                    style={styles.icon}
                  >
                    <View style={theme.iconeShadow}>
                      <ConnexionIcon
                        width={200}
                        fill={theme === darkTheme ? "#FFAD80" : "#825C6E"}
                        background={theme === darkTheme ? "#23363E" : "#FAE6BB"}
                      />
                    </View>
                  </TouchableOpacity></View>
                  <View style={styles.buttonContainer}>
                    <Text onPress={creerUnCompte} style={theme.titreSmall}>
                      Pas inscrit ?
                    </Text></View></View>
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
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
  },
  marginBottomContainer: {
    marginBottom: 20,
  },
  icon: {
    alignItems: "center",
    paddingTop: 10,
  },
});

export default SeConnecter;
