// src/hooks/useApplicantActions.ts

import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
    registerApplicantAPI,
    loginApplicantAPI,
    logoutApplicantAPI,
    refreshAccessTokenAPI,
    changeCurrentPasswordAPI,
    getCurrentApplicantAPI,
    updateApplicantAccountDetailsAPI,
    updateApplicantAvatarAPI,
    getAllAppliedJobsAPI
} from '../api/applicant.Api';
import { useApplicantStore } from '../stores/useApplicantStore';
import { Applicant, Job } from '../types/index.types';

export const useApplicantActions = () => {
    const queryClient = useQueryClient();
    const { setCurrentApplicant, setAccessToken } = useApplicantStore();

    const registerApplicant = useMutation((formData: FormData) => registerApplicantAPI(formData), {
        onSuccess: () => {
            queryClient.invalidateQueries('currentApplicant');
        },
    });

    const loginApplicant = useMutation((data: { email: string; fullName: string; password: string }) => loginApplicantAPI(data.email, data.password, data.fullName), {
        onSuccess: (data) => {
            console.log("loginSuccesfull", data);

            setAccessToken(data.data.accessToken);
            setCurrentApplicant(data.data.user);
            queryClient.invalidateQueries('currentApplicant');
        },
    });

    const logoutApplicant = useMutation(logoutApplicantAPI, {
        onSuccess: () => {
            setAccessToken(null);
            setCurrentApplicant(null);
            queryClient.invalidateQueries('currentApplicant');
        },
    });

    const refreshApplicantAccessToken = useMutation(refreshAccessTokenAPI, {
        onSuccess: (data) => {
            setAccessToken(data.accessToken);
        },
    });

    const changeApplicantPassword = useMutation((data: { oldPassword: string; newPassword: string }) => changeCurrentPasswordAPI(data.oldPassword, data.newPassword));

    const getCurrentApplicant = useQuery<Applicant>('currentApplicant', getCurrentApplicantAPI, {
        enabled: false,
        onSuccess: (data) => setCurrentApplicant(data),
    });


    const updateApplicantAccountDetails = useMutation((data: { fullName: string, email: string }) => updateApplicantAccountDetailsAPI(data.fullName, data.email), {
        onSuccess: (data) => {
            queryClient.invalidateQueries('currentApplicant');
            setCurrentApplicant(data.data)
        },
    });


    const updateApplicantAvatar = useMutation(updateApplicantAvatarAPI, {
        onSuccess: (data) => {
            queryClient.invalidateQueries('currentApplicant');
            setCurrentApplicant(data.data)
        },
    });

    const getAllAppliedJobs = useQuery<Job[]>('appliedJobs', getAllAppliedJobsAPI, { enabled: false, staleTime: 5000 });

    return {
        registerApplicant,
        loginApplicant,
        logoutApplicant,
        refreshApplicantAccessToken,
        changeApplicantPassword,
        getCurrentApplicant,
        updateApplicantAccountDetails,
        updateApplicantAvatar,
        getAllAppliedJobs,
    };
};
