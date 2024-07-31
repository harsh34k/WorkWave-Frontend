// src/components/ProtectedRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useEmployerStore } from '../../stores/useEmployerStore';
import { useApplicantStore } from '../../stores/useApplicantStore';

interface ProtectedRouteProps {
    children: React.ReactNode;
    redirectPath: string;
}


const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, redirectPath }) => {
    const { currentEmployer } = useEmployerStore();
    const { currentApplicant } = useApplicantStore();
    const userType = currentEmployer ? 'employer' : currentApplicant ? 'applicant' : null;
    console.log("userType", userType);


    if (userType === "employer") {
        return <>{children}</>;
    }

    return <>{<Navigate to={redirectPath} />}</>;
};

export default ProtectedRoute;
