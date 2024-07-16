// // src/store/useApplicantStore.ts

// import { create } from 'zustand';
// import { persist } from 'zustand/middleware';
// import { Applicant } from '../types/index.types';

// type ApplicantState = {
//   currentApplicant: Applicant | null;
//   setCurrentApplicant: (applicant: Applicant | null) => void;
//   accessToken: string | null;
//   setAccessToken: (token: string | null) => void;
// };

// export const useApplicantStore = create<ApplicantState>(persist((set) => ({
//   currentApplicant: null,
//   setCurrentApplicant: (applicant) => set({ currentApplicant: applicant }),
//   accessToken: null,
//   setAccessToken: (token) => set({ accessToken: token }),
// }),{
//   name: 'applicantStore',
// }));


// src/store/useApplicantStore.ts

import { create } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';
import { Applicant } from '../types/index.types';

type ApplicantState = {
  currentApplicant: Applicant | null;
  setCurrentApplicant: (applicant: Applicant | null) => void;
  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
};

type ApplicantPersist = (
  config: (set: any, get: any, api: any) => ApplicantState,
  options: PersistOptions<ApplicantState>
) => (set: any, get: any, api: any) => ApplicantState;

export const useApplicantStore = create<ApplicantState>(
  (persist as ApplicantPersist)(
    (set) => ({
      currentApplicant: null,
      setCurrentApplicant: (applicant) => set({ currentApplicant: applicant }),
      accessToken: null,
      setAccessToken: (token) => set({ accessToken: token }),
    }),
    {
      name: 'applicantStore', // name of the item in storage (must be unique)
    }
  )
);
