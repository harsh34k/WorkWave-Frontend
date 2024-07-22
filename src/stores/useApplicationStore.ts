// src/stores/useApplicationStore.ts
import { create } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';
import { Application } from '../types/index.types';

interface ApplicationStore {
    currentApplication: Application | null;
    setCurrentApplication: (application: Application | null) => void;
    applicationList: Application[];
    setApplicationList: (applications: Application[]) => void;
    addApplication: (application: Application) => void;
    updateApplication: (application: Application) => void;
    deleteApplication: (applicationId: string) => void;
}

type ApplicationPersist = (
    config: (set: any, get: any, api: any) => ApplicationStore,
    options: PersistOptions<ApplicationStore>
) => (set: any, get: any, api: any) => ApplicationStore;

export const useApplicationStore = create<ApplicationStore>(
    (persist as ApplicationPersist)(
        (set) => ({
            currentApplication: null,
            setCurrentApplication: (application) => set({ currentApplication: application }),
            applicationList: [],
            setApplicationList: (applications) => set({ applicationList: applications }),
            addApplication: (application) => set((state: any) => ({ applicationList: [...state.applicationList, application] })),
            updateApplication: (updatedApplication) => set((state: any) => ({
                applicationList: state.applicationList.map((application: any) =>
                    application.id === updatedApplication.id ? updatedApplication : application
                ),
            })),
            deleteApplication: (applicationId) => set((state: any) => ({
                applicationList: state.applicationList.filter((application: any) => application.id !== applicationId),
            })),
        }),
        {
            name: 'applicationStore',
        }
    )
);
