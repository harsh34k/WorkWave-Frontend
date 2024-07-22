// src/hooks/useEmployerActions.ts

import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
    registerEmployerAPI,
    loginEmployerAPI,
    logoutEmployerAPI,
    refreshAccessTokenAPI,
    changeCurrentPasswordAPI,
    getCurrentEmployerAPI,
    updateEmployerAccountDetailsAPI,
    updateEmployerAvatarAPI,
    getAllCreatedJobsAPI
} from '../api/employer.Api';
import { useEmployerStore } from '../stores/useEmployerStore';
import { useJobStore } from '../stores/useJobStore';
import { ApiResponse, Employer, Job } from '../types/index.types';

export const useEmployerActions = () => {
    const queryClient = useQueryClient();
    const { setCurrentEmployer, setAccessToken } = useEmployerStore();
    const { setJobList } = useJobStore();

    const registerEmployer = useMutation((formData: FormData) => registerEmployerAPI(formData), {

        onSuccess: () => {
            queryClient.invalidateQueries('currentEmployer');
        },
    });

    const loginEmployer = useMutation((data: { email: string; password: string, fullName: string }) => loginEmployerAPI(data.email, data.password, data.fullName), {
        onSuccess: (data) => {
            console.log("data", data);

            setAccessToken(data.data.accessToken);
            setCurrentEmployer(data.data.user);
            queryClient.invalidateQueries('currentEmployer');
        },
    });

    const logoutEmployer = useMutation(logoutEmployerAPI, {
        onSuccess: () => {
            console.log("reaching logutemployer useEmployerActions");

            setAccessToken(null);
            setCurrentEmployer(null);
            queryClient.invalidateQueries('currentEmployer');
        },
    });

    const refreshAccessToken = useMutation(refreshAccessTokenAPI, {
        onSuccess: (data) => {
            setAccessToken(data.accessToken);
        },
    });

    const changeCurrentPassword = useMutation((data: { oldPassword: string; newPassword: string }) => changeCurrentPasswordAPI(data.oldPassword, data.newPassword));

    const getCurrentEmployer = useQuery<ApiResponse>('currentEmployer', getCurrentEmployerAPI, {
        enabled: false,

        onSuccess: (data) => {
            console.log("bhai yha to aa rha hu", data);
            setJobList(data.data.createdJobs)
            setCurrentEmployer(data.data)
        }
    });

    const updateEmployerAccountDetails = useMutation(updateEmployerAccountDetailsAPI, {
        onSuccess: (data) => {
            console.log("data,", data);

            setCurrentEmployer(data.data)
            queryClient.invalidateQueries('currentEmployer');
        },
    });

    const updateEmployerAvatar = useMutation(updateEmployerAvatarAPI, {
        onSuccess: () => {
            queryClient.invalidateQueries('currentEmployer');
        },
    });

    const getAllCreatedJobs = useQuery<Job[]>('createdJobs', getAllCreatedJobsAPI, {
        enabled: false,
        onSuccess: () => {

            queryClient.invalidateQueries('createdJobs');
        }
    });

    return {
        registerEmployer,
        loginEmployer,
        logoutEmployer,
        refreshAccessToken,
        changeCurrentPassword,
        getCurrentEmployer,
        updateEmployerAccountDetails,
        updateEmployerAvatar,
        getAllCreatedJobs,
    };
};
