import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
// import { ThemeProvider } from 'evergreen-ui';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { makeServer } from './server';
import { theme } from './themes/dark/colors';

import { AuthProvider, VideoProvider } from './context';
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <BrowserRouter>
          <VideoProvider>
            <App />
          </VideoProvider>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
