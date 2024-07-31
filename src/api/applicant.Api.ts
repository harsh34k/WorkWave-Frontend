import axios from 'axios';
import { ApiResponse, Applicant, Job } from '../types/index.types';
import { LoginResponse } from './employer.Api';

const API_BASE_URL = 'https://workwave-production.up.railway.app/api/v1'; // Replace with your backend API base URL

// Common error handling logic
const handleApiError = (error: any): string => {
    console.error('API Error:', error);
    if (axios.isAxiosError(error)) {
        // Extract specific error message if available
        return error.response?.data?.message || 'An unexpected error occurred';
    }
    return 'An unexpected error occurred';
};

// Function to register a new applicant
export const registerApplicantAPI = async (formData: FormData): Promise<ApiResponse> => {
    try {
        const response = await axios.post(`${API_BASE_URL}/applicants/register`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(handleApiError(error)); // Throw an error with a message
    }
};

// Function to login an applicant
export const loginApplicantAPI = async (email: string, password: string, fullName: string): Promise<LoginResponse> => {
    try {
        const response = await axios.post(`${API_BASE_URL}/applicants/login`, { email, password, fullName }, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        throw new Error(handleApiError(error)); // Throw an error with a message
    }
};

// Function to logout an applicant
export const logoutApplicantAPI = async (): Promise<void> => {
    try {
        const response = await axios.post(`${API_BASE_URL}/applicants/logout`, {}, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        throw new Error(handleApiError(error)); // Throw an error with a message
    }
};

// Function to refresh access token for an applicant
export const refreshAccessTokenAPI = async (): Promise<{ accessToken: string; refreshToken: string }> => {
    try {
        const response = await axios.post(`${API_BASE_URL}/applicants/refresh-token`);
        return response.data.data;
    } catch (error) {
        throw new Error(handleApiError(error)); // Throw an error with a message
    }
};

// Function to change current password for an applicant
export const changeCurrentPasswordAPI = async (oldPassword: string, newPassword: string): Promise<void> => {
    try {
        await axios.post(`${API_BASE_URL}/applicants/change-password`, { oldPassword, newPassword }, {
            withCredentials: true,
        });
    } catch (error) {
        throw new Error(handleApiError(error)); // Throw an error with a message
    }
};

// Function to fetch current applicant details
export const getCurrentApplicantAPI = async (): Promise<Applicant> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/applicants/current-user`, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        throw new Error(handleApiError(error)); // Throw an error with a message
    }
};

// Function to update account details for an applicant
export const updateApplicantAccountDetailsAPI = async (fullName: string, email: string): Promise<ApiResponse> => {
    try {
        const response = await axios.patch(`${API_BASE_URL}/applicants/update-account`, { fullName, email }, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        throw new Error(handleApiError(error)); // Throw an error with a message
    }
};

// Function to update avatar for an applicant
export const updateApplicantAvatarAPI = async (formData: FormData): Promise<ApiResponse> => {
    try {
        const response = await axios.patch(`${API_BASE_URL}/applicants/avatar`, formData, {
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

// Function to fetch all jobs applied by the current applicant
export const getAllAppliedJobsAPI = async (): Promise<Job[]> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/applicants/c/applied-jobs`, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        throw new Error(handleApiError(error)); // Throw an error with a message
    }
};

