import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '@/app/types';

type NavigationProp = StackNavigationProp<RootStackParamList, keyof RootStackParamList>;

const useGoBack = () => {
  const navigation = useNavigation<NavigationProp>();

  const goBack = () => {
    navigation.goBack();
  };

  return goBack;
};

export default useGoBack;
