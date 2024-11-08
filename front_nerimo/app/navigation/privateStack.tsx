import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import AccueilApresConnexion from '@/app/screens/enConnexion/AccueilApresConnexion';
import ChoisirPersonnage from '@/app/screens/enConnexion/creerSession/ChoisirPersonnage';
import ChoisirPlanete from '@/app/screens/enConnexion/creerSession/ChoisirPlanete';
import CreerSessionPrenom from '@/app/screens/enConnexion/creerSession/CreerSessionPrenom';
import Histoire from '@/app/screens/enConnexion/Histoire';
import MenuUtilisateur from '@/app/screens/enConnexion/MenuUtilisateur';

import { SessionProvider } from '../hooks/sessionContext';
import { useAutoLogout } from '../hooks/useAutoLogOut';
import MesInformations from '../screens/enConnexion/MesInformations';
import MonProfil from '../screens/enConnexion/MonProfil';

const Stack = createStackNavigator();

const PrivateStack: React.FC = () => {
  useAutoLogout();
  return (
    <SessionProvider>
      <Stack.Navigator initialRouteName="AccueilApresConnexion">
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
        <Stack.Screen name="MonProfil" component={MonProfil} options={{ headerShown: false }} />
        <Stack.Screen
          name="MesInformations"
          component={MesInformations}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Histoire" component={Histoire} options={{ headerShown: false }} />
      </Stack.Navigator>
    </SessionProvider>
  );
};

export default PrivateStack;
