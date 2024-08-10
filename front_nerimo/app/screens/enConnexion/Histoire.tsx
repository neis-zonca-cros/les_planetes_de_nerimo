import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Pressable } from 'react-native';
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
    <ImageBackground source={backgroundImage} style={theme.imageHistoire}>
      <TopBar
        iconeDroiteNom="close-outline"
        iconeDroiteAction={goToAccueil}
      />
      <View style={theme.containerHistoire}>

        <View style={theme.textContainerHistoire}>
          <Text style={theme.textHistoire}>{currentText}</Text>
        </View>
        <View style={theme.choixHistoire}>
          {choices.map((choice, index) => (
            <Pressable
              key={index}
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.6 : 1, 
                },
                theme.choixBouttonHistoire
              ]}
              onPress={() => makeChoice(index)}
            >
              <Text style={theme.choixBouttonTexteHistoire}>{choice.text}</Text>
            </Pressable>
          ))}
        </View>
      </View>
      
    </ImageBackground>
  ) : (
    <View style={theme.containerHistoireSansImage}>
            <TopBar
        iconeDroiteNom="close-outline"
        iconeDroiteAction={goToAccueil}
      />
      <View style={theme.textContainerHistoire}>
        <Text style={theme.textHistoire}>{currentText}</Text>
      </View>
      <View style={theme.choixHistoire}>
        {choices.map((choice, index) => (
          <TouchableOpacity
            key={index}
            style={theme.choixBouttonHistoire}
            onPress={() => makeChoice(index)}
          >
            <Text style={theme.choixBouttonTexteHistoire}>{choice.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Histoire;

