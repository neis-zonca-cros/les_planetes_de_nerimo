import { StyleSheet } from 'react-native';

import { Theme } from '../themes/themeTypes';

export const ThemedStyles = (theme: Theme) =>
  StyleSheet.create({
    CONTAINER: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    TEXT: {
      fontSize: theme.typographySize.medium.fontSize,
      fontFamily: theme.typographySize.medium.fontFamily,
      color: theme.colors.text,
      padding: 2,
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
    },
    TEXT_LARGE: {
      fontSize: theme.typographySize.large.fontSize,
      fontFamily: theme.typographySize.large.fontFamily,
      color: theme.colors.text,
      margin: 2,
      textAlign: 'center',
    },
    ERROR_TEXT: {
      fontSize: theme.typographySize.error.fontSize,
      fontFamily: theme.typographySize.error.fontFamily,
      color: theme.colors.errorText,
      padding: 2,
    },
    ICON: {
      color: theme.colors.neutralButton,
      padding: 5,
    },
    SCROLL_VIEW_CONTENT: {
      flexGrow: 1,
      paddingHorizontal: 10,
      justifyContent: 'center',
      paddingTop: 60,
    },
    BUTTON_FORM: {
      height: 'auto',
      width: '40%',
      borderRadius: 10,
      borderWidth: 5,
      marginBottom: 10,
      marginHorizontal: 5,
      backgroundColor: theme.colors.background,
      borderColor: theme.colors.background,
    },
    MODAL_CONTAINER: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    MODAL_CONTENT: {
      borderRadius: 10,
      paddingHorizontal: 60,
      paddingVertical: 50,
      width: '80%',
      height: 'auto',
      position: 'relative',
    },
    BUTTON_CLOSE: {
      position: 'absolute',
      margin: 5,
      top: 10,
      right: 10,
      zIndex: 1,
    },
    STORY_CHOICE: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      width: '100%',
      marginTop: 20,
    },
  });
