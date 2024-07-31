import { useEffect, } from 'react';
import {
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem
} from '@material-tailwind/react';
import { TrashIcon } from '@heroicons/react/24/solid';
import { useApplicationStore } from '../stores/useApplicationStore';
import { useApplicationActions } from '../hooks/useApplicationsAction';
import { Application } from '../types/index.types';
import JobCard from './innerComponents/jobComponent1';
import { educationMapping, experienceMapping, formatValue, salaryMapping } from './utils/mapping';
import { BiLoaderCircle } from 'react-icons/bi';
import toast from 'react-hot-toast';

export const Applications = () => {
    const { applicationList, deleteApplication } = useApplicationStore();
    const { deleteJobApplication, getAllApplications } = useApplicationActions();

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
                toast("Application deleted successfully!")
            },
            onError: (error) => {
                console.error('Error deleting application', error);
                toast.error(error?.message || 'Error deleting application')
            },
        });
    };

    return (
        <div
            className="min-h-screen bg-gray-50 p-6 w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('/mnt/data/image.png')` }}
        >
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
                        <div
                            key={application.id}
                            className="relative bg-transparent shadow-lg rounded-lg "
                        >
                            {/* Position the Menu Icon at Top-Right of the Card */}
                            <div className="absolute top-2 right-2 z-10">
                                <Menu>
                                    <MenuHandler>
                                        <Button variant="text" size="sm" className="p-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-5 h-5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M6.75 12a.75.75 0 110 1.5.75.75 0 010-1.5zM12 12a.75.75 0 110 1.5.75.75 0 010-1.5zM17.25 12a.75.75 0 110 1.5.75.75 0 010-1.5z"
                                                />
                                            </svg>
                                        </Button>
                                    </MenuHandler>
                                    <MenuList>
                                        <MenuItem
                                            className="flex items-center gap-2"
                                            onClick={() => handleDeleteApplication(application.id)}
                                        >
                                            {deleteJobApplication.isLoading && (
                                                <BiLoaderCircle className="animate-spin mr-2" />
                                            )}
                                            <TrashIcon className="h-4 w-4" /> Delete
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                            </div>
                            {/* JobCard Component with Menu Inside the Card */}
                            <JobCard
                                id={application.id}
                                education={formatValue(
                                    application.job.education,
                                    educationMapping
                                )}
                                title={application.job.title}
                                experience={
                                    formatValue(
                                        application.job.experience,
                                        experienceMapping
                                    ) as unknown as string
                                }
                                description={application.job.description}
                                location={application.job.location}
                                salary={formatValue(application.job.salary, salaryMapping)}
                                workMode={application.job.workMode}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

