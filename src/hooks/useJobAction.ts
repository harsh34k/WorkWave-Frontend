// src/hooks/useJobActions.ts

import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
    publishJobAPI,
    getAllJobsAPI,
    getJobByIdAPI,
    updateJobAPI,
    deleteJobAPI,
    filterJobAPI
} from '../api/job.Api';
import { JobFilters } from '../types/index.types';
import { AxiosResponse } from 'axios';

export const useJobActions = () => {
    const queryClient = useQueryClient();

    // Publish a new job
    const publishJob = useMutation((formData: FormData) => publishJobAPI(formData), {
        onSuccess: () => {
            queryClient.invalidateQueries('jobs');
        },
    });

    // Get all jobs
    const getAllJobs = useQuery<AxiosResponse>('jobs', getAllJobsAPI, {
        enabled: false
    });

    // Get job by ID
    const getJobById = (jobId: string) => useQuery<AxiosResponse>(['job', jobId], () => getJobByIdAPI(jobId), {
        enabled: false
    });

    // Update job
    const updateJob = useMutation(({ jobId, formData }: { jobId: string, formData: FormData }) => updateJobAPI(jobId, formData), {
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries('jobs');
            queryClient.invalidateQueries(['job', variables.jobId]);
        },
    });

    // Delete job
    const deleteJob = useMutation((jobId: string) => deleteJobAPI(jobId), {
        onSuccess: () => {
            queryClient.invalidateQueries('jobs');
        },
    });

    // Filter jobs
    const filterJobs = useMutation((filters: JobFilters) => filterJobAPI(filters), {
        onSuccess: () => {
            queryClient.invalidateQueries('jobs');
        },
    });

    return {
        publishJob,
        getAllJobs,
        getJobById,
        updateJob,
        deleteJob,
        filterJobs,
    };
};
230.0