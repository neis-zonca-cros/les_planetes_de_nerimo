import React, { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";
import { useTheme } from "@/themes/themeContext";
import TopBar from "@/components/navigation/TopBar";
import Sessions from "@/components/session";
import { getSessions, deleteSession } from "../../fetchs/sessionFetch";
import { Session } from "../../fetchs/sessionFetch";
import ConfirmDeleteModal from "@/components/ConfirmDeleteModal";
import { Modalize } from "react-native-modalize";
import { useUser } from "@/app/screens/userContext"; 
import { getPersonnageImageURI } from "@/components/imageSession";

type AccueilApresConnexionScreenProp = StackNavigationProp<
  RootStackParamList,
  "AccueilApresConnexion"
>;

const AccueilApresConnexion: React.FC = () => {
  const navigation = useNavigation<AccueilApresConnexionScreenProp>();
  const { theme } = useTheme();
  const { utilisateur } = useUser(); // Utiliser le contexte utilisateur
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [sessionToDelete, setSessionToDelete] = useState<Session | null>(null);
  const modalizeRef = useRef<Modalize>(null);

  const fetchSessions = async () => {
    try {
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
    fetchSessions();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      if (navigation.isFocused()) {
        fetchSessions();
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

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const organizeSessionsInColumns = (sessions: Session[]) => {
    const columns: Session[][] = [[], [], []];
    sessions.forEach((session, index) => {
      columns[index % 3].push(session);
    });
    return columns;
  };

  const openDialog = (session: Session) => {
    setSessionToDelete(session);
    if (modalizeRef.current) {
      modalizeRef.current.open();
    }
  };

  const handleDelete = async () => {
    if (sessionToDelete) {
      try {
        await deleteSession(sessionToDelete._id);
        fetchSessions();
        setEditMode(false); 
      } catch (err) {
        console.error("Failed to delete session:", err);
      } finally {
        if (modalizeRef.current) {
          modalizeRef.current.close();
        }
      }
    }
  };

  const organizedSessions = organizeSessionsInColumns(sessions);

  return (
    <View style={theme.container}>
      <TopBar
        titre="Bienvenue"
        prenom={utilisateur?.prenom || ""} 
        iconeZeroNom={editMode ? null : "brush-outline"}
        iconeZeroAction={editMode ? undefined : toggleEditMode}
        iconeDroiteNom={editMode ? "close-outline" : "planet-outline"}
        iconeDroiteAction={editMode ? toggleEditMode : menuUtilisateur}
        iconeGaucheNom={editMode ? null : "add-outline"}
        iconeGaucheAction={editMode ? undefined : addSession}
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
                      onPress={
                        editMode ? () => openDialog(session) : BoutonSession
                      }
                      icon={editMode ? "trash-outline" : "play-outline"}
                    />
                  </View>
                ))}
              </View>
            ))}
          </View>
        )}
      </ScrollView>

      {sessionToDelete && (
        <ConfirmDeleteModal
          ref={modalizeRef}
          onConfirm={handleDelete}
          onCancel={() => modalizeRef.current?.close()}
          sessionName={sessionToDelete.prenom}
        />
      )}
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
