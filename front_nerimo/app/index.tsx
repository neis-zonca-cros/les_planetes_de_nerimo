import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { darkTheme } from "@/themes/dark";
import { lightTheme } from "@/themes/light";
import { Text, View, useColorScheme } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import fetchFonts from './fetchs/fetchFont';

const Stack = createStackNavigator();

export default function Index() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={console.warn}
      />
    );
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
      <Text style={theme.text}>Bienvenue sur les planètes de Nérimo !</Text>
    </View>
  );
}

