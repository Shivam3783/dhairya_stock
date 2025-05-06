import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import Header from './Header';
import Footer from './Footer';
import StockAnalyticsSection from './StockAnalyticsSection';
import PredictionModelSection from './PredictionModelSection';
import PortfolioInsightsSection from './PortfolioInsightsSection';
import AlertSection from './AlertSection';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a237e',
      light: '#534bae',
      dark: '#000051',
    },
    secondary: {
      main: '#01579b',
      light: '#4f83cc',
      dark: '#002f6c',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontSize: '2.8rem',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '30px',
          textTransform: 'none',
          fontSize: '1.1rem',
          padding: '10px 30px',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <HeroSection />
      <FeaturesSection />
      <StockAnalyticsSection />
      <PortfolioInsightsSection />
      <AlertSection />
      <PredictionModelSection />
      <Footer />
    </ThemeProvider>
  );
}

export default App; 