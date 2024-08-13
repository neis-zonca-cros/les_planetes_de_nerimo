import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, StyleSheet, Switch, Dimensions } from 'react-native';
import { useTheme } from '../hooks/themeContext';
import { ThemedStyles } from '../utils/styles';

type ProfilItemsProps = {
  text: string;
  iconName?: keyof typeof Ionicons.glyphMap;
  isSwitch?: boolean;
  onSwitchToggle?: (value: boolean) => void;
};

const ProfilItems: React.FC<ProfilItemsProps> = ({ text, iconName, isSwitch, onSwitchToggle }) => {
  const { theme } = useTheme();
  const [switchValue, setSwitchValue] = useState(false);
  const styleTheme = ThemedStyles(theme);

  const toggleSwitch = () => {
    const newValue = !switchValue;
    setSwitchValue(newValue);
    if (onSwitchToggle) {
      onSwitchToggle(newValue);
    }
  };

  return (
    <TouchableOpacity onPress={isSwitch ? toggleSwitch : undefined}>

      <View style={[styleTheme.rectangleForm, theme.colors.effectShadow, styles.containerProfilItems]}>
        <Text style={[styleTheme.text]}>{text}</Text>
        {isSwitch ? (
          <Switch
            value={switchValue}
            onValueChange={toggleSwitch}
          // trackColor={{ false: theme.switchTrackFalse.color, true: theme.switchTrackTrue.color }}
          // thumbColor={switchValue ? theme.switchThumbTrue.color : theme.switchThumbFalse.color}
          />
        ) : (
          iconName && <Ionicons name={iconName} size={26} style={[styleTheme.icon, { paddingLeft: 20 }]} />
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
    padding: 10,
  },
  iconeProfilItems: {
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
})