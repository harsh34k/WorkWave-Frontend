
// // // src/stores/useJobStore.ts

// // import { create } from 'zustand';
// // import { Job } from '../types/index.types';

// // interface JobStore {
// //     currentJob: Job | null;
// //     setCurrentJob: (job: Job | null) => void;
// //     jobList: Job[];
// //     setJobList: (jobs: Job[]) => void;
// // }

// // export const useJobStore = create<JobStore>((set) => ({
// //     currentJob: null,
// //     setCurrentJob: (job) => set({ currentJob: job }),
// //     jobList: [],
// //     setJobList: (jobs) => set({ jobList: jobs }),
// // }));


// // src/stores/useJobStore.ts

// import { create } from 'zustand';
// import { persist, PersistOptions } from 'zustand/middleware';
// import { Job } from '../types/index.types';

// interface JobStore {
//     currentJob: Job | null;
//     setCurrentJob: (job: Job | null) => void;
//     jobList: Job[];
//     setJobList: (jobs: Job[]) => void;
// }

// type JobPersist = (
//     config: (set: any, get: any, api: any) => JobStore,
//     options: PersistOptions<JobStore>
// ) => (set: any, get: any, api: any) => JobStore;

// export const useJobStore = create<JobStore>(
//     (persist as JobPersist)(
//         (set) => ({
//             currentJob: null,
//             setCurrentJob: (job) => set({ currentJob: job }),
//             jobList: [],
//             setJobList: (jobs) => set({ jobList: jobs }),
//         }),
//         {
//             name: 'jobStore', // name of the item in storage (must be unique)
//         }
//     )
// );


// src/stores/useJobStore.ts
// src/stores/useJobStore.ts
import { create } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';
import { Job } from '../types/index.types';

interface JobStore {
    currentJob: Job | null;
    setCurrentJob: (job: Job | null) => void;
    jobList: Job[];
    setJobList: (jobs: Job[]) => void;
    addJob: (job: Job) => void;
    updateJob: (job: Job) => void; // Add this line
    deleteJob: (jobId: string) => void; // Add this line
}

type JobPersist = (
    config: (set: any, get: any, api: any) => JobStore,
    options: PersistOptions<JobStore>
) => (set: any, get: any, api: any) => JobStore;

export const useJobStore = create<JobStore>(
    (persist as JobPersist)(
        (set) => ({
            currentJob: null,
            setCurrentJob: (job) => set({ currentJob: job }),
            jobList: [],
            setJobList: (jobs) => set({ jobList: jobs }),
            addJob: (job) => set((state: any) => ({ jobList: [...state.jobList, job] })),
            updateJob: (updatedJob) => set((state: any) => ({
                jobList: state.jobList.map((job: any) =>
                    job.id === updatedJob.id ? updatedJob : job
                ),
            })), // Implement updateJob
            deleteJob: (jobId) => set((state: any) => ({
                jobList: state.jobList.filter((job: any) => job.id !== jobId),
            })), // Implement deleteJob
        }),
        {
            name: 'jobStore', // name of the item in storage (must be unique)
        }
    )
);

