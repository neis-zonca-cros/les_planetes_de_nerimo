import React from 'react';

import { TouchableOpacity, Text } from 'react-native';

import { useTheme } from '@/app/hooks/themeContext';
import { ThemedStyles } from '@/app/utils/styles';

interface ChoiceButtonProps {
  text: string;
  onPress: () => void;
}

const ChoiceButton: React.FC<ChoiceButtonProps> = ({ text, onPress }) => {
  const { theme } = useTheme();
  const styleTheme = ThemedStyles(theme);

  return (
    <TouchableOpacity
      style={[
        styleTheme.rectangleForm,
        theme.colors.effectShadow,
        {
          backgroundColor: theme.colors.background,
          borderColor: theme.colors.background,
        },
      ]}
      onPress={onPress}
    >
      <Text style={styleTheme.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ChoiceButton;
