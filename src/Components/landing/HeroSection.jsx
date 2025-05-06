import React, { useState } from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

const GradientBackground = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg,rgb(161, 190, 149) 0%,rgb(161, 190, 149) 50%,rgb(161, 190, 149) 100%)',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.1,
  },
}));

const AnimatedTypography = styled(motion(Typography))({
  marginBottom: '1.5rem',
});

const AnimatedButton = styled(motion(Button))(({ theme }) => ({
  padding: '12px 32px',
  borderRadius: '30px',
  fontSize: '1.1rem',
  textTransform: 'none',
  marginRight: '1rem',
  marginTop: '1rem',
}));

const HeroSection = () => {
  const [clicked, setClicked] = useState(false);

  const handleGetStarted = () => {
    setClicked(true);
    setTimeout(() => {
      window.location.href = '/login';
    }, 200); // short delay to show the visual effect
  };

  return (
    <GradientBackground>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box>
              <AnimatedTypography
                variant="h1"
                color="white"
                fontWeight="bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Smart Stock Predictions
                <br />
                Smarter Portfolio
              </AnimatedTypography>
              <AnimatedTypography
                variant="h5"
                color="rgba(255,255,255,0.9)"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Make data-driven investment decisions with our AI-powered stock prediction
                and portfolio management platform.
              </AnimatedTypography>
              <Box>
                <AnimatedButton
                  variant="contained"
                  onClick={handleGetStarted}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  sx={{
                    backgroundColor: clicked ? '#1976d2' : '#E7E8D1',
                    color: '#000000',
                    '&:hover': {
                      backgroundColor: clicked ? '#1565c0' : '#d6d7bb',
                    },
                  }}
                >
                  Get Started
                </AnimatedButton>
                <AnimatedButton
                  variant="outlined"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  sx={{ color: '#000000', borderColor: '#E7E8D1' }}
                >
                  Learn More
                </AnimatedButton>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Box
                component="img"
                alt="Stock Analysis"
                sx={{
                  width: '100%',
                  maxWidth: '600px',
                  filter: 'drop-shadow(0px 10px 20px rgba(0,0,0,0.2))',
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </GradientBackground>
  );
};

export default HeroSection; 