import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from '@/themes/themeContext';
import { UserProvider, useUser } from './screens/userContext';
import PublicStack from "./screens/publickStack"
import PrivateStack from './screens/privateStack'; 
import { AppState, AppStateStatus } from 'react-native';

const AppNavigator: React.FC = () => {
  const { utilisateur } = useUser(); 
  return utilisateur ? <PrivateStack /> : <PublicStack />;
};

const Index: React.FC = () => {
  const [fontsLoaded] = useFonts({
    brother: require('@/assets/fonts/brother.ttf'),
    brotherBold: require('@/assets/fonts/brotherBold.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer independent={true} >
          <UserProvider> 
            <AppNavigator /> 
          </UserProvider>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default Index;
