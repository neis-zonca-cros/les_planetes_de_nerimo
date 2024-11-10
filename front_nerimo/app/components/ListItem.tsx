import React from 'react';

import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';

import { useTheme } from '@/app/hooks/themeContext';
import { ThemedStyles } from '@/app/utils/styles';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

type ListItemProps = {
  imageURI: any;
  text: string;
  onPress: () => void;
};

const ListItem: React.FC<ListItemProps> = ({ imageURI, text, onPress }) => {
  const { theme } = useTheme();
  const styleTheme = ThemedStyles(theme);

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={onPress}>
        <View
          style={[
            styles.listContainer,
            theme.colors.effectShadow,
            { backgroundColor: theme.colors.background, borderColor: theme.colors.background },
          ]}
        >
          <Image source={imageURI} style={styles.icon} />
          <Text style={styleTheme.TEXT}>{text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: screenHeight * 0.22,
    height: screenHeight * 0.22,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  listContainer: {
    height: screenWidth * 0.23,
    width: screenWidth * 0.23,
    borderRadius: (screenWidth * 0.23) / 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    marginBottom: 12,
    marginLeft: 10,
  },
});

export default ListItem;
