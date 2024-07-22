
// import React, { useEffect, useState } from 'react';
// import {
//     Card,
//     Typography,
//     Button,
//     Menu,
//     MenuHandler,
//     MenuList,
//     MenuItem,
//     Dialog,
//     DialogHeader,
//     DialogBody,
//     DialogFooter,
//     Input,
//     Textarea
// } from '@material-tailwind/react';
// import { PencilIcon, TrashIcon, XMarkIcon } from '@heroicons/react/24/solid';
// import { useApplicantStore } from '../stores/useApplicantStore';
// import { useApplicationStore } from '../stores/useApplicationStore';
// import { useApplicationActions } from '../hooks/useApplicationsAction';
// import { Application } from '../types/index.types';
// import JobCard from './innerComponents/jobComponent1';

// export const Applications = () => {
//     const { currentApplicant } = useApplicantStore();
//     const { applicationList, addApplication, updateApplication, deleteApplication } = useApplicationStore();
//     const { applyJob, deleteJobApplication, getAllApplications } = useApplicationActions();

//     const [open, setOpen] = useState(false);
//     const [editOpen, setEditOpen] = useState(false);
//     const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);

//     const [formValues, setFormValues] = useState({
//         jobId: '',
//         coverLetter: '',
//         resume: '',
//     });

//     useEffect(() => {
//         console.log("in useeefect application.tsx");

//         const getAllApplication = async () => {
//             const response = await getAllApplications.refetch();
//             console.log("response from useEffect", response);
//             console.log("applicationList", applicationList);
//         };
//         getAllApplication();
//     }, []);

//     const handleDeleteApplication = async (applicationId: string) => {
//         await deleteJobApplication.mutateAsync(applicationId, {
//             onSuccess: () => {
//                 console.log('Application deleted successfully!');
//                 deleteApplication(applicationId);
//             },
//             onError: (error) => {
//                 console.error('Error deleting application', error);
//             },
//         });
//     };

//     return (
//         <div className="min-h-screen bg-gray-50 p-6 w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png')` }}>
//             <div className="max-w-5xl mx-auto">
//                 <div className="flex items-center justify-between mb-4">
//                     <Typography variant="h4" className="font-bold rounded-lg p-2">
//                         Applications
//                     </Typography>
//                 </div>
//                 <hr className="mb-6 border-gray-300" />
//                 <Typography className="font-bold mb-4 text-gray-600">
//                     My Applications
//                 </Typography>
//                 <div className="grid grid-cols-1 mr-5 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//                     {applicationList?.map((application: Application) => (
//                         <div key={application.id} className="relative w-96 -ml-5">
//                             <div className="absolute top-2 right-2">
//                                 <Menu>
//                                     <MenuHandler>
//                                         <Button variant="text" size="sm" className="p-1">
//                                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 110 1.5.75.75 0 010-1.5zM12 12a.75.75 0 110 1.5.75.75 0 010-1.5zM17.25 12a.75.75 0 110 1.5.75.75 0 010-1.5z" />
//                                             </svg>
//                                         </Button>
//                                     </MenuHandler>
//                                     <MenuList>
//                                         <MenuItem className="flex items-center gap-2" onClick={() => handleDeleteApplication(application.id)}>
//                                             <TrashIcon className="h-4 w-4" /> Delete
//                                         </MenuItem>
//                                     </MenuList>
//                                 </Menu>
//                             </div>
//                             <JobCard
//                                 title={application.job.title}
//                                 experience={application.job.experience as unknown as string}
//                                 description={application.job.description}
//                                 location={application.job.location}
//                                 salary={application.job.salary}
//                                 workMode={application.job.workMode}
//                             />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

import React, { useEffect, useState } from 'react';
import {
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem
} from '@material-tailwind/react';
import { TrashIcon } from '@heroicons/react/24/solid';
import { useApplicantStore } from '../stores/useApplicantStore';
import { useApplicationStore } from '../stores/useApplicationStore';
import { useApplicationActions } from '../hooks/useApplicationsAction';
import { Application } from '../types/index.types';
import JobCard from './innerComponents/jobComponent1';

export const Applications = () => {
    const { currentApplicant } = useApplicantStore();
    const { applicationList, addApplication, updateApplication, deleteApplication } = useApplicationStore();
    const { applyJob, deleteJobApplication, getAllApplications } = useApplicationActions();

    const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);

    useEffect(() => {
        const getAllApplication = async () => {
            const response = await getAllApplications.refetch();
            console.log("response from useEffect", response);
            console.log("applicationList", applicationList);
        };
        getAllApplication();
    }, []);

    const handleDeleteApplication = async (applicationId: string) => {
        await deleteJobApplication.mutateAsync(applicationId, {
            onSuccess: () => {
                console.log('Application deleted successfully!');
                deleteApplication(applicationId);
            },
            onError: (error) => {
                console.error('Error deleting application', error);
            },
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6 w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/mnt/data/image.png')` }}>
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center justify-between mb-4">
                    <Typography variant="h4" className="font-bold rounded-lg p-2">
                        Applications
                    </Typography>
                </div>
                <hr className="mb-6 border-gray-300" />
                <Typography className="font-bold mb-4 text-gray-600">
                    My Applications
                </Typography>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {applicationList?.map((application: Application) => (
                        <div key={application.id} className="relative">
                            <div className="absolute top-2 right-2">
                                <Menu>
                                    <MenuHandler>
                                        <Button variant="text" size="sm" className="p-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 110 1.5.75.75 0 010-1.5zM12 12a.75.75 0 110 1.5.75.75 0 010-1.5zM17.25 12a.75.75 0 110 1.5.75.75 0 010-1.5z" />
                                            </svg>
                                        </Button>
                                    </MenuHandler>
                                    {/* <MenuList>
                                        <MenuItem className="flex items-center gap-2" onClick={() => handleDeleteApplication(application.id)}>
                                            <TrashIcon className="h-4 w-4" /> Delete
                                        </MenuItem>
                                    </MenuList> */}
                                </Menu>
                            </div>
                            <JobCard
                                id={application.id}
                                title={application.job.title}
                                experience={application.job.experience as unknown as string}
                                description={application.job.description}
                                location={application.job.location}
                                salary={application.job.salary}
                                workMode={application.job.workMode}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

