import React from 'react';
import App from './App';
import theme from './theme'; // Import the theme
import { ThemeProvider } from '@mui/material/styles';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client

const root = document.getElementById('root');
const rootContainer = createRoot(root); // Use createRoot from react-dom/client

rootContainer.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
