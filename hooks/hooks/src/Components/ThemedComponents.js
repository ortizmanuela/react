import React from 'react';
import { useTheme } from './ThemeProvider';

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

export default ThemedComponent;
