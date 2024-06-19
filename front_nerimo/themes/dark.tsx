
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
  titre: {
    justifyContent: 'flex-start',
    textAlign: 'center',
    fontFamily: 'brotherBold',
    fontSize: 50,
    color: '#FAE6BB',
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
    color: '#FAE6BB',
    textTransform: 'uppercase',
    paddingVertical: 40,

  },
  iconeContainer: { 
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FAE6BB',
    padding: 10,

  },
  iconeColor: {
    color: '#FAE6BB',
    
    

  },


  containerTopBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#23363E', 
  },
  titreTopBar: {
    padding:10,
    fontSize: 20,
    fontFamily: 'brother',
    color: '#FAE6BB', 
    textTransform: 'uppercase',  
  },
  iconsTopBar: {
    flexDirection: 'row',
    
  },
  iconTopBar: {
    color: '#FAE6BB', 
    padding: 10,
    
    
  },
});

