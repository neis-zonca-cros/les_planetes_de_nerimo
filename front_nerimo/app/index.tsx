// src/Index.tsx
import React from 'react';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import Bienvenue from './screens/Bienvenue';
import AnotherScreen from './screens/Connexion';
import { RootStackParamList } from './types'; 


const Stack = createStackNavigator<RootStackParamList>(); 

export default function Index() {
  const [fontsLoaded] = useFonts({
    'brother': require('@/assets/fonts/brother.ttf'),
    'brotherBold': require('@/assets/fonts/brotherBold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Bienvenue"
          component={Bienvenue}
          options={{ headerShown: false }}
          
        />
        <Stack.Screen
          name="Connexion"
          component={AnotherScreen}
          options={{ headerShown: false }}
          
        />

      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
