// src/hooks/useApplicationActions.ts

import { QueryFunctionContext, useMutation, useQuery, useQueryClient } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { Application, ApiResponse, Applicant } from '../types/index.types';
import { useApplicationStore } from '../stores/useApplicationStore';
import { submitApplicationAPI, getAllApplicationsAPI, getApplicationByIdAPI, deleteApplicationAPI, getAllApplicationOfJobById, } from '../api/application.Api';

export const useApplicationActions = () => {
    const queryClient = useQueryClient();
    const { addApplication, updateApplication, deleteApplication, setApplicationList } = useApplicationStore();

    const applyJob = useMutation(
        async (formData: FormData) => {
            console.log("formData", formData);

            const response = await submitApplicationAPI(formData);
            // return response.data;
            return response
        },
        {
            onSuccess: (data) => {
                console.log("aapplicatiin data", data);
                queryClient.invalidateQueries('applications');
                // setApplicationList(data.data.job)

            },
            onError: (error: AxiosError) => {
                console.error('Error applying for job', error);
            },
        }
    );

    // const updateJobApplication = useMutation(
    //     async ({ applicationId, formData }: { applicationId: string; formData: FormData }) => {
    //         const response = await updateApplicationAPI(applicationId, formData);
    //         return response.data;
    //     },
    //     {
    //         onSuccess: (data) => {
    //             updateApplication(data.data);
    //             queryClient.invalidateQueries('applications');
    //         },
    //         onError: (error: AxiosError) => {
    //             console.error('Error updating application', error);
    //         },
    //     }
    // );
    // const getAllApplications = useQuery<AxiosResponse>("applications", getAllApplicationsAPI, {

    //     onSuccess: (data) => {
    //         console.log("aapplicatiin data", data);
    //         addApplication(data.data);
    //     },
    // })
    const getAllApplications = useQuery(
        "applications",
        async (): Promise<ApiResponse> => {
            const response: ApiResponse = await getAllApplicationsAPI();
            console.log("response dekhte hai", response);

            return response.data;
        },
        {
            enabled: false,
            onSuccess: (data: Application[]

            ) => {
                console.log("application data", data);

                setApplicationList(data)
                // addApplication(data);
            },
        }
    );

    const getApplicationById = (applicationId: string) => useQuery(
        ["applications", applicationId],
        async ({ queryKey }: QueryFunctionContext): Promise<ApiResponse> => {
            const appId = queryKey[1] as string; // The applicationId is the second item in the queryKey array
            console.log("appI(d", appId);

            const response = await getApplicationByIdAPI(appId);
            console.log("response.datafrom getapplicationbyid", getApplicationById);

            return response.data;
        }, {
        enabled: false,
        onSuccess: (data) => {
            console.log("application data", data);
            // addApplication(data);
        },
    }
    );
    const getAllApplicationOfAJobById = (applicationId: string) => useQuery(
        ["applications", applicationId],
        async ({ queryKey }: QueryFunctionContext): Promise<Application[]> => {
            const appId = queryKey[1] as string; // The applicationId is the second item in the queryKey array
            console.log("appI(d", appId);

            const response = await getAllApplicationOfJobById(appId);
            console.log("response.datafrom getapplicationbyid for employer", response.data);

            return response.data;
        }, {
        enabled: false,
        onSuccess: (data) => {
            console.log("application data", data);
            // addApplication(data);
        },
    }
    );

    const deleteJobApplication = useMutation(
        async (applicationId: string) => {
            await deleteApplicationAPI(applicationId);
        },
        {
            onSuccess: (_, applicationId) => {
                deleteApplication(applicationId as string);
                queryClient.invalidateQueries('applications');
            },
            onError: (error: AxiosError) => {
                console.error('Error deleting application', error);
            },
        }
    );

    return {
        applyJob,
        getAllApplications,
        getApplicationById,
        getAllApplicationOfAJobById,
        deleteJobApplication,
    };
};
