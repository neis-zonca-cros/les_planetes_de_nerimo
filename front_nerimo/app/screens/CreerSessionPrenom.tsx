import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { useTheme } from "@/themes/themeContext";
import { ScrollView } from "react-native-gesture-handler";
import TopBar from "@/components/navigation/TopBar";

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
        titre="Créer une session"
        iconeDroiteNom="planet-outline"
        iconeDroiteAction={() => navigation.navigate("MenuUtilisateur")}
      />
      <ScrollView contentContainerStyle={theme.scrollViewContentForSession}>
        <Text style={theme.titreMedium}>Entrez le prénom de la session :</Text>
        <TextInput
          style={theme.input}
          value={prenom}
          onChangeText={setPrenom}
          placeholder="Prénom"
        />
        <Button title="Suivant" onPress={handleNext} />
      </ScrollView>
    </View>
  );
};

export default CreerSessionPrenom;
