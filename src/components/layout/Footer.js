import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Updated footer links - only BHN System, all linking to project page
  const footerLinks = {
    bhnSystem: [
      { name: 'About BHN', path: '/project' },
      { name: 'How It Works', path: '/project' },
      { name: 'System Features', path: '/project' },
      { name: 'Security & Privacy', path: '/project' },
    ]
  };

  // Updated contact info
  const contactInfo = [
    { icon: <EmailIcon />, text: 'mishraaniket267@gmail.com' },
    { icon: <PhoneIcon />, text: '+1 (437) 987-6041' },
    { icon: <LocationOnIcon />, text: 'Birth Health Network Headquarters' },
  ];

  const footerContainerStyles = {
    backgroundColor: '#0066CC',
    color: 'white',
    py: 10,
    pb: 5,
    '@keyframes pulse': {
      '0%': {
        boxShadow: '0 0 0 0 rgba(76, 175, 80, 0.7)',
      },
      '70%': {
        boxShadow: '0 0 0 10px rgba(76, 175, 80, 0)',
      },
      '100%': {
        boxShadow: '0 0 0 0 rgba(76, 175, 80, 0)',
      },
    },
  };

  const footerTitleStyles = {
    fontWeight: 600,
    mb: 3,
    position: 'relative',
    display: 'inline-block',
    color: 'white',
    textAlign: 'center',
    fontFamily: '"Open Sans", "Roboto", "Arial", sans-serif',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '-8px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '40px',
      height: '2px',
      background: 'white',
      borderRadius: '2px',
    },
  };

  const footerLinkStyles = {
    color: 'rgba(255, 255, 255, 0.9)',
    transition: 'all 0.3s ease',
    fontSize: '15px',
    fontFamily: '"Open Sans", "Roboto", "Arial", sans-serif',
    px: 2,
    py: 1,
    '&:hover': {
      color: 'white',
      textDecoration: 'underline',
    },
  };

  const socialIconButtonStyles = {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: 'white',
    mr: 1.5,
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: 'white',
      color: '#0066CC',
      transform: 'translateY(-3px)',
    },
  };

  const contactItemStyles = {
    display: 'flex',
    alignItems: 'center',
    mb: 2,
    '& .icon': {
      color: 'white',
      mr: 2,
    },
  };

  return (
    <>
      <Box sx={footerContainerStyles}>
        <Container maxWidth="xl">
          {/* CTA Banner */}
          <Box sx={{ maxWidth: '800px', mx: 'auto', textAlign: 'center', mb: 8, p: { xs: 4, md: 6 }, borderRadius: '24px', bgcolor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.2)', boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)' }}>
            <Typography variant="h3" fontWeight={800} sx={{ mb: 3, background: 'linear-gradient(135deg, #ffffff 0%, #FFD100 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize: { xs: '2rem', md: '3rem' } }}>
              Ready to Transform Healthcare?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, maxWidth: '600px', mx: 'auto', lineHeight: 1.6 }}>
              Join us in revolutionizing Canadian healthcare through innovative digital solutions and seamless patient experiences.
            </Typography>
          </Box>

          {/* Footer Links - BHN System in Horizontal Layout */}
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="subtitle1" sx={footerTitleStyles}>
              BHN System
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="center"
              alignItems="center"
              sx={{ mt: 4 }}
            >
              {footerLinks.bhnSystem.map((link, index) => (
                <Link
                  key={index}
                  component={RouterLink}
                  to={link.path}
                  underline="none"
                  sx={footerLinkStyles}
                >
                  {link.name}
                </Link>
              ))}
            </Stack>
          </Box>

          {/* Divider */}
          <Divider sx={{ my: 6, bgcolor: 'rgba(255, 255, 255, 0.2)' }} />

          {/* Contact Information */}
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 3, fontSize: '1.25rem' }}>
              Contact Information
            </Typography>
            <Grid container spacing={3} justifyContent="center">
              {contactInfo.map((item, index) => (
                <Grid item xs={12} sm={4} key={index}>
                  <Box sx={{ ...contactItemStyles, justifyContent: 'center' }}>
                    <Box className="icon">{item.icon}</Box>
                    <Typography variant="body2">{item.text}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Bottom Footer Bar */}
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} justifyContent="space-between" alignItems="center">
            <Typography variant="body2" sx={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.9)' }}>
              © {currentYear} Birth Health Network. All rights reserved. | We Care We Provide!
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Typography
                variant="caption"
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5
                }}
              >
                <Box sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: '#4CAF50',
                  animation: 'pulse 2s infinite'
                }} />
                System Status: Operational
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
              >
                PIPEDA & HIPAA Compliant
              </Typography>
            </Box>
            <Stack direction="row" spacing={1}>
              <IconButton aria-label="Facebook" sx={socialIconButtonStyles}>
                <FacebookIcon />
              </IconButton>
              <IconButton aria-label="Twitter" sx={socialIconButtonStyles}>
                <TwitterIcon />
              </IconButton>
              <IconButton aria-label="Instagram" sx={socialIconButtonStyles}>
                <InstagramIcon />
              </IconButton>
              <IconButton aria-label="LinkedIn" sx={socialIconButtonStyles}>
                <LinkedInIcon />
              </IconButton>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Footer; 