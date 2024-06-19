// src/Index.tsx
import React from "react";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import Bienvenue from "./screens/Bienvenue";
import { RootStackParamList } from "./types";
import { ThemeProvider } from "@/themes/themeContext";
import Connexion from "./screens/AccueilAvantConnexion";
import MenuInitial from "./screens/MenuInitial";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AccueilApresConnexion from "./screens/AccueilApresConnexion";
import AccueilAvantConnexion from "./screens/AccueilAvantConnexion";
import SeConnecter from "./screens/SeConnecter";

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
              name="AccueilApresConnexion"
              component={AccueilApresConnexion}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
