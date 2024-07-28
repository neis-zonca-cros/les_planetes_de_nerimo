import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
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

  const organizeSessionsInColumns = (sessions: Session[]) => {
    const columns: Session[][] = [[], [], []];
    sessions.forEach((session, index) => {
      columns[index % 3].push(session);
    });
    return columns;
  };

  const organizedSessions = organizeSessionsInColumns(sessions);

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

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
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
            {organizedSessions.map((column, columnIndex) => (
              <View key={columnIndex} style={styles.column}>
                {column.map((session) => (
                  <View key={session._id} style={styles.sessionWrapper}>
                    <Sessions
                      prenom={session.prenom}
                      planeteNom={session.planeteRef.nom}
                      personnageNom={session.personnageRef.nom}
                      imageSource={getPersonnageImageURI(
                        session.personnageRef.nom
                      )}
                      onPress={BoutonSession}
                    />
                  </View>
                ))}
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
};
const { height: screenHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  gridContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: screenHeight * 0.3,
  },
  column: {
    flexDirection: "column",
    width: "30%",
  },
  sessionWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
});

export default AccueilApresConnexion;
