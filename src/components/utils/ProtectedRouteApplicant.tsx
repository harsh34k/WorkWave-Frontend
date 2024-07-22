// src/components/ProtectedRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useEmployerStore } from '../../stores/useEmployerStore';
import { useApplicantStore } from '../../stores/useApplicantStore';
import { Applicant, Employer } from '../../types/index.types';

interface ProtectedRouteProps {
    children: React.ReactNode;
    redirectPath: string;
}


const ProtectedRouteApplicant: React.FC<ProtectedRouteProps> = ({ children, redirectPath }) => {
    const { currentEmployer } = useEmployerStore();
    const { currentApplicant } = useApplicantStore();
    const userType = currentEmployer ? 'employer' : currentApplicant ? 'applicant' : null;
    console.log("userType", userType);


    if (userType === "applicant") {
        return <>{children}</>;
    }

    return <>{<Navigate to={redirectPath} />}</>;
};

export default ProtectedRouteApplicant;
