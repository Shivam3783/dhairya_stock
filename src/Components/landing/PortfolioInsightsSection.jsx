import React from 'react';
import { Box, Container, Typography, Paper, Grid, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';
import { Doughnut, Line } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

const InsightPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  height: '100%',
  background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
}));

const MetricBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  backgroundColor: 'rgba(26, 35, 126, 0.05)',
}));

const portfolioData = {
  labels: ['Technology', 'Healthcare', 'Finance', 'Consumer', 'Energy'],
  datasets: [
    {
      data: [35, 25, 20, 15, 5],
      backgroundColor: [
        '#1a237e',
        '#0d47a1',
        '#1565c0',
        '#1976d2',
        '#1e88e5',
      ],
      borderWidth: 0,
    },
  ],
};

const performanceData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Portfolio Performance',
      data: [100, 120, 115, 134, 168, 180],
      borderColor: '#1a237e',
      backgroundColor: 'rgba(26, 35, 126, 0.1)',
      tension: 0.4,
      fill: true,
    },
    {
      label: 'Market Index',
      data: [100, 110, 108, 120, 140, 145],
      borderColor: '#90caf9',
      backgroundColor: 'rgba(144, 202, 249, 0.1)',
      tension: 0.4,
      fill: true,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
  },
};

const lineChartOptions = {
  ...chartOptions,
  scales: {
    y: {
      beginAtZero: true,
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

const PortfolioInsightsSection = () => {
  return (
    <Box id="insights" sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
      <Container maxWidth="lg">
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
            sx={{ fontWeight: 'bold', color: '#1a237e', textAlign: 'center' }}
          >
            Portfolio Insights
          </Typography>
          <Typography 
            variant="h5" 
            color="text.secondary" 
            sx={{ textAlign: 'center', mb: 6, maxWidth: '800px', mx: 'auto' }}
          >
            Deep dive into your portfolio performance with AI-powered analytics
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <InsightPaper>
                <Typography variant="h6" gutterBottom>
                  Sector Allocation
                </Typography>
                <Box sx={{ height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Doughnut data={portfolioData} options={chartOptions} />
                </Box>
              </InsightPaper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <InsightPaper>
                <Typography variant="h6" gutterBottom>
                  Performance vs Market
                </Typography>
                <Box sx={{ height: 300 }}>
                  <Line options={lineChartOptions} data={performanceData} />
                </Box>
              </InsightPaper>
            </motion.div>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={3}>
              {[
                { label: 'Total Return', value: '+24.5%', color: '#4caf50' },
                { label: 'Risk Score', value: 'Moderate', color: '#ff9800' },
                { label: 'Sharpe Ratio', value: '1.8', color: '#2196f3' },
                { label: 'Alpha', value: '+5.2%', color: '#9c27b0' },
              ].map((metric, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <MetricBox>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        {metric.label}
                      </Typography>
                      <Typography 
                        variant="h4" 
                        sx={{ 
                          fontWeight: 'bold',
                          color: metric.color,
                        }}
                      >
                        {metric.value}
                      </Typography>
                    </MetricBox>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PortfolioInsightsSection; 