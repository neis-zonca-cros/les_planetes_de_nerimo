import { RootStackParamList } from "@/app/types";
import { useNavigation, useNavigationState } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

 type NavigationProp = StackNavigationProp<RootStackParamList, keyof RootStackParamList>;
 

 const useGoBack = () => {
  const navigation = useNavigation<NavigationProp>();

  const goBack = () => {
    navigation.goBack();
  };

  return goBack;
};
    

export default useGoBack;
