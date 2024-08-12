import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, StyleSheet, Switch, Dimensions } from 'react-native';
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
      <View style={[styles.containerProfilItems, theme.colors.effectShadow, {backgroundColor: theme.colors.background, borderColor: theme.colors.background}]}>
        <Text style={{fontFamily: theme.typographySize.medium.fontFamily, fontSize: theme.typographySize.medium.fontSize, color: theme.colors.text}}>{text}</Text>
        {isSwitch ? (
          <Switch
            value={switchValue}
            onValueChange={toggleSwitch}
          // trackColor={{ false: theme.switchTrackFalse.color, true: theme.switchTrackTrue.color }}
          // thumbColor={switchValue ? theme.switchThumbTrue.color : theme.switchThumbFalse.color}
          />
        ) : (
          iconName && <Ionicons name={iconName} size={26} style={[styles.iconeProfilItems, {color: theme.colors.neutralButton}]} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ProfilItems;
const { height: screenHeight, width: screenWidth } = Dimensions.get("window");
const styles = StyleSheet.create({
  containerProfilItems: {
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 10,
    width: "60%",
    height: screenHeight * 0.10,

  },
  iconeProfilItems: {
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
})