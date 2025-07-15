import React, { useState } from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Container,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
    Rating,
    Chip,
    useTheme,
} from '@mui/material';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArticleIcon from '@mui/icons-material/Article';
import ScienceIcon from '@mui/icons-material/Science';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SchoolIcon from '@mui/icons-material/School';

const PageHeader = styled(Box)`
  background: linear-gradient(rgba(0, 94, 184, 0.8), rgba(0, 59, 142, 0.9)), url('/find-doctor-header.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 80px 0;
  text-align: center;
`;

const SearchContainer = styled(Box)`
  background-color: white;
  border-radius: 8px;
  padding: 24px;
  margin-top: -40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const DoctorCard = styled(Card)`
  display: flex;
  margin-bottom: 24px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const DoctorImage = styled(CardMedia)`
  width: 180px;
  height: 180px;
  
  @media (max-width: 600px) {
    width: 100%;
    height: 200px;
  }
`;

const DoctorInfo = styled(CardContent)`
  flex: 1;
`;

const DoctorName = styled(Typography)`
  font-weight: 600;
`;

const DoctorSpecialty = styled(Typography)`
  color: ${props => props.theme.palette?.primary?.main || '#005eb8'};
  font-weight: 500;
`;

const LocationIcon = styled(LocationOnIcon)`
  font-size: 16px;
  margin-right: 4px;
  color: ${props => props.theme.palette?.text?.secondary || '#5c5c5c'};
`;

const AvailabilityIcon = styled(EventAvailableIcon)`
  font-size: 16px;
  margin-right: 4px;
  color: ${props => props.theme.palette?.success?.main || '#4caf50'};
`;

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

const ResearchCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  border: none;
  box-shadow: none;
  background-color: #F5F5F5;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background-color: #FFFFFF;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    
    .card-media {
      transform: scale(1.05);
    }
  }
  
  .card-media {
    height: 220px;
    transition: all 0.3s ease;
  }
  
  .card-content {
    flex-grow: 1;
    padding: 24px;
  }
  
  .card-chips {
    margin-bottom: 16px;
  }
  
  .card-chip {
    margin-right: 8px;
    margin-bottom: 8px;
    background-color: #FFD100;
    color: #000000;
    font-weight: 500;
  }
