import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from '@/app/hooks/themeContext';
import { UserProvider, useUser } from './hooks/userContext';
import PublicStack from "./navigation/publickStack"
import PrivateStack from './navigation/privateStack'; 

const AppNavigator: React.FC = () => {
  const { utilisateur } = useUser(); 
  return utilisateur ? <PrivateStack /> : <PublicStack />;
};

const Index: React.FC = () => {
  const [fontsLoaded] = useFonts({
    brother: require('@/app/assets/fonts/brother.ttf'),
    brotherBold: require('@/app/assets/fonts/brotherBold.ttf'),
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
