// src/store/useEmployerStore.ts

import { create } from 'zustand';
import { Employer } from '../types/index.types';

type EmployerState = {
    currentEmployer: Employer | null;
    setCurrentEmployer: (employer: Employer | null) => void;
    accessToken: string | null;
    setAccessToken: (token: string | null) => void;
};

export const useEmployerStore = create<EmployerState>((set) => ({
    currentEmployer: null,
    setCurrentEmployer: (employer) => set({ currentEmployer: employer }),
    accessToken: null,
    setAccessToken: (token) => set({ accessToken: token }),
}));
