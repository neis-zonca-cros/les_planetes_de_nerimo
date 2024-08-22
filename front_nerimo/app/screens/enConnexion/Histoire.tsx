import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Modal from "react-native-modal";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, RouteProp, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { RootStackParamList } from "@/app/types";
import { useTheme } from "@/app/hooks/themeContext";
import { Story } from "inkjs";
import TopBar from "@/app/components/TopBar";
import { backgroundImages } from "@/app/components/imageHistoire";
import { ThemedStyles } from "@/app/utils/styles";
import { BackgroundContainer } from "@/app/components/BackgroundContainer";
import { updateSession } from "@/app/services/sessionFetch";
import { continueStory, makeChoice } from "@/app/utils/storyUtils";
import { fetchAndLoadStory } from "@/app/services/storyService";


type HistoireScreenProp = StackNavigationProp<RootStackParamList, "Histoire">;

const Histoire: React.FC = () => {
  const navigation = useNavigation<HistoireScreenProp>();
  const route = useRoute<RouteProp<RootStackParamList, "Histoire">>();
  const { histoire, personnageNom, sessionPrenom, sessionId } = route.params;
  const { theme } = useTheme();
  const styleTheme = ThemedStyles(theme);
  const [story, setStory] = useState<Story | null>(null);
  const [currentText, setCurrentText] = useState<string>("");
  const [choices, setChoices] = useState<any[]>([]);
  const [backgroundImage, setBackgroundImage] = useState<any>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const screenHeight = Dimensions.get("window").height;
  const maxSize = 56;
  const iconSize = Math.min(screenHeight * 0.10, maxSize)

  const handleContinueStory = (inkStory: Story, savedText?: string) => {
    continueStory(
      inkStory,
      personnageNom,
      backgroundImages,
      setCurrentText,
      setChoices,
      setBackgroundImage,
      savedText
    );
  };
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
      handleContinueStory
    );
  }, [histoire, sessionPrenom, sessionId]);

  const handleChoice = (choiceIndex: number) => {
    makeChoice(story, choiceIndex, handleContinueStory, setModalVisible);
  };

  const goToAccueil = async () => {
    if (story) {
      try {
        const storyStateJson = story.state.ToJson();
        if (sessionId) {
          await updateSession(sessionId, storyStateJson, currentText);
        } else {
          console.error("ID de la session manquant.");
        }
      } catch (error) {
        console.error("Erreur lors de la sauvegarde de l'état de la story :", error);
      }
    }
    navigation.navigate("AccueilApresConnexion", { refresh: true });
  };

  return (
    <BackgroundContainer
      backgroundImage={backgroundImage}
      style={styleTheme.container}
    >
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

        <Modal
          isVisible={modalVisible}
          onBackdropPress={() => setModalVisible(false)}
          animationIn="slideInUp"
          animationOut="slideOutDown"
        >
          <View style={styles.modalContainer}>
            <View
              style={[
                styles.modalContent,
                { backgroundColor: theme.colors.background },
              ]}
            >
              <Text style={[styleTheme.text, { lineHeight: 25 }]}>
                {currentText}
              </Text>
              <View style={styles.choixHistoire}>
                {choices.map((choice, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.choixBouttonHistoire,
                      theme.colors.effectShadow,
                      {
                        backgroundColor: theme.colors.background,
                        borderColor: theme.colors.background,
                      },
                    ]}
                    onPress={() => handleChoice(index)}
                  >
                    <Text style={[styleTheme.text, { lineHeight: 20 }]}>
                      {choice.text}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.modalCloseButton}
              >
                <Ionicons
                  name="close-outline"
                  size={iconSize}
                  color={theme.colors.neutralButton}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </BackgroundContainer>

  );
};

export default Histoire;

const styles = StyleSheet.create({
  imageHistoire: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  containerHistoire: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    position: 'relative'
  },
  choixHistoire: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
    marginTop: 20,
  },
  choixBouttonHistoire: {
    padding: 2,
    marginHorizontal: 5,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    borderWidth: 5,
  },
  modalOpenButton: {
    position: "absolute",
    borderRadius: 100,
    padding: 10,
    bottom: 30,
    right: 30,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    borderRadius: 10,
    paddingHorizontal: 60,
    paddingVertical: 50,
    width: "80%",
    height: "auto",
    position: "relative",
  },
  modalCloseButton: {
    position: "absolute",
    margin: 5,
    top: 10,
    right: 10,
    zIndex: 1,
  },
});



