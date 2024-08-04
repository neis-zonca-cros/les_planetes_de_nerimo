import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/app/types";
import { useTheme } from "@/app/hooks/themeContext";
import TopBar from "@/app/components/TopBar";
import { darkTheme } from "@/app/constants/dark";
import { Ionicons } from "@expo/vector-icons";
import useGoBack from "@/app/navigation/useGoBack";

type CreerSessionPrenomScreenProp = StackNavigationProp<
  RootStackParamList,
  "CreerSessionPrenom"
>;

const CreerSessionPrenom: React.FC = () => {
  const navigation = useNavigation<CreerSessionPrenomScreenProp>();
  const { theme } = useTheme();
  const goBack = useGoBack();
  const [prenom, setPrenom] = useState("");
  const screenHeight = Dimensions.get("window").height;
  const maxSize = 150; 
  const iconSize = Math.min(screenHeight * 0.20, maxSize)
  const handleNext = () => {
    if (prenom) {
      navigation.navigate("ChoisirPlanete", { prenom });
    } else {
      alert("Veuillez entrer un prénom.");
    }
  };

  return (
    <View style={theme.container}>
      <TopBar
        titre="Créer une"
        prenom="session"
        iconeGaucheNom="arrow-back-outline"
        iconeGaucheAction={goBack}
        iconeDroiteNom="close-outline"
        iconeDroiteAction={() => navigation.navigate("AccueilApresConnexion", { refresh: true })}
      />

      <View style={styles.bottomIconsContainer}>
        <View style={theme.input}>
          <TextInput
            style={theme.textInput}
            value={prenom}
            onChangeText={setPrenom}
            placeholder="Écris ton surnom ici"
            placeholderTextColor={theme === darkTheme ? "#FAE6BB" : "#23363E"}
          />
        </View>
        <View style={theme.iconeContainer}>
          <TouchableOpacity onPress={handleNext}>
            <View style={theme.iconeShadow}>
              <Ionicons
                name="arrow-forward-circle"
                size={iconSize}
                style={theme.iconeColor}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomIconsContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    marginBottom: 20,
  },
  icon: {
    paddingVertical: 5,
  },
});

export default CreerSessionPrenom;
