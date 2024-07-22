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
//     Textarea,
//     Select,
//     Option,
// } from '@material-tailwind/react';
// import { PencilIcon, PlusCircleIcon, TrashIcon, XMarkIcon } from '@heroicons/react/24/solid';
// import { useApplicantStore } from '../stores/useApplicantStore';
// import { useApplicationStore } from '../stores/useApplicationStore';
// import { useApplicationActions } from '../hooks/useApplicationsAction';
// import { Application, Job } from '../types/index.types';
// import { error } from '@material-tailwind/react/types/components/input';
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
//         const getAllApplication = async () => {
//             const respone = await getAllApplications.refetch()
//             console.log("respone fromo useEffect", respone);
//             console.log("applicationlist", applicationList);

//         }
//         getAllApplication();

//     }, [])


//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         const { name, value } = e.target;
//         setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
//     };

//     const handleSelectChange = (name: string, value: string) => {
//         setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
//     };

//     const handleCreateApplication = async (e: React.FormEvent) => {
//         e.preventDefault();
//         const formData = new FormData();
//         Object.entries(formValues).forEach(([key, value]) => {
//             formData.append(key, value);
//         });
//         console.log("FormData from application.tsx", formData);

//         await applyJob.mutateAsync(formData, {
//             onSuccess: (data) => {
//                 console.log('Application submitted successfully!', data.data);
//                 addApplication(data.data);
//                 setOpen(false);
//                 setFormValues({
//                     jobId: '',
//                     coverLetter: '',
//                     resume: '',
//                 });
//             },
//             onError: (error) => {
//                 console.error('Error submitting application', error);
//             },
//         });
//     };

//     const handleEditApplication = (application: Application) => {
//         setSelectedApplication(application);
//         setFormValues({
//             jobId: application.jobId,
//             coverLetter: application.coverLetter,
//             resume: application.resume,
//         });
//         setEditOpen(true);
//     };

//     // const handleUpdateApplication = async (e: React.FormEvent) => {
//     //     e.preventDefault();
//     //     if (!selectedApplication) return;

//     //     const formData = new FormData();
//     //     Object.entries(formValues).forEach(([key, value]) => {
//     //         formData.append(key, value);
//     //     });

//     //     await updateJobApplication.mutateAsync({ applicationId: selectedApplication.id, formData }, {
//     //         onSuccess: (data: any) => {
//     //             console.log('Application updated successfully!', data.data);
//     //             updateApplication(data.data);
//     //             setEditOpen(false);
//     //         },
//     //         onError: (error: error) => {
//     //             console.error('Error updating application', error);
//     //         },
//     //     });
//     // };

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
//                 <div className="grid grid-cols-1 w-52 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {applicationList?.map((application: Application) => (
//                         <Card key={application.id} className="p-6 relative">
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
//                                         <MenuItem className="flex items-center gap-2" onClick={() => handleEditApplication(application)}>
//                                             <PencilIcon className="h-4 w-4" /> Edit
//                                         </MenuItem>
//                                         <MenuItem className="flex items-center gap-2" onClick={() => handleDeleteApplication(application.id)}>
//                                             <TrashIcon className="h-4 w-4" /> Delete
//                                         </MenuItem>
//                                     </MenuList>
//                                 </Menu>
//                             </div>
//                             <div className="flex flex-col items-center ">

//                                 <Typography className="text-xl font-semibold text-blue-500">{application.job.title}</Typography>

//                             </div>
//                             <Typography className="mb-2">{application.coverLetter}</Typography>
//                             <Typography className="text-xs text-gray-500">Resume: {application.resume}</Typography>
//                         </Card>
//                     ))}
//                 </div>

