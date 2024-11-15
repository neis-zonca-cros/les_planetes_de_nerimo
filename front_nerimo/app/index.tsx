import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import * as ScreenOrientation from 'expo-screen-orientation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ThemeProvider } from '@/app/hooks/themeContext';

import { UserProvider, useUser } from './hooks/userContext';
import PrivateStack from './navigation/privateStack';
import PublicStack from './navigation/publickStack';

const AppNavigator: React.FC = () => {
  const { utilisateur } = useUser();
  useEffect(() => {
    const lockOrientation = async () => {
      await ScreenOrientation.unlockAsync();
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    };

    lockOrientation();
  }, []);

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
        <NavigationContainer independent={true}>
          <UserProvider>
            <AppNavigator />
          </UserProvider>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default Index;
