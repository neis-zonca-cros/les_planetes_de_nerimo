import { useNavigation, useNavigationState } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/commonjs/src/types';

import { RootStackParamList } from '@/app/types';

const useGoToConnect = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const routesLength = useNavigationState(state => state.routes.length);

  const goSeConnecter = () => {
    if (routesLength >= 0) {
      navigation.navigate('SeConnecter');
    } else {
      console.warn("pas d'écran pour revenir en arrière");
    }
    console.log('Bouton se connecter pressé');
  };

  return goSeConnecter;
};

export default useGoToConnect;
