import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Link,
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';

const MotionBox = motion(Box);

const Footer = () => {
  const handleClick = (toLogin = false) => {
    if (toLogin) {
      window.location.href = '/login';
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const sectionStyle = {
    cursor: 'pointer',
    display: 'block',
    mb: 0.8,
    color: 'inherit',
  };

  return (
    <MotionBox
      sx={{ bgcolor: '#E7E8D1', color: 'black', py: 6, mt: 8 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Product */}
          <Grid item xs={6} sm={3}>
            <Typography variant="h6" gutterBottom>Product</Typography>
            <Link onClick={() => handleClick()} sx={sectionStyle}>Components</Link>
            <Link onClick={() => handleClick()} sx={sectionStyle}>Dashboard</Link>
            <Link onClick={() => handleClick(true)} sx={sectionStyle}>Features</Link>
          </Grid>

          {/* Developers */}
          <Grid item xs={6} sm={3}>
            <Typography variant="h6" gutterBottom>Developers</Typography>
            <Link onClick={() => handleClick()} sx={sectionStyle}>Documentation</Link>
            <Link onClick={() => handleClick(true)} sx={sectionStyle}>Support</Link>
          </Grid>

          {/* Company */}
          <Grid item xs={6} sm={3}>
            <Typography variant="h6" gutterBottom>Company</Typography>
            <Link onClick={() => handleClick()} sx={sectionStyle}>About</Link>
            <Link onClick={() => handleClick()} sx={sectionStyle}>Blog</Link>
            <Link onClick={() => handleClick(true)} sx={sectionStyle}>Contact</Link>
          </Grid>

          {/* Legal */}
          <Grid item xs={6} sm={3}>
            <Typography variant="h6" gutterBottom>Legal</Typography>
            <Link onClick={() => handleClick()} sx={sectionStyle}>Terms and Conditions</Link>
            <Link onClick={() => handleClick()} sx={sectionStyle}>Privacy Policy</Link>

            <Box mt={2}>
              <IconButton color="inherit" onClick={() => handleClick(true)}><GoogleIcon /></IconButton>
              <IconButton color="inherit" onClick={() => handleClick(true)}><GitHubIcon /></IconButton>
              <IconButton color="inherit" onClick={() => handleClick(true)}><TwitterIcon /></IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box mt={4}>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} StockAI — All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </MotionBox>
  );
};

export default Footer; 