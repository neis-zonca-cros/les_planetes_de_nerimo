import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '@/app/types';
import { useTheme } from '@/app/hooks/themeContext';
import { Story } from 'inkjs';
import TopBar from '@/app/components/TopBar';
import { backgroundImages } from '@/app/components/imageHistoire';
import { useSession } from '@/app/hooks/sessionContext';


type HistoireScreenProp = StackNavigationProp<RootStackParamList, 'Histoire'>;


const normalizeKey = (key: string): string => {
  return key
    .toLowerCase()      
    .normalize('NFD')     
    .replace(/[\u0300-\u036f]/g, ''); 
};

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
      story.ChooseChoiceIndex(choiceIndex);
      continueStory(story);
    }
  };


  const goToAccueil = async () => {
    navigation.navigate('AccueilApresConnexion', {refresh : true}); 
  };

  return backgroundImage ? (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <TopBar
        iconeDroiteNom="close-outline"
        iconeDroiteAction={goToAccueil}
      />
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.listText}>{currentText}</Text>
        </View>
        <View style={styles.choicesContainer}>
          {choices.map((choice, index) => (
            <TouchableOpacity
              key={index}
              style={styles.choiceButton}
              onPress={() => makeChoice(index)}
            >
              <Text style={styles.choiceButtonText}>{choice.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      
    </ImageBackground>
  ) : (
    <View style={styles.containerBackground}>
            <TopBar
        iconeDroiteNom="close-outline"
        iconeDroiteAction={goToAccueil}
      />
      <View style={styles.textContainer}>
        <Text style={styles.listText}>{currentText}</Text>
      </View>
      <View style={styles.choicesContainer}>
        {choices.map((choice, index) => (
          <TouchableOpacity
            key={index}
            style={styles.choiceButton}
            onPress={() => makeChoice(index)}
          >
            <Text style={styles.choiceButtonText}>{choice.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Histoire;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',

  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
  },
  containerBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
    backgroundColor: "#23363E"
  },
  textContainer: {
    padding: 10,
    backgroundColor: 'rgba(255, 230, 187, 0.8)',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  listText: {
    fontSize: 12,
    lineHeight: 20,
    textAlign: 'center',
    fontFamily: "brotherBold",
    color: '#23363E',
  },
  choicesContainer: {
    flexDirection: "row",
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 20,
  },
  choiceButton: {
    borderColor: 'rgba(255, 230, 187, 0.8)',
    borderWidth: 2,
    padding: 10,
    marginHorizontal: 5,
    marginTop: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
  },
  choiceButtonText: {    
    fontSize: 12,
    fontFamily: "brotherBold",
    color: 'rgba(255, 230, 187, 0.8)',
    textAlign: 'center',
  },
});
