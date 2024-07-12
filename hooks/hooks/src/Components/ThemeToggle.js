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

export default ThemeToggle;
