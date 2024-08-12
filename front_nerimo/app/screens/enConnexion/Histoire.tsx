import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Pressable, Dimensions } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '@/app/types';
import { useTheme } from '@/app/hooks/themeContext';
import { Story } from 'inkjs';
import TopBar from '@/app/components/TopBar';
import { backgroundImages } from '@/app/components/imageHistoire';
import { normalizeKey } from '@/app/utils/normalizeKey';


type HistoireScreenProp = StackNavigationProp<RootStackParamList, 'Histoire'>;

const Histoire: React.FC = () => {
  const navigation = useNavigation<HistoireScreenProp>();
  const route = useRoute<RouteProp<RootStackParamList, 'Histoire'>>();
  const { histoire, personnageNom, sessionPrenom } = route.params;
  const { theme } = useTheme();

  const [story, setStory] = useState<Story | null>(null);
  const [currentText, setCurrentText] = useState<string>('');
  const [choices, setChoices] = useState<any[]>([]);
  const [backgroundImage, setBackgroundImage] = useState<any>(null); 

  useEffect(() => {
    const inkStory = new Story(histoire);
    inkStory.variablesState['sessionPrenom'] = sessionPrenom;
    setStory(inkStory);
    continueStory(inkStory);
  }, [histoire]);

  const continueStory = (inkStory: Story) => {
    let text = '';
    let newBackgroundImage: string | null = null;

    while (inkStory.canContinue) {
      const currentText = inkStory.Continue();
      text += currentText;

      const tags = inkStory.currentTags;
      if (tags) {
        tags.forEach(tag => {
          const backgroundTagMatch = tag.match(/^BACKGROUND:\s*(\S+)/);
          if (backgroundTagMatch) {
            newBackgroundImage = backgroundTagMatch[1];
            console.log(`Background tag detected with value: ${newBackgroundImage}`);
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
    }, 100)
    }
  };


  const goToAccueil = async () => {
    navigation.navigate('AccueilApresConnexion', {refresh : true}); 
  };

  return backgroundImage ? (
    <ImageBackground source={backgroundImage} style={styles.imageHistoire}>
      <TopBar
        iconeDroiteNom="close-outline"
        iconeDroiteAction={goToAccueil}
      />
      <View style={styles.containerHistoire}>

        <View style={[styles.textContainerHistoire, {backgroundColor: theme.colors.background}]}>
          <Text style={[styles.textHistoire, {fontFamily: theme.typographySize.medium.fontFamily, color: theme.colors.text, fontSize: theme.typographySize.medium.fontSize}]}>{currentText}</Text>
        </View>
        <View style={styles.choixHistoire}>
          {choices.map((choice, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.choixBouttonHistoire, theme.colors.effectShadow, {backgroundColor: theme.colors.background, borderColor: theme.colors.background}]}
              onPress={() => makeChoice(index)}
            >
              <Text style={[styles.textHistoire, {fontFamily: theme.typographySize.medium.fontFamily, color: theme.colors.text, fontSize: theme.typographySize.medium.fontSize}]}>{choice.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      
    </ImageBackground>
  ) : (
    <View style={[styles.containerHistoireSansImage, {backgroundColor: theme.colors.background}]}>
            <TopBar
        iconeDroiteNom="close-outline"
        iconeDroiteAction={goToAccueil}
      />
      <View style={[styles.textContainerHistoire, {backgroundColor: theme.colors.neutralButton}]}>
        <Text style={[styles.textHistoire, {fontFamily: theme.typographySize.medium.fontFamily, color: theme.colors.text, fontSize: theme.typographySize.medium.fontSize}]}>{currentText}</Text>
      </View>
      <View style={styles.choixHistoire}>
        {choices.map((choice, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.choixBouttonHistoire, theme.colors.effectShadow, {backgroundColor: theme.colors.background, borderColor: theme.colors.background}]}
            onPress={() => makeChoice(index)}
          >
            <Text style={[styles.textHistoire, {fontFamily: theme.typographySize.medium.fontFamily, color: theme.colors.text, fontSize: theme.typographySize.medium.fontSize}]}>{choice.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Histoire;
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create ({
  imageHistoire: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  containerHistoire: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
  },
  containerHistoireSansImage: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
  },
  textContainerHistoire: {
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  textHistoire: {
    lineHeight: screenHeight*0.045,
    textAlign: 'center',
  },
  choixHistoire: {
    flexDirection: "row",
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  choixBouttonHistoire: {
    padding: 2,
    marginHorizontal: 5,
    marginBottom: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth * 0.3,
    borderWidth: 5,
  },
})