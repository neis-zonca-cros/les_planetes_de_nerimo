import { useEffect, useRef, useState } from 'react';
import { AppState, Alert, Keyboard, AppStateStatus } from 'react-native';
import { clearCredentials } from './clearCredentials';
import { useNavigation } from 'expo-router';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/app/types';

const AUTO_LOGOUT_DELAY = 2 * 60 * 1000; 
type NavigationProp = StackNavigationProp<RootStackParamList, 'Bienvenue'>;
export const useAutoLogout = () => {
  const [lastActiveTime, setLastActiveTime] = useState(Date.now());
  const appState = useRef(AppState.currentState);
  const logoutTimer = useRef<NodeJS.Timeout | null>(null);
  const navigation = useNavigation<NavigationProp>(); 

  useEffect(() => {
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
        if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
          const currentTime = Date.now();
          if (currentTime - lastActiveTime > AUTO_LOGOUT_DELAY) {
            handleLogout();
          } else {
            setLastActiveTime(currentTime);
          }
        }
      
        appState.current = nextAppState; 
      };

    const handleLogout = async () => {
      try {
        await clearCredentials();
        Alert.alert('Déconnexion', 'Vous avez été déconnecté en raison d\'une longue période d\'inactivité.');
      } catch (error) {
        console.error('Erreur lors de la déconnexion automatique:', error);
      }
    };

    const subscription = AppState.addEventListener('change', handleAppStateChange);

    const handleUserInteraction = () => {
      resetActivityTime();
    };

    const touchEvent = AppState.addEventListener('change', handleUserInteraction);
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', handleUserInteraction);

    return () => {
      subscription.remove();
      touchEvent.remove();
      keyboardDidShowListener.remove();
      if (logoutTimer.current) {
        clearTimeout(logoutTimer.current);
      }
    };
  }, [lastActiveTime]);

  const resetActivityTime = () => {
    setLastActiveTime(Date.now());
  };

  return null;
};
