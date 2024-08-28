import { Dimensions, StyleSheet } from 'react-native';
import { Theme } from '../themes/themeTypes';

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

export const ThemedStyles = (theme : Theme) => StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: theme.colors.background
  },
  text: {
    fontSize: theme.typographySize.medium.fontSize,
    fontFamily: theme.typographySize.medium.fontFamily,
    color: theme.colors.text,
    padding: 2,
    alignItems:"center",
    textAlign: "center",
    justifyContent: "center",
  },
  textLarge: {
    fontSize: theme.typographySize.large.fontSize,
    fontFamily: theme.typographySize.large.fontFamily, 
    color: theme.colors.text,
    margin: 2,
    textAlign: "center",
  },
  errorText: {
    fontSize: theme.typographySize.error.fontSize,
    fontFamily: theme.typographySize.error.fontFamily,
    color: theme.colors.errorText,
    padding: 2,
  },
  icon: {
    color: theme.colors.neutralButton,
    padding: 5,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 10,
    justifyContent: "center",
    paddingTop: 60,
  },
  rectangleForm: {
    height: 'auto',
    width: '40%',
    borderRadius: 10,
    borderWidth: 5,
    marginBottom: 10,
    backgroundColor: theme.colors.background,
    borderColor: theme.colors.background,
    
  }


});