import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import SignUpForm from './components/SignUpForm';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/700.css';

const typetheme = createTheme({
  typography: {
    fontFamily: 'Montserrat, Arial, sans-serif',
  },
  palette: {
    primary: {
      main: '#B8FF3B', // Neon green color from the design
    },
    background: {
      default: '#ffffff',  // White background for the whole app
    },
    text: {
      primary: '#000000',  // Black primary text color
      secondary: '#757575',  // Grey secondary text color
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={typetheme}>
      <CssBaseline /> {/* Reset CSS to match the theme */}
      <Router>
        <Routes>
          <Route path="/" element={<SignUpForm />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
