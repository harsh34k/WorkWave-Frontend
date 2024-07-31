// // src/api/applicationApi.ts

// import axios, { AxiosResponse } from 'axios';
// import { ApiResponse, Application } from '../types/index.types';

// const API_BASE_URL = 'http://localhost:8000/api/v1/applications'

// export interface filterApplication extends ApiResponse {
//     data: {
//         applications: Application[]
//     }
// }

// // Submit a new application
// export const submitApplicationAPI = async (formData: FormData): Promise<AxiosResponse> => {
//     const response = await axios.post(`${API_BASE_URL}/apply`, formData, {
//         headers: {
//             'Content-Type': 'multipart/form-data',
//         },
//         withCredentials: true
//     });
//     console.log("response,", response);

//     return response;
// };

// // Get all applications
// export const getAllApplicationsAPI = async (): Promise<ApiResponse> => {
//     const response = await axios.get(`${API_BASE_URL}/applied-jobs`, {
//         withCredentials: true
//     });
//     console.log("yar response hai", response);

//     return response.data;
// };

// // Get application by ID
// export const getApplicationByIdAPI = async (applicationId: string): Promise<ApiResponse> => {
//     const response = await axios.get(`${API_BASE_URL}/${applicationId}`, {
//         withCredentials: true
//     });
//     return response.data;
// };
// export const getAllApplicationOfJobById = async (applicationId: string): Promise<ApiResponse> => {
//     const response = await axios.get(`${API_BASE_URL}/employer/${applicationId}`, {
//         withCredentials: true
//     });
//     console.log("response from getAllApplicationOfJobById ", response);

//     return response.data;
// };


// // Delete application
// export const deleteApplicationAPI = async (applicationId: string): Promise<void> => {
//     await axios.delete(`${API_BASE_URL}/withdraw/${applicationId}`, {
//         withCredentials: true
//     });
// };


import axios, { AxiosResponse } from 'axios';
import { ApiResponse, Application } from '../types/index.types';

const API_BASE_URL = 'https://workwave-production.up.railway.app/api/v1/jobs/getAllJobs';

// Common error handling logic
const handleApiError = (error: any): string => {
    console.error('API Error:', error);
    if (axios.isAxiosError(error)) {
        // Extract specific error message if available
        return error.response?.data?.message || 'An unexpected error occurred';
    }
    return 'An unexpected error occurred';
};

export interface filterApplication extends ApiResponse {
    data: {
        applications: Application[];
    };
}

// Submit a new application
export const submitApplicationAPI = async (formData: FormData): Promise<AxiosResponse> => {
    try {
        const response = await axios.post(`${API_BASE_URL}/apply`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            withCredentials: true,
        });
        console.log("response,", response);
        return response;
    } catch (error) {
        throw new Error(handleApiError(error)); // Throw an error with a message
    }
};

// Get all applications
export const getAllApplicationsAPI = async (): Promise<ApiResponse> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/applied-jobs`, {
            withCredentials: true,
        });
        console.log("yar response hai", response);
        return response.data;
    } catch (error) {
        throw new Error(handleApiError(error)); // Throw an error with a message
    }
};

// Get application by ID
export const getApplicationByIdAPI = async (applicationId: string): Promise<ApiResponse> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${applicationId}`, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        throw new Error(handleApiError(error)); // Throw an error with a message
    }
};

// Get all applications of a job by ID
export const getAllApplicationOfJobById = async (applicationId: string): Promise<ApiResponse> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/employer/${applicationId}`, {
            withCredentials: true,
        });
        console.log("response from getAllApplicationOfJobById ", response);
        return response.data;
    } catch (error) {
        throw new Error(handleApiError(error)); // Throw an error with a message
    }
};

// Delete application
export const deleteApplicationAPI = async (applicationId: string): Promise<void> => {
    try {
        await axios.delete(`${API_BASE_URL}/withdraw/${applicationId}`, {
            withCredentials: true,
        });
    } catch (error) {
        throw new Error(handleApiError(error)); // Throw an error with a message
    }
};

