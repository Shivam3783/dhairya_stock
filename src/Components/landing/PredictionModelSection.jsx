import React from 'react';
import { Box, Container, Typography, Paper, Grid, LinearProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import UpdateIcon from '@mui/icons-material/Update';

const ModelPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  height: '100%',
  background: '#E7E8D1',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[8],
  },
}));

const IconBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#C88A65',
  borderRadius: '50%',
  padding: theme.spacing(2),
  display: 'inline-flex',
  marginBottom: theme.spacing(2),
  '& svg': {
    fontSize: '2.5rem',
    color: '#fff',
  },
}));

const ProgressBar = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  backgroundColor: 'rgba(26, 35, 126, 0.1)',
  '& .MuiLinearProgress-bar': {
    borderRadius: 5,
    backgroundColor: '#C88A65',
  },
}));

const modelFeatures = [
  {
    icon: <AutoGraphIcon />,
    title: 'Technical Analysis',
    description: 'Advanced pattern recognition and trend analysis using multiple technical indicators',
    accuracy: 92,
  },
  {
    icon: <DataUsageIcon />,
    title: 'Fundamental Analysis',
    description: 'Company financials, market conditions, and economic indicators evaluation',
    accuracy: 88,
  },
  {
    icon: <PrecisionManufacturingIcon />,
    title: 'Machine Learning',
    description: 'Ensemble of neural networks and decision trees for precise predictions',
    accuracy: 94,
  },
  {
    icon: <UpdateIcon />,
    title: 'Real-time Updates',
    description: 'Continuous model training with latest market data and news sentiment',
    accuracy: 90,
  },
];

const PredictionModelSection = () => {
  return (
    <Box 
      id="about" 
      sx={{ 
        py: 8, 
        backgroundColor: '#A1BE95',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
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
            sx={{ 
              fontWeight: 'bold', 
              color: '#1a237e', 
              textAlign: 'center',
              mb: 2
            }}
          >
            Our Prediction Model
          </Typography>
          <Typography 
            variant="h5" 
            color="text.secondary" 
            sx={{ 
              textAlign: 'center', 
              mb: 6, 
              maxWidth: '800px', 
              mx: 'auto',
              color: '#2c3e50'
            }}
          >
            Powered by state-of-the-art machine learning algorithms and real-time market data analysis
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {modelFeatures.map((feature, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ModelPaper elevation={3}>
                  <IconBox>
                    {feature.icon}
                  </IconBox>
                  <Typography 
                    variant="h5" 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 'bold',
                      color: '#1a237e'
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography 
                    color="text.secondary" 
                    paragraph
                    sx={{ 
                      color: '#2c3e50',
                      mb: 3
                    }}
                  >
                    {feature.description}
                  </Typography>
                  <Box sx={{ mt: 3 }}>
                    <Typography 
                      variant="body2" 
                      color="text.secondary" 
                      gutterBottom
                      sx={{ color: '#2c3e50' }}
                    >
                      Accuracy Rate
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box sx={{ flex: 1, mr: 2 }}>
                        <ProgressBar variant="determinate" value={feature.accuracy} />
                      </Box>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: '#2c3e50',
                          fontWeight: 'bold'
                        }}
                      >
                        {feature.accuracy}%
                      </Typography>
                    </Box>
                  </Box>
                </ModelPaper>
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
          <Paper 
            sx={{ 
              mt: 6, 
              p: 4, 
              textAlign: 'center',
              background: '#E7E8D1',
              color: '#1a237e',
              boxShadow: 3,
              borderRadius: 2
            }}
          >
            <Typography 
              variant="h5" 
              gutterBottom
              sx={{ fontWeight: 'bold' }}
            >
              Combined Model Accuracy
            </Typography>
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 'bold',
                color: '#C88A65'
              }}
            >
              94.5%
            </Typography>
            <Typography 
              sx={{ 
                mt: 2, 
                opacity: 0.9,
                color: '#2c3e50'
              }}
            >
              Based on historical predictions and market performance
            </Typography>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default PredictionModelSection; 