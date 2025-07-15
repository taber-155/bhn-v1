import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Grid,
    Link,
    Typography,
    useTheme,
} from '@mui/material';
import styled from 'styled-components';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';

const PageHeader = styled(Box)`
  background-color: #0066CC;
  color: white;
  padding: 80px 0 40px;
`;

const SectionTitle = styled(Typography)`
  position: relative;
  margin-bottom: 40px;
  font-weight: 700;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: #0066CC;
    border-radius: 3px;
  }
`;

const ServiceCard = styled(Card)`
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 8px;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
  }
  
  .icon {
    font-size: 48px;
    color: #0066CC;
    margin-bottom: 16px;
  }
`;

const FeatureItem = styled(Box)`
  display: flex;
  margin-bottom: 24px;
  
  .icon {
    color: #0066CC;
    margin-right: 16px;
    font-size: 24px;
  }
`;

const StyledButton = styled(Button)`
  border-radius: 30px;
  padding: 12px 24px;
  font-weight: 600;
  text-transform: none;
  
  &.MuiButton-contained {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const Services = () => {
    const theme = useTheme();

    const services = [
        {
            title: 'Maternal Care',
            description: 'Comprehensive prenatal, delivery, and postpartum services for expectant mothers.',
            icon: <PregnantWomanIcon className="icon" />,
            link: '/services/maternal-care',
            features: [
                'Prenatal check-ups and monitoring',
                'Birth planning and preparation',
                'Postpartum care and recovery support',
                'Maternal mental health services'
            ]
        },
        {
            title: 'Infant Health',
            description: 'Specialized care for newborns and infants, including developmental monitoring.',
            icon: <ChildFriendlyIcon className="icon" />,
            link: '/services/infant-health',
            features: [
                'Newborn health assessments',
                'Growth and development tracking',
                'Immunization management',
                'Pediatric care coordination'
            ]
        },
        {
            title: 'Family Support',
            description: 'Resources and assistance for families navigating the healthcare system.',
            icon: <FamilyRestroomIcon className="icon" />,
            link: '/services/family-support',
            features: [
                'Family counseling services',
                'Parenting education programs',
                'Support groups and community resources',
                'Care navigation assistance'
            ]
        },
        {
            title: 'Health Records',
            description: 'Secure access to your complete maternal and infant health records.',
            icon: <HealthAndSafetyIcon className="icon" />,
            link: '/services/health-records',
            features: [
                'Unified maternal-infant health records',
                'Secure online access portal',
                'Health information sharing between providers',
                'Historical data retrieval and analysis'
            ]
        },
        {
            title: 'Clinical Integration',
            description: 'Seamless integration of healthcare services across multiple providers.',
            icon: <MedicalInformationIcon className="icon" />,
            link: '/services/clinical-integration',
            features: [
                'Cross-provider care coordination',
                'Integrated care planning',
                'Unified treatment protocols',
                'Collaborative healthcare teams'
            ]
        },
        {
            title: 'Telehealth Services',
            description: 'Remote healthcare consultations and monitoring for convenient care.',
            icon: <MedicalServicesIcon className="icon" />,
            link: '/services/telehealth',
            features: [
                'Virtual prenatal check-ups',
                'Remote monitoring of high-risk pregnancies',
                'Online consultations with specialists',
                'Digital health coaching'
            ]
        },
        {
            title: 'Community Programs',
            description: 'Educational and support programs for expectant and new parents.',
            icon: <VolunteerActivismIcon className="icon" />,
            link: '/services/community',
            features: [
                'Childbirth education classes',
                'Breastfeeding support groups',
                'New parent networking events',
                'Community health workshops'
            ]
        },
        {
            title: 'Research Participation',
            description: 'Opportunities to contribute to maternal and infant health research.',
            icon: <MonitorHeartIcon className="icon" />,
            link: '/services/research',
            features: [
                'Clinical trials enrollment',
                'Health outcomes studies',
                'Data-driven research initiatives',
                'Feedback and experience sharing'
            ]
        }
    ];

    return (
        <Box>
            {/* Page Header */}
            <PageHeader>
                <Container maxWidth="xl">
                    <Typography variant="h1" sx={{ mb: 2, fontWeight: 700 }}>
                        Our Services
                    </Typography>
                    <Typography variant="h5" sx={{ maxWidth: '800px', fontWeight: 400 }}>
                        Birth Health Network offers a comprehensive range of services to support maternal and infant health through connected care.
                    </Typography>
                </Container>
            </PageHeader>

            {/* Services Overview */}
            <Box sx={{ py: 8 }}>
                <Container maxWidth="xl">
                    <Grid container spacing={4}>
                        {services.map((service, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <ServiceCard>
                                    <CardContent sx={{ textAlign: 'center', p: 4 }}>
                                        {service.icon}
                                        <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                                            {service.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                            {service.description}
                                        </Typography>
                                        <Link
                                            component={RouterLink}
                                            to={service.link}
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'primary.main',
                                                fontWeight: 600,
                                                '&:hover': { textDecoration: 'none' }
                                            }}
                                        >
                                            Learn More
                                            <ArrowForwardIcon sx={{ ml: 0.5, fontSize: 18 }} />
                                        </Link>
                                    </CardContent>
                                </ServiceCard>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Featured Service */}
            <Box sx={{ py: 8, bgcolor: '#F5F7FA' }}>
                <Container maxWidth="xl">
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <SectionTitle variant="h4">
                                Birth Health Network System
                            </SectionTitle>
                            <Typography variant="body1" sx={{ mb: 4 }}>
                                Our flagship service connects maternal and infant health records through a unique identifier system, ensuring seamless care coordination across healthcare providers.
                            </Typography>

                            <Grid container spacing={2}>
                                {services[0].features.map((feature, index) => (
                                    <Grid item xs={12} sm={6} key={index}>
                                        <FeatureItem>
                                            <Box sx={{ minWidth: 24 }}>
                                                <ArrowForwardIcon className="icon" />
                                            </Box>
                                            <Typography variant="body1">{feature}</Typography>
                                        </FeatureItem>
                                    </Grid>
                                ))}
                            </Grid>

                            <Box sx={{ mt: 4 }}>
                                <StyledButton
                                    variant="contained"
                                    color="primary"
                                    component={RouterLink}
                                    to="/services/bhn-system"
                                    endIcon={<ArrowForwardIcon />}
                                >
                                    Explore the BHN System
                                </StyledButton>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    height: 400,
                                    bgcolor: '#e0e0e0',
                                    borderRadius: 2,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography variant="body1" color="text.secondary">
                                    [Illustration of BHN System]
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Implementation Process */}
            <Box sx={{ py: 8 }}>
                <Container maxWidth="xl">
                    <Box sx={{ textAlign: 'center', mb: 6 }}>
                        <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
                            Implementation Process
                        </Typography>
                        <Typography variant="body1" sx={{ maxWidth: 800, mx: 'auto' }}>
                            Our streamlined implementation process ensures a smooth transition to the Birth Health Network system for healthcare providers and organizations.
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        {[
                            {
                                step: '01',
                                title: 'Assessment & Planning',
                                description: 'We evaluate your current systems and develop a customized implementation plan.'
                            },
                            {
                                step: '02',
                                title: 'Data Integration',
                                description: 'Your existing health records are securely integrated into the BHN system.'
                            },
                            {
                                step: '03',
                                title: 'Staff Training',
                                description: 'We provide comprehensive training for all staff members who will use the system.'
                            },
                            {
                                step: '04',
                                title: 'Launch & Support',
                                description: 'We assist with the system launch and provide ongoing technical support.'
                            }
                        ].map((phase, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Card sx={{ height: '100%', borderRadius: 2, boxShadow: 2 }}>
                                    <CardContent sx={{ p: 4 }}>
                                        <Typography
                                            variant="h3"
                                            sx={{
                                                color: 'primary.main',
                                                fontWeight: 700,
                                                mb: 2,
                                                opacity: 0.2
                                            }}
                                        >
                                            {phase.step}
                                        </Typography>
                                        <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>
                                            {phase.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {phase.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* CTA Section */}
            <Box sx={{ py: 8, bgcolor: '#0066CC', color: 'white' }}>
                <Container maxWidth="xl">
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={8}>
                            <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
                                Ready to transform maternal and infant healthcare?
                            </Typography>
                            <Typography variant="body1" sx={{ opacity: 0.9 }}>
                                Contact us today to learn how Birth Health Network can benefit your organization and patients.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
                            <StyledButton
                                variant="contained"
                                sx={{
                                    bgcolor: 'white',
                                    color: '#0066CC',
                                    '&:hover': { bgcolor: '#f0f0f0' }
                                }}
                                component={RouterLink}
                                to="/contact"
                                endIcon={<ArrowForwardIcon />}
                            >
                                Contact Us
                            </StyledButton>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Services; 