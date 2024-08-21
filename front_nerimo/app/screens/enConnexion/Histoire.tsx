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
import { normalizeKey } from "@/app/utils/normalizeKey";
import { ThemedStyles } from "@/app/utils/styles";
import { BackgroundContainer } from "@/app/components/BackgroundContainer";
import { getSession, updateSession } from "@/app/services/sessionFetch";

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

  useEffect(() => {
    const fetchAndLoadStory = async () => {
      try {
        if (sessionId) {
          const sessionData = await getSession(sessionId);
          const sauvegarde = sessionData?.sauvegarde;
          const savedText = sessionData?.texte || "";

          if (sauvegarde) {
            const inkStory = new Story(histoire);
            inkStory.variablesState["sessionPrenom"] = sessionPrenom;
            inkStory.state.LoadJson(sauvegarde);
            setStory(inkStory);
            if (savedText) {
              setCurrentText(savedText);
            }
            continueStory(inkStory, savedText);
          } else {
            const inkStory = new Story(histoire);
            inkStory.variablesState["sessionPrenom"] = sessionPrenom;
            setStory(inkStory);
            continueStory(inkStory);
          }
        } else {
          const inkStory = new Story(histoire);
          inkStory.variablesState["sessionPrenom"] = sessionPrenom;
          setStory(inkStory);
          continueStory(inkStory);
        }
      } catch (error) {
        console.error("Erreur lors du chargement de la sauvegarde de l'histoire:", error);
      }
    };

    fetchAndLoadStory();
  }, [histoire, sessionPrenom, sessionId]);


  const continueStory = (inkStory: Story, savedText?: string) => {
    let text = savedText ?? "";
    let newBackgroundImage: string | null = null;

    while (inkStory.canContinue) {
      const currentText = inkStory.Continue() ?? "";

      if (currentText.trim().length > 0) {
        text += currentText.trim();
      }
      const tags = inkStory.currentTags;
      if (tags) {
        tags.forEach((tag) => {
          const backgroundTagMatch = tag.match(/^BACKGROUND:\s*(\S+)/);
          if (backgroundTagMatch) {
            newBackgroundImage = backgroundTagMatch[1];
            console.log(
              `Background tag detected with value: ${newBackgroundImage}`
            );
          }
        });
      }
    }
    const normalizedPersonnageNom = normalizeKey(personnageNom);
    if (newBackgroundImage && backgroundImages[normalizedPersonnageNom]) {
      const images = backgroundImages[normalizedPersonnageNom];
      setBackgroundImage(images[normalizeKey(newBackgroundImage)] || null);
    } else {
      setBackgroundImage(backgroundImages['default']);
    }

    setCurrentText(text.trim());
    setChoices(inkStory.currentChoices);
  };


  const makeChoice = (choiceIndex: number) => {
    if (story) {
      setTimeout(() => {
        story.ChooseChoiceIndex(choiceIndex);
        continueStory(story);
        setModalVisible(false);
      }, 100);
    }
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
                    onPress={() => makeChoice(index)}
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



