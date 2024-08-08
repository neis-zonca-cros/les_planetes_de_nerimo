import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '@/app/types';
import { useTheme } from '@/app/hooks/themeContext';
import { Story } from 'inkjs';

type HistoireScreenProp = StackNavigationProp<RootStackParamList, 'Histoire'>;

const Histoire: React.FC = () => {
  const navigation = useNavigation<HistoireScreenProp>();
  const route = useRoute<RouteProp<RootStackParamList, 'Histoire'>>();
  const { histoire } = route.params;
  const { theme } = useTheme();

  const [story, setStory] = useState<Story | null>(null);
  const [currentText, setCurrentText] = useState<string>('');
  const [choices, setChoices] = useState<any[]>([]);

  useEffect(() => {
    const inkStory = new Story(histoire); 
    setStory(inkStory);
    continueStory(inkStory);
  }, [histoire]);

  const continueStory = (inkStory: Story) => {
    let text = '';
    while (inkStory.canContinue) {
      text += inkStory.Continue();
    }
    setCurrentText(text);
    setChoices(inkStory.currentChoices);
  };

  const makeChoice = (choiceIndex: number) => {
    if (story) {
      story.ChooseChoiceIndex(choiceIndex);
      continueStory(story);
    }
  };

  return (
    <ScrollView style={theme.container}>
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
    </ScrollView>
  );
};

export default Histoire;

const styles = StyleSheet.create({
    textContainer: {
      padding: 20,
    },
    listText: {
      fontSize: 18,
      lineHeight: 24,
      textAlign: 'center'
    },
    choicesContainer: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
      paddingHorizontal: 20,
      marginHorizontal: 10,
    },
    choiceButton: {
      backgroundColor: '#007bff', // Couleur de fond du bouton
      padding: 10,
      marginHorizontal: 5,
      borderRadius: 5, // Coins arrondis
      alignItems: 'center',
      justifyContent: 'center' // Centrer le texte
    },
    choiceButtonText: {
      color: '#ffffff', // Couleur du texte
      fontSize: 16,
    },
  });
  