import * as Font from 'expo-font';


const fetchFonts = () => {
  return Font.loadAsync({
    'brother': require('@/assets/fonts/brother.ttf'),

  });
};

export default fetchFonts;