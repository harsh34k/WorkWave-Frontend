// src/store/useEmployerStore.ts

// import { create } from 'zustand';
// import { Employer } from '../types/index.types';

// type EmployerState = {
//     currentEmployer: Employer | null;
//     setCurrentEmployer: (employer: Employer | null) => void;
//     accessToken: string | null;
//     setAccessToken: (token: string | null) => void;
// };

// export const useEmployerStore = create<EmployerState>((set) => ({
//     currentEmployer: null,
//     setCurrentEmployer: (employer) => set({ currentEmployer: employer }),
//     accessToken: null,
//     setAccessToken: (token) => set({ accessToken: token }),
// }));


// src/store/useEmployerStore.ts

import { create } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';
import { Employer } from '../types/index.types';

type EmployerState = {
    currentEmployer: Employer | null;
    setCurrentEmployer: (employer: Employer | null) => void;
    accessToken: string | null;
    setAccessToken: (token: string | null) => void;
};

type EmployerPersist = (
    config: (set: any, get: any, api: any) => EmployerState,
    options: PersistOptions<EmployerState>
) => (set: any, get: any, api: any) => EmployerState;

export const useEmployerStore = create<EmployerState>(
    (persist as EmployerPersist)(
        (set) => ({
            currentEmployer: null,
            setCurrentEmployer: (employer) => set({ currentEmployer: employer }),
            accessToken: null,
            setAccessToken: (token) => set({ accessToken: token }),
        }),
        {
            name: 'employerStore', // name of the item in storage (must be unique)
        }
    )
);