`;

const PublicationCard = styled(Card)`
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
    
    .publication-icon {
      background-color: #FFD100;
      color: #000000;
    }
  }
  
  .publication-icon {
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
  
  .publication-title {
    font-weight: 700;
    margin-bottom: 16px;
  }
  
  .publication-authors {
    font-style: italic;
    margin-bottom: 16px;
    color: rgba(0, 0, 0, 0.6);
  }
  
  .publication-journal {
    margin-bottom: 24px;
    color: rgba(0, 0, 0, 0.8);
    font-weight: 500;
  }
`;

const StatSection = styled(Box)`
  background-color: #F5F5F5;
  padding: 100px 0;
`;

const StatCard = styled(Box)`
  text-align: center;
  
  .stat-number {
    font-size: 3.5rem;
    font-weight: 800;
    color: #FFD100;
    margin-bottom: 16px;
    line-height: 1;
  }
`;

const CTASection = styled(Box)`
  background-color: #FFD100;
  color: #000000;
  padding: 100px 0;
`;

const Research = () => {
    const theme = useTheme();
    const [searchParams, setSearchParams] = useState({
        name: '',
        specialty: '',
        location: '',
        gender: '',
    });

    const handleSearchChange = (e) => {
        const { name, value } = e.target;
        setSearchParams(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSearch = (e) => {
        e.preventDefault();
        // In a real application, this would trigger an API call to search for doctors
        console.log('Search params:', searchParams);
    };

    // Mock data for doctor listings
    const doctors = [
        {
            id: 1,
            name: 'Dr. Emily Johnson',
            specialty: 'Family Medicine',
            image: '/doctor1.jpg',
            location: 'Toronto Downtown Clinic',
            rating: 4.8,
            reviewCount: 124,
            availability: 'Available Today',
            education: 'University of Toronto Medical School',
            languages: ['English', 'French'],
            acceptingNewPatients: true,
        },
        {
            id: 2,
            name: 'Dr. Michael Chen',
            specialty: 'Cardiology',
            image: '/doctor2.jpg',
            location: 'Heart & Vascular Institute',
            rating: 4.9,
            reviewCount: 98,
            availability: 'Next Available: Tomorrow',
            education: 'McGill University Faculty of Medicine',
            languages: ['English', 'Mandarin'],
            acceptingNewPatients: true,
        },
        {
            id: 3,
            name: 'Dr. Sarah Williams',
            specialty: 'Pediatrics',
            image: '/doctor3.jpg',
            location: 'Children\'s Health Center',
            rating: 4.7,
            reviewCount: 156,
            availability: 'Available Today',
            education: 'University of British Columbia Medical School',
            languages: ['English'],
            acceptingNewPatients: true,
        },
        {
            id: 4,
            name: 'Dr. Robert Singh',
            specialty: 'Orthopedic Surgery',
            image: '/doctor4.jpg',
            location: 'Sports Medicine & Orthopedic Center',
            rating: 4.6,
            reviewCount: 87,
            availability: 'Next Available: Monday',
            education: 'University of Western Ontario Medical School',
            languages: ['English', 'Punjabi', 'Hindi'],
            acceptingNewPatients: false,
        },
        {
            id: 5,
            name: 'Dr. Amanda Rodriguez',
            specialty: 'Psychiatry',
            image: '/doctor5.jpg',
            location: 'Mental Health & Wellness Clinic',
            rating: 4.9,
            reviewCount: 112,
            availability: 'Available Today',
            education: 'Queen\'s University School of Medicine',
            languages: ['English', 'Spanish'],
            acceptingNewPatients: true,
        },
    ];

    // Mock data for specialty options
    const specialties = [
        { value: '', label: 'All Specialties' },
        { value: 'family-medicine', label: 'Family Medicine' },
        { value: 'internal-medicine', label: 'Internal Medicine' },
        { value: 'pediatrics', label: 'Pediatrics' },
        { value: 'cardiology', label: 'Cardiology' },
        { value: 'dermatology', label: 'Dermatology' },
        { value: 'orthopedics', label: 'Orthopedics' },
        { value: 'psychiatry', label: 'Psychiatry' },
        { value: 'neurology', label: 'Neurology' },
        { value: 'obstetrics-gynecology', label: 'Obstetrics & Gynecology' },
    ];

    // Mock data for location options
    const locations = [
        { value: '', label: 'All Locations' },
        { value: 'toronto-downtown', label: 'Toronto - Downtown' },
        { value: 'toronto-north', label: 'Toronto - North' },
        { value: 'toronto-east', label: 'Toronto - East' },
        { value: 'toronto-west', label: 'Toronto - West' },
        { value: 'mississauga', label: 'Mississauga' },
        { value: 'brampton', label: 'Brampton' },
        { value: 'markham', label: 'Markham' },
        { value: 'vaughan', label: 'Vaughan' },
    ];

    const researchProjects = [
        {
            title: "Maternal-Infant Data Linkage Outcomes Study",
            image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            description: "Analyzing the impact of Birth Health Number implementation on care coordination and health outcomes across multiple healthcare facilities.",
            categories: ["Data Analysis", "Healthcare Outcomes"],
            link: "/research/data-linkage-outcomes"
        },
        {
            title: "Rural Healthcare Access Improvement",
            image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            description: "Investigating how BHN implementation improves maternal and infant healthcare access and outcomes in underserved rural communities.",
            categories: ["Rural Health", "Healthcare Access"],
            link: "/research/rural-healthcare"
        },
        {
            title: "Predictive Analytics for Maternal Health",
            image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            description: "Developing predictive models using BHN data to identify high-risk pregnancies and enable early intervention strategies.",
            categories: ["Predictive Analytics", "Risk Assessment"],
            link: "/research/predictive-analytics"
        },
        {
            title: "Cross-Provider Data Integration Study",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            description: "Examining the challenges and solutions for integrating maternal and infant health data across different healthcare providers and systems.",
            categories: ["Data Integration", "Systems Interoperability"],
            link: "/research/cross-provider-integration"
        },
    ];

    const publications = [
        {
            icon: <ArticleIcon />,
            title: "Birth Health Network: A Novel Approach to Maternal-Infant Data Integration",
            authors: "Johnson S, Chen M, Okafor A, et al.",
            journal: "Journal of Healthcare Informatics, 2022; 45(3): 287-301",
            doi: "10.1234/jhi.2022.45.3.287",
            link: "https://doi.org/10.1234/jhi.2022.45.3.287"
        },
        {
            icon: <ScienceIcon />,
            title: "Improving Maternal and Infant Health Outcomes Through Unified Health Records",
            authors: "Okafor A, Wilson J, Thompson R, et al.",
            journal: "Maternal and Child Health Journal, 2021; 25(2): 142-158",
            doi: "10.1234/mchj.2021.25.2.142",
            link: "https://doi.org/10.1234/mchj.2021.25.2.142"
        },
        {
            icon: <AssessmentIcon />,
            title: "Implementation of Birth Health Number System: A Case Study in Regional Healthcare Networks",
            authors: "Wilson J, Chen M, Johnson S, et al.",
            journal: "Implementation Science, 2022; 17(1): 45-62",
            doi: "10.1234/is.2022.17.1.45",
            link: "https://doi.org/10.1234/is.2022.17.1.45"
        },
        {
            icon: <SchoolIcon />,
            title: "Data Security Protocols for Maternal-Infant Health Information Exchange",
            authors: "Chen M, Davis K, Johnson S, et al.",
            journal: "Journal of Medical Data Security, 2021; 12(4): 378-394",
            doi: "10.1234/jmds.2021.12.4.378",
            link: "https://doi.org/10.1234/jmds.2021.12.4.378"
        },
    ];

    const researchStats = [
        { number: "12", label: "Active Research Projects" },
        { number: "24", label: "Research Partners" },
        { number: "18", label: "Published Papers" },
        { number: "5", label: "Ongoing Clinical Trials" },
    ];

    return (
        <>
            <PageHeader>
                <Container>
                    <Typography variant="h2" component="h1" gutterBottom>
                        Find a Doctor
                    </Typography>
                    <Typography variant="h5" component="h2" sx={{ maxWidth: '800px', mx: 'auto' }}>
                        Connect with experienced healthcare professionals who are dedicated to your wellbeing.
                    </Typography>
                </Container>
            </PageHeader>

            <Container>
                <SearchContainer>
                    <form onSubmit={handleSearch}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={3}>
                                <TextField
                                    fullWidth
                                    label="Doctor Name"
                                    name="name"
                                    value={searchParams.name}
                                    onChange={handleSearchChange}
                                    placeholder="Search by name"
                                />
                            </Grid>

                            <Grid item xs={12} sm={6} md={3}>
                                <FormControl fullWidth>
                                    <InputLabel id="specialty-label">Specialty</InputLabel>
                                    <Select
                                        labelId="specialty-label"
                                        name="specialty"
                                        value={searchParams.specialty}
                                        onChange={handleSearchChange}
                                        label="Specialty"
                                    >
                                        {specialties.map(option => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={6} md={3}>
                                <FormControl fullWidth>
                                    <InputLabel id="location-label">Location</InputLabel>
                                    <Select
                                        labelId="location-label"
                                        name="location"
                                        value={searchParams.location}
                                        onChange={handleSearchChange}
                                        label="Location"
                                    >
                                        {locations.map(option => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={6} md={3}>
                                <FormControl fullWidth>
                                    <InputLabel id="gender-label">Gender</InputLabel>
                                    <Select
                                        labelId="gender-label"
                                        name="gender"
                                        value={searchParams.gender}
                                        onChange={handleSearchChange}
                                        label="Gender"
                                    >
                                        <MenuItem value="">No Preference</MenuItem>
                                        <MenuItem value="male">Male</MenuItem>
                                        <MenuItem value="female">Female</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} display="flex" justifyContent="center">
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    startIcon={<SearchIcon />}
                                >
                                    Search Doctors
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </SearchContainer>

                <Box sx={{ py: 6 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Our Healthcare Professionals
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Browse our network of experienced doctors and specialists committed to providing exceptional care. You can filter and search based on specialty, location, and availability to find the right healthcare provider for your needs.
                    </Typography>

                    <Box sx={{ mt: 4 }}>
                        {doctors.map(doctor => (
                            <DoctorCard key={doctor.id}>
                                <DoctorImage
                                    image={doctor.image}
                                    title={doctor.name}
                                />
                                <DoctorInfo>
                                    <Grid container>
                                        <Grid item xs={12} md={8}>
                                            <DoctorName variant="h5" component="h3">
                                                {doctor.name}
                                            </DoctorName>
                                            <DoctorSpecialty variant="subtitle1" theme={theme}>
                                                {doctor.specialty}
                                            </DoctorSpecialty>

                                            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                                <LocationIcon theme={theme} />
                                                <Typography variant="body2" color="text.secondary">
                                                    {doctor.location}
                                                </Typography>
                                            </Box>

                                            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                                <Rating
                                                    value={doctor.rating}
                                                    precision={0.1}
                                                    size="small"
                                                    readOnly
                                                />
                                                <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                                                    {doctor.rating} ({doctor.reviewCount} reviews)
                                                </Typography>
                                            </Box>

                                            <Typography variant="body2" sx={{ mt: 2 }}>
                                                <strong>Education:</strong> {doctor.education}
                                            </Typography>

                                            <Box sx={{ mt: 1 }}>
                                                <Typography variant="body2" component="span" sx={{ mr: 1 }}>
                                                    <strong>Languages:</strong>
                                                </Typography>
                                                {doctor.languages.map((language, index) => (
                                                    <Chip
                                                        key={index}
                                                        label={language}
                                                        size="small"
                                                        sx={{ mr: 0.5, mb: 0.5 }}
                                                    />
                                                ))}
                                            </Box>
                                        </Grid>

                                        <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'flex-start', md: 'flex-end' }, mt: { xs: 2, md: 0 } }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                                <AvailabilityIcon theme={theme} />
                                                <Typography variant="body2" color="text.secondary">
                                                    {doctor.availability}
                                                </Typography>
                                            </Box>

                                            <Chip
                                                label={doctor.acceptingNewPatients ? "Accepting New Patients" : "Not Accepting New Patients"}
                                                color={doctor.acceptingNewPatients ? "success" : "default"}
                                                variant="outlined"
                                                sx={{ mb: 2 }}
                                            />

                                            <Button
                                                variant="contained"
                                                color="primary"
                                                component={RouterLink}
                                                to={`/doctor/${doctor.id}`}
                                                sx={{ mb: 1, width: { xs: '100%', md: 'auto' } }}
                                            >
                                                View Profile
                                            </Button>

                                            <Button
                                                variant="outlined"
                                                color="primary"
                                                component={RouterLink}
                                                to="/appointment"
                                                sx={{ width: { xs: '100%', md: 'auto' } }}
                                                disabled={!doctor.acceptingNewPatients}
                                            >
                                                Book Appointment
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </DoctorInfo>
                            </DoctorCard>
                        ))}
                    </Box>
                </Box>
            </Container>

            <HeroSection>
                <Container maxWidth="xl">
                    <Grid container spacing={4} justifyContent="center" textAlign="center">
                        <Grid item xs={12} md={8}>
                            <SectionSubtitle>
                                RESEARCH
                            </SectionSubtitle>
                            <PageTitle variant="h1" gutterBottom className="heading-xl">
                                Advancing maternal and infant healthcare
                            </PageTitle>
                            <Typography variant="h6" sx={{ mb: 4, fontWeight: 400, opacity: 0.9, maxWidth: '800px', mx: 'auto' }}>
                                Our research initiatives focus on improving healthcare outcomes through innovative data systems and integration strategies.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </HeroSection>

            <Box sx={{ py: { xs: 10, md: 15 } }}>
                <Container maxWidth="xl">
                    <Grid container spacing={3} justifyContent="space-between" alignItems="center" sx={{ mb: 10 }}>
                        <Grid item xs={12} md={5}>
                            <SectionSubtitle>
                                RESEARCH INITIATIVES
                            </SectionSubtitle>
                            <PageTitle variant="h2" gutterBottom>
                                Current research projects
                            </PageTitle>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="body1" sx={{ fontSize: '1.125rem', color: theme.palette.text.secondary }}>
                                Birth Health Network collaborates with leading healthcare institutions and research organizations to advance maternal and infant healthcare through data-driven research.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container spacing={4}>
                        {researchProjects.map((project, index) => (
                            <Grid item xs={12} sm={6} key={index}>
                                <ResearchCard component={RouterLink} to={project.link} sx={{ textDecoration: 'none' }}>
                                    <CardMedia
                                        className="card-media"
                                        image={project.image}
                                        title={project.title}
                                    />
                                    <CardContent className="card-content">
                                        <Box className="card-chips">
                                            {project.categories.map((category, i) => (
                                                <Chip
                                                    key={i}
                                                    label={category}
                                                    size="small"
                                                    className="card-chip"
                                                />
                                            ))}
                                        </Box>
                                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                                            {project.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" paragraph>
                                            {project.description}
                                        </Typography>
                                        <Button
                                            color="primary"
                                            endIcon={<ArrowForwardIcon />}
                                            sx={{ fontWeight: 600, p: 0, mt: 'auto' }}
                                        >
                                            Learn More
                                        </Button>
                                    </CardContent>
                                </ResearchCard>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            <StatSection>
                <Container maxWidth="xl">
                    <Grid container spacing={3} justifyContent="center" textAlign="center" sx={{ mb: 8 }}>
                        <Grid item xs={12} md={8}>
                            <SectionSubtitle>
                                RESEARCH IMPACT
                            </SectionSubtitle>
                            <PageTitle variant="h2" gutterBottom>
                                Our research by the numbers
                            </PageTitle>
                        </Grid>
                    </Grid>

                    <Grid container spacing={5}>
                        {researchStats.map((stat, index) => (
                            <Grid item xs={6} md={3} key={index}>
                                <StatCard>
                                    <Typography className="stat-number">
                                        {stat.number}
                                    </Typography>
                                    <Typography variant="h6" fontWeight={500}>
                                        {stat.label}
                                    </Typography>
                                </StatCard>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </StatSection>

            <Box sx={{ py: { xs: 10, md: 15 } }}>
                <Container maxWidth="xl">
                    <Grid container spacing={3} justifyContent="center" textAlign="center" sx={{ mb: 10 }}>
                        <Grid item xs={12} md={8}>
                            <SectionSubtitle>
                                PUBLICATIONS
                            </SectionSubtitle>
                            <PageTitle variant="h2" gutterBottom>
                                Recent research publications
                            </PageTitle>
                            <Typography variant="body1" sx={{ maxWidth: '700px', mx: 'auto' }}>
                                Our team regularly publishes research findings in peer-reviewed journals to share knowledge and advance the field of maternal and infant healthcare.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container spacing={4}>
                        {publications.map((publication, index) => (
                            <Grid item xs={12} sm={6} key={index}>
                                <PublicationCard>
                                    <Box className="publication-icon">
                                        {publication.icon}
                                    </Box>
                                    <Typography variant="h5" className="publication-title">
                                        {publication.title}
                                    </Typography>
                                    <Typography variant="body2" className="publication-authors">
                                        {publication.authors}
                                    </Typography>
                                    <Typography variant="body2" className="publication-journal">
                                        {publication.journal}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" paragraph>
                                        DOI: {publication.doi}
                                    </Typography>
                                    <Box sx={{ mt: 'auto' }}>
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            component="a"
                                            href={publication.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            endIcon={<ArrowForwardIcon />}
                                        >
                                            View Publication
                                        </Button>
                                    </Box>
                                </PublicationCard>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            <CTASection>
                <Container maxWidth="xl">
                    <Grid container spacing={5} alignItems="center">
                        <Grid item xs={12} md={7}>
                            <PageTitle variant="h2" gutterBottom>
                                Interested in research collaboration?
                            </PageTitle>
                            <Typography variant="h6" sx={{ mb: 4, maxWidth: '600px', fontWeight: 400 }}>
                                We're always looking for research partners to help advance maternal and infant healthcare through data-driven innovation.
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
                                Contact Research Team
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </CTASection>
        </>
    );
};

export default Research; 