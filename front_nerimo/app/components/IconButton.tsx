import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { useTheme } from "@/app/hooks/themeContext";

interface IconButtonProps {
    icon: React.ReactNode;
    onPress: () => void;
  }
  

  const IconButton: React.FC<IconButtonProps> = ({ icon, onPress }) => {
    const { theme } = useTheme();
  return (
    <View style={styles.iconContainer}>
    <TouchableOpacity onPress={onPress}>
      <View style={theme.colors.effectShadow}>
        {icon}
      </View>
    </TouchableOpacity></View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
});

export default IconButton;
