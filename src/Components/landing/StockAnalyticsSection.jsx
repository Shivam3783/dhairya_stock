import React from 'react';
import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AnalyticsPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  height: '100%',
  background: '#E7E8D1',
  backdropFilter: 'blur(10px)',
}));

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      mode: 'index',
      intersect: false,
    },
  },
  scales: {
    y: {
      grid: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

const generateHistoricalData = () => {
  const labels = ['2019', '2020', '2021', '2022', '2023'];
  return {
    labels,
    datasets: [
      {
        label: 'Historical Price',
        data: [150, 180, 220, 280, 350],
        borderColor: '#1a237e',
        backgroundColor: 'rgba(26, 35, 126, 0.1)',
        tension: 0.4,
      },
      {
        label: 'Predicted Trend',
        data: [null, null, null, 280, 400],
        borderColor: '#4caf50',
        backgroundColor: 'rgba(76, 175, 80, 0.1)',
        borderDash: [5, 5],
        tension: 0.4,
      },
    ],
  };
};

const StockAnalyticsSection = () => {
  return (
    <Box id="analytics" sx={{ py: 8, backgroundColor: '#A1BE95' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h2"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 'bold', color: '#000000', textAlign: 'center' }}
              >
                Advanced Stock Analytics
              </Typography>
              <Typography 
                variant="h5" 
                color="text.secondary" 
                sx={{ textAlign: 'center', mb: 6 }}
              >
                Leverage historical data and AI-powered predictions for smarter investment decisions
              </Typography>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <AnalyticsPaper>
                <Typography variant="h6" gutterBottom>
                  Historical Performance & Predictions
                </Typography>
                <Box sx={{ height: '400px' }}>
                  <Line options={chartOptions} data={generateHistoricalData()} />
                </Box>
              </AnalyticsPaper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <AnalyticsPaper>
                    <Typography variant="h6" gutterBottom>
                      Key Metrics
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="body1" color="text.secondary" gutterBottom>
                        Accuracy Rate: <strong>94%</strong>
                      </Typography>
                      <Typography variant="body1" color="text.secondary" gutterBottom>
                        Data Points Analyzed: <strong>1M+</strong>
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        Prediction Window: <strong>30 Days</strong>
                      </Typography>
                    </Box>
                  </AnalyticsPaper>
                </motion.div>
              </Grid>
              <Grid item xs={12}>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <AnalyticsPaper>
                    <Typography variant="h6" gutterBottom>
                      Market Sentiment
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="body1" color="text.secondary" gutterBottom>
                        Current: <strong>Bullish</strong>
                      </Typography>
                      <Typography variant="body1" color="text.secondary" gutterBottom>
                        Volatility: <strong>Low</strong>
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        Confidence: <strong>High</strong>
                      </Typography>
                    </Box>
                  </AnalyticsPaper>
                </motion.div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default StockAnalyticsSection; 