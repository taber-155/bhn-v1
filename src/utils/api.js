import axios from 'axios';

// In a real application, this would be an environment variable
const API_BASE_URL = 'https://api.birthhealthnetwork.org';

// Create axios instance with default config
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Add request interceptor to include auth token
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('bhn_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Add response interceptor to handle common errors
api.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle unauthorized errors (expired token)
        if (error.response && error.response.status === 401) {
            localStorage.removeItem('bhn_token');
            localStorage.removeItem('bhn_user');
            window.location.href = '/login?session=expired';
        }
        return Promise.reject(error);
    }
);

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Mock user data
const mockUsers = {
    patients: [
        {
            id: 'p1',
            firstName: 'Sarah',
            lastName: 'Johnson',
            email: 'sarah.johnson@example.com',
            phone: '5551234567',
            dateOfBirth: '1985-06-15',
            address: '123 Main Street',
            city: 'Springfield',
            state: 'IL',
            zipCode: '62704',
            emergencyContact: 'Michael Johnson',
            emergencyPhone: '5559876543',
            bloodType: 'O+',
            allergies: 'Penicillin, Peanuts',
            medications: 'Prenatal vitamins',
            insuranceProvider: 'Blue Cross Blue Shield',
            insuranceNumber: 'BCBS1234567',
            primaryDoctor: 'Dr. Emily Chen',
            createdAt: '2023-01-15',
            userType: 'patient'
        }
    ],
    doctors: [
        {
            id: 'd1',
            firstName: 'Emily',
            lastName: 'Chen',
            email: 'dr.chen@example.com',
            phone: '5552223333',
            specialization: 'Obstetrics & Gynecology',
            licenseNumber: 'MD12345678',
            hospitalAffiliation: 'Springfield Memorial Hospital',
            yearsOfExperience: '12',
            education: 'MD, Harvard Medical School, 2011\nResidency, Johns Hopkins Hospital, 2015',
            certifications: 'Board Certified in Obstetrics & Gynecology\nFellow, American College of Obstetricians and Gynecologists',
            bio: 'Dr. Chen specializes in high-risk pregnancies and maternal-fetal medicine. With over 12 years of experience, she is committed to providing compassionate and evidence-based care to expectant mothers.',
            address: '456 Medical Center Drive',
            city: 'Springfield',
            state: 'IL',
            zipCode: '62701',
            officeHours: 'Mon-Fri: 9am-5pm',
            acceptingNewPatients: true,
            profileImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
            createdAt: '2022-05-10',
            userType: 'doctor'
        }
    ]
};

/**
 * Authentication API functions
 */
export const authAPI = {
    /**
     * Login a user
     * @param {Object} credentials - User credentials
     * @returns {Promise<Object>} - Response object
     */
    login: async (credentials) => {
        await delay(800);

        // Check if email is for a doctor
        const isDoctor = credentials.email.includes('dr.');

        // Find user in mock data
        const user = isDoctor
            ? mockUsers.doctors.find(d => d.email === credentials.email)
            : mockUsers.patients.find(p => p.email === credentials.email);

        if (!user) {
            return { success: false, error: 'Invalid email or password' };
        }

        // In a real app, you'd verify the password here

        return {
            success: true,
            data: {
                user: {
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    userType: user.userType
                },
                token: 'mock-jwt-token'
            }
        };
    },

    /**
     * Register a new user
     * @param {Object} userData - User registration data
     * @returns {Promise<Object>} - Response object
     */
    register: async (userData) => {
        await delay(1000);

        // Check if email already exists
        const emailExists = [...mockUsers.patients, ...mockUsers.doctors]
            .some(user => user.email === userData.email);

        if (emailExists) {
            return { success: false, error: 'Email already in use' };
        }

        // Create new user object
        const newUser = {
            id: `${userData.userType === 'doctor' ? 'd' : 'p'}${Date.now()}`,
            ...userData,
            createdAt: new Date().toISOString().split('T')[0]
        };

        // In a real app, you'd save the user to a database here

        return {
            success: true,
            data: {
                user: {
                    id: newUser.id,
                    firstName: newUser.firstName,
                    lastName: newUser.lastName,
                    email: newUser.email,
                    userType: newUser.userType
                },
                token: 'mock-jwt-token'
            }
        };
    },

    /**
     * Reset a user's password
     * @param {string} email - User email
     * @returns {Promise<Object>} - Response object
     */
    resetPassword: async (email) => {
        await delay(800);

        // Check if email exists
        const emailExists = [...mockUsers.patients, ...mockUsers.doctors]
            .some(user => user.email === email);

        if (!emailExists) {
            return { success: false, error: 'Email not found' };
        }

        // In a real app, you'd send a password reset email here

        return {
            success: true,
            message: 'Password reset instructions sent to your email'
        };
    }
};

