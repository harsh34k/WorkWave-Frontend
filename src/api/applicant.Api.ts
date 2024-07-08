import axios from 'axios';
import { ApiResponse, Applicant, Job } from '../types/index.types';
import { LoginResponse } from './employer.Api';

const API_BASE_URL = 'http://localhost:8000/api/v1'; // Replace with your backend API base URL

// Function to register a new applicant
export const registerApplicantAPI = async (formData: FormData): Promise<ApiResponse> => {

    const response = await axios.post(`${API_BASE_URL}/applicants/register`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    console.log("respnse hai from applicant", response);

    return response.data;

};

// Function to login an applicant
export const loginApplicantAPI = async (email: string, password: string, fullName: string): Promise<LoginResponse> => {

    const response = await axios.post(`${API_BASE_URL}/applicants/login`, { email, password, fullName });
    return response.data;

};

// Function to logout an applicant
export const logoutApplicantAPI = async (): Promise<void> => {

    await axios.post(`${API_BASE_URL}/applicants/logout`);

};

// Function to refresh access token for an applicant
export const refreshAccessTokenAPI = async (): Promise<{ accessToken: string; refreshToken: string }> => {
    const response = await axios.post(`${API_BASE_URL}/refresh-token`);
    return response.data.data;
};

// Function to change current password for an applicant
export const changeCurrentPasswordAPI = async (oldPassword: string, newPassword: string): Promise<void> => {

    await axios.post(`${API_BASE_URL}/applicants/change-password`, { oldPassword, newPassword });

};

// Function to fetch current applicant details
export const getCurrentApplicantAPI = async (): Promise<Applicant> => {

    const response = await axios.get(`${API_BASE_URL}/applicants/current-user`);
    return response.data.data;

};

// Function to update account details for an applicant
export const updateApplicantAccountDetailsAPI = async (fullName: string, email: string): Promise<Applicant> => {

    const response = await axios.patch(`${API_BASE_URL}/applicants/update-account`, { fullName, email });
    return response.data.data;

};

// Function to update avatar for an applicant
export const updateApplicantAvatarAPI = async (avatar: File): Promise<Applicant> => {


    const formData = new FormData();
    formData.append('avatarUrl', avatar);

    const response = await axios.patch(`${API_BASE_URL}/applicants/avatar`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data.data;


};

// Function to fetch all jobs applied by the current applicant
export const getAllAppliedJobsAPI = async (): Promise<Job[]> => {


    const response = await axios.get(`${API_BASE_URL}/applicants/c/applied-jobs`);
    return response.data.data;


};
