import React from 'react';
import { ThemeProvider, ThemeToggle, ThemedComponent } from './Components';

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

export default App;
