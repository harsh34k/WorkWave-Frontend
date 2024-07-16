// src/types/index.ts

export enum WorkMode {
    ONSITE,
    REMOTE,
    HYBRID,
}

export enum Experience {
    FRESHER,
    ONE_TO_TWO_YEARS,
    TWO_TO_THREE_YEARS,
    THREE_TO_FOUR_YEARS,
    FOUR_TO_FIVE_YEARS,
    ABOVE_FIVE_YEARS,
}

export enum Salary {
    BELOW_3_LAKHS,
    FROM_3_TO_6_LAKHS,
    FROM_6_TO_10_LAKHS,
    FROM_10_TO_15_LAKHS,
    ABOVE_15_LAKHS,
}

export enum Education {
    TENTH,
    TWELFTH,
    GRADUATION,
    POSTGRADUATION,
    PHD

}

export type Job = {
    data(arg0: string, data: any): unknown;
    id: string;
    title: string;
    description: string;
    location: string;
    workMode: WorkMode;
    experience: Experience;
    salary: Salary;
    education: Education;
    employerId: string;
};

export type Applicant = {
    id: string;
    email: string;
    password: string;
    fullName: string;
    avatarUrl?: string;
    refreshToken?: string;
};

export type Employer = {
    id: string;
    email: string;
    password: string;
    fullName: string;
    companyName: string;
    createdJobs: Job[];
    jobTitle: string;
    avatarUrl?: string;
    refreshToken?: string;
};


export interface JobFilters {
    title?: string;
    description?: string;
    location?: string;
    workMode?: WorkMode;
    experience?: Experience;
    salary?: Salary;
    education?: string;
}

export interface ApiResponse {
    statusCode: number;
    data: any;
    message: string;
    succcess: boolean
}