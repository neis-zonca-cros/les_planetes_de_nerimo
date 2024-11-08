import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import AccueilAvantConnexion from '@/app/screens/horsConnexion/AccueilAvantConnexion';
import Bienvenue from '@/app/screens/horsConnexion/Bienvenue';
import CreerUnCompte from '@/app/screens/horsConnexion/CreerUnCompte';
import MenuInitial from '@/app/screens/horsConnexion/MenuInitial';
import SeConnecter from '@/app/screens/horsConnexion/SeConnecter';

const Stack = createStackNavigator();

const PublicStack: React.FC = () => (
  <Stack.Navigator initialRouteName="Bienvenue">
    <Stack.Screen name="Bienvenue" component={Bienvenue} options={{ headerShown: false }} />
    <Stack.Screen
      name="AccueilAvantConnexion"
      component={AccueilAvantConnexion}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="MenuInitial" component={MenuInitial} options={{ headerShown: false }} />
    <Stack.Screen name="SeConnecter" component={SeConnecter} options={{ headerShown: false }} />
    <Stack.Screen name="CreerUnCompte" component={CreerUnCompte} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export default PublicStack;
