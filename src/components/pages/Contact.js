import React, { useState } from 'react';
import {
    Box,
    Button,
    Container,
    Grid,
    Paper,
    TextField,
    Typography,
    useTheme,
    MenuItem,
    Snackbar,
    Alert,
    IconButton,
    Divider,
} from '@mui/material';
import styled from 'styled-components';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const PageTitle = styled(Typography)`
  font-weight: 800;
  margin-bottom: 16px;
  position: relative;
  letter-spacing: -0.02em;
`;

const SectionSubtitle = styled(Typography)`
  color: #FFD100;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 16px;
  font-size: 14px;
`;

const HeroSection = styled(Box)`
  background-color: #000000;
  color: #FFFFFF;
  padding: 160px 0 100px;
  position: relative;
  overflow: hidden;
`;

const ContactFormContainer = styled(Paper)`
  padding: 48px;
  border: none;
  background-color: #FFFFFF;
  position: relative;
  z-index: 2;
  
  @media (max-width: 600px) {
    padding: 32px 24px;
  }
`;

const ContactInfoCard = styled(Box)`
  display: flex;
  align-items: flex-start;
  margin-bottom: 32px;
  
  .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background-color: #F5F5F5;
    margin-right: 16px;
    
    svg {
      color: #000000;
      font-size: 24px;
    }
  }
  
  .content {
    h6 {
      margin-bottom: 8px;
      font-weight: 600;
    }
    
    p {
      color: rgba(0, 0, 0, 0.7);
    }
  }
`;

const MapContainer = styled(Box)`
  height: 400px;
  width: 100%;
  background-color: #F5F5F5;
  position: relative;
  overflow: hidden;
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const StyledTextField = styled(TextField)`
  margin-bottom: 24px;
  
  .MuiInputLabel-root {
    font-weight: 500;
  }
  
  .MuiOutlinedInput-root {
    background-color: #F5F5F5;
    
    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: rgba(0, 0, 0, 0.3);
    }
    
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: #FFD100;
    }
  }
`;

const SubmitButton = styled(Button)`
  padding: 12px 32px;
  font-weight: 600;
`;

const SocialIconButton = styled(IconButton)`
  background-color: #F5F5F5;
  color: #000000;
  margin-right: 12px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #FFD100;
    transform: translateY(-3px);
  }
`;

const Contact = () => {
    const theme = useTheme();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        organization: '',
    });
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Here you would typically handle the form submission to a backend
        console.log('Form submitted:', formData);

        // Show success message
        setSnackbar({
            open: true,
            message: 'Your message has been sent successfully! We will contact you soon.',
            severity: 'success',
        });

        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
            organization: '',
        });
    };

    const handleCloseSnackbar = () => {
        setSnackbar((prev) => ({
            ...prev,
            open: false,
        }));
    };

    const contactInfo = [
        {
            icon: <EmailIcon />,
            title: 'Email',
            content: 'contact@birthhealthnetwork.org',
            link: 'mailto:contact@birthhealthnetwork.org',
        },
        {
            icon: <PhoneIcon />,
            title: 'Phone',
            content: '+1 (555) 123-4567',
            link: 'tel:+15551234567',
        },
        {
            icon: <LocationOnIcon />,
            title: 'Address',
            content: '123 Healthcare Avenue, Medical District, CA 90210',
            link: 'https://maps.google.com/?q=123+Healthcare+Avenue,+Medical+District,+CA+90210',
        },
    ];

    const subjectOptions = [
        'General Inquiry',
        'Partnership Opportunities',
        'Implementation Support',
        'Technical Questions',
        'Research Collaboration',
        'Media Inquiry',
        'Other',
    ];

    return (
        <>
            <HeroSection>
                <Container maxWidth="xl">
                    <Grid container spacing={4} justifyContent="center" textAlign="center">
                        <Grid item xs={12} md={8}>
                            <SectionSubtitle>
                                CONTACT US
                            </SectionSubtitle>
                            <PageTitle variant="h1" gutterBottom className="heading-xl">
                                Get in touch with our team
                            </PageTitle>
                            <Typography variant="h6" sx={{ mb: 4, fontWeight: 400, opacity: 0.9, maxWidth: '800px', mx: 'auto' }}>
                                Have questions about Birth Health Network? We're here to help you implement our solutions and improve healthcare outcomes.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </HeroSection>

            <Box sx={{ py: { xs: 10, md: 15 } }}>
                <Container maxWidth="xl">
                    <Grid container spacing={6}>
                        <Grid item xs={12} md={5}>
                            <SectionSubtitle>
                                REACH OUT
                            </SectionSubtitle>
                            <PageTitle variant="h2" gutterBottom>
                                Contact information
                            </PageTitle>
                            <Typography variant="body1" paragraph sx={{ mb: 5 }}>
                                Our team is ready to answer your questions about implementing the Birth Health Network system in your healthcare facility.
                            </Typography>

                            {contactInfo.map((item, index) => (
                                <ContactInfoCard key={index}>
                                    <Box className="icon-wrapper">
                                        {item.icon}
                                    </Box>
                                    <Box className="content">
                                        <Typography variant="h6">
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body1" component="p">
                                            <a
                                                href={item.link}
                                                style={{
                                                    color: 'inherit',
                                                    textDecoration: 'none',
                                                    transition: 'color 0.3s ease'
                                                }}
                                                onMouseOver={(e) => e.target.style.color = '#FFD100'}
                                                onMouseOut={(e) => e.target.style.color = 'inherit'}
                                            >
                                                {item.content}
                                            </a>
                                        </Typography>
                                    </Box>
                                </ContactInfoCard>
                            ))}

                            <Box sx={{ mt: 6 }}>
                                <SectionSubtitle>
                                    OFFICE HOURS
                                </SectionSubtitle>
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    <strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM
                                </Typography>
                                <Typography variant="body1">
                                    <strong>Saturday - Sunday:</strong> Closed
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={7}>
                            <ContactFormContainer elevation={0}>
                                <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
                                    Send us a message
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                                    Fill out the form below and we'll get back to you as soon as possible.
                                </Typography>

                                <form onSubmit={handleSubmit}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6}>
                                            <StyledTextField
                                                fullWidth
                                                label="Full Name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <StyledTextField
                                                fullWidth
                                                label="Email Address"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <StyledTextField
                                                fullWidth
                                                label="Phone Number"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <StyledTextField
                                                fullWidth
                                                label="Organization"
                                                name="organization"
                                                value={formData.organization}
                                                onChange={handleChange}
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <StyledTextField
                                                fullWidth
                                                select
                                                label="Subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                variant="outlined"
                                            >
                                                {subjectOptions.map((option) => (
                                                    <MenuItem key={option} value={option}>
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </StyledTextField>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <StyledTextField
                                                fullWidth
                                                label="Message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                multiline
                                                rows={6}
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <SubmitButton
                                                type="submit"
                                                variant="contained"
                                                color="secondary"
                                                endIcon={<ArrowForwardIcon />}
                                                size="large"
                                            >
                                                Send Message
                                            </SubmitButton>
                                        </Grid>
                                    </Grid>
                                </form>
                            </ContactFormContainer>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box sx={{ mb: -10 }}>
                <MapContainer>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203615424!2d-118.24146492427337!3d34.05513787304503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c64160adbc4b%3A0x527217f541ae2569!2sCalifornia%20Hospital%20Medical%20Center!5e0!3m2!1sen!2sus!4v1683594118920!5m2!1sen!2sus"
                        title="Birth Health Network Location"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </MapContainer>
            </Box>

            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity={snackbar.severity}
                    sx={{ width: '100%' }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </>
    );
};

export default Contact; 