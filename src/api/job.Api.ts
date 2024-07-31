// // src/api/jobApi.ts

// import axios, { AxiosResponse } from 'axios';
// import { ApiResponse, Job, JobFilters } from '../types/index.types';

// const API_BASE_URL = 'http://localhost:8000/api/v1'

// export interface filterJob extends ApiResponse {
//     data: {
//         jobs: Job[]
//     }
// }

// // Publish a new job
// export const publishJobAPI = async (formData: FormData): Promise<AxiosResponse> => {
//     const response = await axios.post(`${API_BASE_URL}/jobs`, formData, {
//         headers: {
//             'Content-Type': 'multipart/form-data',
//         },
//         withCredentials: true
//     });
//     console.log("response,", response);

//     return response;
// };

// // Get all jobs
// export const getAllJobsAPI = async (): Promise<AxiosResponse> => {
//     const response = await axios.get(`${API_BASE_URL}/jobs/getAllJobs`);
//     return response;
// };

// // Get job by ID
// export const getJobByIdAPI = async (jobId: string): Promise<AxiosResponse> => {
//     const response = await axios.get(`${API_BASE_URL}/jobs/${jobId}`);
//     return response;
// };

// // Update job
// export const updateJobAPI = async (jobId: string, formData: FormData): Promise<AxiosResponse> => {
//     const response = await axios.put(`${API_BASE_URL}/jobs/${jobId}`, formData, {
//         headers: {
//             'Content-Type': 'multipart/form-data',
//         },
//         withCredentials: true
//     });
//     return response;
// };

// // Delete job
// export const deleteJobAPI = async (jobId: string): Promise<void> => {
//     await axios.delete(`${API_BASE_URL}/jobs/${jobId}`, {
//         withCredentials: true
//     });
// };

// // Filter jobs
// export const filterJobAPI = async (filters: JobFilters): Promise<AxiosResponse> => {
//     const response = await axios.get(`${API_BASE_URL}/jobs/filter`, {
//         params: filters,
//     });
//     console.log("response", response);

//     return response.data;
// };


import axios, { AxiosResponse } from 'axios';
import { ApiResponse, Job, JobFilters } from '../types/index.types';

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

export interface filterJob extends ApiResponse {
    data: {
        jobs: Job[];
    };
}

// Publish a new job
export const publishJobAPI = async (formData: FormData): Promise<AxiosResponse> => {
    try {
        const response = await axios.post(`${API_BASE_URL}/jobs`, formData, {
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

// Get all jobs
export const getAllJobsAPI = async (): Promise<AxiosResponse> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/jobs/getAllJobs`);
        return response;
    } catch (error) {
        throw new Error(handleApiError(error)); // Throw an error with a message
    }
};

// Get job by ID
export const getJobByIdAPI = async (jobId: string): Promise<AxiosResponse> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/jobs/${jobId}`);
        return response;
    } catch (error) {
        throw new Error(handleApiError(error)); // Throw an error with a message
    }
};

// Update job
export const updateJobAPI = async (jobId: string, formData: FormData): Promise<AxiosResponse> => {
    try {
        const response = await axios.put(`${API_BASE_URL}/jobs/${jobId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            withCredentials: true,
        });
        return response;
    } catch (error) {
        throw new Error(handleApiError(error)); // Throw an error with a message
    }
};

// Delete job
export const deleteJobAPI = async (jobId: string): Promise<void> => {
    try {
        await axios.delete(`${API_BASE_URL}/jobs/${jobId}`, {
            withCredentials: true,
        });
    } catch (error) {
        throw new Error(handleApiError(error)); // Throw an error with a message
    }
};

// Filter jobs
export const filterJobAPI = async (filters: JobFilters): Promise<AxiosResponse> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/jobs/filter`, {
            params: filters,
        });
        console.log("response", response);
        return response.data;
    } catch (error) {
        throw new Error(handleApiError(error)); // Throw an error with a message
    }
};
