import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    Box,
    Button,
    Container,
    Grid,
    Typography,
    Card,
    CardContent,
    Avatar,
    Divider,
    Paper,
    useTheme,
    Stack,
} from '@mui/material';
import styled from 'styled-components';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VerifiedIcon from '@mui/icons-material/Verified';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

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

const StyledCard = styled(Card)`
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 8px;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
  }
`;

const TeamMemberCard = styled(Card)`
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 8px;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
  }
  
  .member-image {
    height: 200px;
    background-color: #E0E0E0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ValueItem = styled(Box)`
  display: flex;
  margin-bottom: 24px;
  
  .icon {
    color: #0066CC;
    margin-right: 16px;
    font-size: 24px;
  }
`;

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

const StatsSection = styled(Box)`
  background-color: #F5F5F5;
  padding: 100px 0;
`;

const StatCard = styled(Paper)`
  padding: 40px;
  height: 100%;
  background-color: #FFFFFF;
  border: none;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  .stat-number {
    font-size: 3.5rem;
    font-weight: 800;
    color: #FFD100;
    margin-bottom: 16px;
    line-height: 1;
  }
`;

const TimelineItem = styled(Box)`
  position: relative;
  padding-left: 32px;
  margin-bottom: 48px;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    width: 16px;
    height: 16px;
    background-color: #FFD100;
  }
  
  &:after {
    content: '';
    position: absolute;
    left: 7px;
    top: 30px;
    width: 2px;
    height: calc(100% + 18px);
    background-color: rgba(0, 0, 0, 0.1);
  }
  
  &:last-child:after {
    display: none;
  }
  
  .year {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 8px;
    color: #000000;
  }
`;

const VideoSection = styled(Box)`
  position: relative;
  height: 500px;
  overflow: hidden;
  
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 0 20px;
    text-align: center;
  }
`;

const PartnerLogo = styled(Box)`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  filter: grayscale(100%);
  opacity: 0.7;
  transition: all 0.3s ease;
  
  img {
    max-height: 100%;
    max-width: 100%;
  }
  
  &:hover {
    filter: grayscale(0%);
    opacity: 1;
  }
