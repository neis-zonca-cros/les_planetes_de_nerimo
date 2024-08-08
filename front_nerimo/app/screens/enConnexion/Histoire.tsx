import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Button, TouchableOpacity, ImageBackground } from 'react-native';
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
    setCurrentText(text.trim()); 
    setChoices(inkStory.currentChoices);
  };

  const makeChoice = (choiceIndex: number) => {
    if (story) {
      story.ChooseChoiceIndex(choiceIndex);
      continueStory(story);
    }
  };

  return (
    // <ImageBackground 
    //   source={require('@/app/assets/images/chambr.jpg')} 
    //   style={styles.backgroundImage}
    // >
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
    // </ImageBackground>
  );
};

export default Histoire;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end', 
    padding: 10,
    backgroundColor: "#23363E"
  },
  textContainer: {
    padding: 10,
    backgroundColor: 'rgba(255, 230, 187, 0.8)',
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 5, 
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
    marginBottom: 2, 
    width: '100%',
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