import React from 'react';

import { View, Text } from 'react-native';

import Modal from 'react-native-modal';

import { useTheme } from '@/app/hooks/themeContext';
import { ThemedStyles } from '@/app/utils/styles';

import ChoiceButton from './ChoiceButton';
import CloseButton from './CloseButton';
import ReplayOrExit from './ReplayOrExit';

interface StoryModalProps {
  visible: boolean;
  onClose: () => void;
  currentText: string;
  choices: any[];
  storyEnded: boolean;
  handleChoice: (index: number) => void;
  handleDeleteSession: () => void;
  handleReplay: () => void;
  iconSize: number;
}

const StoryModal: React.FC<StoryModalProps> = ({
  visible,
  onClose,
  currentText,
  choices,
  storyEnded,
  handleChoice,
  handleDeleteSession,
  handleReplay,
  iconSize,
}) => {
  const { theme } = useTheme();
  const styleTheme = ThemedStyles(theme);

  return (
    <Modal isVisible={visible} onBackdropPress={onClose} animationIn="slideInUp">
      <View style={styleTheme.modalContainer}>
        <View style={[styleTheme.modalContent, { backgroundColor: theme.colors.background }]}>
          <Text style={[styleTheme.text, { lineHeight: 25 }]}>{currentText}</Text>
          <View style={styleTheme.choixHistoire}>
            {storyEnded ? (
              <ReplayOrExit onExit={handleDeleteSession} onReplay={handleReplay} />
            ) : (
              choices.map((choice, index) => (
                <ChoiceButton
                  key={choice.id || index}
                  text={choice.text}
                  onPress={() => handleChoice(index)}
                />
              ))
            )}
          </View>
          <CloseButton onClose={onClose} iconSize={iconSize} />
        </View>
      </View>
    </Modal>
  );
};
export default StoryModal;
