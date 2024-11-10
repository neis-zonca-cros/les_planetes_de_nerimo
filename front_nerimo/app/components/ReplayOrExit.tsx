import React from 'react';

import { TouchableOpacity, Text } from 'react-native';

import { useTheme } from '@/app/hooks/themeContext';
import { ThemedStyles } from '@/app/utils/styles';

interface ReplayOrExitProps {
  onReplay: () => void;
  onExit: () => void;
}

const ReplayOrExit: React.FC<ReplayOrExitProps> = ({ onReplay, onExit }) => {
  const { theme } = useTheme();
  const styleTheme = ThemedStyles(theme);

  return (
    <>
      <TouchableOpacity
        onPress={onExit}
        style={[
          styleTheme.BUTTON_FORM,
          theme.colors.effectShadow,
          {
            backgroundColor: theme.colors.background,
            borderColor: theme.colors.background,
          },
        ]}
      >
        <Text style={styleTheme.TEXT}>Quitter</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onReplay}
        style={[
          styleTheme.BUTTON_FORM,
          theme.colors.effectShadow,
          {
            backgroundColor: theme.colors.background,
            borderColor: theme.colors.background,
          },
        ]}
      >
        <Text style={styleTheme.TEXT}>Rejouer</Text>
      </TouchableOpacity>
    </>
  );
};

export default ReplayOrExit;
