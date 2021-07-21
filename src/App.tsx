import React from 'react';

import { ThemeProvider, createTheme, responsiveFontSizes } from "@material-ui/core";
import AppRouter from './features/routing';
import { AuthProvider } from './features/auth';

function App() {
  return (
    <ThemeProvider theme={responsiveFontSizes(createTheme())}>
      <AuthProvider>
        <AppRouter basename={"/"} />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
