import React, { createContext, useState, useContext } from 'react';

// Criar o contexto do tema
const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
  
    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
  
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };


  
import React from 'react';
import { useTheme } from './ThemeProvider';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Mudar para tema {theme === 'light' ? 'escuro' : 'claro'}
    </button>
  );
};

const ThemedComponent = () => {
  const { theme } = useTheme();

  const lightStyle = {
    backgroundColor: 'white',
    color: 'black',
    padding: '20px',
    textAlign: 'center',
  };

  const darkStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
  };

  return (
    <div style={theme === 'light' ? lightStyle : darkStyle}>
      Este é um componente com tema {theme}.
    </div>
  );
};

import ThemeToggle from 'ThemeToggle';
import ThemedComponent from 'ThemedComponent';

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <ThemeToggle />
        <ThemedComponent />
      </div>
    </ThemeProvider>
  );
};

export default {App, ThemedComponent, ThemeProvider, ThemeToggle};

