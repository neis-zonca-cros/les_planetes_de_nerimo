import React from 'react';

import { TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { useTheme } from '@/app/hooks/themeContext';
import { ThemedStyles } from '@/app/utils/styles';

interface CloseButtonProps {
  onClose: () => void;
  iconSize: number;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClose, iconSize }) => {
  const { theme } = useTheme();
  const styleTheme = ThemedStyles(theme);

  return (
    <TouchableOpacity onPress={onClose} style={styleTheme.BUTTON_CLOSE}>
      <Ionicons name="close-outline" size={iconSize} color={theme.colors.neutralButton} />
    </TouchableOpacity>
  );
};

export default CloseButton;
