// src/api/employer.ts

import axios from 'axios';
import { ApiResponse, Employer, Job } from '../types/index.types';

const API_BASE_URL = 'http://localhost:8000/api/v1/employers'; // Replace with your backend base URL

export interface LoginResponse extends ApiResponse {
    data: {
        accessToken: string;
        refreshToken: string;
        user: Employer;
    }
}


// Register Employer
export const registerEmployerAPI = async (formData: FormData): Promise<ApiResponse> => {
    const response = await axios.post(`${API_BASE_URL}/register`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    console.log("response.data", response.data);

    return response.data;
};

// Generate Access and Refresh Tokens
// Note: This function is part of the login and refresh flow, not called directly on the frontend

// Login Employer
export const loginEmployerAPI = async (email: string, password: string, fullName: string): Promise<LoginResponse> => {
    const response = await axios.post(`${API_BASE_URL}/login`, { email, password, fullName });
    return response.data;
};

// Logout Employer
export const logoutEmployerAPI = async (): Promise<void> => {
    await axios.post(`${API_BASE_URL}/logout`);
};

// Refresh Access Token
export const refreshAccessTokenAPI = async (): Promise<{ accessToken: string; refreshToken: string }> => {
    const response = await axios.post(`${API_BASE_URL}/refresh-token`);
    return response.data;
};

// Change Current Password
export const changeCurrentPasswordAPI = async (oldPassword: string, newPassword: string): Promise<void> => {
    await axios.put(`${API_BASE_URL}/change-password`, { oldPassword, newPassword });
};

// Get Current Employer
export const getCurrentEmployerAPI = async (): Promise<Employer> => {
    const response = await axios.get(`${API_BASE_URL}/current-user`);
    return response.data;
};

// Update Account Details
export const updateEmployerAccountDetailsAPI = async (data: Partial<Employer>): Promise<Employer> => {
    const response = await axios.patch(`${API_BASE_URL}/update-account`, data);
    return response.data;
};

// Update Employer Avatar
export const updateEmployerAvatarAPI = async (formData: FormData): Promise<Employer> => {
    const response = await axios.patch(`${API_BASE_URL}/avatar`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data;
};

// Get All Created Jobs
export const getAllCreatedJobsAPI = async (): Promise<Job[]> => {
    const response = await axios.get(`${API_BASE_URL}/c/created-jobs`);
    return response.data;
};
