import React, { useState, useCallback, useEffect } from 'react';

import { View, Text, StyleSheet, ScrollView, Dimensions, Image } from 'react-native';

import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/commonjs/src/types';

import ConfirmDeleteModal from '@/app/components/ConfirmDeleteModal';
import { getPersonnageImageURI } from '@/app/components/imageSession';
import Sessions from '@/app/components/session';
import TopBar from '@/app/components/TopBar';
import { useSession } from '@/app/hooks/sessionContext';
import { useTheme } from '@/app/hooks/themeContext';
import { useUser } from '@/app/hooks/userContext';
import { Session } from '@/app/services/sessionFetch';
import { RootStackParamList } from '@/app/types';
import { ThemedStyles } from '@/app/utils/styles';

type AccueilApresConnexionScreenProp = StackNavigationProp<
  RootStackParamList,
  'AccueilApresConnexion'
>;

const AccueilApresConnexion: React.FC = () => {
  const navigation = useNavigation<AccueilApresConnexionScreenProp>();
  const { theme } = useTheme();
  const styleTheme = ThemedStyles(theme);
  const { utilisateur } = useUser();
  const { sessions, refreshSessions, removeSession } = useSession();
  const [loading, setLoading] = useState<boolean>(true);
  const [, setError] = useState<string | null>(null);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [sessionToDelete, setSessionToDelete] = useState<Session | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useFocusEffect(
    useCallback(() => {
      if (navigation.isFocused()) {
        refreshSessions().catch(err => {
          setError('Erreur lors de la récupération des données');
          console.error(err);
        });
      }
    }, [navigation, refreshSessions]),
  );

  const addSession = () => {
    navigation.navigate('CreerSessionPrenom');
  };

  const BoutonSession = (session: Session) => {
    navigation.navigate('Histoire', {
      histoire: session.personnageRef.histoire,
      personnageNom: session.personnageRef.nom,
      sessionPrenom: session.prenom,
      sessionId: session._id,
    });
  };

  const menuUtilisateur = () => {
    navigation.navigate('MenuUtilisateur');
  };
  const handleCancel = () => {
    setEditMode(false);
    setModalVisible(false);
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
    setModalVisible(true);
  };

  const handleDelete = async () => {
    if (sessionToDelete) {
      try {
        await removeSession(sessionToDelete._id);
        setEditMode(false);
      } catch (err) {
        console.error('Failed to delete session:', err);
      } finally {
        setModalVisible(false);
      }
    }
  };

  const organizedSessions = organizeSessionsInColumns(sessions || []);

  return (
    <View style={styleTheme.CONTAINER}>
      {loading ? (
        <View style={styles.imageContainer}>
          <Image
            style={styles.backgroundImage}
            source={require('@/app/assets/images/loader.gif')}
          />
        </View>
      ) : (
        <>
          <TopBar
            titre="Bienvenue"
            prenom={utilisateur?.prenom || ''}
            iconeZeroNom={editMode ? null : 'brush-outline'}
            iconeZeroAction={editMode ? undefined : toggleEditMode}
            iconeDroiteNom={editMode ? 'close-outline' : 'planet-outline'}
            iconeDroiteAction={editMode ? toggleEditMode : menuUtilisateur}
            iconeGaucheNom={editMode ? null : 'add-outline'}
            iconeGaucheAction={editMode ? undefined : addSession}
          />

          <ScrollView contentContainerStyle={styleTheme.SCROLL_VIEW_CONTENT}>
            {sessions && sessions.length === 0 ? (
              <Text style={styleTheme.TEXT}>Pour commencer, ajoutez une session</Text>
            ) : (
              <View style={styles.gridContainer}>
                {organizedSessions.map((column, columnIndex) => (
                  <View key={columnIndex} style={styles.column}>
                    {column.map(session => (
                      <View key={session._id} style={styles.sessionWrapper}>
                        <Sessions
                          prenom={session.prenom}
                          planeteNom={session.planeteRef.nom}
                          personnageNom={session.personnageRef.nom}
                          imageSource={getPersonnageImageURI(session.personnageRef.nom)}
                          onPress={
                            editMode ? () => openDialog(session) : () => BoutonSession(session)
                          }
                          icon={editMode ? 'trash-outline' : 'play-outline'}
                        />
                      </View>
                    ))}
                  </View>
                ))}
              </View>
            )}
          </ScrollView>

          <ConfirmDeleteModal
            onConfirm={handleDelete}
            onCancel={handleCancel}
            sessionName={sessionToDelete?.prenom || ''}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          />
        </>
      )}
    </View>
  );
};
const { height: screenHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    resizeMode: 'contain',
    width: screenHeight * 0.5,
    height: screenHeight * 0.5,
  },
  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flexDirection: 'column',
    width: '30%',
  },
  sessionWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default AccueilApresConnexion;
