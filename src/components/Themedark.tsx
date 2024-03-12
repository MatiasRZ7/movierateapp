import React, { Dispatch, SetStateAction, useEffect } from 'react';

interface ThemeContextType {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

export const ThemeContext = React.createContext<ThemeContextType>({
  darkMode: false,
  setDarkMode: () => {},
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [darkMode, setDarkMode] = React.useState(() => {
    const localDarkMode = window.localStorage.getItem('darkMode');
    return localDarkMode ? JSON.parse(localDarkMode) : false;
  });

  useEffect(() => {
    window.localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};