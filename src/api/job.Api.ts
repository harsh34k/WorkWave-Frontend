// src/api/jobApi.ts

import axios from 'axios';
import { Job, JobFilters } from '../types/index.types';

const API_BASE_URL = 'http://localhost:8000/api/v1'

// Publish a new job
export const publishJobAPI = async (formData: FormData): Promise<Job> => {
    const response = await axios.post(`${API_BASE_URL}/jobs`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data.data;
};

// Get all jobs
export const getAllJobsAPI = async (): Promise<Job[]> => {
    const response = await axios.get(`${API_BASE_URL}/jobs/getAllJobs`);
    return response.data.data;
};

// Get job by ID
export const getJobByIdAPI = async (jobId: string): Promise<Job> => {
    const response = await axios.get(`${API_BASE_URL}/jobs/${jobId}`);
    return response.data.data;
};

// Update job
export const updateJobAPI = async (jobId: string, formData: FormData): Promise<Job> => {
    const response = await axios.put(`${API_BASE_URL}/jobs/${jobId}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data.data;
};

// Delete job
export const deleteJobAPI = async (jobId: string): Promise<void> => {
    await axios.delete(`${API_BASE_URL}/jobs/${jobId}`);
};

// Filter jobs
export const filterJobAPI = async (filters: JobFilters): Promise<Job[]> => {
    const response = await axios.get(`${API_BASE_URL}/jobs/filter`, {
        params: filters,
    });
    return response.data.data;
};
