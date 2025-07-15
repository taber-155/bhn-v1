import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    Box,
    Button,
    Container,
    Grid,
    Paper,
    Typography,
    useTheme,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material';
import styled from 'styled-components';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ArticleIcon from '@mui/icons-material/Article';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import DescriptionIcon from '@mui/icons-material/Description';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SchoolIcon from '@mui/icons-material/School';
import DownloadIcon from '@mui/icons-material/Download';

const HeroSection = styled(Box)`
  background-color: #000000;
  color: #FFFFFF;
  padding: 160px 0 100px;
  position: relative;
  overflow: hidden;
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

const ResourceCard = styled(Paper)`
  padding: 32px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  border: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    
    .resource-icon {
      background-color: #FFD100;
      color: #000000;
    }
  }
  
  .resource-icon {
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000000;
    color: #FFFFFF;
    margin-bottom: 24px;
    transition: all 0.3s ease;
    
    svg {
      font-size: 28px;
    }
  }
  
  .resource-title {
    font-weight: 700;
    margin-bottom: 16px;
  }
`;

const StyledAccordion = styled(Accordion)`
  margin-bottom: 16px;
  box-shadow: none;
  border: 1px solid rgba(0, 0, 0, 0.08);
  
  &:before {
    display: none;
  }
  
  .MuiAccordionSummary-root {
    padding: 0 24px;
    min-height: 64px;
    
    &.Mui-expanded {
      min-height: 64px;
    }
  }
  
  .MuiAccordionSummary-content {
    margin: 12px 0;
    
    &.Mui-expanded {
      margin: 12px 0;
    }
  }
  
  .MuiAccordionDetails-root {
    padding: 0 24px 24px;
  }
  
  .MuiTypography-root {
    font-weight: 600;
  }
`;

const DownloadItem = styled(ListItem)`
  padding: 16px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  
  &:last-child {
    border-bottom: none;
  }
  
  .MuiListItemIcon-root {
    min-width: 40px;
    color: #000000;
  }
  
  .download-button {
    color: #000000;
    border-color: #000000;
    
    &:hover {
      background-color: #FFD100;
      border-color: #FFD100;
    }
  }
`;

const VideoSection = styled(Box)`
  background-color: #F5F5F5;
  padding: 100px 0;
`;

const VideoCard = styled(Paper)`
  height: 100%;
  display: flex;
  flex-direction: column;
  border: none;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  }
  
  .video-thumbnail {
    height: 200px;
    position: relative;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.3s ease;
    }
    
    .play-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.3);
      opacity: 0;
      transition: all 0.3s ease;
      
      svg {
        font-size: 48px;
        color: #FFFFFF;
      }
    }
    
    &:hover {
      img {
        transform: scale(1.05);
      }
      
      .play-overlay {
        opacity: 1;
      }
    }
  }
  
  .video-content {
    padding: 24px;
  }
  
  .video-title {
    font-weight: 700;
    margin-bottom: 8px;
  }
  
  .video-duration {
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    margin-bottom: 16px;
  }
`;

const CTASection = styled(Box)`
  background-color: #FFD100;
  color: #000000;
  padding: 100px 0;
