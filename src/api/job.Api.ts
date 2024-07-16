// src/api/jobApi.ts

import axios, { AxiosResponse } from 'axios';
import { ApiResponse, Job, JobFilters } from '../types/index.types';

const API_BASE_URL = 'http://localhost:8000/api/v1'

export interface filterJob extends ApiResponse {
    data: {
        jobs: Job[]
    }
}

// Publish a new job
export const publishJobAPI = async (formData: FormData): Promise<AxiosResponse> => {
    const response = await axios.post(`${API_BASE_URL}/jobs`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        withCredentials: true
    });
    console.log("response,", response);

    return response;
};

// Get all jobs
export const getAllJobsAPI = async (): Promise<AxiosResponse> => {
    const response = await axios.get(`${API_BASE_URL}/jobs/getAllJobs`);
    return response;
};

// Get job by ID
export const getJobByIdAPI = async (jobId: string): Promise<AxiosResponse> => {
    const response = await axios.get(`${API_BASE_URL}/jobs/${jobId}`);
    return response;
};

// Update job
export const updateJobAPI = async (jobId: string, formData: FormData): Promise<AxiosResponse> => {
    const response = await axios.put(`${API_BASE_URL}/jobs/${jobId}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        withCredentials: true
    });
    return response;
};

// Delete job
export const deleteJobAPI = async (jobId: string): Promise<void> => {
    await axios.delete(`${API_BASE_URL}/jobs/${jobId}`, {
        withCredentials: true
    });
};

// Filter jobs
export const filterJobAPI = async (filters: JobFilters): Promise<filterJob> => {
    const response = await axios.get(`${API_BASE_URL}/jobs/filter`, {
        params: filters,
    });
    console.log("response", response);

    return response.data;
};
