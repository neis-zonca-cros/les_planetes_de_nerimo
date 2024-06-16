import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { darkTheme } from "@/themes/dark";
import { lightTheme } from "@/themes/light";
import { Text, View, useColorScheme } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';

const Stack = createStackNavigator();

export default function Index() {
  const [fontsLoaded] = useFonts({
    'brother': require('@/assets/fonts/brother.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }} 
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}


function HomeScreen() {
  const theme = useColorScheme() === 'dark' ? darkTheme : lightTheme;
  

  return (
    <View style={theme.container}>
      <Text style={theme.textLarge}>Bienvenue sur les planètes de Nérimo !</Text>
    </View>
  );
}

