import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";
import { useTheme } from "@/themes/themeContext";
import TopBar from "@/components/navigation/TopBar";
import Sessions from "@/components/session";
import { getSessions } from "../../fetchs/sessionFetch";
import { Session } from "../../fetchs/sessionFetch";
import { getUtilisateur } from "../../fetchs/utilisateurFetch";
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
          <Text style={theme.listText}>Chargement...</Text>
        ) : error ? (
          <Text style={theme.listText}>{error}</Text>
        ) : sessions.length === 0 ? (
          <Text style={theme.listText}>
            Pour commencer, ajoutez une session
          </Text>
        ) : (
          <View style={styles.gridContainer}>
            {sessions.map((session) => (
              <View key={session._id} style={styles.sessionWrapper}>
                <Sessions
                  prenom={session.prenom}
                  planeteNom={session.planeteRef.nom}
                  personnageNom={session.personnageRef.nom}
                  imageSource={getPersonnageImageURI(session.personnageRef.nom)}
                  onPress={BoutonSession}
                />
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContentForSession: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 110,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  sessionWrapper: {
    width: '30%', 
    marginBottom: 10,  
  },
});

export default AccueilApresConnexion;
