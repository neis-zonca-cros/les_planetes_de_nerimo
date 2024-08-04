import { useEffect, useRef, useState } from 'react';
import { AppState, Alert, Keyboard, AppStateStatus } from 'react-native';
import { clearCredentials } from '../services/credentials/clearCredentials';
import { useNavigation } from 'expo-router';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/app/types';
import { logout } from '../services/deconnexion';
import { useUser } from './userContext';

const AUTO_LOGOUT_DELAY = 2 * 60 * 1000; 

export const useAutoLogout = () => {
  const { deconnexion } = useUser();
  const [lastActiveTime, setLastActiveTime] = useState(Date.now());
  const appState = useRef(AppState.currentState);
  const logoutTimer = useRef<NodeJS.Timeout | null>(null);

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
          await deconnexion();
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


