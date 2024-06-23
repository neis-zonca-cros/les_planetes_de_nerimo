import { useNavigation, useNavigationState } from "@react-navigation/native";

const useGoBack = () => {
  const navigation = useNavigation();
  const routesLength = useNavigationState((state) => state.routes.length);

  const goBack = () => {
    if (routesLength > 1) {
      navigation.goBack();
    } else {
      console.warn("pas d'écran pour revenir en arrière");
    }
    console.log("Bouton fermer pressé");
  };

  return goBack;
};

export default useGoBack;
