import React from 'react';

import { View, Text } from 'react-native';

import Modal from 'react-native-modal';

import ChoiceButton from '@/app/components/ChoiceButton';
import CloseButton from '@/app/components/CloseButton';
import ReplayOrExit from '@/app/components/ReplayOrExit';
import { useTheme } from '@/app/hooks/themeContext';
import { ThemedStyles } from '@/app/utils/styles';

interface StoryModalProps {
  visible: boolean;
  onClose: () => void;
  currentText: string;
  choices: any[];
  storyEnded: boolean;
  // eslint-disable-next-line no-unused-vars
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
      <View style={styleTheme.MODAL_CONTAINER}>
        <View style={[styleTheme.MODAL_CONTENT, { backgroundColor: theme.colors.background }]}>
          <Text style={[styleTheme.TEXT, { lineHeight: 25 }]}>{currentText}</Text>
          <View style={styleTheme.STORY_CHOICE}>
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
