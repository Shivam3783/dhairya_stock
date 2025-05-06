import React, { useState } from 'react';
import { Box, Container, Typography, Paper, Grid, IconButton, Collapse } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// Pulse animation
const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

// Floating animation
const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const AlertContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(26, 35, 126, 0.05) 0%, rgba(0, 0, 0, 0) 100%)',
    zIndex: -1,
  },
}));

const AlertCard = styled(Paper)(({ theme, severity }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'all 0.3s ease-in-out',
  background: '#E7E8D1',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '4px',
    height: '100%',
    background: severity === 'high' 
      ? '#f44336' 
      : severity === 'medium'
      ? '#ff9800'
      : '#4caf50',
  },
}));

const PulsingIcon = styled(Box)`
  animation: ${pulse} 2s infinite ease-in-out;
`;

const FloatingIcon = styled(Box)`
  animation: ${float} 3s infinite ease-in-out;
`;

const alerts = [
  {
    id: 1,
    title: 'Price Target Reached',
    description: 'AAPL has reached your target price of $180. Consider reviewing your position.',
    icon: <TrendingUpIcon sx={{ color: '#4caf50', fontSize: '2rem' }} />,
    severity: 'high',
    time: '2 minutes ago',
  },
  {
    id: 2,
    title: 'Unusual Volume Alert',
    description: 'TSLA is showing 250% higher than average trading volume.',
    icon: <NewReleasesIcon sx={{ color: '#ff9800', fontSize: '2rem' }} />,
    severity: 'medium',
    time: '5 minutes ago',
  },
  {
    id: 3,
    title: 'Support Level Break',
    description: 'MSFT has broken below the key support level of $290.',
    icon: <TrendingDownIcon sx={{ color: '#f44336', fontSize: '2rem' }} />,
    severity: 'high',
    time: '10 minutes ago',
  },
  {
    id: 4,
    title: 'AI Prediction Update',
    description: 'New bullish pattern detected for NVDA with 92% confidence.',
    icon: <NotificationsActiveIcon sx={{ color: '#2196f3', fontSize: '2rem' }} />,
    severity: 'low',
    time: '15 minutes ago',
  },
];

const AlertSection = () => {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <AlertContainer sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <FloatingIcon>
              <NotificationsActiveIcon 
                sx={{ 
                  fontSize: '4rem', 
                  color: '#1a237e',
                  mb: 2,
                }} 
              />
            </FloatingIcon>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ 
                fontWeight: 'bold', 
                background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Smart Alerts
            </Typography>
            <Typography 
              variant="h5" 
              color="text.secondary" 
              sx={{ maxWidth: '800px', mx: 'auto' }}
            >
              Real-time notifications powered by AI to keep you ahead of the market
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={3}>
          {alerts.map((alert, index) => (
            <Grid item xs={12} key={alert.id}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AlertCard 
                  severity={alert.severity}
                  onClick={() => setExpandedId(expandedId === alert.id ? null : alert.id)}
                >
                  <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                      <PulsingIcon>
                        {alert.icon}
                      </PulsingIcon>
                    </Grid>
                    <Grid item xs>
                      <Typography variant="h6" gutterBottom>
                        {alert.title}
                      </Typography>
                      <Collapse in={expandedId === alert.id}>
                        <Typography color="text.secondary" paragraph>
                          {alert.description}
                        </Typography>
                      </Collapse>
                    </Grid>
                    <Grid item>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="caption" color="text.secondary">
                          {alert.time}
                        </Typography>
                        <IconButton 
                          size="small"
                          sx={{ 
                            transform: expandedId === alert.id ? 'rotate(180deg)' : 'none',
                            transition: 'transform 0.3s ease-in-out',
                          }}
                        >
                          <KeyboardArrowDownIcon />
                        </IconButton>
                      </Box>
                    </Grid>
                  </Grid>
                </AlertCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box 
            sx={{ 
              mt: 6, 
              p: 4, 
              textAlign: 'center',
              background: 'rgba(26, 35, 126, 0.03)',
              borderRadius: 4,
              border: '1px dashed rgba(26, 35, 126, 0.2)',
            }}
          >
            <Typography variant="h6" gutterBottom color="primary">
              Customizable Alert Settings
            </Typography>
            <Typography color="text.secondary">
              Configure your alerts based on price movements, volume changes, technical indicators, and more
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </AlertContainer>
  );
};

export default AlertSection; 