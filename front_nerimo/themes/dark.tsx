import { StyleSheet } from 'react-native';

export const darkTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23363E', 
    
   
  },
  text: {
    textAlign: 'center',  
    fontFamily: 'brother',
    fontSize: 24,
    color: '#FAE6BB', 
  },
  textLarge: {
    justifyContent: 'flex-start',
    textAlign: 'center',  
    fontFamily: 'brother',
    fontSize: 50,
    color: '#FAE6BB',
    textTransform: 'uppercase',
    
    paddingVertical: 100,
    paddingHorizontal: 30,
    lineHeight: 80,
   
  
  },
  
});