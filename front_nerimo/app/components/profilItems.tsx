import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { useTheme } from '../hooks/themeContext';


type ProfilItemsProps = {
  text: string;
  iconName?: keyof typeof Ionicons.glyphMap;
};

const ProfilItems: React.FC<ProfilItemsProps> = ({ text, iconName }) => {
    const {theme} = useTheme();
    return (
        <TouchableOpacity>
      <View style={theme.containerProfilItems}>
      <Text style={theme.textProfilItems}>{text}</Text>
        {iconName && <Ionicons name={iconName} size={20} style={theme.iconeProfilItems} />}
        
      </View></TouchableOpacity>
    );
  };

export default ProfilItems;
