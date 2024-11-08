import { Platform } from 'react-native';

export const lightColors = {
  background: '#FAE6BB',
  text: '#23363E',
  errorText: '#825C6E',
  primaryButton: '#825C6E', // Boutons Connexion + Mon Profil
  secondaryButton: '#E7A74F', // Boutons Créations de compte + Déconnexion
  neutralButton: '#23363E', // Icônes + A Propos
  effectShadow: {
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(205, 133, 63, 0.5)',
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  switchTrackTrue: 'rgba(35,54,62,1)',
  switchTrackFalse: 'rgba(250, 230, 187, 0.1)',
  switchThumbFalse: 'rgba(250, 230, 187, 1)',
  switchThumbTrue: 'rgba(250, 230, 187, 1)',
};

export const darkColors = {
  background: '#23363E',
  text: '#FAE6BB',
  errorText: '#FFAD80',
  primaryButton: '#FFAD80', // Boutons Connexion + Mon Profil
  secondaryButton: '#FFCD69', // Boutons Créations de compte + Déconnexion
  neutralButton: '#FAE6BB', // Icônes + A Propos
  effectShadow: {
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  switchTrackTrue: 'rgba(250, 230, 187, 1)',
  switchTrackFalse: 'rgba(35,54,62, 0.1)',
  switchThumbFalse: 'rgba(35,54,62, 1)',
  switchThumbTrue: 'rgba(35,54,62, 1)',
};
