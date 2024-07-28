import React, { createContext, useContext, ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import { darkTheme } from '@/themes/dark';
import { lightTheme } from '@/themes/light';

// Définissez le type du contexte de thème
interface ThemeContextType {
  theme: typeof lightTheme | typeof darkTheme;
}

// Créez le contexte de thème
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Fournissez le contexte de thème à l'ensemble de l'application via le provider
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte de thème dans les composants
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
