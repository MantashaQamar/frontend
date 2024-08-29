import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import MyAccount from './components/MyAccount';
import Header from './components/Header';

import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/700.css';

const theme = createTheme({
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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        {/* Header component included to show on all pages */}
          <Header />
        
        <Routes>
          {/* Existing routes */}
          <Route path="/" element={<SignUpForm />} />
          <Route path="/login" element={<Login />} />
          {/* New routes for dashboard and account */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/account" element={<MyAccount />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
