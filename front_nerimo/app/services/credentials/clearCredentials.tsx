import * as SecureStore from 'expo-secure-store';

export const clearCredentials = async () => {
  try {
    await SecureStore.deleteItemAsync('token');
    await SecureStore.deleteItemAsync('utilisateurId');
  } catch (error) {
    console.error('Error clearing credentials:', error);
  }
};
