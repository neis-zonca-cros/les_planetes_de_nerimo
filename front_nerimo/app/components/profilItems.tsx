import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import { useTheme } from '../hooks/themeContext';

type ProfilItemsProps = {
  text: string;
  iconName?: keyof typeof Ionicons.glyphMap;
  isSwitch?: boolean;
  onSwitchToggle?: (value: boolean) => void;
};

const ProfilItems: React.FC<ProfilItemsProps> = ({ text, iconName, isSwitch, onSwitchToggle }) => {
  const { theme } = useTheme();
  const [switchValue, setSwitchValue] = useState(false);

  const toggleSwitch = () => {
    const newValue = !switchValue;
    setSwitchValue(newValue);
    if (onSwitchToggle) {
      onSwitchToggle(newValue);
    }
  };

  return (
    <TouchableOpacity onPress={isSwitch ? toggleSwitch : undefined}>
      <View style={theme.containerProfilItems}>
        <Text style={theme.textProfilItems}>{text}</Text>
        {isSwitch ? (
          <Switch
            value={switchValue}
            onValueChange={toggleSwitch}
            trackColor={{ false: theme.switchTrackFalse.color, true: theme.switchTrackTrue.color }}
            thumbColor={switchValue ? theme.switchThumbTrue.color : theme.switchThumbFalse.color}
          />
        ) : (
          iconName && <Ionicons name={iconName} size={30} style={theme.iconeProfilItems} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ProfilItems;

