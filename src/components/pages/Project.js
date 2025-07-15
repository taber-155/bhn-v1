import React, { useState, useEffect } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Button,
    Divider,
    useTheme,
    Paper,
    Chip,
    LinearProgress,
    Fade,
    Zoom,
    Link,
    Slide
} from '@mui/material';
import styled from 'styled-components';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ConstructionIcon from '@mui/icons-material/Construction';
import SecurityIcon from '@mui/icons-material/Security';
import CloudIcon from '@mui/icons-material/Cloud';
import StorageIcon from '@mui/icons-material/Storage';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import LanguageIcon from '@mui/icons-material/Language';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import PersonIcon from '@mui/icons-material/Person';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LaunchIcon from '@mui/icons-material/Launch';
import { motion } from 'framer-motion';

const PageHeader = styled(Box)`
  background: linear-gradient(135deg, #0066CC 0%, #004499 35%, #002266 100%);
  color: white;
  padding: 120px 0 80px;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
      linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.05) 50%, transparent 70%);
    z-index: 1;
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent 0%, #ffffff40 50%, transparent 100%);
  }
`;

const SectionTitle = styled(Typography)`
  position: relative;
  margin-bottom: 40px;
  font-weight: 700;
  font-family: "Open Sans", "Roboto", "Arial", sans-serif;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(135deg, #0066CC 0%, #00843D 100%);
    border-radius: 4px;
  }
`;

const CenteredSectionTitle = styled(Typography)`
  position: relative;
  margin-bottom: 40px;
  font-weight: 700;
  text-align: center;
  font-family: "Open Sans", "Roboto", "Arial", sans-serif;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(135deg, #0066CC 0%, #00843D 100%);
    border-radius: 4px;
  }
`;

const FeatureCard = styled(Card)`
  height: 100%;
  transition: all 0.3s ease;
  border-radius: 16px;
  overflow: hidden;
  border: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0, 102, 204, 0.2);
    
    .feature-icon {
      transform: scale(1.1) rotate(5deg);
    }
  }
`;

const ModuleCard = styled(Card)`
  height: 100%;
  transition: all 0.3s ease;
  border-radius: 16px;
  overflow: hidden;
  border: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  position: relative;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 102, 204, 0.2);
    
    .module-icon {
      background-color: ${props => props.iconcolor};
      color: white;
    }
  }
`;

const IconWrapper = styled(Box)`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: ${props => `${props.bgcolor}20`};
  color: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  transition: all 0.3s ease;
`;

const StyledButton = styled(Button)`
  border-radius: 30px;
  padding: 12px 32px;
  font-weight: 600;
  text-transform: none;
  font-size: 1rem;
  box-shadow: 0 4px 20px rgba(0, 102, 204, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 102, 204, 0.4);
  }
`;

const StatusChip = styled(Chip)`
  font-weight: 600;
  padding: 4px 0;
  
  &.completed {
    background-color: #4caf5020;
    color: #4caf50;
    border: 1px solid #4caf5050;
  }
  
  &.in-progress {
    background-color: #ff980020;
    color: #ff9800;
    border: 1px solid #ff980050;
  }
`;

const GradientBox = styled(Box)`
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
  border-radius: 16px;
  padding: 40px;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #0066CC, #4d9fff);
  }
`;

const EnhancedCard = styled(Card)`
  border-radius: 20px;
  border: 1px solid rgba(0, 102, 204, 0.1);
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 60px rgba(0, 102, 204, 0.15);
    border-color: rgba(0, 102, 204, 0.2);
  }
`;

const ArchitectureContainer = styled(Box)`
  background: linear-gradient(135deg, #f8fafc 0%, #e3f2fd 100%);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(0, 102, 204, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(0, 132, 61, 0.05) 0%, transparent 50%);
    z-index: 1;
  }
`;

// Constants for static data
const EXTERNAL_LINKS = {
    CANADA_HEALTH_INFOWAY: 'https://www.infoway-inforoute.ca/',
    PIPEDA: 'https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/',
    AWS_CANADA: 'https://aws.amazon.com/canada/',
    AWS_COGNITO: 'https://aws.amazon.com/cognito/',
    AWS_S3: 'https://aws.amazon.com/s3/',
    AWS_KMS: 'https://aws.amazon.com/kms/',
    AWS_CLOUDTRAIL: 'https://aws.amazon.com/cloudtrail/',
    HL7_FHIR: 'https://www.hl7.org/fhir/',
    CIHI: 'https://www.cihi.ca/en/national-health-expenditure-trends'
};

// Reusable FeatureCard component
const ReusableFeatureCard = ({ title, description, icon, gradient, features, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay }}
        viewport={{ once: true }}
    >
        <FeatureCard>
            <CardContent sx={{ p: 4 }}>
                <Box
                    sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '20px',
                        background: gradient,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 3,
                        color: 'white',
                        fontSize: '2rem',
                    }}
                >
                    {icon}
                </Box>
                <Typography variant="h6" fontWeight={700} sx={{ mb: 2, textAlign: 'center' }}>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                    {description}
                </Typography>
                <Box>
                    {features.map((item, itemIndex) => (
                        <Box key={itemIndex} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                            <CheckCircleIcon sx={{ color: '#0066CC', fontSize: 16 }} />
                            <Typography variant="caption" color="text.secondary">
                                {item}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </CardContent>
        </FeatureCard>
    </motion.div>
);

// Reusable ModuleCard component
const ReusableModuleCard = ({ title, description, icon, color, delay = 0 }) => (
    <Fade in={true} style={{ transitionDelay: `${300 + delay}ms` }}>
        <ModuleCard iconcolor={color}>
            <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        bgcolor: `${color}20`,
                        color: color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 2,
                        transition: 'all 0.3s ease'
                    }} className="module-icon">
                        {icon}
                    </Box>
                    <Typography variant="h6" fontWeight={600}>
                        {title}
                    </Typography>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </ModuleCard>
    </Fade>
);