`;

const Resources = () => {
    const theme = useTheme();

    const resourceCategories = [
        {
            icon: <DescriptionIcon />,
            title: "Implementation Guides",
            description: "Comprehensive guides for implementing the Birth Health Network system in your healthcare organization.",
            link: "#implementation-guides"
        },
        {
            icon: <ArticleIcon />,
            title: "Technical Documentation",
            description: "Detailed technical documentation for IT professionals integrating with the Birth Health Network API and data systems.",
            link: "#technical-docs"
        },
        {
            icon: <VideoLibraryIcon />,
            title: "Training Videos",
            description: "Educational videos to help your team understand and effectively use the Birth Health Network system.",
            link: "#training-videos"
        },
        {
            icon: <SchoolIcon />,
            title: "Educational Materials",
            description: "Resources for healthcare professionals to learn about the benefits and applications of the Birth Health Network.",
            link: "#educational-materials"
        },
    ];

    const faqs = [
        {
            question: "What is the Birth Health Number (BHN)?",
            answer: "The Birth Health Number (BHN) is a unique identifier assigned to newborns that links their health records with maternal data, creating a unified healthcare record that improves care coordination and health outcomes."
        },
        {
            question: "How does BHN integrate with existing healthcare systems?",
            answer: "BHN is designed to integrate seamlessly with existing electronic medical record (EMR) systems, hospital information systems, and other healthcare data platforms through secure APIs and standardized data exchange protocols."
        },
        {
            question: "What security measures are in place to protect sensitive health data?",
            answer: "The Birth Health Network employs multiple layers of security including encryption, access controls, audit trails, and compliance with HIPAA and other healthcare data security regulations to ensure the protection of all maternal and infant health information."
        },
        {
            question: "How long does it take to implement the BHN system?",
            answer: "Implementation timelines vary depending on the size and complexity of your healthcare organization, but typically range from 3-6 months from initial consultation to full deployment and staff training."
        },
        {
            question: "What training and support is available for our staff?",
            answer: "We provide comprehensive training programs including in-person workshops, online courses, documentation, and ongoing technical support to ensure your team can effectively use and manage the Birth Health Network system."
        },
        {
            question: "How does BHN improve healthcare outcomes?",
            answer: "By connecting maternal and infant health records, BHN enables better care coordination, more accurate health histories, improved tracking of interventions and outcomes, and enhanced ability to identify and address health risks early."
        },
    ];

    const downloadableResources = [
        {
            icon: <PictureAsPdfIcon />,
            title: "BHN Implementation Guide",
            description: "Step-by-step guide for implementing Birth Health Network in healthcare facilities",
            fileSize: "2.4 MB",
            link: "/downloads/bhn-implementation-guide.pdf"
        },
        {
            icon: <PictureAsPdfIcon />,
            title: "Technical Integration Specifications",
            description: "Technical documentation for IT teams integrating with BHN systems",
            fileSize: "3.1 MB",
            link: "/downloads/bhn-technical-specifications.pdf"
        },
        {
            icon: <ArticleIcon />,
            title: "Staff Training Manual",
            description: "Comprehensive training materials for healthcare staff using the BHN system",
            fileSize: "5.7 MB",
            link: "/downloads/bhn-training-manual.pdf"
        },
        {
            icon: <DescriptionIcon />,
            title: "BHN Case Studies Collection",
            description: "Real-world examples of successful BHN implementations and outcomes",
            fileSize: "4.2 MB",
            link: "/downloads/bhn-case-studies.pdf"
        },
    ];

    const trainingVideos = [
        {
            title: "Introduction to Birth Health Network",
            thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            duration: "5:24",
            description: "An overview of the Birth Health Network system and its benefits for maternal and infant healthcare.",
            link: "https://www.youtube.com/watch?v=example1"
        },
        {
            title: "BHN System Administration",
            thumbnail: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            duration: "12:37",
            description: "Learn how to administer the Birth Health Network system in your healthcare facility.",
            link: "https://www.youtube.com/watch?v=example2"
        },
        {
            title: "Data Integration Best Practices",
            thumbnail: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            duration: "8:15",
            description: "Best practices for integrating BHN with existing healthcare data systems.",
            link: "https://www.youtube.com/watch?v=example3"
        },
        {
            title: "BHN for Clinical Staff",
            thumbnail: "https://images.unsplash.com/photo-1581092160607-ee22731c9c8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            duration: "7:42",
            description: "How clinical staff can effectively use the BHN system in daily patient care.",
            link: "https://www.youtube.com/watch?v=example4"
        },
    ];

    return (
        <>
            <HeroSection>
                <Container maxWidth="xl">
                    <Grid container spacing={4} justifyContent="center" textAlign="center">
                        <Grid item xs={12} md={8}>
                            <SectionSubtitle>
                                RESOURCES
                            </SectionSubtitle>
                            <PageTitle variant="h1" gutterBottom className="heading-xl">
                                Tools and information for implementation
                            </PageTitle>
                            <Typography variant="h6" sx={{ mb: 4, fontWeight: 400, opacity: 0.9, maxWidth: '800px', mx: 'auto' }}>
                                Access guides, documentation, and educational materials to help implement and utilize the Birth Health Network system.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </HeroSection>

            <Box sx={{ py: { xs: 10, md: 15 } }}>
                <Container maxWidth="xl">
                    <Grid container spacing={4}>
                        {resourceCategories.map((category, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <ResourceCard component="a" href={category.link} sx={{ textDecoration: 'none' }}>
                                    <Box className="resource-icon">
                                        {category.icon}
                                    </Box>
                                    <Typography variant="h5" className="resource-title">
                                        {category.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" paragraph>
                                        {category.description}
                                    </Typography>
                                    <Button
                                        color="primary"
                                        endIcon={<ArrowForwardIcon />}
                                        sx={{ fontWeight: 600, p: 0, mt: 'auto' }}
                                    >
                                        Browse Resources
                                    </Button>
                                </ResourceCard>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            <Box sx={{ py: { xs: 10, md: 15 }, bgcolor: '#F5F5F5' }} id="implementation-guides">
                <Container maxWidth="xl">
                    <Grid container spacing={3} justifyContent="space-between" alignItems="center" sx={{ mb: 10 }}>
                        <Grid item xs={12} md={5}>
                            <SectionSubtitle>
                                DOWNLOADABLE RESOURCES
                            </SectionSubtitle>
                            <PageTitle variant="h2" gutterBottom>
                                Implementation guides and documentation
                            </PageTitle>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="body1" sx={{ fontSize: '1.125rem', color: theme.palette.text.secondary }}>
                                Download comprehensive guides and documentation to help you implement and optimize the Birth Health Network system in your healthcare organization.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Box sx={{ bgcolor: '#FFFFFF', p: 4 }}>
                        <List disablePadding>
                            {downloadableResources.map((resource, index) => (
                                <DownloadItem key={index} disableGutters>
                                    <ListItemIcon>
                                        {resource.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={resource.title}
                                        secondary={resource.description}
                                        primaryTypographyProps={{ fontWeight: 600 }}
                                    />
                                    <Typography variant="body2" color="text.secondary" sx={{ mr: 3 }}>
                                        {resource.fileSize}
                                    </Typography>
                                    <Button
                                        variant="outlined"
                                        size="small"
                                        startIcon={<DownloadIcon />}
                                        component="a"
                                        href={resource.link}
                                        download
                                        className="download-button"
                                    >
                                        Download
                                    </Button>
                                </DownloadItem>
                            ))}
                        </List>
                    </Box>
                </Container>
            </Box>

            <VideoSection id="training-videos">
                <Container maxWidth="xl">
                    <Grid container spacing={3} justifyContent="center" textAlign="center" sx={{ mb: 10 }}>
                        <Grid item xs={12} md={8}>
                            <SectionSubtitle>
                                TRAINING VIDEOS
                            </SectionSubtitle>
                            <PageTitle variant="h2" gutterBottom>
                                Learn how to use Birth Health Network
                            </PageTitle>
                            <Typography variant="body1" sx={{ maxWidth: '700px', mx: 'auto' }}>
                                Watch our training videos to learn how to effectively implement and use the Birth Health Network system in your healthcare organization.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container spacing={4}>
                        {trainingVideos.map((video, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <VideoCard>
                                    <Box className="video-thumbnail">
                                        <img src={video.thumbnail} alt={video.title} />
                                        <Box
                                            className="play-overlay"
                                            component="a"
                                            href={video.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <VideoLibraryIcon />
                                        </Box>
                                    </Box>
                                    <Box className="video-content">
                                        <Typography variant="h6" className="video-title">
                                            {video.title}
                                        </Typography>
                                        <Typography variant="body2" className="video-duration">
                                            Duration: {video.duration}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {video.description}
                                        </Typography>
                                    </Box>
                                </VideoCard>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </VideoSection>

            <Box sx={{ py: { xs: 10, md: 15 } }} id="faqs">
                <Container maxWidth="xl">
                    <Grid container spacing={3} justifyContent="center" textAlign="center" sx={{ mb: 10 }}>
                        <Grid item xs={12} md={8}>
                            <SectionSubtitle>
                                FREQUENTLY ASKED QUESTIONS
                            </SectionSubtitle>
                            <PageTitle variant="h2" gutterBottom>
                                Common questions about Birth Health Network
                            </PageTitle>
                            <Typography variant="body1" sx={{ maxWidth: '700px', mx: 'auto' }}>
                                Find answers to commonly asked questions about implementing and using the Birth Health Network system.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} md={10} lg={8}>
                            {faqs.map((faq, index) => (
                                <StyledAccordion key={index}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls={`panel${index}-content`}
                                        id={`panel${index}-header`}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <HelpOutlineIcon sx={{ mr: 2, color: '#FFD100' }} />
                                            <Typography>{faq.question}</Typography>
                                        </Box>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography variant="body1" color="text.secondary" sx={{ pl: 5 }}>
                                            {faq.answer}
                                        </Typography>
                                    </AccordionDetails>
                                </StyledAccordion>
                            ))}
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <CTASection>
                <Container maxWidth="xl">
                    <Grid container spacing={5} alignItems="center">
                        <Grid item xs={12} md={7}>
                            <PageTitle variant="h2" gutterBottom>
                                Need additional resources or support?
                            </PageTitle>
                            <Typography variant="h6" sx={{ mb: 4, maxWidth: '600px', fontWeight: 400 }}>
                                Our team is ready to provide personalized assistance with implementing the Birth Health Network system in your organization.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={5} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                component={RouterLink}
                                to="/contact"
                                endIcon={<ArrowForwardIcon />}
                                sx={{ py: 1.5, px: 4 }}
                            >
                                Contact Support Team
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </CTASection>
        </>
    );
};

export default Resources; 