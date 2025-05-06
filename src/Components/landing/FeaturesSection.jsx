import React from 'react';
import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import TimelineIcon from '@mui/icons-material/Timeline';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const FeatureCard = styled(Paper)(({ theme }) => ({
  backgroundColor: '#E7E8D1',        // Custom background color
  padding: theme.spacing(4),
  width: '100%',                     // Takes full width of its parent
  minHeight: '300px',                // Set a consistent height (adjust as needed)
  textAlign: 'center',
  transition: 'transform 0.3s ease-in-out',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',             // Center child elements horizontally
  justifyContent: 'center',         // Center content vertically
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#C88A65',          // Custom background color
  borderRadius: '50%',                // Circular shape
  width: theme.spacing(10),           // Fixed width (adjust as needed)
  height: theme.spacing(10),          // Fixed height
  padding: theme.spacing(2),          // Internal padding
  display: 'inline-flex',
  alignItems: 'center',              // Vertically center icon
  justifyContent: 'center',          // Horizontally center icon
  marginBottom: theme.spacing(2),
  '& svg': {
    fontSize: '2.5rem',
    color: '#000',                   // Changed to black to contrast with light bg
  },
}));

const features = [
  {
    icon: <TimelineIcon />,
    title: 'AI-Powered Predictions',
    description: 'Leverage cutting-edge artificial intelligence to forecast market trends and stock price movements with exceptional precision, empowering smarter investment strategies.',
  },
  {
    icon: <AccountBalanceWalletIcon />,
    title: 'Portfolio Management',
    description: 'Monitor and optimize your investment portfolio in real time through a user-friendly dashboard that offers actionable insights and performance analytics.',
  },
  {
    icon: <TrendingUpIcon />,
    title: 'Market Analysis',
    description: 'Access in-depth market intelligence, including technical indicators, sentiment analysis, and historical data to support informed, data-driven decisions.',
  },
  {
    icon: <NotificationsActiveIcon />,
    title: 'Real-Time Alerts',
    description: 'Receive immediate notifications on market volatility, price thresholds, and emerging opportunities, ensuring you never miss a critical moment.',
  },
];

const FeaturesSection = () => {
  return (
    <Box id="features" sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 'bold', color: '#1a237e' }}
          >
            Powerful Features
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
            Our platform combines cutting-edge technology with user-friendly features to help you succeed in the stock market.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FeatureCard elevation={2}>
                  <IconWrapper>
                    {feature.icon}
                  </IconWrapper>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {feature.description}
                  </Typography>
                </FeatureCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturesSection; 