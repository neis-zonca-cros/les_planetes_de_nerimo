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
    fontSize: 50,
    color: '#23363E',
    textTransform: 'uppercase',
    paddingVertical: 100,
    paddingHorizontal: 30,
    lineHeight: 80,
  
  },
  menu: {
    justifyContent: 'flex-start',
    textAlign: 'center',
    fontFamily: 'brotherBold',
    fontSize: 50,
    color: '#23363E',
    textTransform: 'uppercase',
    paddingVertical: 40,

  },
  iconeContainer: { 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    

  },
  iconeColor: {
    color: '#23363E',
   

  },

  containerTopBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FAE6BB',
  },
  titreTopBar: {
    padding: 10,
    fontSize: 20,
    color: '#23363E',
    fontFamily: 'brother',
    textTransform: 'uppercase',  
  },
  iconsTopBar: {
    flexDirection: 'row',
    
  },
  iconTopBar: {
    color: '#23363E',
    padding: 10,
  },
 
});
