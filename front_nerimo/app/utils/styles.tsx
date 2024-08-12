import { StyleSheet } from 'react-native';

export const ThemedStyles = (theme: {
    paddingHorizontalMedium: any; typographySize: {
        large: any;
        error: any;
        small: any; medium: { fontFamily: any; fontSize: any; }; 
}; colors: {
    errorText: any; text: any; 
}; paddingVerticalMedium: any; 
}) => StyleSheet.create({
  text: {
    fontFamily: theme.typographySize.medium.fontFamily,
    fontSize: theme.typographySize.medium.fontSize,
    color: theme.colors.text,
    paddingVertical: theme.paddingVerticalMedium,
    paddingHorizontal: theme.paddingHorizontalMedium,
    alignItems:"center",
    textAlign: "center",
    justifyContent: "center",
  },
  textLarge: {
    paddingVertical: 2,
    paddingHorizontal:5,
    textAlign: "center",
    color: theme.colors.text, 
    fontFamily: theme.typographySize.large.fontFamily, 
    fontSize: theme.typographySize.large.fontSize

  },
  errorText: {
    paddingVertical: theme.paddingVerticalMedium,
    fontFamily: theme.typographySize.error.fontFamily,
    fontSize: theme.typographySize.error.fontSize,
    color: theme.colors.errorText,
  },

});