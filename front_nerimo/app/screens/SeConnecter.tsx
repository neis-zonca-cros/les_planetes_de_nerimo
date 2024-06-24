import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,

} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { RootStackParamList } from "../types";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "@/themes/themeContext";
import { ConnexionIcon } from "@/themes/icones/connexionIcon";
import { TouchableOpacity } from "react-native-gesture-handler";
import { darkTheme } from "@/themes/dark";
import TopBar from "@/components/navigation/TopBar";
import useGoBack from "@/components/navigation/useGoBack";


type SeConnecterScreen = StackNavigationProp<RootStackParamList, "SeConnecter">;

const SeConnecter: React.FC = () => {
  const navigation = useNavigation<SeConnecterScreen>();
  const { theme } = useTheme();
  const goBack = useGoBack();
  
  const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email invalide")
      .required("Oups, tu as oublié de mettre ton email !"),
    mdp: Yup.string().required(
      "Oups, tu as oublié de mettre ton mot de passe !"
    ),
  });


  const handleLogin = () => {
    navigation.navigate('AccueilApresConnexion')
  };

  

  return (
    <View style={theme.container}>
      <TopBar
        titre=""
        iconeAvantTitre="arrow-back"
        iconeAvantTitreAction={goBack}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={theme.scrollViewContent}>
          <Text style={theme.titreMedium}>Rentrer dans le monde de Nérimo</Text>
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
                )}
                <TouchableOpacity
                  onPress={handleSubmit as any}
                  style={styles.icon}
                >
                  <View style={theme.iconeShadow}>
                    <ConnexionIcon
                      width={250}
                      fill={theme === darkTheme ? "#FFAD80" : "#825C6E"}
                      background={theme === darkTheme ? "#23363E" : "#FAE6BB"}
                    />
                  </View>
                </TouchableOpacity>
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
  icon: {
    alignItems: "center",
    paddingVertical: 20,
  },
});

export default SeConnecter;
