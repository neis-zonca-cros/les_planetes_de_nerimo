import * as SecureStore from 'expo-secure-store';

export const getCredentials = async (): Promise<{
  token: string | null;
  utilisateurId: string | null;
}> => {
  try {
    const token = await SecureStore.getItemAsync('token');
    const utilisateurId = await SecureStore.getItemAsync('utilisateurId');
    return { token, utilisateurId };
  } catch (error) {
    console.error('Error retrieving credentials:', error);
    return { token: null, utilisateurId: null };
  }
};
