import React from 'react';
import { Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import logoImage from '../../assets/LOGO/Gemini_Generated_Image_2ccs0b2ccs0b2ccs.png';

const Logo = ({ size = 'medium', withLink = true, sx = {} }) => {
  const sizeValues = {
    small: 55,
    medium: 65,
    large: 80
  };

  const currentSize = sizeValues[size] || sizeValues.medium;

  const logoComponent = (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease',
        py: 0.5,
        '&:hover': {
          transform: 'scale(1.05)',
        },
        ...sx
      }}
    >
      <Box
        component="img"
        src={logoImage}
        alt="BHN Logo"
        sx={{
          height: currentSize,
          width: 'auto',
          maxWidth: '100%',
          objectFit: 'contain',
          filter: 'brightness(1.1) contrast(1.1)',
          borderRadius: '8px',
          padding: '6px',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          }
        }}
      />
    </Box>
  );

  if (withLink) {
    return (
      <RouterLink to="/" style={{ textDecoration: 'none', display: 'flex' }}>
        {logoComponent}
      </RouterLink>
    );
  }

  return logoComponent;
};

export default Logo; 