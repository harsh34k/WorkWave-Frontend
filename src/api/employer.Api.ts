import axios from 'axios';
import { ApiResponse, Employer, Job } from '../types/index.types';

const API_BASE_URL = 'https://workwave-production.up.railway.app/api/v1/jobs/getAllJobs'; // Replace with your backend base URL

// Common error handling logic
const handleApiError = (error: any): string => {
    console.error('API Error:', error);
    if (axios.isAxiosError(error)) {
        // Extract specific error message if available
        return error.response?.data?.message || 'An unexpected error occurred';
    }
    return 'An unexpected error occurred';
};

export interface LoginResponse extends ApiResponse {
    data: {
        accessToken: string;
        refreshToken: string;
        user: Employer;
    };
}

// Register Employer
export const registerEmployerAPI = async (formData: FormData): Promise<ApiResponse> => {
    try {
        const response = await axios.post(`${API_BASE_URL}/register`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log("response.data", response.data);
        return response.data;
    } catch (error) {
        throw new Error(handleApiError(error)); // Throw an error with a message
    }
};

// Login Employer
export const loginEmployerAPI = async (email: string, password: string, fullName: string): Promise<LoginResponse> => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, { email, password, fullName }, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        throw new Error(handleApiError(error)); // Throw an error with a message
    }
};

// Logout Employer
export const logoutEmployerAPI = async (): Promise<void> => {
    try {
        const response = await axios.post(`${API_BASE_URL}/logout`, {}, {
            withCredentials: true,
        });
        console.log("response from logout", response);
        return response.data;
    } catch (error) {
        throw new Error(handleApiError(error)); // Throw an error with a message
    }
};

// Refresh Access Token
export const refreshAccessTokenAPI = async (): Promise<{ accessToken: string; refreshToken: string }> => {
    try {
        const response = await axios.post(`${API_BASE_URL}/refresh-token`);
        return response.data;
    } catch (error) {
        throw new Error(handleApiError(error)); // Throw an error with a message
    }
};

// Change Current Password
export const changeCurrentPasswordAPI = async (oldPassword: string, newPassword: string): Promise<void> => {
    try {
        await axios.put(`${API_BASE_URL}/change-password`, { oldPassword, newPassword }, {
            withCredentials: true,
        });
    } catch (error) {
        throw new Error(handleApiError(error)); // Throw an error with a message
    }
};

// Get Current Employer
export const getCurrentEmployerAPI = async (): Promise<ApiResponse> => {
    try {
        console.log("at least here");
        const response = await axios.get(`${API_BASE_URL}/current-user`, {
            withCredentials: true,
        });
        console.log("response getCurrentEmployerAPI hai", response);
        return response.data;
    } catch (error) {
        throw new Error(handleApiError(error)); // Throw an error with a message
    }
};

// Update Account Details
export const updateEmployerAccountDetailsAPI = async (data: Partial<Employer>): Promise<ApiResponse> => {
    try {
        const response = await axios.patch(`${API_BASE_URL}/update-account`, data, {
            withCredentials: true,
        });
        console.log("response updateEmployerAccountDetailsAPI", response.data);
        return response.data;
    } catch (error) {
        throw new Error(handleApiError(error)); // Throw an error with a message
    }
};

// Update Employer Avatar
export const updateEmployerAvatarAPI = async (formData: FormData): Promise<Employer> => {
    try {
        const response = await axios.patch(`${API_BASE_URL}/avatar`, formData, {
            withCredentials: true,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(handleApiError(error)); // Throw an error with a message
    }
};

// Get All Created Jobs
export const getAllCreatedJobsAPI = async (): Promise<Job[]> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/c/created-jobs`);
        return response.data;
    } catch (error) {
        throw new Error(handleApiError(error)); // Throw an error with a message
    }
};