const Project = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    // Project objectives
    const projectObjectives = [
        {
            title: "Unique Birth Healthcare Number",
            description: "Develop a digital system that assigns a unique Birth Healthcare Number at birth.",
            icon: <LocalHospitalIcon sx={{ fontSize: 40 }} />,
            color: "#3498db"
        },
        {
            title: "Seamless Integration",
            description: "Enable seamless integration with hospitals, health departments, and ID agencies.",
            icon: <IntegrationInstructionsIcon sx={{ fontSize: 40 }} />,
            color: "#2ecc71"
        },
        {
            title: "Parent Access",
            description: "Provide parents access to view, verify, and download birth registration documents.",
            icon: <FamilyRestroomIcon sx={{ fontSize: 40 }} />,
            color: "#e74c3c"
        },
        {
            title: "Data Security & Availability",
            description: "Ensure high data security, auditability, and cloud availability.",
            icon: <SecurityIcon sx={{ fontSize: 40 }} />,
            color: "#f39c12"
        }
    ];

    // Architecture components
    const architectureComponents = [
        {
            title: "Frontend",
            description: "React-based web app for users (hospitals, admins, parents).",
            icon: <DeveloperModeIcon className="module-icon" />,
            color: "#3498db"
        },
        {
            title: "Backend",
            description: "Node.js/Express REST APIs connected to SQL database.",
            icon: <IntegrationInstructionsIcon className="module-icon" />,
            color: "#2ecc71"
        },
        {
            title: "Database",
            description: "MySQL/PostgreSQL with normalized schema for birth records.",
            icon: <StorageIcon className="module-icon" />,
            color: "#e74c3c"
        },
        {
            title: "Cloud",
            description: "AWS EC2 for app hosting, RDS for database, and S3 for document storage.",
            icon: <CloudIcon className="module-icon" />,
            color: "#f39c12"
        }
    ];

    // Core modules
    const coreModules = [
        {
            title: "Hospital Interface",
            features: [
                "Register birth details",
                "Upload supporting documents",
                "Submit to admin for approval"
            ],
            icon: <LocalHospitalIcon />,
            color: "#3498db"
        },
        {
            title: "Admin Dashboard",
            features: [
                "Review & approve registrations",
                "Generate BHN",
                "Manage hospitals and users"
            ],
            icon: <AdminPanelSettingsIcon />,
            color: "#e74c3c"
        }
    ];

    // Security features
    const securityFeatures = [
        "Role-based access control (Admin, Hospital Staff, Parent)",
        "Encrypted document upload",
        "Audit logs for every transaction",
        "OTP/email verification for parent access"
    ];

    // Project status (as of July 2025)
    const projectStatus = [
        { name: "AWS Infrastructure Setup", completed: true },
        { name: "Database Schema Design", completed: true },
        { name: "Frontend MVP Development", completed: true },
        { name: "Security Architecture Design", completed: true },
        { name: "PIPEDA Compliance Review", completed: true },
        { name: "HL7 FHIR Integration Planning", completed: true },
        { name: "Provincial Stakeholder Engagement", completed: false },
        { name: "Production Deployment Readiness", completed: false }
    ];

    // Future improvements and roadmap
    const futureImprovements = [
        {
            title: "Multi-Language Support",
            description: "French and Indigenous language localization for national accessibility",
            icon: <LanguageIcon />,
            color: "#9b59b6"
        },
        {
            title: "Federal ID Integration",
            description: "Integration with SIN, passport, and health card issuance systems",
            icon: <IntegrationInstructionsIcon />,
            color: "#3498db"
        },
        {
            title: "Mobile Application",
            description: "Native iOS and Android apps for healthcare providers and patients",
            icon: <DeveloperModeIcon />,
            color: "#2ecc71"
        },
        {
            title: "AI-Powered Validation",
            description: "Machine learning for document authenticity and fraud detection",
            icon: <SmartToyIcon />,
            color: "#e74c3c"
        }
    ];

    return (
        <Box>
            {/* Enhanced Page Header */}
            <Box sx={{
                background: 'linear-gradient(135deg, #0066CC 0%, #004499 30%, #002266 100%)',
                color: 'white',
                padding: { xs: '80px 0 50px', md: '120px 0 80px' },
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Cpath d="M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat',
                    opacity: 0.1,
                    zIndex: 0
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '100px',
                    background: 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.1) 100%)',
                    pointerEvents: 'none',
                    zIndex: 1
                }
            }}>
                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
                    <Box sx={{ textAlign: 'center', maxWidth: '1000px', mx: 'auto' }}>
                        <Fade in={animate} timeout={1000}>
                            <Typography
                                variant="h1"
                                sx={{
                                    mb: 4,
                                    fontWeight: 800,
                                    fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4.5rem' },
                                    fontFamily: '"Open Sans", "Roboto", "Arial", sans-serif',
                                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                                    lineHeight: 1.1,
                                    background: 'linear-gradient(135deg, #ffffff 0%, #f0f8ff 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                }}
                            >
                                Birth Healthcare Number (BHN) System
                            </Typography>
                        </Fade>

                        <Fade in={animate} timeout={1500}>
                            <Typography
                                variant="h5"
                                sx={{
                                    maxWidth: '900px',
                                    mx: 'auto',
                                    fontWeight: 400,
                                    opacity: 0.95,
                                    mb: 4,
                                    fontSize: { xs: '1.2rem', md: '1.4rem' },
                                    lineHeight: 1.6,
                                    fontFamily: '"Open Sans", "Roboto", "Arial", sans-serif',
                                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
                                }}
                            >
                                Revolutionary AWS-based digital identity system addressing Canada's estimated potential healthcare
                                waste of $2.1B annually through secure unique identifiers and{' '}
                                <Link
                                    href={EXTERNAL_LINKS.PIPEDA}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        color: '#FFD100',
                                        textDecoration: 'underline',
                                        fontWeight: 600,
                                        '&:hover': { color: '#FFF200' }
                                    }}
                                    aria-label="Learn more about PIPEDA compliance"
                                >
                                    PIPEDA-compliant
                                </Link>{' '}
                                architecture
                            </Typography>
                        </Fade>

                        <Fade in={animate} timeout={2000}>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 3,
                                mb: 4
                            }}>
                                <Box sx={{
                                    width: 80,
                                    height: 2,
                                    background: 'linear-gradient(90deg, transparent, white, transparent)',
                                    borderRadius: 1
                                }} />
                                <Typography variant="body1" sx={{
                                    fontWeight: 600,
                                    fontSize: '1.1rem',
                                    opacity: 0.9,
                                    whiteSpace: 'nowrap'
                                }}>
                                    Secure • Scalable • Compliant
                                </Typography>
                                <Box sx={{
                                    width: 80,
                                    height: 2,
                                    background: 'linear-gradient(90deg, transparent, white, transparent)',
                                    borderRadius: 1
                                }} />
                            </Box>
                        </Fade>

                        <Fade in={animate} timeout={2500}>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                flexWrap: 'wrap',
                                gap: 2,
                                mb: 6
                            }}>
                                <Chip
                                    label="PIPEDA Compliant"
                                    component="a"
                                    href={EXTERNAL_LINKS.PIPEDA}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    clickable
                                    sx={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                        color: 'white',
                                        fontWeight: 600,
                                        fontSize: '0.9rem',
                                        textDecoration: 'none',
                                        border: '1px solid rgba(255, 255, 255, 0.3)',
                                        '&:hover': {
                                            backgroundColor: 'rgba(255, 255, 255, 0.25)',
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                                        },
                                        transition: 'all 0.3s ease'
                                    }}
                                    aria-label="Learn about PIPEDA compliance"
                                />
                                <Chip
                                    label="AWS Canada"
                                    component="a"
                                    href={EXTERNAL_LINKS.AWS_CANADA}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    clickable
                                    sx={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                        color: 'white',
                                        fontWeight: 600,
                                        fontSize: '0.9rem',
                                        textDecoration: 'none',
                                        border: '1px solid rgba(255, 255, 255, 0.3)',
                                        '&:hover': {
                                            backgroundColor: 'rgba(255, 255, 255, 0.25)',
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                                        },
                                        transition: 'all 0.3s ease'
                                    }}
                                    aria-label="Learn about AWS Canada"
                                />
                                <Chip
                                    label="AES-256 Encrypted"
                                    sx={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                        color: 'white',
                                        fontWeight: 600,
                                        fontSize: '0.9rem',
                                        border: '1px solid rgba(255, 255, 255, 0.3)',
                                        '&:hover': {
                                            backgroundColor: 'rgba(255, 255, 255, 0.25)',
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                                        },
                                        transition: 'all 0.3s ease'
                                    }}
                                />
                                <Chip
                                    label="Pan-Canadian"
                                    sx={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                        color: 'white',
                                        fontWeight: 600,
                                        fontSize: '0.9rem',
                                        border: '1px solid rgba(255, 255, 255, 0.3)',
                                        '&:hover': {
                                            backgroundColor: 'rgba(255, 255, 255, 0.25)',
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                                        },
                                        transition: 'all 0.3s ease'
                                    }}
                                />
                            </Box>
                        </Fade>

                        <Fade in={animate} timeout={3000}>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: 3,
                                flexWrap: 'wrap'
                            }}>
                                <Typography variant="body2" sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    opacity: 0.8,
                                    fontSize: '1rem'
                                }}>
                                    <HealthAndSafetyIcon sx={{ fontSize: 20 }} />
                                    Healthcare Innovation
                                </Typography>
                                <Typography variant="body2" sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    opacity: 0.8,
                                    fontSize: '1rem'
                                }}>
                                    <SecurityIcon sx={{ fontSize: 20 }} />
                                    Security First
                                </Typography>
                                <Typography variant="body2" sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    opacity: 0.8,
                                    fontSize: '1rem'
                                }}>
                                    <TrendingUpIcon sx={{ fontSize: 20 }} />
                                    Scalable Solution
                                </Typography>
                            </Box>
                        </Fade>
                    </Box>
                </Container>
            </Box>
            <Fade in={animate} timeout={2000}>
                <Box>
                    <StyledButton
                        variant="contained"
                        color="secondary"
                        endIcon={<ArrowForwardIcon />}
                        sx={{ mr: 2 }}
                    >
                        View Demo
                    </StyledButton>
                    <StyledButton
                        variant="outlined"
                        sx={{ color: 'white', borderColor: 'white' }}
                    >
                        Technical Documentation
                    </StyledButton>
                </Box>
            </Fade>

            {/* BHN System Statistics */}
            <Box sx={{ py: 8, backgroundColor: '#F8FAFC' }}>
                <Container maxWidth="xl">
                    <Typography variant="h4" align="center" fontWeight={700} sx={{ mb: 6 }}>
                        System Impact Metrics
                    </Typography>
                    <Grid container spacing={4}>
                        {[
                            { number: "$2.1B", label: "Estimated potential savings", description: "Annual waste reduction from system integration (internal projection)" },
                            { number: "13", label: "Provincial systems", description: "Healthcare systems across Canada to be connected" },
                            { number: "99.9%", label: "AWS uptime SLA", description: "Enterprise-grade infrastructure reliability" },
                            { number: "<2s", label: "Record retrieval", description: "Target response time for emergency access" }
                        ].map((stat, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Zoom in={animate} style={{ transitionDelay: `${index * 100}ms` }}>
                                    <Box sx={{ textAlign: 'center', p: 3 }}>
                                        <Typography variant="h2" fontWeight={800} sx={{ color: '#0066CC', mb: 1 }}>
                                            {stat.number}
                                        </Typography>
                                        <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                                            {stat.label}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {stat.description}
                                        </Typography>
                                    </Box>
                                </Zoom>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box >

            {/* AWS Architecture Section */}
            <ArchitectureContainer sx={{ py: 12 }}>
                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Fade in={animate} timeout={1000}>
                            <Typography
                                variant="h3"
                                fontWeight={800}
                                sx={{
                                    mb: 3,
                                    fontFamily: '"Open Sans", "Roboto", "Arial", sans-serif',
                                    background: 'linear-gradient(135deg, #0066CC 0%, #00843D 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' }
                                }}
                            >
                                BHN System Architecture
                            </Typography>
                        </Fade>
                        <Fade in={animate} timeout={1500}>
                            <Typography
                                variant="h6"
                                sx={{
                                    opacity: 0.8,
                                    maxWidth: '800px',
                                    mx: 'auto',
                                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                                    fontFamily: '"Open Sans", "Roboto", "Arial", sans-serif'
                                }}
                            >
                                Enterprise-grade AWS infrastructure connecting provincial healthcare systems
                                across Canada with military-level security and 99.9% uptime guarantee
                            </Typography>
                        </Fade>
                    </Box>

                    {/* Centered Architecture Diagram */}
                    <Fade in={animate} timeout={2000}>
                        <Box
                            sx={{
                                position: 'relative',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                                boxShadow: '0 30px 80px rgba(0, 102, 204, 0.15)',
                                border: '2px solid rgba(0, 102, 204, 0.1)',
                                p: 6,
                                textAlign: 'center',
                                maxWidth: '900px',
                                mx: 'auto',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: '0 40px 100px rgba(0, 102, 204, 0.2)',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                                }
                            }}
                        >
                            {/* Visual representation */}
                            <Box sx={{ position: 'relative', height: 450, mb: 4 }}>
                                {/* AWS Cloud */}
                                <Slide direction="down" in={animate} timeout={2500}>
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: 30,
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            width: 280,
                                            height: 70,
                                            background: 'linear-gradient(135deg, #FF9900 0%, #FFA500 100%)',
                                            borderRadius: '35px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white',
                                            fontWeight: 800,
                                            fontSize: '16px',
                                            boxShadow: '0 8px 32px rgba(255, 153, 0, 0.4)',
                                            fontFamily: '"Open Sans", "Roboto", "Arial", sans-serif'
                                        }}
                                    >
                                        <CloudIcon sx={{ mr: 1.5, fontSize: 28 }} />
                                        AWS Canada (Central)
                                    </Box>
                                </Slide>

                                {/* BHN Core */}
                                <Zoom in={animate} style={{ transitionDelay: '3000ms' }}>
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: 140,
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            width: 180,
                                            height: 180,
                                            background: 'linear-gradient(135deg, #0066CC 0%, #00843D 100%)',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white',
                                            fontWeight: 800,
                                            fontSize: '14px',
                                            boxShadow: '0 12px 48px rgba(0, 102, 204, 0.4)',
                                            border: '3px solid rgba(255, 255, 255, 0.2)',
                                            fontFamily: '"Open Sans", "Roboto", "Arial", sans-serif'
                                        }}
                                    >
                                        <SecurityIcon sx={{ fontSize: 42, mb: 1 }} />
                                        <Typography variant="body1" fontWeight={800} sx={{ color: 'white' }}>
                                            BHN Core System
                                        </Typography>
                                        <Typography variant="caption" sx={{ color: 'white', opacity: 0.9, mt: 0.5 }}>
                                            Cognito + Lambda + RDS
                                        </Typography>
                                    </Box>
                                </Zoom>

                                {/* Provincial Systems */}
                                {[
                                    { name: 'ON', label: 'Ontario Health', x: 50, y: 220, color: '#4CAF50', delay: 3500 },
                                    { name: 'BC', label: 'BC Health', x: 500, y: 220, color: '#2196F3', delay: 3700 },
                                    { name: 'AB', label: 'AHS', x: 120, y: 350, color: '#FF5722', delay: 3900 },
                                    { name: 'QC', label: 'RAMQ', x: 430, y: 350, color: '#9C27B0', delay: 4100 }
                                ].map((province, index) => (
                                    <Slide key={province.name} direction="up" in={animate} style={{ transitionDelay: `${province.delay}ms` }}>
                                        <Box>
                                            <Box
                                                sx={{
                                                    position: 'absolute',
                                                    top: province.y,
                                                    left: province.x,
                                                    width: 80,
                                                    height: 80,
                                                    background: `linear-gradient(135deg, ${province.color} 0%, ${province.color}DD 100%)`,
                                                    borderRadius: '16px',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: 'white',
                                                    fontWeight: 800,
                                                    fontSize: '16px',
                                                    boxShadow: `0 8px 32px ${province.color}40`,
                                                    border: '2px solid rgba(255, 255, 255, 0.3)',
                                                    fontFamily: '"Open Sans", "Roboto", "Arial", sans-serif'
                                                }}
                                            >
                                                <Typography variant="h6" fontWeight={800}>
                                                    {province.name}
                                                </Typography>
                                            </Box>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    position: 'absolute',
                                                    top: province.y + 90,
                                                    left: province.x - 15,
                                                    width: 110,
                                                    textAlign: 'center',
                                                    color: 'text.secondary',
                                                    fontSize: '12px',
                                                    fontWeight: 600,
                                                    fontFamily: '"Open Sans", "Roboto", "Arial", sans-serif'
                                                }}
                                            >
                                                {province.label}
                                            </Typography>
                                        </Box>
                                    </Slide>
                                ))}

                                {/* Enhanced Connection lines */}
                                <svg
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        pointerEvents: 'none'
                                    }}
                                >
                                    <defs>
                                        <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#0066CC" stopOpacity="0.8" />
                                            <stop offset="100%" stopColor="#00843D" stopOpacity="0.8" />
                                        </linearGradient>
                                        <filter id="glow">
                                            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                            <feMerge>
                                                <feMergeNode in="coloredBlur" />
                                                <feMergeNode in="SourceGraphic" />
                                            </feMerge>
                                        </filter>
                                    </defs>
                                    <line x1="290" y1="230" x2="90" y2="260" stroke="url(#connectionGradient)" strokeWidth="4" strokeDasharray="12,6" filter="url(#glow)" />
                                    <line x1="290" y1="230" x2="540" y2="260" stroke="url(#connectionGradient)" strokeWidth="4" strokeDasharray="12,6" filter="url(#glow)" />
                                    <line x1="290" y1="230" x2="160" y2="390" stroke="url(#connectionGradient)" strokeWidth="4" strokeDasharray="12,6" filter="url(#glow)" />
                                    <line x1="290" y1="230" x2="470" y2="390" stroke="url(#connectionGradient)" strokeWidth="4" strokeDasharray="12,6" filter="url(#glow)" />
                                </svg>
                            </Box>

                            <Typography
                                variant="body1"
                                color="text.secondary"
                                sx={{
                                    mb: 4,
                                    fontSize: '1.1rem',
                                    fontFamily: '"Open Sans", "Roboto", "Arial", sans-serif'
                                }}
                            >
                                Secure, decentralized architecture connecting all provincial healthcare systems
                                through enterprise-grade AWS infrastructure with real-time synchronization
                            </Typography>

                            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
                                <Chip
                                    label="PIPEDA Compliant"
                                    size="medium"
                                    sx={{
                                        backgroundColor: '#0066CC15',
                                        color: '#0066CC',
                                        fontWeight: 600,
                                        fontSize: '0.9rem',
                                        px: 2,
                                        py: 0.5
                                    }}
                                />
                                <Chip
                                    label="SOC 2 Type II"
                                    size="medium"
                                    sx={{
                                        backgroundColor: '#00843D15',
                                        color: '#00843D',
                                        fontWeight: 600,
                                        fontSize: '0.9rem',
                                        px: 2,
                                        py: 0.5
                                    }}
                                />
                                <Chip
                                    label="Real-time Sync"
                                    size="medium"
                                    sx={{
                                        backgroundColor: '#FF990015',
                                        color: '#FF9900',
                                        fontWeight: 600,
                                        fontSize: '0.9rem',
                                        px: 2,
                                        py: 0.5
                                    }}
                                />
                            </Box>
                        </Box>
                    </Fade>

                    {/* AWS Services Grid */}
                    <Box sx={{ mt: 10 }}>
                        <Typography
                            variant="h5"
                            fontWeight={700}
                            align="center"
                            sx={{
                                mb: 6,
                                fontFamily: '"Open Sans", "Roboto", "Arial", sans-serif'
                            }}
                        >
                            Powered by Enterprise AWS Services
                        </Typography>
                        <Grid container spacing={4} justifyContent="center">
                            {[
                                {
                                    title: "AWS Cognito + RBAC",
                                    description: "Secure OTP-based authentication with Role-Based Access Control and SAML 2.0 integration",
                                    icon: <SecurityIcon />,
                                    link: EXTERNAL_LINKS.AWS_COGNITO,
                                    color: "#FF6B35"
                                },
                                {
                                    title: "S3/KMS Encryption",
                                    description: "AES-256 encrypted document storage with AWS Key Management Service for maximum security",
                                    icon: <CloudIcon />,
                                    link: EXTERNAL_LINKS.AWS_S3,
                                    color: "#0066CC"
                                },
                                {
                                    title: "CloudTrail Auditing",
                                    description: "Complete audit trail of all system access for compliance and security monitoring",
                                    icon: <AdminPanelSettingsIcon />,
                                    link: EXTERNAL_LINKS.AWS_CLOUDTRAIL,
                                    color: "#00843D"
                                }
                            ].map((service, index) => (
                                <Grid item xs={12} md={4} key={index}>
                                    <Zoom in={animate} style={{ transitionDelay: `${5000 + index * 200}ms` }}>
                                        <EnhancedCard
                                            sx={{
                                                height: '100%',
                                                p: 3,
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    '& .service-icon': {
                                                        color: service.color,
                                                        transform: 'scale(1.1) rotate(5deg)'
                                                    }
                                                }
                                            }}
                                            onClick={() => window.open(service.link, '_blank')}
                                        >
                                            <Box sx={{ textAlign: 'center', mb: 2 }}>
                                                <Box
                                                    className="service-icon"
                                                    sx={{
                                                        fontSize: 48,
                                                        color: 'text.secondary',
                                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                                        display: 'inline-block'
                                                    }}
                                                >
                                                    {service.icon}
                                                </Box>
                                            </Box>
                                            <Typography
                                                variant="h6"
                                                fontWeight={700}
                                                align="center"
                                                sx={{
                                                    mb: 2,
                                                    fontFamily: '"Open Sans", "Roboto", "Arial", sans-serif'
                                                }}
                                            >
                                                {service.title}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                align="center"
                                                sx={{
                                                    lineHeight: 1.6,
                                                    fontFamily: '"Open Sans", "Roboto", "Arial", sans-serif'
                                                }}
                                            >
                                                {service.description}
                                            </Typography>
                                        </EnhancedCard>
                                    </Zoom>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Container>
            </ArchitectureContainer>

            {/* Problem Statement */}
            < Box sx={{ py: 8 }}>
                <Container maxWidth="xl">
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Zoom in={animate} style={{ transitionDelay: '300ms' }}>
                                <Box>
                                    <SectionTitle variant="h4">
                                        Problem Statement
                                    </SectionTitle>
                                    <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
                                        Canada's healthcare system faces an estimated potential $2.1B in annual waste due to fragmented
                                        provincial systems that cannot effectively share patient information, leading to
                                        redundant testing, delayed care, and compromised patient safety. According to{' '}
                                        <Link
                                            href={EXTERNAL_LINKS.CIHI}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{ color: '#0066CC', fontWeight: 600 }}
                                            aria-label="View CIHI healthcare expenditure data"
                                        >
                                            CIHI
                                        </Link>, healthcare inefficiencies continue to burden the system.
                                    </Typography>
                                    <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
                                        <strong>The BHN system addresses this by creating a unified digital identity framework
                                            that connects all provincial healthcare systems while maintaining security and privacy compliance.
                                            This proposed initiative aims to build on existing{' '}
                                            <Link
                                                href={EXTERNAL_LINKS.CANADA_HEALTH_INFOWAY}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={{ color: '#0066CC', fontWeight: 600 }}
                                                aria-label="Learn about digital health initiatives"
                                            >
                                                digital health initiatives
                                            </Link>{' '}
                                            across Canada.</strong>
                                    </Typography>
                                </Box>
                            </Zoom>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Zoom in={animate} style={{ transitionDelay: '500ms' }}>
                                <GradientBox>
                                    <Typography variant="h6" fontWeight={600} gutterBottom color="primary">
                                        Key Challenges Addressed
                                    </Typography>
                                    <Grid container spacing={2} sx={{ mt: 1 }}>
                                        {[
                                            "Healthcare fragmentation across 13 provincial systems",
                                            "Lack of interoperable patient identifiers",
                                            "Redundant testing and procedures ($2.1B waste)",
                                            "Emergency care delays due to inaccessible records",
                                            "Privacy compliance across jurisdictions",
                                            "Provider workflow inefficiencies"
                                        ].map((challenge, index) => (
                                            <Grid item xs={12} key={index}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                    <CheckCircleOutlineIcon sx={{ color: '#0066CC', fontSize: 20 }} />
                                                    <Typography variant="body2" sx={{ fontSize: '0.95rem' }}>
                                                        {challenge}
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </GradientBox>
                            </Zoom>
                        </Grid>
                    </Grid>
                </Container>
            </Box >

            {/* BHN System Features */}
            <Box sx={{ py: 12, backgroundColor: '#F8FAFC' }}>
                <Container maxWidth="xl">
                    <CenteredSectionTitle variant="h3" sx={{
                        fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                        mb: 3
                    }}>
                        BHN System Features
                    </CenteredSectionTitle>
                    <Typography
                        variant="h6"
                        sx={{
                            textAlign: 'center',
                            mb: 10,
                            opacity: 0.8,
                            maxWidth: '900px',
                            mx: 'auto',
                            fontSize: { xs: '1.1rem', md: '1.3rem' },
                            fontFamily: '"Open Sans", "Roboto", "Arial", sans-serif',
                            lineHeight: 1.6
                        }}
                    >
                        Comprehensive digital identity system connecting healthcare records across Canada's fragmented provincial systems.
                        Built with{' '}
                        <Link
                            href={EXTERNAL_LINKS.HL7_FHIR}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: '#0066CC', fontWeight: 600 }}
                            aria-label="Learn about HL7 FHIR standards"
                        >
                            HL7 FHIR
                        </Link>{' '}
                        compliance for seamless interoperability.
                    </Typography>

                    <Grid container spacing={4}>
                        {[
                            {
                                title: 'Unique Healthcare ID',
                                description: 'Every patient receives a unique BHN identifier connecting all their healthcare records across provinces.',
                                icon: <PersonIcon />,
                                gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                features: [
                                    'Lifetime unique identifier',
                                    'Cross-provincial recognition',
                                    'Emergency access protocols',
                                    'Privacy-first design'
                                ],
                                color: '#667eea'
                            },
                            {
                                title: 'AWS Cognito Authentication',
                                description: 'Enterprise-grade security with OTP-based login, RBAC, and SAML 2.0 integration for healthcare providers.',
                                icon: <SecurityIcon />,
                                gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                                features: [
                                    'Multi-factor authentication',
                                    'Role-based access control',
                                    'SAML 2.0 integration',
                                    'Session management'
                                ],
                                color: '#f093fb'
                            },
                            {
                                title: 'Provincial EMR Integration',
                                description: 'Seamlessly connects with existing Electronic Medical Records across all Canadian provinces and territories using industry-standard protocols.',
                                icon: <ConnectWithoutContactIcon />,
                                gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                                features: [
                                    'HL7 FHIR compliance for interoperability',
                                    'Real-time bi-directional synchronization',
                                    'Legacy system integration support',
                                    'RESTful API-first architecture'
                                ],
                                color: '#4facfe'
                            },
                            {
                                title: 'Emergency Access Protocol',
                                description: 'Critical health information accessible to emergency responders when every second counts.',
                                icon: <AccessTimeFilledIcon />,
                                gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                                features: [
                                    'Break-glass access',
                                    'Critical info prioritization',
                                    'Audit trail logging',
                                    '24/7 availability'
                                ],
                                color: '#43e97b'
                            }
                        ].map((feature, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <Zoom in={animate} style={{ transitionDelay: `${1000 + index * 200}ms` }}>
                                    <EnhancedCard
                                        sx={{
                                            height: '100%',
                                            p: 4,
                                            position: 'relative',
                                            overflow: 'hidden',
                                            '&:before': {
                                                content: '""',
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                height: '4px',
                                                background: feature.gradient,
                                                zIndex: 1
                                            },
                                            '&:hover': {
                                                '& .feature-icon': {
                                                    color: feature.color,
                                                    transform: 'scale(1.1) rotate(5deg)'
                                                }
                                            }
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3, mb: 3 }}>
                                            <Box
                                                className="feature-icon"
                                                sx={{
                                                    width: 64,
                                                    height: 64,
                                                    borderRadius: '16px',
                                                    background: `${feature.color}15`,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: 'text.secondary',
                                                    flexShrink: 0,
                                                    fontSize: 32,
                                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                                                }}
                                            >
                                                {feature.icon}
                                            </Box>
                                            <Box sx={{ flex: 1 }}>
                                                <Typography
                                                    variant="h5"
                                                    fontWeight={700}
                                                    sx={{
                                                        mb: 2,
                                                        fontFamily: '"Open Sans", "Roboto", "Arial", sans-serif'
                                                    }}
                                                >
                                                    {feature.title}
                                                </Typography>
                                                <Typography
                                                    variant="body1"
                                                    color="text.secondary"
                                                    sx={{
                                                        mb: 3,
                                                        lineHeight: 1.6,
                                                        fontFamily: '"Open Sans", "Roboto", "Arial", sans-serif'
                                                    }}
                                                >
                                                    {feature.description}
                                                </Typography>
                                            </Box>
                                        </Box>

                                        <Box>
                                            {feature.features.map((item, idx) => (
                                                <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                                    <CheckCircleIcon
                                                        sx={{
                                                            fontSize: 20,
                                                            color: feature.color,
                                                            mr: 2,
                                                            flexShrink: 0
                                                        }}
                                                    />
                                                    <Typography
                                                        variant="body2"
                                                        sx={{
                                                            fontFamily: '"Open Sans", "Roboto", "Arial", sans-serif',
                                                            fontWeight: 500
                                                        }}
                                                    >
                                                        {item}
                                                    </Typography>
                                                </Box>
                                            ))}
                                        </Box>
                                    </EnhancedCard>
                                </Zoom>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Project Objectives */}
            <Box sx={{ py: 12, bgcolor: '#F5F7FA' }}>
                <Container maxWidth="xl">
                    <CenteredSectionTitle variant="h3" sx={{
                        fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                        mb: 3
                    }}>
                        Project Objectives
                    </CenteredSectionTitle>
                    <Typography
                        variant="h6"
                        sx={{
                            textAlign: 'center',
                            mb: 10,
                            opacity: 0.8,
                            maxWidth: '900px',
                            mx: 'auto',
                            fontSize: { xs: '1.1rem', md: '1.3rem' },
                            fontFamily: '"Open Sans", "Roboto", "Arial", sans-serif',
                            lineHeight: 1.6
                        }}
                    >
                        Transforming Canadian healthcare through unified digital identity and seamless provincial integration
                    </Typography>

                    <Grid container spacing={4}>
                        {projectObjectives.map((objective, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <Zoom in={animate} style={{ transitionDelay: `${500 + index * 150}ms` }}>
                                    <EnhancedCard
                                        sx={{
                                            height: '100%',
                                            p: 4,
                                            position: 'relative',
                                            overflow: 'hidden',
                                            '&:before': {
                                                content: '""',
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                height: '4px',
                                                background: `linear-gradient(135deg, ${objective.color} 0%, ${objective.color}DD 100%)`,
                                                zIndex: 1
                                            },
                                            '&:hover': {
                                                '& .objective-icon': {
                                                    color: objective.color,
                                                    transform: 'scale(1.1) rotate(5deg)'
                                                }
                                            }
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                                            <Box
                                                className="objective-icon"
                                                sx={{
                                                    width: 70,
                                                    height: 70,
                                                    borderRadius: '18px',
                                                    background: `${objective.color}15`,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: 'text.secondary',
                                                    flexShrink: 0,
                                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                                                }}
                                            >
                                                {objective.icon}
                                            </Box>
                                            <Box sx={{ flex: 1 }}>
                                                <Typography
                                                    variant="h5"
                                                    fontWeight={700}
                                                    sx={{
                                                        mb: 2,
                                                        fontFamily: '"Open Sans", "Roboto", "Arial", sans-serif'
                                                    }}
                                                >
                                                    {objective.title}
                                                </Typography>
                                                <Typography
                                                    variant="body1"
                                                    color="text.secondary"
                                                    sx={{
                                                        lineHeight: 1.7,
                                                        fontFamily: '"Open Sans", "Roboto", "Arial", sans-serif'
                                                    }}
                                                >
                                                    {objective.description}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </EnhancedCard>
                                </Zoom>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Architecture Overview */}
            < Box sx={{ py: 8 }}>
                <Container maxWidth="xl">
                    <SectionTitle variant="h4">
                        Architecture Overview
                    </SectionTitle>

                    <Grid container spacing={4}>
                        {architectureComponents.map((component, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <ReusableModuleCard
                                    title={component.title}
                                    description={component.description}
                                    icon={component.icon}
                                    color={component.color}
                                    delay={index * 150}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box >

            {/* Core Modules */}
            <Box sx={{ py: 12, bgcolor: '#F5F7FA' }}>
                <Container maxWidth="xl">
                    <CenteredSectionTitle variant="h3" sx={{
                        fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                        mb: 3
                    }}>
                        Core System Modules
                    </CenteredSectionTitle>
                    <Typography
                        variant="h6"
                        sx={{
                            textAlign: 'center',
                            mb: 10,
                            opacity: 0.8,
                            maxWidth: '900px',
                            mx: 'auto',
                            fontSize: { xs: '1.1rem', md: '1.3rem' },
                            fontFamily: '"Open Sans", "Roboto", "Arial", sans-serif',
                            lineHeight: 1.6
                        }}
                    >
                        Specialized interfaces designed for different user roles in the healthcare ecosystem
                    </Typography>

                    <Grid container spacing={6} justifyContent="center">
                        {coreModules.map((module, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <Zoom in={animate} style={{ transitionDelay: `${1000 + index * 300}ms` }}>
                                    <EnhancedCard
                                        sx={{
                                            height: '100%',
                                            p: 5,
                                            position: 'relative',
                                            overflow: 'hidden',
                                            background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)',
                                            '&:before': {
                                                content: '""',
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                height: '5px',
                                                background: `linear-gradient(135deg, ${module.color} 0%, ${module.color}DD 100%)`,
                                                zIndex: 1
                                            },
                                            '&:hover': {
                                                '& .module-icon': {
                                                    color: module.color,
                                                    transform: 'scale(1.1) rotate(5deg)'
                                                }
                                            }
                                        }}
                                    >
                                        <Box sx={{ textAlign: 'center', mb: 4 }}>
                                            <Box
                                                className="module-icon"
                                                sx={{
                                                    width: 80,
                                                    height: 80,
                                                    borderRadius: '20px',
                                                    background: `${module.color}15`,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: 'text.secondary',
                                                    fontSize: 40,
                                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                                    mx: 'auto',
                                                    mb: 3
                                                }}
                                            >
                                                {module.icon}
                                            </Box>
                                            <Typography
                                                variant="h4"
                                                fontWeight={700}
                                                sx={{
                                                    mb: 2,
                                                    fontFamily: '"Open Sans", "Roboto", "Arial", sans-serif',
                                                    fontSize: { xs: '1.5rem', md: '1.8rem' }
                                                }}
                                            >
                                                {module.title}
                                            </Typography>
                                        </Box>

                                        <Box>
                                            {module.features.map((feature, idx) => (
                                                <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 2.5 }}>
                                                    <CheckCircleIcon
                                                        sx={{
                                                            fontSize: 24,
                                                            color: module.color,
                                                            mr: 3,
                                                            flexShrink: 0
                                                        }}
                                                    />
                                                    <Typography
                                                        variant="body1"
                                                        sx={{
                                                            fontFamily: '"Open Sans", "Roboto", "Arial", sans-serif',
                                                            fontWeight: 500,
                                                            fontSize: '1.1rem'
                                                        }}
                                                    >
                                                        {feature}
                                                    </Typography>
                                                </Box>
                                            ))}
                                        </Box>
                                    </EnhancedCard>
                                </Zoom>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Security Features */}
            < Box sx={{ py: 8 }}>
                <Container maxWidth="xl">
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Fade in={animate} style={{ transitionDelay: '300ms' }}>
                                <Box>
                                    <SectionTitle variant="h4">
                                        Security Features
                                    </SectionTitle>
                                    <Typography variant="body1" paragraph sx={{ mb: 4 }}>
                                        Security is at the core of our application design. We've implemented robust measures to ensure data protection and privacy.
                                    </Typography>

                                    {securityFeatures.map((feature, index) => (
                                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                            <SecurityIcon sx={{ color: 'primary.main', mr: 2 }} />
                                            <Typography variant="body1" sx={{ fontSize: '1.05rem' }}>
                                                {feature}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </Fade>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Zoom in={animate} style={{ transitionDelay: '500ms' }}>
                                <Box
                                    sx={{
                                        height: 400,
                                        borderRadius: 4,
                                        overflow: 'hidden',
                                        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
                                        position: 'relative'
                                    }}
                                >
                                    <img
                                        src="https://via.placeholder.com/800x400?text=Security+Architecture"
                                        alt="Security Architecture"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </Box>
                            </Zoom>
                        </Grid>
                    </Grid>
                </Container>
            </Box >

            {/* Current Status */}
            < Box sx={{ py: 8, bgcolor: '#F5F7FA' }}>
                <Container maxWidth="xl">
                    <CenteredSectionTitle variant="h4">
                        Project Status (July 2025)
                    </CenteredSectionTitle>
                    <Typography variant="body1" align="center" sx={{ mb: 4, maxWidth: '600px', mx: 'auto' }}>
                        Current development progress of the BHN System as a proposed healthcare initiative.
                        Implementation timeline subject to regulatory approval and provincial coordination.
                    </Typography>

                    <Paper elevation={0} sx={{
                        p: 4,
                        borderRadius: 4,
                        border: '1px solid #e0e0e0',
                        maxWidth: 800,
                        mx: 'auto'
                    }}>
                        <Grid container spacing={2}>
                            {projectStatus.map((status, index) => (
                                <Grid item xs={12} sm={6} key={index}>
                                    <Fade in={animate} style={{ transitionDelay: `${300 + index * 100}ms` }}>
                                        <Box sx={{ mb: 3 }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                                                <Typography variant="body1" fontWeight={500}>
                                                    {status.name}
                                                </Typography>
                                                <StatusChip
                                                    label={status.completed ? "Completed" : "In Progress"}
                                                    className={status.completed ? "completed" : "in-progress"}
                                                    size="small"
                                                    icon={status.completed ? <CheckCircleIcon /> : <ConstructionIcon />}
                                                />
                                            </Box>
                                            <LinearProgress
                                                variant="determinate"
                                                value={status.completed ? 100 : 70}
                                                sx={{
                                                    height: 8,
                                                    borderRadius: 4,
                                                    bgcolor: status.completed ? '#4caf5020' : '#ff980020',
                                                    '& .MuiLinearProgress-bar': {
                                                        bgcolor: status.completed ? '#4caf50' : '#ff9800'
                                                    }
                                                }}
                                            />
                                        </Box>
                                    </Fade>
                                </Grid>
                            ))}
                        </Grid>
                    </Paper>
                </Container>
            </Box >

            {/* Future Improvements */}
            < Box sx={{ py: 8 }}>
                <Container maxWidth="xl">
                    <SectionTitle variant="h4">
                        Future Roadmap & Enhancements
                    </SectionTitle>
                    <Typography variant="body1" sx={{ mb: 4, maxWidth: '800px' }}>
                        Planned enhancements to expand the BHN System's capabilities and reach, pending successful
                        initial deployment and stakeholder feedback.
                    </Typography>

                    <Grid container spacing={4}>
                        {futureImprovements.map((improvement, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Zoom in={animate} style={{ transitionDelay: `${300 + index * 100}ms` }}>
                                    <Card sx={{
                                        p: 3,
                                        borderRadius: 4,
                                        height: '100%',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
                                        }
                                    }}>
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            mb: 2,
                                            pb: 2,
                                            borderBottom: '1px solid #f0f0f0'
                                        }}>
                                            <Box sx={{
                                                width: 40,
                                                height: 40,
                                                borderRadius: '50%',
                                                bgcolor: `${improvement.color}20`,
                                                color: improvement.color,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                mr: 2
                                            }}>
                                                {improvement.icon}
                                            </Box>
                                            <Typography variant="h6" fontWeight={600}>
                                                {improvement.title}
                                            </Typography>
                                        </Box>
                                        <Typography variant="body2" color="text.secondary">
                                            {improvement.description}
                                        </Typography>
                                    </Card>
                                </Zoom>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box >

            {/* CTA Section */}
            < Box sx={{ py: 8, bgcolor: 'primary.main', color: 'white' }}>
                <Container maxWidth="xl">
                    <Grid container spacing={4} alignItems="center" justifyContent="center">
                        <Grid item xs={12} md={8} textAlign="center">
                            <Fade in={animate} timeout={1000}>
                                <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
                                    Ready to Transform Canadian Healthcare?
                                </Typography>
                            </Fade>
                            <Fade in={animate} timeout={1500}>
                                <Typography variant="body1" sx={{ opacity: 0.9, mb: 4, maxWidth: 700, mx: 'auto' }}>
                                    The BHN System represents the future of integrated healthcare identity management.
                                    Learn more about our vision for connecting Canada's healthcare ecosystem.
                                </Typography>
                            </Fade>
                            <Fade in={animate} timeout={2000}>
                                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                                    <StyledButton
                                        variant="contained"
                                        color="secondary"
                                        size="large"
                                        endIcon={<ArrowForwardIcon />}
                                        href={EXTERNAL_LINKS.CANADA_HEALTH_INFOWAY}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Learn about digital health initiatives"
                                    >
                                        Learn About Digital Health
                                    </StyledButton>
                                    <StyledButton
                                        variant="outlined"
                                        size="large"
                                        sx={{ color: 'white', borderColor: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}
                                        href="/contact"
                                        aria-label="Contact our team"
                                    >
                                        Contact Our Team
                                    </StyledButton>
                                </Box>
                            </Fade>
                        </Grid>
                    </Grid>

                    {/* Disclaimer */}
                    <Fade in={animate} timeout={2500}>
                        <Box sx={{ mt: 6, textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.2)', pt: 4 }}>
                            <Typography variant="body2" sx={{ opacity: 0.8, fontStyle: 'italic', maxWidth: '800px', mx: 'auto' }}>
                                <strong>Note:</strong> The BHN System is a proposed healthcare initiative as of July 2025.
                                Implementation is subject to regulatory approval, provincial coordination, and stakeholder engagement.
                                Cost savings estimates are internal projections based on healthcare fragmentation studies.
                            </Typography>
                        </Box>
                    </Fade>
                </Container>
            </Box >
        </Box >
    );
};

export default Project; 