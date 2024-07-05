
// src/stores/useJobStore.ts

import { create } from 'zustand';
import { Job } from '../types/index.types';

interface JobStore {
    currentJob: Job | null;
    setCurrentJob: (job: Job | null) => void;
    jobList: Job[];
    setJobList: (jobs: Job[]) => void;
}

export const useJobStore = create<JobStore>((set) => ({
    currentJob: null,
    setCurrentJob: (job) => set({ currentJob: job }),
    jobList: [],
    setJobList: (jobs) => set({ jobList: jobs }),
}));
