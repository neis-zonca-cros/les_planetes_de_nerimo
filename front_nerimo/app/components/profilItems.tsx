import React, { useState } from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Switch, Dimensions } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { useTheme } from '../hooks/themeContext';
import { ThemedStyles } from '../utils/styles';

type ProfilItemsProps = {
  text: string;
  iconName?: keyof typeof Ionicons.glyphMap;
  isSwitch?: boolean;
  // eslint-disable-next-line no-unused-vars
  onSwitchToggle?: (value: boolean) => void;
  onPress?: () => void;
};

const ProfilItems: React.FC<ProfilItemsProps> = ({
  text,
  iconName,
  isSwitch,
  onSwitchToggle,
  onPress,
}) => {
  const { theme } = useTheme();
  const [switchValue, setSwitchValue] = useState(false);
  const styleTheme = ThemedStyles(theme);
  const screenHeight = Dimensions.get('window').height;
  const maxSize = 40;
  const iconSize = Math.min(screenHeight * 0.07, maxSize);

  const toggleSwitch = () => {
    const newValue = !switchValue;
    setSwitchValue(newValue);
    if (onSwitchToggle) {
      onSwitchToggle(newValue);
    }
  };

  const handlePress = () => {
    if (onPress) {
      onPress();
    }
  };

  return (
    <TouchableOpacity
      onPress={isSwitch ? toggleSwitch : handlePress}
      style={{ pointerEvents: 'auto', zIndex: 1 }}
    >
      <View
        style={[styleTheme.rectangleForm, theme.colors.effectShadow, styles.containerProfilItems]}
      >
        <Text style={[styleTheme.text]}>{text}</Text>
        {isSwitch ? (
          <Switch
            value={switchValue}
            onValueChange={toggleSwitch}
            trackColor={{
              false: theme.colors.switchTrackFalse,
              true: theme.colors.switchTrackTrue,
            }}
            thumbColor={switchValue ? theme.colors.switchThumbTrue : theme.colors.switchThumbFalse}
          />
        ) : (
          iconName && (
            <Ionicons
              name={iconName}
              size={iconSize}
              style={[styleTheme.icon, { paddingLeft: 20 }]}
            />
          )
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ProfilItems;

const styles = StyleSheet.create({
  containerProfilItems: {
    width: '60%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
  },
  iconeProfilItems: {
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
