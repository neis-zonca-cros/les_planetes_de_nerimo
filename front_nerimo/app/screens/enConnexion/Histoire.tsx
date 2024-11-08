import React, { useState, useEffect } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useNavigation, RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Story } from 'inkjs';
import Modal from 'react-native-modal';

import { BackgroundContainer } from '@/app/components/BackgroundContainer';
import { backgroundImages } from '@/app/components/imageHistoire';
import StoryModal from '@/app/components/StoryModal';
import TopBar from '@/app/components/TopBar';
import { useSession } from '@/app/hooks/sessionContext';
import { useTheme } from '@/app/hooks/themeContext';
import { updateSession } from '@/app/services/sessionFetch';
import { fetchAndLoadStory } from '@/app/services/storyService';
import { RootStackParamList } from '@/app/types';
import { continueStory, makeChoice } from '@/app/utils/storyUtils';
import { ThemedStyles } from '@/app/utils/styles';

type HistoireScreenProp = StackNavigationProp<RootStackParamList, 'Histoire'>;

const Histoire: React.FC = () => {
  const navigation = useNavigation<HistoireScreenProp>();
  const route = useRoute<RouteProp<RootStackParamList, 'Histoire'>>();
  const { histoire, personnageNom, sessionPrenom, sessionId } = route.params;
  const { theme } = useTheme();
  const styleTheme = ThemedStyles(theme);
  const [story, setStory] = useState<Story | null>(null);
  const { removeSession } = useSession();
  const [currentText, setCurrentText] = useState<string>('');
  const [choices, setChoices] = useState<any[]>([]);
  const [backgroundImage, setBackgroundImage] = useState<any>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [storyEnded, setStoryEnded] = useState(false);
  const screenHeight = Dimensions.get('window').height;
  const maxSize = 56;
  const iconSize = Math.min(screenHeight * 0.1, maxSize);

  useEffect(() => {
    fetchAndLoadStory(
      histoire,
      sessionPrenom,
      sessionId,
      personnageNom,
      backgroundImages,
      setStory,
      setCurrentText,
      setBackgroundImage,
      handleContinueStory,
    );
  }, [histoire, sessionPrenom, sessionId]);

  const handleContinueStory = (inkStory: Story, savedText?: string) => {
    const isStoryEnded = continueStory(
      inkStory,
      personnageNom,
      backgroundImages,
      setCurrentText,
      setChoices,
      setBackgroundImage,
      savedText,
    );
    setStoryEnded(isStoryEnded);
    return isStoryEnded;
  };

  const handleChoice = (choiceIndex: number) => {
    makeChoice(story, choiceIndex, handleContinueStory, setModalVisible, setStoryEnded);
  };

  const goToAccueil = async () => {
    if (story) {
      try {
        const storyStateJson = story.state.ToJson();
        if (sessionId) {
          await updateSession(sessionId, storyStateJson, currentText);
        } else {
          console.error('ID de la session manquant.');
        }
      } catch (error) {
        console.error("Erreur lors de la sauvegarde de l'état de la story :", error);
      }
    }
    navigation.navigate('AccueilApresConnexion', { refresh: true });
  };

  const handleDeleteSession = async () => {
    if (sessionId) {
      try {
        await removeSession(sessionId);
        navigation.navigate('AccueilApresConnexion', { refresh: true });
      } catch (err) {
        console.error('Failed to delete session:', err);
      } finally {
        setModalVisible(false);
      }
    } else {
      console.error('Session ID is missing.');
    }
  };

  const handleReplay = () => {
    if (story) {
      story.ResetGlobals;
      fetchAndLoadStory(
        histoire,
        sessionPrenom,
        sessionId,
        personnageNom,
        backgroundImages,
        setStory,
        setCurrentText,
        setBackgroundImage,
        handleContinueStory,
      );
    }
    setModalVisible(false);
  };

  return (
    <BackgroundContainer backgroundImage={backgroundImage} style={styleTheme.container}>
      <TopBar iconeDroiteNom="close-outline" iconeDroiteAction={goToAccueil} />
      <View style={styles.containerHistoire}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={[styles.modalOpenButton, { backgroundColor: theme.colors.background }]}
        >
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={iconSize}
            color={theme.colors.neutralButton}
          />
        </TouchableOpacity>

        <StoryModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          currentText={currentText}
          choices={choices}
          storyEnded={storyEnded}
          handleChoice={handleChoice}
          handleDeleteSession={handleDeleteSession}
          handleReplay={handleReplay}
          iconSize={iconSize}
        />
      </View>
    </BackgroundContainer>
  );
};

export default Histoire;

const styles = StyleSheet.create({
  containerHistoire: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    position: 'relative',
  },
  modalOpenButton: {
    position: 'absolute',
    borderRadius: 100,
    padding: 10,
    bottom: 30,
    right: 30,
  },
});
