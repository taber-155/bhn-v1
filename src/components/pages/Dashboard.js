import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Divider,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper,
    Stack,
    Toolbar,
    Typography,
    AppBar,
    Drawer,
    Avatar,
    Chip,
    CircularProgress,
    TextField,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Fab,
    Badge,
    Tooltip,
    Alert,
    Snackbar,
    LinearProgress,
    Tab,
    Tabs,
    Autocomplete
} from '@mui/material';
// Removed DatePicker imports to avoid compatibility issues
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FolderIcon from '@mui/icons-material/Folder';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import RefreshIcon from '@mui/icons-material/Refresh';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import PsychologyIcon from '@mui/icons-material/Psychology';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { useAuth } from '../../context/AuthContext';
import Logo from '../layout/Logo';

const drawerWidth = 240;

const DashboardContainer = styled(Box)`
    display: flex;
    min-height: 100vh;
    background: linear-gradient(135deg, #F5F7FA 0%, #E8F4FD 100%);
`;

const DashboardAppBar = styled(AppBar)`
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    color: #333;
    box-shadow: 0 2px 20px rgba(0, 102, 204, 0.1);
    z-index: 1201;
    position: fixed;
    left: 0;
    right: 0;
    border-bottom: 1px solid rgba(0, 102, 204, 0.1);
`;

const DashboardDrawer = styled(Drawer)`
    width: ${drawerWidth}px;
    flex-shrink: 0;
    
    .MuiDrawer-paper {
        width: ${drawerWidth}px;
        box-sizing: border-box;
        border-right: 1px solid rgba(0, 0, 0, 0.08);
        background: linear-gradient(135deg, #0066CC 0%, #004C99 100%);
        color: white;
    }
`;

const DrawerHeader = styled(Box)`
    display: flex;
    align-items: center;
    padding: 16px;
    justify-content: center;
    background: linear-gradient(135deg, #004C99 0%, #002266 100%);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const MainContent = styled(Box)`
    flex-grow: 1;
    padding: 24px;
    margin-top: 64px;
`;

const StyledListItemButton = styled(ListItemButton)`
    border-radius: 12px;
    margin: 4px 12px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    
    &.Mui-selected {
        background-color: rgba(255, 255, 255, 0.2);
        transform: translateX(4px);
        
        &:hover {
            background-color: rgba(255, 255, 255, 0.3);
        }
    }
    
    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
        transform: translateX(2px);
    }
    
    .MuiListItemIcon-root {
        color: white;
        transition: all 0.3s ease;
    }
    
    &:hover .MuiListItemIcon-root {
        transform: scale(1.1);
    }
`;

const EnhancedStatsCard = styled(Card)`
    height: 100%;
    border-radius: 16px;
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    box-shadow: 0 4px 20px rgba(0, 102, 204, 0.1);
    border: 1px solid rgba(0, 102, 204, 0.08);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(135deg, #0066CC 0%, #00843D 100%);
        z-index: 1;
    }
    
    &:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow: 0 12px 40px rgba(0, 102, 204, 0.2);
        
        .stats-icon {
            transform: scale(1.1) rotate(5deg);
        }
        
        .stats-number {
            transform: scale(1.05);
        }
    }
`;

const WelcomeCard = styled(Paper)`
    padding: 32px;
    background: linear-gradient(135deg, #0066CC 0%, #004C99 50%, #002266 100%);
    color: white;
    border-radius: 20px;
    margin-bottom: 32px;
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
            radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.08) 0%, transparent 50%);
        z-index: 1;
    }
    
    & > * {
        position: relative;
        z-index: 2;
    }
`;

const QuickActionFab = styled(Fab)`
    position: fixed;
    bottom: 24px;
    right: 24px;
    background: linear-gradient(135deg, #0066CC 0%, #00843D 100%);
    color: white;
    z-index: 1000;
    
    &:hover {
        background: linear-gradient(135deg, #004C99 0%, #006633 100%);
        transform: scale(1.1);
    }
`;

const DataEntryDialog = styled(Dialog)`
    .MuiDialog-paper {
        border-radius: 16px;
        max-width: 800px;
        width: 100%;
    }
`;

const LiveIndicator = styled(Box)`
    display: flex;
    align-items: center;
    gap: 8px;
    
    .live-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #4CAF50;
        animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
        0% {
            box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.7);
        }
        70% {
            box-shadow: 0 0 0 10px rgba(76, 175, 80, 0);
        }
        100% {
            box-shadow: 0 0 0 0 rgba(76, 175, 80, 0);
        }
    }