/**
 * User API functions
 */
export const userAPI = {
    /**
     * Get the current user's profile
     * @returns {Promise<Object>} - Response object
     */
    getProfile: async () => {
        await delay(800);

        // In a real app, you'd get the user ID from the JWT token
        // For this mock, we'll return the first patient or doctor

        // Randomly choose between patient and doctor for demo purposes
        const isDoctor = Math.random() > 0.5;
        const user = isDoctor ? mockUsers.doctors[0] : mockUsers.patients[0];

        return {
            success: true,
            data: user
        };
    },

    /**
     * Update the current user's profile
     * @param {Object} profileData - Updated profile data
     * @returns {Promise<Object>} - Response object
     */
    updateProfile: async (profileData) => {
        await delay(1000);

        // In a real app, you'd update the user in the database

        return {
            success: true,
            data: {
                ...profileData,
                updatedAt: new Date().toISOString()
            }
        };
    },

    /**
     * Get a list of doctors
     * @param {Object} filters - Optional filters
     * @returns {Promise<Object>} - Response object
     */
    getDoctors: async (filters = {}) => {
        await delay(800);

        let doctors = [...mockUsers.doctors];

        // Apply filters if provided
        if (filters.specialization) {
            doctors = doctors.filter(d => d.specialization === filters.specialization);
        }

        if (filters.acceptingNewPatients) {
            doctors = doctors.filter(d => d.acceptingNewPatients);
        }

        return {
            success: true,
            data: doctors.map(d => ({
                id: d.id,
                firstName: d.firstName,
                lastName: d.lastName,
                specialization: d.specialization,
                hospitalAffiliation: d.hospitalAffiliation,
                yearsOfExperience: d.yearsOfExperience,
                profileImage: d.profileImage,
                acceptingNewPatients: d.acceptingNewPatients
            }))
        };
    }
};

/**
 * Appointment API functions
 */
export const appointmentAPI = {
    /**
     * Schedule a new appointment
     * @param {Object} appointmentData - Appointment data
     * @returns {Promise<Object>} - Response object
     */
    scheduleAppointment: async (appointmentData) => {
        await delay(1000);

        // In a real app, you'd save the appointment to a database

        return {
            success: true,
            data: {
                id: `appt-${Date.now()}`,
                ...appointmentData,
                status: 'scheduled',
                createdAt: new Date().toISOString()
            }
        };
    },

    /**
     * Get appointments for the current user
     * @param {string} status - Optional status filter
     * @returns {Promise<Object>} - Response object
     */
    getAppointments: async (status = null) => {
        await delay(800);

        // Mock appointments
        const appointments = [
            {
                id: 'appt-1',
                doctorId: 'd1',
                doctorName: 'Dr. Emily Chen',
                patientId: 'p1',
                patientName: 'Sarah Johnson',
                date: '2023-06-15',
                time: '10:00 AM',
                reason: 'Prenatal checkup',
                status: 'completed',
                notes: 'Patient is progressing well. Scheduled follow-up in 4 weeks.'
            },
            {
                id: 'appt-2',
                doctorId: 'd1',
                doctorName: 'Dr. Emily Chen',
                patientId: 'p1',
                patientName: 'Sarah Johnson',
                date: '2023-07-13',
                time: '11:30 AM',
                reason: 'Prenatal checkup',
                status: 'scheduled',
                notes: ''
            }
        ];

        // Apply status filter if provided
        const filteredAppointments = status
            ? appointments.filter(a => a.status === status)
            : appointments;

        return {
            success: true,
            data: filteredAppointments
        };
    }
};

export default api; 