import * as SecureStore from 'expo-secure-store';

import apiFetch from './apiService';

interface LoginResponse {
  token: string;
  utilisateurId: string;
}

async function login(email: string, mdp: string): Promise<string> {
  try {
    const response = await apiFetch<LoginResponse>('utilisateur/connexion', {
      method: 'POST',
      body: { email, mdp },
    });

    const { token, utilisateurId } = response;

    await SecureStore.setItemAsync('token', token);
    await SecureStore.setItemAsync('utilisateurId', utilisateurId);

    return token;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
}

export default login;
