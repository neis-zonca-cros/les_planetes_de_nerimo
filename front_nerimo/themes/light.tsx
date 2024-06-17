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
  titre: {
    justifyContent: 'flex-start',
    textAlign: 'center',  
    fontFamily: 'brotherBold',
    fontSize: 40,
    color: '#23363E',
    textTransform: 'uppercase',
    paddingVertical: 100,
    paddingHorizontal: 30,
    lineHeight: 80,
  
  },
  iconeContainer: { 
    alignItems: 'center',
    justifyContent: 'center',
    

  },
  iconeColor: {
    color: '#23363E',
   

  },
 
});
