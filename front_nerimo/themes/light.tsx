import { StyleSheet } from 'react-native';

export const lightTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAE6BB', 
  },
  text: {
    textAlign: 'center',  
    fontFamily: 'brother',
    fontSize: 24,
    color: '#23363E',
  },
  textLarge: {
    justifyContent: 'flex-start',
    textAlign: 'center',  
    fontFamily: 'brother',
    fontSize: 40,
    color: '#23363E',
    textTransform: 'uppercase',
    paddingVertical: 100,
    paddingHorizontal: 30,
    lineHeight: 80,
  
  },
 
});
