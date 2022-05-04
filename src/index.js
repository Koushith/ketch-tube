import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
// import { ThemeProvider } from 'evergreen-ui';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { makeServer } from './server';
import { theme } from './themes/dark/colors';
import { CssBaseline, GeistProvider, Themes } from '@geist-ui/core';
import { AuthProvider } from './context';
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <GeistProvider theme={theme}>
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </GeistProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
