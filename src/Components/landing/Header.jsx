import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          backgroundColor: '#E7E8D1',
          transition: 'all 0.3s ease',
          paddingY: scrolled ? 0.5 : 1,
        }}
      >
        <Toolbar>
          {/* Logo and Name */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Box
              component="img"
              src="/assets/Animated-Logo.png"
              alt="Logo"
              sx={{ width: 32, height: 32, mr: 1 }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                color: 'black',
                fontSize: scrolled ? '1rem' : '1.25rem',
                transition: 'all 0.3s ease',
              }}
            >
              Stockxy
            </Typography>
          </Box>

          {/* Navigation */}
          <Box>
            <Button sx={{ color: 'black' }} onClick={() => scrollToSection('home')}>Home</Button>
            <Button sx={{ color: 'black' }} onClick={() => scrollToSection('features')}>Features</Button>
            <Button sx={{ color: 'black' }} onClick={() => scrollToSection('analytics')}>Analytics</Button>
            <Button sx={{ color: 'black' }} onClick={() => scrollToSection('insights')}>Insights</Button>
            <Button sx={{ color: 'black' }} onClick={() => scrollToSection('about')}>About</Button>
            <Button
              sx={{ color: 'black' }}
              onClick={() => (window.location.href = '/login')}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </motion.div>
  );
};

export default Header; 