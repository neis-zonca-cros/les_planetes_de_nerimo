import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
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

type HistoireScreenProp = StackNavigationProp<RootStackParamList, "Histoire">;

const Histoire: React.FC = () => {
  const navigation = useNavigation<HistoireScreenProp>();
  const route = useRoute<RouteProp<RootStackParamList, "Histoire">>();
  const { histoire, personnageNom, sessionPrenom } = route.params;
  const { theme } = useTheme();
  const styleTheme = ThemedStyles(theme);
  const [story, setStory] = useState<Story | null>(null);
  const [currentText, setCurrentText] = useState<string>("");
  const [choices, setChoices] = useState<any[]>([]);
  const [backgroundImage, setBackgroundImage] = useState<any>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  useEffect(() => {
    const inkStory = new Story(histoire);
    inkStory.variablesState["sessionPrenom"] = sessionPrenom;
    setStory(inkStory);
    continueStory(inkStory);
  }, [histoire]);

  const continueStory = (inkStory: Story) => {
    let text = "";
    let newBackgroundImage: string | null = null;

    while (inkStory.canContinue) {
      const currentText = inkStory.Continue();
      text += currentText;

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
      setBackgroundImage(null);
    }

    setCurrentText(text.trim());
    setChoices(inkStory.currentChoices);
  };

  const makeChoice = (choiceIndex: number) => {
    if (story) {
      setTimeout(() => {
        story.ChooseChoiceIndex(choiceIndex);
        continueStory(story);
        setModalVisible(false); // Fermer la modal après avoir fait un choix
      }, 100);
    }
  };

  const goToAccueil = async () => {
    navigation.navigate("AccueilApresConnexion", { refresh: true });
  };

  return backgroundImage ? (
    <ImageBackground source={backgroundImage} style={styles.imageHistoire}>
      <TopBar iconeDroiteNom="close-outline" iconeDroiteAction={goToAccueil} />
      <View style={styles.containerHistoire}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.modalOpenButton}
        >
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={40}
            color={theme.colors.neutralButton}
          />
        </TouchableOpacity>

        <Modal
          isVisible={modalVisible}
          onBackdropPress={() => setModalVisible(false)}
          style={styles.modal}
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
                    <Text style={[styleTheme.text, { lineHeight: 25 }]}>
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
                  size={40}
                  color={theme.colors.neutralButton}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  ) : (
    <View
      style={[
        styles.containerHistoire,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <TopBar iconeDroiteNom="close-outline" iconeDroiteAction={goToAccueil} />
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.modalOpenButton}
      >
        <Ionicons
          name="chatbubble-ellipses-outline"
          size={40}
          color={theme.colors.neutralButton}
        />
      </TouchableOpacity>

      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        style={styles.modal}
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
                  <Text style={[styleTheme.text, { lineHeight: 25 }]}>
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
                size={40}
                color={theme.colors.neutralButton}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Histoire;

const screenWidth = Dimensions.get("window").width;

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
    marginBottom: 5,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    borderWidth: 5,
  },
  modalOpenButton: {
    position: "absolute",
    bottom: 30,
    right: 30,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  modalContent: {
    borderRadius: 10,
    padding: 50,
    width: "80%",
    height: "auto",
    position: "relative",
    justifyContent: "flex-end",
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalCloseButton: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
});