//             </div>
//             <Dialog open={open} handler={() => setOpen(false)} size="xl" className="min-w-80 max-w-2xl">
//                 <DialogHeader>
//                     <Typography className="font-bold">Apply for a Job</Typography>
//                     <XMarkIcon className="h-6 w-6 cursor-pointer" onClick={() => setOpen(false)} />
//                 </DialogHeader>
//                 <form onSubmit={handleCreateApplication}>
//                     <DialogBody className="flex flex-col gap-4">
//                         <Input crossOrigin={""}
//                             name="jobId"
//                             label="Job ID"
//                             value={formValues.jobId}
//                             onChange={handleInputChange}
//                             required
//                         />
//                         <Textarea
//                             name="coverLetter"
//                             label="Cover Letter"
//                             value={formValues.coverLetter}
//                             onChange={handleInputChange}
//                             required
//                         />
//                         <Input crossOrigin={""}
//                             name="resume"
//                             label="Resume"
//                             value={formValues.resume}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </DialogBody>
//                     <DialogFooter className="flex justify-end gap-4">
//                         <Button variant="text" color="blue" onClick={() => setOpen(false)}>
//                             Cancel
//                         </Button>
//                         <Button variant="gradient" color="blue" type="submit">
//                             Submit
//                         </Button>
//                     </DialogFooter>
//                 </form>
//             </Dialog>
//             <Dialog open={editOpen} handler={() => setEditOpen(false)} size="xl" className="min-w-80 max-w-2xl">
//                 <DialogHeader>
//                     <Typography className="font-bold">Edit Application</Typography>
//                     <XMarkIcon className="h-6 w-6 cursor-pointer" onClick={() => setEditOpen(false)} />
//                 </DialogHeader>
//                 <form >
//                     <DialogBody className="flex flex-col gap-4">
//                         <Input crossOrigin={""}
//                             name="jobId"
//                             label="Job ID"
//                             value={formValues.jobId}
//                             onChange={handleInputChange}
//                             required
//                         />
//                         <Textarea
//                             name="coverLetter"
//                             label="Cover Letter"
//                             value={formValues.coverLetter}
//                             onChange={handleInputChange}
//                             required
//                         />
//                         <Input crossOrigin={""}

//                             name="resume"
//                             label="Resume"
//                             value={formValues.resume}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </DialogBody>
//                     <DialogFooter className="flex justify-end gap-4">
//                         <Button variant="text" color="blue" onClick={() => setEditOpen(false)}>
//                             Cancel
//                         </Button>
//                         <Button variant="gradient" color="blue" type="submit">
//                             Update
//                         </Button>
//                     </DialogFooter>
//                 </form>
//             </Dialog>
//         </div>
//     );
// };

import React, { useEffect, useState } from 'react';
import {
    Card,
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    Textarea
} from '@material-tailwind/react';
import { PencilIcon, TrashIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useApplicantStore } from '../stores/useApplicantStore';
import { useApplicationStore } from '../stores/useApplicationStore';
import { useApplicationActions } from '../hooks/useApplicationsAction';
import { Application } from '../types/index.types';
import JobCard from './innerComponents/jobComponent1';

