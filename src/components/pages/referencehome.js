import React, { useEffect, useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Link,
  Rating,
  Stack,
  Typography,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import SecurityIcon from '@mui/icons-material/Security';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CloudIcon from '@mui/icons-material/Cloud';
import LockIcon from '@mui/icons-material/Lock';
import SyncIcon from '@mui/icons-material/Sync';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PersonIcon from '@mui/icons-material/Person';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Import Slick Carousel CSS statically in index.css or similar
// Example: import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const videoRef = useRef(null);
  const [videoFailed, setVideoFailed] = React.useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setVideoFailed(true); // Show fallback if autoplay fails
      });
    }
  }, []);

  // TypeScript interfaces (if using TypeScript)
  interface Feature {
    title: string;
    description: string;
    icon: JSX.Element;
    link: string;
  }

  interface NewsItem {
    title: string;
    date: string;
    description: string;
    link: string;
    source: string;
    category: string;
  }

  interface Stat {
    number: string;
    label: string;
  }

  const features: Feature[] = [
    {
      title: 'Secure Health Records',
      description: 'Access and manage your medical history securely.',
      icon: <LockIcon />,
      link: '/services/health-records',
    },
    // ... other features
  ];

  const news: NewsItem[] = [
    {
      title: 'Canada Health Infoway Interoperability Roadmap 2024',
      date: 'January 2025',
      description: 'New guidelines for connecting healthcare systems.',
      link: 'https://www.infoway-inforoute.ca/',
      source: 'Canada Health Infoway',
      category: 'Policy',
    },
    // ... other news items
  ];

  const stats: Stat[] = [
    { number: '99%', label: 'Patient satisfaction' },
    // ... other stats
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, rgba(0, 102, 204, 0.95) 0%, rgba(0, 132, 61, 0.85) 100%), url("/images/hero-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: { xs: 'scroll', md: 'fixed' },
          color: 'white',
          py: { xs: 12, md: 16 },
          minHeight: { xs: '70vh', md: '80vh' },
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: `
              radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
            `,
          },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: -1,
            overflow: 'hidden',
            '& video': {
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.15,
            },
          }}
        >
          <video ref={videoRef} autoPlay muted loop playsInline id="feature-video">
            <source src="https://assets.mixkit.co/videos/preview/mixkit-mother-with-her-little-daughter-4549-large.mp4" type="video/mp4" />
          </video>
          {videoFailed && (
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'rgba(0, 0, 0, 0.5)',
              }}
            >
              <Button
                variant="contained"
                onClick={() => videoRef.current?.play()}
                startIcon={<PlayArrowIcon />}
                aria-label="Play video"
              >
                Play Video
              </Button>
            </Box>
          )}
        </Box>

        <Container maxWidth="xl">
          <Grid container spacing={4} alignItems="center" sx={{ minHeight: '80vh' }}>
            <Grid item xs={12} lg={7}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Chip
                  label="🏥 Digital Healthcare Solutions"
                  sx={{
                    bgcolor: 'rgba(255, 255, 255, 0.15)',
                    color: 'white',
                    fontWeight: 600,
                    fontSize: '14px',
                    mb: 3,
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                  }}
                />
                <Typography
                  variant="h1"
                  sx={{
                    mb: 3,
                    fontWeight: 800,
                    fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                    lineHeight: 1.1,
                    background: 'linear-gradient(135deg, #ffffff 0%, #e3f2fd 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  We Care{' '}
                  <Box component="span" sx={{ color: '#FFD100' }}>
                    We Provide!
                  </Box>
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    fontWeight: 400,
                    maxWidth: '600px',
                    opacity: 0.95,
                    lineHeight: 1.5,
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                  }}
                >
                  Advancing Canadian healthcare through innovative digital solutions.
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="contained"
                      size="large"
                      component={RouterLink}
                      to="/register"
                      sx={{
                        bgcolor: '#FFD100',
                        color: '#000',
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        py: 1.5,
                        px: 4,
                        borderRadius: '50px',
                        boxShadow: '0 8px 32px rgba(255, 209, 0, 0.3)',
                        '&:hover': {
                          bgcolor: '#FFA000',
                          boxShadow: '0 12px 40px rgba(255, 209, 0, 0.4)',
                        },
                      }}
                      endIcon={<ArrowForwardIcon />}
                      aria-label="Get started with registration"
                    >
                      Get Started
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outlined"
                      size="large"
                      component={RouterLink}
                      to="/project"
                      sx={{
                        color: 'white',
                        borderColor: 'rgba(255, 255, 255, 0.7)',
                        fontWeight: 600,
                        fontSize: '1.1rem',
                        py: 1.5,
                        px: 4,
                        borderRadius: '50px',
                        borderWidth: '2px',
                        '&:hover': {
                          borderColor: 'white',
                          bgcolor: 'rgba(255, 255, 255, 0.1)',
                        },
                      }}
                      startIcon={<PlayArrowIcon />}
                      aria-label="Learn more about the project"
                    >
                      Learn More
                    </Button>
                  </motion.div>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} lg={4} sx={{ display: 'flex', justifyContent: { xs: 'center', lg: 'flex-end' } }}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                  p: 3,
                  color: '#333',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  width: '100%',
                  maxWidth: { xs: '100%', md: '300px' },
                  mt: { xs: 4, lg: 0 },
                }}
              >
                <Typography variant="h6" fontWeight={700} sx={{ mb: 2, color: '#0066CC' }}>
                  Healthcare Impact
                </Typography>
                {stats.map((stat, index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    <Typography variant="h4" fontWeight={800} sx={{ color: '#0066CC' }}>
                      {stat.number}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666', fontWeight: 500 }}>
                      {stat.label}
                    </Typography>
                  </Box>
                ))}
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Quick Access Section */}
      <Box sx={{ py: 6, bgcolor: 'white' }}>
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography variant="h4" align="center" fontWeight={700} sx={{ mb: 1, color: '#333' }}>
              Quick Access
            </Typography>
            <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 5, maxWidth: '600px', mx: 'auto' }}>
              Get instant access to essential healthcare services.
            </Typography>
          </motion.div>

          <Grid container spacing={3}>
            {[
              {
                title: 'Find a Provider',
                description: 'Locate healthcare specialists in your area.',
                link: '/services/find-provider',
                color: '#0066CC',
                icon: <MedicalServicesIcon sx={{ fontSize: 40 }} />,
                action: 'Find Now',
              },
              // ... other items
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: '16px',
                      bgcolor: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                      '&:hover': {
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
                        transform: 'translateY(-8px)',
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        bgcolor: item.color,
                        borderRadius: '16px 16px 0 0',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box
                        sx={{
                          width: 64,
                          height: 64,
                          borderRadius: '16px',
                          bgcolor: `${item.color}15`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 3,
                          color: item.color,
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Typography variant="h6" fontWeight={700} sx={{ mb: 2, color: '#333' }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                        {item.description}
                      </Typography>
                      <Link
                        component={RouterLink}
                        to={item.link}
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          color: item.color,
                          fontWeight: 700,
                          fontSize: '14px',
                          textDecoration: 'none',
                          '&:hover': {
                            transform: 'translateX(4px)',
                          },
                        }}
                        aria-label={`Navigate to ${item.title}`}
                      >
                        {item.action}
                        <ArrowForwardIcon sx={{ ml: 1, fontSize: 18 }} />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* BHN System Architecture Section */}
      <Box sx={{ py: 10, bgcolor: '#F8FAFC' }}>
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                borderRadius: '24px',
                bgcolor: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(0, 102, 204, 0.1)',
                p: 4,
                textAlign: 'center',
              }}
            >
              <Typography variant="h6" fontWeight={700} sx={{ mb: 4, color: '#0066CC' }}>
                BHN System Architecture
              </Typography>
              <Box sx={{ position: 'relative', height: 300, mb: 3 }}>
                {/* AWS Cloud */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 20,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 200,
                    height: 60,
                    bgcolor: '#FF9900',
                    borderRadius: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '14px',
                  }}
                >
                  <CloudIcon sx={{ mr: 1 }} />
                  AWS Canada
                </Box>
                {/* BHN Core */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 110,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 120,
                    height: 120,
                    bgcolor: '#0066CC',
                    borderRadius: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '12px',
                  }}
                >
                  <PersonIcon sx={{ fontSize: 32, mb: 1 }} />
                  BHN Core
                </Box>
                {/* Provincial Systems */}
                {[
                  { name: 'ON', x: 50, y: 160, color: '#4CAF50' },
                  { name: 'BC', x: 320, y: 160, color: '#2196F3' },
                ].map((province, index) => (
                  <motion.div
                    key={province.name}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: province.y,
                        left: province.x,
                        width: 50,
                        height: 50,
                        bgcolor: province.color,
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 700,
                        fontSize: '12px',
                      }}
                    >
                      {province.name}
                    </Box>
                  </motion.div>
                ))}
                {/* Connection lines */}
                <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                  <line x1="200" y1="170" x2="75" y2="185" stroke="#0066CC" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="200" y1="170" x2="345" y2="185" stroke="#0066CC" strokeWidth="2" strokeDasharray="5,5" />
                </svg>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Secure, decentralized architecture connecting healthcare systems.
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                <Chip label="PIPEDA Compliant" size="small" sx={{ bgcolor: '#0066CC15', color: '#0066CC' }} />
                <Chip label="Real-time Sync" size="small" sx={{ bgcolor: '#00843D15', color: '#00843D' }} />
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 8, bgcolor: '#0066CC', color: 'white' }}>
        <Container maxWidth="xl">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
                Ready to learn more about the BHN System?
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9 }}>
                Explore our project details and see how we're revolutionizing Canadian healthcare.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent={{ xs: 'flex-start', md: 'flex-end' }}>
                <Button
                  variant="contained"
                  component={RouterLink}
                  to="/project"
                  sx={{
                    bgcolor: 'white',
                    color: '#0066CC',
                    '&:hover': { bgcolor: '#f0f0f0' },
                    px: 3,
                  }}
                  aria-label="View project details"
                >
                  Our Project
                </Button>
                <Button
                  variant="outlined"
                  component={RouterLink}
                  to="/team"
                  sx={{
                    color: 'white',
                    borderColor: 'white',
                    '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' },
                    px: 3,
                  }}
                  aria-label="Meet our team"
                >
                  Meet Our Team
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;