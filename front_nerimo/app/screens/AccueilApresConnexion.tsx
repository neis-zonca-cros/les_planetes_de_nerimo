import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { useTheme } from "@/themes/themeContext";
import { ScrollView } from "react-native-gesture-handler";
import TopBar from "@/components/navigation/TopBar";
import Session from "@/components/collections/session";

type AccueilApresConnexionScreen = StackNavigationProp<
  RootStackParamList,
  "AccueilApresConnexion"
>;

const AccueilApresConnexion: React.FC = () => {
  const navigation = useNavigation<AccueilApresConnexionScreen>();
  const { theme } = useTheme();

  const [sessions, setSessions] = useState([
    { id: 1, prenom: "John", nomPlanete: "Mars", nomPersonnage: "Martien" },
    { id: 2, prenom: "Jane", nomPlanete: "Vénus", nomPersonnage: "Vénusienne" },
    {
      id: 3,
      prenom: "Alice",
      nomPlanete: "Jupiter",
      nomPersonnage: "Jupitérienne",
    },
    { id: 4, prenom: "Bob", nomPlanete: "Saturne", nomPersonnage: "Saturnien" },
    { id: 5, prenom: "Eve", nomPlanete: "Uranus", nomPersonnage: "Uranienne" },
  ]);

  const addSession = () => {
    const newSession = {
      id: sessions.length + 1,
      prenom: "Nouveau",
      nomPlanete: "Neptune",
      nomPersonnage: "Neptunien",
    };
    setSessions([...sessions, newSession]);
  };

  const BoutonSession = () => {
    console.log("bouton session appuyé");
  };

  const menuUtilisateur = () => {
    navigation.navigate("MenuUtilisateur");
  };

  return (
    <View style={theme.container}>
      <TopBar
        titre="Bienvenue"
        prenom="Mokala"
        iconeDroiteNom="planet-outline"
        iconeDroiteAction={menuUtilisateur}
        iconeGaucheNom="add-outline"
        iconeGaucheAction={addSession}
      />

      <ScrollView contentContainerStyle={theme.scrollViewContentForSession}>
        {sessions.length === 0 ? (
          <Text style={theme.titreMedium}>
            Pour commencer, ajoutez une session
          </Text>
        ) : (
          sessions.map((session, index) => (
            <View>
              <Session
                key={session.id}
                prenom={session.prenom}
                planeteNom={session.nomPlanete}
                personnageNom={session.nomPersonnage}
                onPress={BoutonSession}
              />
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default AccueilApresConnexion;
