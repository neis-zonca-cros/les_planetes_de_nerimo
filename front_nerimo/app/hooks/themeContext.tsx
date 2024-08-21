import React, { createContext, useContext, ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import { darkTheme } from '@/app/themes/dark';
import { lightTheme } from '@/app/themes/light';

interface ThemeContextType {
  theme: typeof lightTheme | typeof darkTheme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
