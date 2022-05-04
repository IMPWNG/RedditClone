import React from 'react';
import ReactDOM from 'react-dom/client';

import { green } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import App from './App';

import './style.css';

const theme = createTheme({
  palette: {
    secondary: {
      main: green[500],
    },
  },

});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
);

