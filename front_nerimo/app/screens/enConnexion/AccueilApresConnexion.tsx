import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";
import { useTheme } from "@/app/hooks/themeContext";
import TopBar from "@/app/components/TopBar";
import Sessions from "@/app/components/session";
import ConfirmDeleteModal from "@/app/components/ConfirmDeleteModal";
import { Modalize } from "react-native-modalize";
import { useUser } from "@/app/hooks/userContext"; 
import { getPersonnageImageURI } from "@/app/components/imageSession";
import { useSession } from "@/app/hooks/sessionContext";
import { Session } from "@/app/services/sessionFetch";

type AccueilApresConnexionScreenProp = StackNavigationProp<
  RootStackParamList,
  "AccueilApresConnexion"
>;

const AccueilApresConnexion: React.FC = () => {
  const navigation = useNavigation<AccueilApresConnexionScreenProp>();
  const { theme } = useTheme();
  const { utilisateur } = useUser();
  const { sessions, refreshSessions, removeSession } = useSession();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [sessionToDelete, setSessionToDelete] = useState<Session | null>(null);
  const modalizeRef = useRef<Modalize>(null);

  useFocusEffect(
    React.useCallback(() => {
      if (navigation.isFocused()) {
        refreshSessions().catch(err => {
          setError("Erreur lors de la récupération des données");
          console.error(err);
        }).finally(() => setLoading(false));
      }
    }, [navigation, refreshSessions])
  );

  const addSession = () => {
    navigation.navigate("CreerSessionPrenom");
  };

  const BoutonSession = (session: Session) => {
    console.log("Session sélectionnée:", session);
    navigation.navigate("Histoire", { histoire: session.personnageRef.histoire, personnageNom: session.personnageRef.nom, sessionPrenom: session.prenom });
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
    console.log("Ouverture de la modal pour la session :", session);
    setSessionToDelete(session);
    console.log("sessionToDelete après mise à jour :", sessionToDelete);
    if (modalizeRef.current) {
      console.log("Modalize est prêt à ouvrir");
      modalizeRef.current.open();
    } else {
      console.log("Modalize n'est pas encore prêt");
    }
  };

  const handleDelete = async () => {
    if (sessionToDelete) {
      try {
        await removeSession(sessionToDelete._id);
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

  const organizedSessions = organizeSessionsInColumns(sessions || []);

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
        ) : sessions && sessions.length === 0 ? (
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
                        editMode ? () => openDialog(session) : () => BoutonSession(session)
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