`;

const About = () => {
    const theme = useTheme();

    const teamMembers = [
        {
            name: 'Dr. Sarah Johnson',
            role: 'Chief Medical Officer',
            bio: 'Dr. Johnson has over 15 years of experience in maternal healthcare and is dedicated to improving birth outcomes.',
            image: '/images/team1.jpg'
        },
        {
            name: 'Michael Chen',
            role: 'Chief Technology Officer',
            bio: 'Michael leads our technical team, bringing 20 years of experience in healthcare data systems and interoperability.',
            image: '/images/team2.jpg'
        },
        {
            name: 'Dr. Aisha Patel',
            role: 'Research Director',
            bio: 'Dr. Patel oversees our research initiatives and partnerships with academic institutions to advance maternal health.',
            image: '/images/team3.jpg'
        },
        {
            name: 'Robert Wilson',
            role: 'Chief Operating Officer',
            bio: 'Robert ensures our operations run smoothly and that we maintain the highest standards of service delivery.',
            image: '/images/team4.jpg'
        }
    ];

    const partners = [
        'National Maternal Health Institute',
        'Children\'s Hospital Association',
        'Healthcare Data Consortium',
        'Regional Medical Centers Alliance',
        'Public Health Department',
        'Community Health Centers Network'
    ];

    const values = [
        {
            title: 'Patient-Centered Care',
            description: 'We put mothers and infants at the center of everything we do, ensuring their needs and preferences guide our decisions.'
        },
        {
            title: 'Data Privacy & Security',
            description: 'We maintain the highest standards of data protection, ensuring sensitive health information remains secure and confidential.'
        },
        {
            title: 'Innovation',
            description: 'We continuously seek new ways to improve healthcare delivery and outcomes through technological advancement.'
        },
        {
            title: 'Collaboration',
            description: 'We work closely with healthcare providers, researchers, and community organizations to create comprehensive solutions.'
        }
    ];

    const stats = [
        { number: "5+", label: "Years of Research" },
        { number: "24", label: "Healthcare Partners" },
        { number: "3.5M", label: "Patient Records Integrated" },
        { number: "98%", label: "Data Accuracy Rate" },
    ];

    return (
        <Box>
            {/* Page Header */}
            <PageHeader>
                <Container maxWidth="xl">
                    <Typography variant="h1" sx={{ mb: 2, fontWeight: 700 }}>
                        About Birth Health Network
                    </Typography>
                    <Typography variant="h5" sx={{ maxWidth: '800px', fontWeight: 400 }}>
                        Our mission is to transform maternal and infant healthcare through innovative data solutions and connected health records.
                    </Typography>
                </Container>
            </PageHeader>

            {/* Our Story Section */}
            <Box sx={{ py: 8 }}>
                <Container maxWidth="xl">
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Box sx={{
                                height: '400px',
                                backgroundColor: '#E0E0E0',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Typography variant="body1" color="text.secondary">
                                    Image placeholder
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <SectionTitle variant="h2">
                                Our Story
                            </SectionTitle>
                            <Typography variant="body1" sx={{ mb: 3 }}>
                                Birth Health Network was founded in 2018 by a team of healthcare professionals, data scientists, and parents who recognized a critical gap in maternal and infant healthcare: the lack of connected health records across different providers and facilities.
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 3 }}>
                                After witnessing firsthand how fragmented information led to complications and suboptimal care, our founders set out to create a system that would ensure every healthcare provider has access to complete, up-to-date information about mothers and infants in their care.
                            </Typography>
                            <Typography variant="body1">
                                Today, Birth Health Network serves thousands of patients and hundreds of healthcare providers across the country, continuously expanding our reach to improve birth outcomes nationwide.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Our Values Section */}
            <Box sx={{ py: 8, backgroundColor: '#F5F7FA' }}>
                <Container maxWidth="xl">
                    <SectionTitle variant="h2" align="center" sx={{ mb: 6, '&:after': { left: 'calc(50% - 30px)' } }}>
                        Our Values
                    </SectionTitle>
                    <Grid container spacing={4}>
                        {values.map((value, index) => (
                            <Grid item xs={12} sm={6} key={index}>
                                <ValueItem>
                                    <CheckCircleOutlineIcon className="icon" />
                                    <Box>
                                        <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>
                                            {value.title}
                                        </Typography>
                                        <Typography variant="body1">
                                            {value.description}
                                        </Typography>
                                    </Box>
                                </ValueItem>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Leadership Team Section */}
            <Box sx={{ py: 8 }} id="team">
                <Container maxWidth="xl">
                    <SectionTitle variant="h2">
                        Our Leadership Team
                    </SectionTitle>
                    <Grid container spacing={4}>
                        {teamMembers.map((member, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <TeamMemberCard>
                                    <Box className="member-image">
                                        <Typography variant="body2" color="text.secondary">
                                            Image placeholder
                                        </Typography>
                                    </Box>
                                    <CardContent>
                                        <Typography variant="h6" fontWeight={600} sx={{ mb: 0.5 }}>
                                            {member.name}
                                        </Typography>
                                        <Typography variant="body2" color="primary" sx={{ mb: 2 }}>
                                            {member.role}
                                        </Typography>
                                        <Typography variant="body2">
                                            {member.bio}
                                        </Typography>
                                    </CardContent>
                                </TeamMemberCard>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Partners Section */}
            <Box sx={{ py: 8, backgroundColor: '#F5F7FA' }} id="partners">
                <Container maxWidth="xl">
                    <SectionTitle variant="h2">
                        Our Partners
                    </SectionTitle>
                    <Typography variant="body1" sx={{ mb: 4, maxWidth: '800px' }}>
                        Birth Health Network collaborates with leading healthcare organizations, research institutions, and community groups to advance maternal and infant health outcomes.
                    </Typography>
                    <Grid container spacing={3}>
                        {partners.map((partner, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <StyledCard>
                                    <CardContent>
                                        <Box sx={{
                                            height: '100px',
                                            backgroundColor: '#E0E0E0',
                                            borderRadius: '4px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            mb: 2
                                        }}>
                                            <Typography variant="body2" color="text.secondary">
                                                Partner logo
                                            </Typography>
                                        </Box>
                                        <Typography variant="h6" fontWeight={600}>
                                            {partner}
                                        </Typography>
                                    </CardContent>
                                </StyledCard>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* CTA Section */}
            <Box sx={{ py: 8, backgroundColor: '#0066CC', color: 'white' }}>
                <Container maxWidth="md" sx={{ textAlign: 'center' }}>
                    <Typography variant="h3" fontWeight={700} sx={{ mb: 3 }}>
                        Join Our Mission
                    </Typography>
                    <Typography variant="h6" fontWeight={400} sx={{ mb: 4, opacity: 0.9 }}>
                        Whether you're a healthcare provider, researcher, or patient, there are many ways to get involved with Birth Health Network.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            component={RouterLink}
                            to="/contact"
                        >
                            Contact Us
                        </Button>
                        <Button
                            variant="outlined"
                            sx={{ color: 'white', borderColor: 'white' }}
                            size="large"
                            component={RouterLink}
                            to="/careers"
                        >
                            Careers
                        </Button>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default About; 