export const Applications = () => {
    const { currentApplicant } = useApplicantStore();
    const { applicationList, addApplication, updateApplication, deleteApplication } = useApplicationStore();
    const { applyJob, deleteJobApplication, getAllApplications } = useApplicationActions();

    const [open, setOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);

    const [formValues, setFormValues] = useState({
        jobId: '',
        coverLetter: '',
        resume: '',
    });

    useEffect(() => {
        console.log("in useeefect application.tsx");

        const getAllApplication = async () => {
            const response = await getAllApplications.refetch();
            console.log("response from useEffect", response);
            console.log("applicationList", applicationList);
        };
        getAllApplication();
    }, []);

    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     const { name, value } = e.target;
    //     setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    // };

    // const handleCreateApplication = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     Object.entries(formValues).forEach(([key, value]) => {
    //         formData.append(key, value);
    //     });
    //     console.log("FormData from application.tsx", formData);

    //     await applyJob.mutateAsync(formData, {
    //         onSuccess: (data) => {
    //             console.log('Application submitted successfully!', data.data.data.appliedJob);
    //             addApplication(data.data.appliedJob);
    //             setOpen(false);
    //             setFormValues({
    //                 jobId: '',
    //                 coverLetter: '',
    //                 resume: '',
    //             });
    //         },
    //         onError: (error) => {
    //             console.error('Error submitting application', error);
    //         },
    //     });
    // };

    // const handleEditApplication = (application: Application) => {
    //     setSelectedApplication(application);
    //     setFormValues({
    //         jobId: application.jobId,
    //         coverLetter: application.coverLetter,
    //         resume: application.resume,
    //     });
    //     setEditOpen(true);
    // };

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
        <div className="min-h-screen bg-gray-50 p-6 w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png')` }}>
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
                <div className="grid grid-cols-1 mr-5 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {applicationList?.map((application: Application) => (
                        <div key={application.id} className="relative w-96 -ml-5">
                            <div className="absolute top-2 right-2">
                                <Menu>
                                    <MenuHandler>
                                        <Button variant="text" size="sm" className="p-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 110 1.5.75.75 0 010-1.5zM12 12a.75.75 0 110 1.5.75.75 0 010-1.5zM17.25 12a.75.75 0 110 1.5.75.75 0 010-1.5z" />
                                            </svg>
                                        </Button>
                                    </MenuHandler>
                                    <MenuList>
                                        <MenuItem className="flex items-center gap-2" onClick={() => handleDeleteApplication(application.id)}>
                                            <TrashIcon className="h-4 w-4" /> Delete
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                            </div>
                            <JobCard
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

{/* <Dialog open={open} handler={() => setOpen(false)} size="xl" className="min-w-80 max-w-2xl">
    <DialogHeader>
        <Typography className="font-bold">Apply for a Job</Typography>
        <XMarkIcon className="h-6 w-6 cursor-pointer" onClick={() => setOpen(false)} />
    </DialogHeader>
    <form onSubmit={handleCreateApplication}>
        <DialogBody className="flex flex-col gap-4">
            <Input
                crossOrigin={""}
                name="jobId"
                label="Job ID"
                value={formValues.jobId}
                onChange={handleInputChange}
                required
            />
            <Textarea
                name="coverLetter"
                label="Cover Letter"
                value={formValues.coverLetter}
                onChange={handleInputChange}
                required
            />
            <Input
                crossOrigin={""}
                name="resume"
                label="Resume"
                value={formValues.resume}
                onChange={handleInputChange}
                required
            />
        </DialogBody>
        <DialogFooter className="flex justify-end gap-4">
            <Button variant="text" color="blue" onClick={() => setOpen(false)}>
                Cancel
            </Button>
            <Button variant="gradient" color="blue" type="submit">
                Submit
            </Button>
        </DialogFooter>
    </form>
</Dialog> */}
{/* <Dialog open={editOpen} handler={() => setEditOpen(false)} size="xl" className="min-w-80 max-w-2xl">
    <DialogHeader>
        <Typography className="font-bold">Edit Application</Typography>
        <XMarkIcon className="h-6 w-6 cursor-pointer" onClick={() => setEditOpen(false)} />
    </DialogHeader>
    <form>
        <DialogBody className="flex flex-col gap-4">
            <Input
                crossOrigin={""}
                name="jobId"
                label="Job ID"
                value={formValues.jobId}
                onChange={handleInputChange}
                required
            />
            <Textarea
                name="coverLetter"
                label="Cover Letter"
                value={formValues.coverLetter}
                onChange={handleInputChange}
                required
            />
            <Input
                crossOrigin={""}
                name="resume"
                label="Resume"
                value={formValues.resume}
                onChange={handleInputChange}
                required
            />
        </DialogBody>
        <DialogFooter className="flex justify-end gap-4">
            <Button variant="text" color="blue" onClick={() => setEditOpen(false)}>
                Cancel
            </Button>
            <Button variant="gradient" color="blue" type="submit">
                Update
            </Button>
        </DialogFooter>
    </form>
</Dialog> */}