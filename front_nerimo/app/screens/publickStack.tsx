import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Bienvenue from '@/app/screens/horsConnexion/Bienvenue';
import AccueilAvantConnexion from '@/app/screens/horsConnexion/AccueilAvantConnexion';
import MenuInitial from '@/app/screens/horsConnexion/MenuInitial';
import SeConnecter from '@/app/screens/horsConnexion/SeConnecter';
import CreerUnCompte from '@/app/screens/horsConnexion/CreerUnCompte';

const Stack = createStackNavigator();

const PublicStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName='Bienvenue'>
      <Stack.Screen name="Bienvenue" component={Bienvenue} options={{ headerShown: false }} />
      <Stack.Screen name="AccueilAvantConnexion" component={AccueilAvantConnexion} options={{ headerShown: false }} />
      <Stack.Screen name="MenuInitial" component={MenuInitial} options={{ headerShown: false }} />
      <Stack.Screen name="SeConnecter" component={SeConnecter} options={{ headerShown: false }} />
      <Stack.Screen name="CreerUnCompte" component={CreerUnCompte} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default PublicStack;
