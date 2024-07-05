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
import { Employer, Job } from '../types/index.types';

export const useEmployerActions = () => {
    const queryClient = useQueryClient();
    const { setCurrentEmployer, setAccessToken } = useEmployerStore();

    const registerEmployer = useMutation((formData: FormData) => registerEmployerAPI(formData), {
        onSuccess: () => {
            queryClient.invalidateQueries('currentEmployer');
        },
    });

    const loginEmployer = useMutation((data: { email: string; password: string, fullName: string }) => loginEmployerAPI(data.email, data.password, data.fullName), {
        onSuccess: (data) => {
            setAccessToken(data.accessToken);
            setCurrentEmployer(data.user);
            queryClient.invalidateQueries('currentEmployer');
        },
    });

    const logoutEmployer = useMutation(logoutEmployerAPI, {
        onSuccess: () => {
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

    const getCurrentEmployer = useQuery<Employer>('currentEmployer', getCurrentEmployerAPI, {
        onSuccess: (data) => setCurrentEmployer(data),
    });

    const updateEmployerAccountDetails = useMutation(updateEmployerAccountDetailsAPI, {
        onSuccess: () => {
            queryClient.invalidateQueries('currentEmployer');
        },
    });

    const updateEmployerAvatar = useMutation(updateEmployerAvatarAPI, {
        onSuccess: () => {
            queryClient.invalidateQueries('currentEmployer');
        },
    });

    const getAllCreatedJobs = useQuery<Job[]>('createdJobs', getAllCreatedJobsAPI);

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
