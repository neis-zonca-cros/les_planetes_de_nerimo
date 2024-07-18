import React from "react";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import Bienvenue from "@/app/screens/horsConnexion/Bienvenue";
import { RootStackParamList } from "./types";
import { ThemeProvider } from "@/themes/themeContext";
import MenuInitial from "@/app/screens/horsConnexion/MenuInitial";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AccueilApresConnexion from "@/app/screens/enConnexion/AccueilApresConnexion";
import AccueilAvantConnexion from "@/app/screens/horsConnexion/AccueilAvantConnexion";
import SeConnecter from "@/app/screens/horsConnexion/SeConnecter";
import CreerUnCompte from "@/app/screens/horsConnexion/CreerUnCompte";
import MenuUtilisateur from "@/app/screens/enConnexion/MenuUtilisateur";
import CreerSessionPrenom from "@/app/screens/enConnexion/creerSession/CreerSessionPrenom";
import ChoisirPlanete from "@/app/screens/enConnexion/creerSession/ChoisirPlanete";
import ChoisirPersonnage from "@/app/screens/enConnexion/creerSession/ChoisirPersonnage";

const Stack = createStackNavigator<RootStackParamList>();

export default function Index() {
  const [fontsLoaded] = useFonts({
    brother: require("@/assets/fonts/brother.ttf"),
    brotherBold: require("@/assets/fonts/brotherBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer independent={true}>
          <Stack.Navigator>
            <Stack.Screen
              name="Bienvenue"
              component={Bienvenue}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AccueilAvantConnexion"
              component={AccueilAvantConnexion}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MenuInitial"
              component={MenuInitial}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SeConnecter"
              component={SeConnecter}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreerUnCompte"
              component={CreerUnCompte}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AccueilApresConnexion"
              component={AccueilApresConnexion}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MenuUtilisateur"
              component={MenuUtilisateur}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreerSessionPrenom"
              component={CreerSessionPrenom}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChoisirPlanete"
              component={ChoisirPlanete}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChoisirPersonnage"
              component={ChoisirPersonnage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
