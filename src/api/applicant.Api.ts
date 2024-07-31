// import axios from 'axios';
// import { ApiResponse, Applicant, Job } from '../types/index.types';
// import { LoginResponse } from './employer.Api';

// const API_BASE_URL = 'http://localhost:8000/api/v1'; // Replace with your backend API base URL

// // Function to register a new applicant
// export const registerApplicantAPI = async (formData: FormData): Promise<ApiResponse> => {

//     const response = await axios.post(`${API_BASE_URL}/applicants/register`, formData, {
//         headers: {
//             'Content-Type': 'multipart/form-data',
//         },
//     });
//     console.log("respnse hai from applicant", response);

//     return response.data;

// };

// // Function to login an applicant
// export const loginApplicantAPI = async (email: string, password: string, fullName: string): Promise<LoginResponse> => {

//     const response = await axios.post(`${API_BASE_URL}/applicants/login`, { email, password, fullName }, {
//         withCredentials: true
//     });
//     return response.data;

// };

// // Function to logout an applicant
// export const logoutApplicantAPI = async (): Promise<void> => {

//     console.log("reaching logout page");
//     try {

//         const response = await axios.post(`${API_BASE_URL}/applicants/logout`, {}, {
//             withCredentials: true
//         })
//         console.log("ressponse from logout", response);

//         return response.data;

//     } catch (error) {
//         console.log("error", error);

//     }

// };

// // Function to refresh access token for an applicant
// export const refreshAccessTokenAPI = async (): Promise<{ accessToken: string; refreshToken: string }> => {
//     const response = await axios.post(`${API_BASE_URL}/refresh-token`);
//     return response.data.data;
// };

// // Function to change current password for an applicant
// export const changeCurrentPasswordAPI = async (oldPassword: string, newPassword: string): Promise<void> => {

//     await axios.post(`${API_BASE_URL}/applicants/change-password`, { oldPassword, newPassword }, {
//         withCredentials: true
//     });

// };

// // Function to fetch current applicant details
// export const getCurrentApplicantAPI = async (): Promise<Applicant> => {

//     try {
//         const response = await axios.get(`${API_BASE_URL}/applicants/current-user`, {
//             withCredentials: true
//         });
//         console.log("response hai", response);

//         return response.data;
//     } catch (error) {
//         console.log("error", error);
//         throw error
//     }

// };

// // Function to update account details for an applicant
// export const updateApplicantAccountDetailsAPI = async (fullName: string, email: string): Promise<ApiResponse> => {

//     const response = await axios.patch(`${API_BASE_URL}/applicants/update-account`, { fullName, email }, {
//         withCredentials: true
//     });
//     return response.data;

// };

// // Function to update avatar for an applicant
// export const updateApplicantAvatarAPI = async (formData: FormData): Promise<ApiResponse> => {


//     const response = await axios.patch(`${API_BASE_URL}/applicants/avatar`, formData, {
//         withCredentials: true,
//         headers: {
//             'Content-Type': 'multipart/form-data',
//         },
//     });
//     return response.data;


// };

// // Function to fetch all jobs applied by the current applicant
// export const getAllAppliedJobsAPI = async (): Promise<Job[]> => {


//     const response = await axios.get(`${API_BASE_URL}/applicants/c/applied-jobs`, {
//         withCredentials: true
//     });
//     return response.data;


// };

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
        const response = await axios.post(`${API_BASE_URL}/refresh-token`);
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