`;



const LoadingContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #F5F7FA;
`;

const Dashboard = () => {
    const navigate = useNavigate();
    const { currentUser, isAuthenticated, logout } = useAuth();
    const [selectedItem, setSelectedItem] = useState('dashboard');
    const [mobileOpen, setMobileOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    // Enhanced state for new features
    const [dataEntryOpen, setDataEntryOpen] = useState(false);
    const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const [activeTab, setActiveTab] = useState(0);
    const [liveDataRefresh, setLiveDataRefresh] = useState(0);

    // Form state for health data entry
    const [healthDataForm, setHealthDataForm] = useState({
        patientId: '',
        recordType: 'vital_signs',
        date: new Date(),
        bloodPressure: { systolic: '', diastolic: '' },
        heartRate: '',
        temperature: '',
        weight: '',
        height: '',
        notes: '',
        medications: [{ name: '', dosage: '', frequency: '' }],
        symptoms: [],
        diagnosis: '',
        treatmentPlan: '',
        followUpDate: null,
        urgencyLevel: 'normal',
        attachments: []
    });

    // File upload state
    const [uploadFiles, setUploadFiles] = useState([]);
    const [uploadProgress, setUploadProgress] = useState(0);

    // Live statistics state
    const [liveStats, setLiveStats] = useState({
        todayAppointments: 8,
        pendingRecords: 3,
        activePatients: 24,
        urgentCases: 2,
        completedToday: 15,
        avgWaitTime: '12 min'
    });

    useEffect(() => {
        // Check if user is authenticated
        if (!isAuthenticated) {
            navigate('/login');
            return;
        }

        // Simulate loading dashboard data
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        // Set up live data refresh
        const liveRefreshInterval = setInterval(() => {
            setLiveDataRefresh(prev => prev + 1);
            // Simulate live data updates
            setLiveStats(prev => ({
                ...prev,
                todayAppointments: prev.todayAppointments + Math.floor(Math.random() * 2),
                activePatients: prev.activePatients + Math.floor(Math.random() * 3) - 1,
                avgWaitTime: `${10 + Math.floor(Math.random() * 10)} min`
            }));
        }, 30000); // Update every 30 seconds

        return () => {
            clearTimeout(timer);
            clearInterval(liveRefreshInterval);
        };
    }, [isAuthenticated, navigate]);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleListItemClick = (item) => {
        setSelectedItem(item);
    };

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            console.error('Failed to log out', error);
        }
    };

    const handleDataEntrySubmit = () => {
        // Simulate form submission
        setSnackbarMessage('Health data saved successfully!');
        setSnackbarSeverity('success');
        setSnackbarOpen(true);
        setDataEntryOpen(false);

        // Reset form
        setHealthDataForm({
            patientId: '',
            recordType: 'vital_signs',
            date: new Date(),
            bloodPressure: { systolic: '', diastolic: '' },
            heartRate: '',
            temperature: '',
            weight: '',
            height: '',
            notes: '',
            medications: [{ name: '', dosage: '', frequency: '' }],
            symptoms: [],
            diagnosis: '',
            treatmentPlan: '',
            followUpDate: null,
            urgencyLevel: 'normal',
            attachments: []
        });
    };

    const handleFileUpload = (event) => {
        const files = Array.from(event.target.files);
        setUploadFiles(files);

        // Simulate upload progress
        let progress = 0;
        const uploadInterval = setInterval(() => {
            progress += 10;
            setUploadProgress(progress);

            if (progress >= 100) {
                clearInterval(uploadInterval);
                setSnackbarMessage(`${files.length} file(s) uploaded successfully!`);
                setSnackbarSeverity('success');
                setSnackbarOpen(true);
                setUploadDialogOpen(false);
                setUploadFiles([]);
                setUploadProgress(0);
            }
        }, 200);
    };

    const addMedication = () => {
        setHealthDataForm(prev => ({
            ...prev,
            medications: [...prev.medications, { name: '', dosage: '', frequency: '' }]
        }));
    };

    const removeMedication = (index) => {
        setHealthDataForm(prev => ({
            ...prev,
            medications: prev.medications.filter((_, i) => i !== index)
        }));
    };

    const updateMedication = (index, field, value) => {
        setHealthDataForm(prev => ({
            ...prev,
            medications: prev.medications.map((med, i) =>
                i === index ? { ...med, [field]: value } : med
            )
        }));
    };

    const recordTypes = [
        { value: 'vital_signs', label: 'Vital Signs', icon: <MonitorHeartIcon /> },
        { value: 'lab_results', label: 'Lab Results', icon: <BloodtypeIcon /> },
        { value: 'vaccination', label: 'Vaccination', icon: <VaccinesIcon /> },
        { value: 'prenatal', label: 'Prenatal Care', icon: <PregnantWomanIcon /> },
        { value: 'consultation', label: 'Consultation', icon: <LocalHospitalIcon /> },
        { value: 'mental_health', label: 'Mental Health', icon: <PsychologyIcon /> },
        { value: 'physical_therapy', label: 'Physical Therapy', icon: <FitnessCenterIcon /> },
        { value: 'nutrition', label: 'Nutrition', icon: <RestaurantIcon /> }
    ];

    const urgencyLevels = [
        { value: 'low', label: 'Low Priority', color: '#4CAF50' },
        { value: 'normal', label: 'Normal', color: '#2196F3' },
        { value: 'high', label: 'High Priority', color: '#FF9800' },
        { value: 'urgent', label: 'Urgent', color: '#F44336' }
    ];

    const commonSymptoms = [
        'Fever', 'Headache', 'Nausea', 'Fatigue', 'Shortness of breath',
        'Chest pain', 'Abdominal pain', 'Dizziness', 'Cough', 'Sore throat'
    ];

    const menuItems = [
        { id: 'dashboard', text: 'Dashboard', icon: <DashboardIcon /> },
        { id: 'appointments', text: 'Appointments', icon: <CalendarMonthIcon /> },
        { id: 'records', text: 'Health Records', icon: <FolderIcon /> },
        { id: 'providers', text: 'Care Providers', icon: <PeopleIcon /> },
        { id: 'settings', text: 'Settings', icon: <SettingsIcon /> },
    ];

    const drawer = (
        <>
            <DrawerHeader>
                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
                    <Logo size="small" withLink={false} sx={{ mr: 1 }} />
                    <Typography variant="h6" fontWeight={700} sx={{ color: 'white' }}>
                        Birth Health Network
                    </Typography>
                </Box>
            </DrawerHeader>
            <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
            <Box sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar sx={{ bgcolor: '#00843D', mr: 2 }}>
                        {currentUser?.firstName?.charAt(0) || 'U'}
                    </Avatar>
                    <Box>
                        <Typography variant="subtitle1" fontWeight={600}>
                            {currentUser?.firstName} {currentUser?.lastName || 'User'}
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                            {currentUser?.userType === 'provider' ? 'Healthcare Provider' : 'Patient'}
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
            <List sx={{ p: 1 }}>
                {menuItems.map((item) => (
                    <ListItem key={item.id} disablePadding>
                        <StyledListItemButton
                            selected={selectedItem === item.id}
                            onClick={() => handleListItemClick(item.id)}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </StyledListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
            <List sx={{ p: 1, mt: 'auto' }}>
                <ListItem disablePadding>
                    <StyledListItemButton onClick={handleLogout}>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </StyledListItemButton>
                </ListItem>
            </List>
        </>
    );

    if (loading) {
        return (
            <LoadingContainer>
                <CircularProgress size={60} sx={{ color: '#0066CC', mb: 2 }} />
                <Typography variant="h6" color="textSecondary">
                    Loading your dashboard...
                </Typography>
            </LoadingContainer>
        );
    }

    return (
        <DashboardContainer>
            <DashboardAppBar>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {selectedItem.charAt(0).toUpperCase() + selectedItem.slice(1)}
                    </Typography>
                    <IconButton color="inherit">
                        <NotificationsIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        component={RouterLink}
                        to="/patient/profile"
                    >
                        <PersonIcon />
                    </IconButton>
                </Toolbar>
            </DashboardAppBar>

            <Box sx={{ display: 'flex' }}>
                <Box
                    component="nav"
                    sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
                >
                    {/* Mobile drawer */}
                    <DashboardDrawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile
                        }}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {drawer}
                    </DashboardDrawer>

                    {/* Desktop drawer */}
                    <DashboardDrawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', md: 'block' },
                        }}
                        open
                    >
                        {drawer}
                    </DashboardDrawer>
                </Box>

                <MainContent sx={{ width: { xs: '100%', md: `calc(100% - ${drawerWidth}px)` } }}>
                    <Container maxWidth="xl">
                        <WelcomeCard>
                            <Grid container spacing={3} alignItems="center">
                                <Grid item xs={12} md={8}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                        <Typography variant="h3" fontWeight={800} sx={{ mr: 2 }}>
                                            Welcome back, Dr. {currentUser?.firstName || 'User'}!
                                        </Typography>
                                        <LiveIndicator>
                                            <div className="live-dot" />
                                            <Typography variant="body2" sx={{ opacity: 0.9 }}>
                                                Live
                                            </Typography>
                                        </LiveIndicator>
                                    </Box>
                                    <Typography variant="h6" sx={{ opacity: 0.95, mb: 3, lineHeight: 1.6 }}>
                                        Your comprehensive healthcare dashboard provides real-time access to patient data,
                                        appointment management, and clinical documentation tools.
                                    </Typography>
                                    <Stack direction="row" spacing={2} flexWrap="wrap">
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            sx={{
                                                bgcolor: 'white',
                                                color: '#0066CC',
                                                fontWeight: 600,
                                                px: 3,
                                                py: 1.5,
                                                borderRadius: '25px',
                                                '&:hover': {
                                                    bgcolor: '#f5f5f5'
                                                }
                                            }}
                                            startIcon={<AddIcon />}
                                            onClick={() => setDataEntryOpen(true)}
                                        >
                                            Add Health Record
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            sx={{
                                                borderColor: 'white',
                                                color: 'white',
                                                fontWeight: 600,
                                                px: 3,
                                                py: 1.5,
                                                borderRadius: '25px',
                                                '&:hover': {
                                                    borderColor: 'white',
                                                    bgcolor: 'rgba(255, 255, 255, 0.1)'
                                                }
                                            }}
                                            startIcon={<UploadFileIcon />}
                                            onClick={() => setUploadDialogOpen(true)}
                                        >
                                            Upload Documents
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            sx={{
                                                borderColor: 'white',
                                                color: 'white',
                                                fontWeight: 600,
                                                px: 3,
                                                py: 1.5,
                                                borderRadius: '25px',
                                                '&:hover': {
                                                    borderColor: 'white',
                                                    bgcolor: 'rgba(255, 255, 255, 0.1)'
                                                }
                                            }}
                                            startIcon={<CalendarMonthIcon />}
                                        >
                                            Schedule Appointment
                                        </Button>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} md={4} sx={{ display: { xs: 'none', md: 'block' } }}>
                                    <Box sx={{ textAlign: 'center', p: 3 }}>
                                        <MonitorHeartIcon sx={{ fontSize: 80, opacity: 0.3, mb: 2 }} />
                                        <Typography variant="h6" sx={{ opacity: 0.8 }}>
                                            Real-time Patient Monitoring
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </WelcomeCard>

                        <Box sx={{ mb: 4 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                                <Typography variant="h4" fontWeight={700}>
                                    Live Dashboard Overview
                                </Typography>
                                <Tooltip title="Auto-refreshes every 30 seconds">
                                    <IconButton
                                        onClick={() => setLiveDataRefresh(prev => prev + 1)}
                                        sx={{
                                            color: '#0066CC',
                                            '&:hover': { bgcolor: 'rgba(0, 102, 204, 0.1)' }
                                        }}
                                    >
                                        <RefreshIcon />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6} md={3}>
                                    <EnhancedStatsCard>
                                        <CardContent sx={{ p: 3 }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                                                <Box>
                                                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                                                        Today's Appointments
                                                    </Typography>
                                                    <Typography
                                                        variant="h3"
                                                        fontWeight={700}
                                                        color="primary"
                                                        className="stats-number"
                                                        sx={{ transition: 'transform 0.3s ease' }}
                                                    >
                                                        {liveStats.todayAppointments}
                                                    </Typography>
                                                </Box>
                                                <CalendarMonthIcon
                                                    className="stats-icon"
                                                    sx={{
                                                        fontSize: 40,
                                                        color: '#0066CC',
                                                        opacity: 0.7,
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                />
                                            </Box>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <TrendingUpIcon sx={{ fontSize: 16, color: '#4CAF50', mr: 1 }} />
                                                <Typography variant="body2" sx={{ color: '#4CAF50', fontWeight: 600 }}>
                                                    +3 from yesterday
                                                </Typography>
                                            </Box>
                                        </CardContent>
                                    </EnhancedStatsCard>
                                </Grid>

                                <Grid item xs={12} sm={6} md={3}>
                                    <EnhancedStatsCard>
                                        <CardContent sx={{ p: 3 }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                                                <Box>
                                                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                                                        Active Patients
                                                    </Typography>
                                                    <Typography
                                                        variant="h3"
                                                        fontWeight={700}
                                                        color="primary"
                                                        className="stats-number"
                                                        sx={{ transition: 'transform 0.3s ease' }}
                                                    >
                                                        {liveStats.activePatients}
                                                    </Typography>
                                                </Box>
                                                <PeopleIcon
                                                    className="stats-icon"
                                                    sx={{
                                                        fontSize: 40,
                                                        color: '#00843D',
                                                        opacity: 0.7,
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                />
                                            </Box>
                                            <Typography variant="body2" sx={{ mt: 1 }}>
                                                Avg. wait: {liveStats.avgWaitTime}
                                            </Typography>
                                        </CardContent>
                                    </EnhancedStatsCard>
                                </Grid>

                                <Grid item xs={12} sm={6} md={3}>
                                    <EnhancedStatsCard>
                                        <CardContent sx={{ p: 3 }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                                                <Box>
                                                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                                                        Pending Records
                                                    </Typography>
                                                    <Typography
                                                        variant="h3"
                                                        fontWeight={700}
                                                        color="primary"
                                                        className="stats-number"
                                                        sx={{ transition: 'transform 0.3s ease' }}
                                                    >
                                                        {liveStats.pendingRecords}
                                                    </Typography>
                                                </Box>
                                                <FolderIcon
                                                    className="stats-icon"
                                                    sx={{
                                                        fontSize: 40,
                                                        color: '#FF9800',
                                                        opacity: 0.7,
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                />
                                            </Box>
                                            <Typography variant="body2" sx={{ mt: 1 }}>
                                                Requires review
                                            </Typography>
                                        </CardContent>
                                    </EnhancedStatsCard>
                                </Grid>

                                <Grid item xs={12} sm={6} md={3}>
                                    <EnhancedStatsCard>
                                        <CardContent sx={{ p: 3 }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                                                <Box>
                                                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                                                        Urgent Cases
                                                    </Typography>
                                                    <Typography
                                                        variant="h3"
                                                        fontWeight={700}
                                                        color="error"
                                                        className="stats-number"
                                                        sx={{ transition: 'transform 0.3s ease' }}
                                                    >
                                                        {liveStats.urgentCases}
                                                    </Typography>
                                                </Box>
                                                <Badge
                                                    badgeContent={liveStats.urgentCases}
                                                    color="error"
                                                    sx={{ '& .MuiBadge-badge': { right: 5, top: 5 } }}
                                                >
                                                    <LocalHospitalIcon
                                                        className="stats-icon"
                                                        sx={{
                                                            fontSize: 40,
                                                            color: '#F44336',
                                                            opacity: 0.7,
                                                            transition: 'all 0.3s ease'
                                                        }}
                                                    />
                                                </Badge>
                                            </Box>
                                            <Typography variant="body2" sx={{ mt: 1, color: '#F44336', fontWeight: 600 }}>
                                                Immediate attention required
                                            </Typography>
                                        </CardContent>
                                    </EnhancedStatsCard>
                                </Grid>
                            </Grid>
                        </Box>

                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <Card sx={{ height: '100%' }}>
                                    <CardContent>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                            <Typography variant="h6" fontWeight={600}>
                                                Upcoming Appointments
                                            </Typography>
                                            <Button color="primary">View All</Button>
                                        </Box>
                                        <Divider sx={{ mb: 2 }} />

                                        <Stack spacing={2}>
                                            <Paper sx={{ p: 2, bgcolor: '#f5f5f5' }}>
                                                <Grid container spacing={2} alignItems="center">
                                                    <Grid item xs={2} sm={1}>
                                                        <Avatar sx={{ bgcolor: '#0066CC' }}>15</Avatar>
                                                    </Grid>
                                                    <Grid item xs={10} sm={7}>
                                                        <Typography variant="subtitle1" fontWeight={600}>
                                                            Prenatal Checkup
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            Dr. Sarah Johnson • Obstetrics
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={12} sm={4} sx={{ textAlign: { sm: 'right' } }}>
                                                        <Typography variant="body2">
                                                            May 15, 2023 • 10:30 AM
                                                        </Typography>
                                                        <Chip
                                                            label="Confirmed"
                                                            size="small"
                                                            sx={{
                                                                bgcolor: '#e6f4ea',
                                                                color: '#137333',
                                                                mt: 0.5
                                                            }}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Paper>

                                            <Paper sx={{ p: 2, bgcolor: '#f5f5f5' }}>
                                                <Grid container spacing={2} alignItems="center">
                                                    <Grid item xs={2} sm={1}>
                                                        <Avatar sx={{ bgcolor: '#0066CC' }}>28</Avatar>
                                                    </Grid>
                                                    <Grid item xs={10} sm={7}>
                                                        <Typography variant="subtitle1" fontWeight={600}>
                                                            Ultrasound
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            Dr. Michael Chen • Radiology
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={12} sm={4} sx={{ textAlign: { sm: 'right' } }}>
                                                        <Typography variant="body2">
                                                            May 28, 2023 • 2:00 PM
                                                        </Typography>
                                                        <Chip
                                                            label="Pending"
                                                            size="small"
                                                            sx={{
                                                                bgcolor: '#fef7e0',
                                                                color: '#b06000',
                                                                mt: 0.5
                                                            }}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Paper>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Card sx={{ height: '100%' }}>
                                    <CardContent>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                            <Typography variant="h6" fontWeight={600}>
                                                Recent Health Records
                                            </Typography>
                                            <Button color="primary">View All</Button>
                                        </Box>
                                        <Divider sx={{ mb: 2 }} />

                                        <List>
                                            <ListItem disablePadding divider>
                                                <ListItemButton>
                                                    <ListItemText
                                                        primary="Blood Test Results"
                                                        secondary="Added on April 28, 2023"
                                                    />
                                                    <Chip label="New" size="small" color="primary" />
                                                </ListItemButton>
                                            </ListItem>
                                            <ListItem disablePadding divider>
                                                <ListItemButton>
                                                    <ListItemText
                                                        primary="Prenatal Checkup Notes"
                                                        secondary="Added on April 15, 2023"
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                            <ListItem disablePadding divider>
                                                <ListItemButton>
                                                    <ListItemText
                                                        primary="Ultrasound Images"
                                                        secondary="Added on April 2, 2023"
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <ListItemButton>
                                                    <ListItemText
                                                        primary="Initial Consultation"
                                                        secondary="Added on March 20, 2023"
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                        </List>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </MainContent>
            </Box>

            {/* Quick Action Floating Button */}
            <QuickActionFab
                onClick={() => setDataEntryOpen(true)}
                aria-label="Add health record"
            >
                <AddIcon />
            </QuickActionFab>

            {/* Health Data Entry Dialog */}
            <DataEntryDialog
                open={dataEntryOpen}
                onClose={() => setDataEntryOpen(false)}
                maxWidth="md"
                fullWidth
            >
                <DialogTitle sx={{ pb: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography variant="h5" fontWeight={700}>
                            Add Health Record
                        </Typography>
                        <IconButton onClick={() => setDataEntryOpen(false)}>
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                </DialogTitle>
                <DialogContent>
                    <Box sx={{ mt: 2 }}>
                        <Tabs
                            value={activeTab}
                            onChange={(e, newValue) => setActiveTab(newValue)}
                            sx={{ mb: 3 }}
                        >
                            <Tab label="Basic Info" />
                            <Tab label="Vital Signs" />
                            <Tab label="Medications" />
                            <Tab label="Notes & Diagnosis" />
                        </Tabs>

                        {/* Basic Info Tab */}
                        {activeTab === 0 && (
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                <TextField
                                    fullWidth
                                    label="Patient ID"
                                    value={healthDataForm.patientId}
                                    onChange={(e) => setHealthDataForm(prev => ({ ...prev, patientId: e.target.value }))}
                                    required
                                />

                                <FormControl fullWidth>
                                    <InputLabel>Record Type</InputLabel>
                                    <Select
                                        value={healthDataForm.recordType}
                                        onChange={(e) => setHealthDataForm(prev => ({ ...prev, recordType: e.target.value }))}
                                        label="Record Type"
                                    >
                                        {recordTypes.map((type) => (
                                            <MenuItem key={type.value} value={type.value}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                                    {type.icon}
                                                    {type.label}
                                                </Box>
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                <TextField
                                    label="Date"
                                    type="date"
                                    value={healthDataForm.date ? healthDataForm.date.toISOString().split('T')[0] : ''}
                                    onChange={(e) => setHealthDataForm(prev => ({
                                        ...prev,
                                        date: e.target.value ? new Date(e.target.value) : null
                                    }))}
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />

                                <FormControl fullWidth>
                                    <InputLabel>Urgency Level</InputLabel>
                                    <Select
                                        value={healthDataForm.urgencyLevel}
                                        onChange={(e) => setHealthDataForm(prev => ({ ...prev, urgencyLevel: e.target.value }))}
                                        label="Urgency Level"
                                    >
                                        {urgencyLevels.map((level) => (
                                            <MenuItem key={level.value} value={level.value}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                                    <Box
                                                        sx={{
                                                            width: 12,
                                                            height: 12,
                                                            borderRadius: '50%',
                                                            bgcolor: level.color
                                                        }}
                                                    />
                                                    {level.label}
                                                </Box>
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Box>
                        )}

                        {/* Vital Signs Tab */}
                        {activeTab === 1 && (
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <TextField
                                            fullWidth
                                            label="Systolic BP"
                                            type="number"
                                            value={healthDataForm.bloodPressure.systolic}
                                            onChange={(e) => setHealthDataForm(prev => ({
                                                ...prev,
                                                bloodPressure: { ...prev.bloodPressure, systolic: e.target.value }
                                            }))}
                                            InputProps={{ endAdornment: 'mmHg' }}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            fullWidth
                                            label="Diastolic BP"
                                            type="number"
                                            value={healthDataForm.bloodPressure.diastolic}
                                            onChange={(e) => setHealthDataForm(prev => ({
                                                ...prev,
                                                bloodPressure: { ...prev.bloodPressure, diastolic: e.target.value }
                                            }))}
                                            InputProps={{ endAdornment: 'mmHg' }}
                                        />
                                    </Grid>
                                </Grid>

                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <TextField
                                            fullWidth
                                            label="Heart Rate"
                                            type="number"
                                            value={healthDataForm.heartRate}
                                            onChange={(e) => setHealthDataForm(prev => ({ ...prev, heartRate: e.target.value }))}
                                            InputProps={{ endAdornment: 'bpm' }}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            fullWidth
                                            label="Temperature"
                                            type="number"
                                            value={healthDataForm.temperature}
                                            onChange={(e) => setHealthDataForm(prev => ({ ...prev, temperature: e.target.value }))}
                                            InputProps={{ endAdornment: '°C' }}
                                        />
                                    </Grid>
                                </Grid>

                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <TextField
                                            fullWidth
                                            label="Weight"
                                            type="number"
                                            value={healthDataForm.weight}
                                            onChange={(e) => setHealthDataForm(prev => ({ ...prev, weight: e.target.value }))}
                                            InputProps={{ endAdornment: 'kg' }}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            fullWidth
                                            label="Height"
                                            type="number"
                                            value={healthDataForm.height}
                                            onChange={(e) => setHealthDataForm(prev => ({ ...prev, height: e.target.value }))}
                                            InputProps={{ endAdornment: 'cm' }}
                                        />
                                    </Grid>
                                </Grid>

                                <Autocomplete
                                    multiple
                                    options={commonSymptoms}
                                    value={healthDataForm.symptoms}
                                    onChange={(e, newValue) => setHealthDataForm(prev => ({ ...prev, symptoms: newValue }))}
                                    renderInput={(params) => (
                                        <TextField {...params} label="Symptoms" placeholder="Select symptoms" />
                                    )}
                                    renderTags={(tagValue, getTagProps) =>
                                        tagValue.map((option, index) => (
                                            <Chip
                                                label={option}
                                                {...getTagProps({ index })}
                                                key={index}
                                                size="small"
                                                color="primary"
                                                variant="outlined"
                                            />
                                        ))
                                    }
                                />
                            </Box>
                        )}

                        {/* Medications Tab */}
                        {activeTab === 2 && (
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography variant="h6">Medications</Typography>
                                    <Button
                                        startIcon={<AddIcon />}
                                        onClick={addMedication}
                                        variant="outlined"
                                        size="small"
                                    >
                                        Add Medication
                                    </Button>
                                </Box>

                                {healthDataForm.medications.map((medication, index) => (
                                    <Paper key={index} sx={{ p: 2, border: '1px solid #e0e0e0' }}>
                                        <Grid container spacing={2} alignItems="center">
                                            <Grid item xs={12} sm={4}>
                                                <TextField
                                                    fullWidth
                                                    label="Medication Name"
                                                    value={medication.name}
                                                    onChange={(e) => updateMedication(index, 'name', e.target.value)}
                                                    size="small"
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={3}>
                                                <TextField
                                                    fullWidth
                                                    label="Dosage"
                                                    value={medication.dosage}
                                                    onChange={(e) => updateMedication(index, 'dosage', e.target.value)}
                                                    size="small"
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={3}>
                                                <TextField
                                                    fullWidth
                                                    label="Frequency"
                                                    value={medication.frequency}
                                                    onChange={(e) => updateMedication(index, 'frequency', e.target.value)}
                                                    size="small"
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={2}>
                                                <IconButton
                                                    onClick={() => removeMedication(index)}
                                                    color="error"
                                                    size="small"
                                                >
                                                    <DeleteIcon />
                                                </IconButton>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                ))}
                            </Box>
                        )}

                        {/* Notes & Diagnosis Tab */}
                        {activeTab === 3 && (
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                <TextField
                                    fullWidth
                                    label="Diagnosis"
                                    multiline
                                    rows={3}
                                    value={healthDataForm.diagnosis}
                                    onChange={(e) => setHealthDataForm(prev => ({ ...prev, diagnosis: e.target.value }))}
                                />

                                <TextField
                                    fullWidth
                                    label="Treatment Plan"
                                    multiline
                                    rows={3}
                                    value={healthDataForm.treatmentPlan}
                                    onChange={(e) => setHealthDataForm(prev => ({ ...prev, treatmentPlan: e.target.value }))}
                                />

                                <TextField
                                    fullWidth
                                    label="Additional Notes"
                                    multiline
                                    rows={4}
                                    value={healthDataForm.notes}
                                    onChange={(e) => setHealthDataForm(prev => ({ ...prev, notes: e.target.value }))}
                                />

                                <TextField
                                    label="Follow-up Date (Optional)"
                                    type="date"
                                    value={healthDataForm.followUpDate ? healthDataForm.followUpDate.toISOString().split('T')[0] : ''}
                                    onChange={(e) => setHealthDataForm(prev => ({
                                        ...prev,
                                        followUpDate: e.target.value ? new Date(e.target.value) : null
                                    }))}
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Box>
                        )}
                    </Box>
                </DialogContent>
                <DialogActions sx={{ p: 3 }}>
                    <Button onClick={() => setDataEntryOpen(false)}>
                        Cancel
                    </Button>
                    <Button
                        onClick={handleDataEntrySubmit}
                        variant="contained"
                        startIcon={<SaveIcon />}
                    >
                        Save Health Record
                    </Button>
                </DialogActions>
            </DataEntryDialog>

            {/* File Upload Dialog */}
            <Dialog
                open={uploadDialogOpen}
                onClose={() => setUploadDialogOpen(false)}
                maxWidth="sm"
                fullWidth
            >
                <DialogTitle>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <CloudUploadIcon />
                        Upload Medical Documents
                    </Box>
                </DialogTitle>
                <DialogContent>
                    <Box sx={{ textAlign: 'center', py: 4 }}>
                        <input
                            accept="image/*,.pdf,.doc,.docx"
                            style={{ display: 'none' }}
                            id="file-upload"
                            multiple
                            type="file"
                            onChange={handleFileUpload}
                        />
                        <label htmlFor="file-upload">
                            <Button
                                variant="outlined"
                                component="span"
                                size="large"
                                startIcon={<AttachFileIcon />}
                                sx={{ mb: 2 }}
                            >
                                Choose Files
                            </Button>
                        </label>
                        <Typography variant="body2" color="text.secondary">
                            Supported formats: Images, PDF, DOC, DOCX
                        </Typography>

                        {uploadFiles.length > 0 && (
                            <Box sx={{ mt: 3 }}>
                                <Typography variant="subtitle2" gutterBottom>
                                    Selected Files:
                                </Typography>
                                {uploadFiles.map((file, index) => (
                                    <Typography key={index} variant="body2">
                                        {file.name}
                                    </Typography>
                                ))}

                                {uploadProgress > 0 && (
                                    <Box sx={{ mt: 2 }}>
                                        <LinearProgress
                                            variant="determinate"
                                            value={uploadProgress}
                                            sx={{ mb: 1 }}
                                        />
                                        <Typography variant="caption">
                                            Uploading... {uploadProgress}%
                                        </Typography>
                                    </Box>
                                )}
                            </Box>
                        )}
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setUploadDialogOpen(false)}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Success/Error Snackbar */}
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={() => setSnackbarOpen(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            >
                <Alert
                    onClose={() => setSnackbarOpen(false)}
                    severity={snackbarSeverity}
                    sx={{ width: '100%' }}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </DashboardContainer>
    );
};

export default Dashboard;