import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
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
      <ScrollView contentContainerStyle={theme.scrollViewContent}>
        <Text style={theme.titreMedium2}>Choisis ton prénom :</Text>
        <View style={theme.input}>
        <TextInput
          style={theme.textInput}
          value={prenom}
          onChangeText={setPrenom}
          placeholder="Prénom"
          placeholderTextColor={
            theme === darkTheme ? "#FAE6BB" : "#23363E"
          }
        /></View>
        <TouchableOpacity
        onPress={handleNext}
        style={theme.iconeContainer}
      >
        <View style={theme.iconeShadow}>
          <Ionicons
            name="arrow-forward-circle"
            size={80}
            style={theme.iconeColor}
          />
        </View>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default CreerSessionPrenom;
