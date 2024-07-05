// src/store/useApplicantStore.ts

import { create } from 'zustand';
import { Applicant } from '../types/index.types';

type ApplicantState = {
  currentApplicant: Applicant | null;
  setCurrentApplicant: (applicant: Applicant | null) => void;
  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
};

export const useApplicantStore = create<ApplicantState>((set) => ({
  currentApplicant: null,
  setCurrentApplicant: (applicant) => set({ currentApplicant: applicant }),
  accessToken: null,
  setAccessToken: (token) => set({ accessToken: token }),
}));
