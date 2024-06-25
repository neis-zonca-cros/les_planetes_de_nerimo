import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { useTheme } from "@/themes/themeContext";
import { ScrollView } from "react-native-gesture-handler";
import TopBar from "@/components/navigation/TopBar";
import Sessions from "@/components/session";
import { getSessions } from "../fetchs/sessionFetch";
import { Session } from "../fetchs/sessionFetch";
import { getUtilisateur } from "../fetchs/utilisateurFetch";
import { getPersonnageImageURI } from "@/components/imageSession";

type AccueilApresConnexionScreenProp = StackNavigationProp<
  RootStackParamList,
  "AccueilApresConnexion"
>;

const AccueilApresConnexion: React.FC = () => {
  const navigation = useNavigation<AccueilApresConnexionScreenProp>();
  const { theme } = useTheme();
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [prenom, setPrenom] = useState<string>("");

  const fetchUtilisateurAndSessions = async () => {
    try {
      const utilisateur = await getUtilisateur();
      setPrenom(utilisateur.prenom);

      const fetchedSessions = await getSessions();
      setSessions(fetchedSessions);
    } catch (err) {
      setError("Erreur lors de la récupération des données");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUtilisateurAndSessions();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      if (navigation.isFocused()) {
        fetchUtilisateurAndSessions();
      }
    }, [navigation])
  );

  const addSession = () => {
    console.log("coucou");
    navigation.navigate("CreerSessionPrenom");
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
        prenom={prenom}
        iconeDroiteNom="planet-outline"
        iconeDroiteAction={menuUtilisateur}
        iconeGaucheNom="add-outline"
        iconeGaucheAction={addSession}
      />

      <ScrollView contentContainerStyle={theme.scrollViewContentForSession}>
        {loading ? (
          <Text style={theme.titreMedium}>Chargement...</Text>
        ) : error ? (
          <Text style={theme.titreMedium}>{error}</Text>
        ) : sessions.length === 0 ? (
          <Text style={theme.titreMedium}>
            Pour commencer, ajoutez une session
          </Text>
        ) : (
          sessions.map((session) => (
            <View key={session._id}>
              <Sessions
                prenom={session.prenom}
                planeteNom={session.planeteRef.nom}
                personnageNom={session.personnageRef.nom}
                imageSource={getPersonnageImageURI(session.personnageRef.nom)}
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
