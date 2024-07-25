import { RootStackParamList } from "@/app/types";
import { useNavigation, useNavigationState } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

 type NavigationProp = StackNavigationProp<RootStackParamList, keyof RootStackParamList>;
 

  const useGoBack = () => {
    const navigation = useNavigation<NavigationProp>();
    const routesLength = useNavigationState((state) => state.routes.length);
  
    const goBack = () => {
      if (routesLength > 1) {
        navigation.reset({
          index: 0,
          routes: [{ name: navigation.getState().routes[0].name }],
        });
      } else {
        console.warn("pas d'écran pour revenir en arrière");
      }
      console.log("Bouton fermer pressé");
    };return goBack;
  };
  
    

export default useGoBack;
