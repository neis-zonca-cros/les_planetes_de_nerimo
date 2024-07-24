import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/app/types";
import { useTheme } from "@/themes/themeContext";
import { ScrollView } from "react-native-gesture-handler";
import TopBar from "@/components/navigation/TopBar";
import { darkTheme } from "@/themes/dark";
import { Ionicons } from "@expo/vector-icons";

type CreerSessionPrenomScreenProp = StackNavigationProp<
  RootStackParamList,
  "CreerSessionPrenom"
>;

const CreerSessionPrenom: React.FC = () => {
  const navigation = useNavigation<CreerSessionPrenomScreenProp>();
  const { theme } = useTheme();
  const [prenom, setPrenom] = useState("");

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
        iconeDroiteNom="planet-outline"
        iconeDroiteAction={() => navigation.navigate("MenuUtilisateur")}
      />
     
        <View style={styles.bottomIconsContainer}>
        <View style={theme.input}>
        <TextInput
          style={theme.textInput}
          value={prenom}
          onChangeText={setPrenom}
          placeholder="Écris ton surnom ici"
          placeholderTextColor={
            theme === darkTheme ? "#FAE6BB" : "#23363E"
          }
        /></View>
        <View style={theme.iconeContainer}>
        <TouchableOpacity
        onPress={handleNext}
        
      >
        <View style={theme.iconeShadow}>
          <Ionicons
            name="arrow-forward-circle"
            size={80}
            style={theme.iconeColor}
          />
        </View>
      </TouchableOpacity></View>
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
