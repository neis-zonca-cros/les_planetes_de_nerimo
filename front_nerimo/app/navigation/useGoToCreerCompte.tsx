// hooks/useGoToConnect.ts
import { useNavigation, useNavigationState } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '@/app/types';

const useGoToCreerUnCompte = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const routesLength = useNavigationState(state => state.routes.length);

  const goCreerUnCompte = () => {
    if (routesLength >= 0) {
      navigation.navigate('CreerUnCompte');
    } else {
      console.warn("pas d'écran pour revenir en arrière");
    }
    console.log('Bouton créer un compte pressé');
  };

  return goCreerUnCompte;
};

export default useGoToCreerUnCompte;
