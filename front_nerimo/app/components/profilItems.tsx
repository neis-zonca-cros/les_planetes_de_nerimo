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
            // trackColor={{ false: theme.switchTrackFalse, true: theme.switchTrackTrue }}
            // thumbColor={switchValue ? theme.switchThumbTrue : theme.switchThumbFalse}
            // style={theme.switchProfilItems}
          />
        ) : (
          iconName && <Ionicons name={iconName} size={30} style={theme.iconeProfilItems} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ProfilItems;

// switchTrackFalse: '#767577', // Couleur de la piste du switch lorsqu'il est désactivé
// switchTrackTrue: '#81b0ff',  // Couleur de la piste du switch lorsqu'il est activé
// switchThumbFalse: '#f4f3f4',  // Couleur du pouce du switch lorsqu'il est désactivé
// switchThumbTrue: '#f5dd4b',   // Couleur du pouce du switch lorsqu'il est activé