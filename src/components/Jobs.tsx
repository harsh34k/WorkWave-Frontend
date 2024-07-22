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
    Textarea,
    Select,
    Option,
} from '@material-tailwind/react';
import { PencilIcon, PlusCircleIcon, TrashIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useEmployerStore } from '../stores/useEmployerStore';
import { useApplicantStore } from '../stores/useApplicantStore';
import { useEmployerActions } from '../hooks/useEmployerActions';
import { Job, Application } from '../types/index.types';
import { useQuery, QueryFunctionContext } from 'react-query';
import { useJobActions } from '../hooks/useJobAction';
import { useJobStore } from '../stores/useJobStore';
import { getAllApplicationOfJobById } from '../api/application.Api';



const JobBoard = () => {
    const { currentEmployer } = useEmployerStore();
    const { currentApplicant } = useApplicantStore();
    const { getCurrentEmployer } = useEmployerActions();
    const { jobList, addJob, updateJob, deleteJob } = useJobStore();

    const currentUser = currentEmployer || currentApplicant;
    const userType = currentEmployer ? 'employer' : currentApplicant ? 'applicant' : null;
    if (!currentUser) {
        return <div>Loading...</div>
    }
    useEffect(() => {
        const fetchData = async () => {
            if (userType === "employer") {
                await getCurrentEmployer.refetch();
            }
        }
        fetchData();
    }, []);

    const jobData = jobList;

    const [open, setOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [viewJobOpen, setViewJobOpen] = useState(false);
    const [viewApplicationsOpen, setViewApplicationsOpen] = useState(false);
    const [selectedJobId, setSelectedJobId] = useState<string | null>(null);

    const { data: applicationData, refetch: fetchApplications } = useQuery(
        ["applications", selectedJobId],
        async ({ queryKey }: QueryFunctionContext): Promise<Application[]> => {
            const appId = queryKey[1] as string;
            if (!appId) return [];
            const response = await getAllApplicationOfJobById(appId);
            return response.data;
        },
        {
            enabled: !!selectedJobId, // Fetch only if selectedJobId is not null
            onSuccess: (data) => {
                console.log("application data", data);
            },
        }
    );

    useEffect(() => {
        if (selectedJobId) {
            fetchApplications();
        }
    }, [selectedJobId, fetchApplications]);

    const [formValues, setFormValues] = useState({
        title: '',
        description: '',
        location: '',
        workMode: '',
        experience: '',
        salary: '',
        education: ''
    });

    const { publishJob, updateJob: updateJobMutation, deleteJob: deleteJobMutation } = useJobActions();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    const handleSelectChange = (name: string, value: string) => {
        setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    const handleCreateJob = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        Object.entries(formValues).forEach(([key, value]) => {
            formData.append(key, value);
        });

        await publishJob.mutateAsync(formData, {
            onSuccess: (data) => {
                console.log('Job created successfully!', data.data.data);
                addJob(data.data.data);
                setOpen(false);
                setFormValues({
                    title: '',
                    description: '',
                    location: '',
                    workMode: '',
                    experience: '',
                    salary: '',
                    education: ''
                });
            },
            onError: (error) => {
                console.log("error hai bhai", error);
            },
        });
    };

    const handleEditJob = (job: Job) => {
        setSelectedJob(job);
        setFormValues({
            title: job.title,
            description: job.description,
            location: job.location,
            workMode: job.workMode as unknown as string,
            experience: job.experience as unknown as string,
            salary: job.salary as unknown as string,
            education: job.education as unknown as string
        });
        setEditOpen(true);
    };

    const handleUpdateJob = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedJob) return;

        const formData = new FormData();
        Object.entries(formValues).forEach(([key, value]) => {
            formData.append(key, value);
        });

        await updateJobMutation.mutateAsync({ jobId: selectedJob.id, formData }, {
            onSuccess: (data: any) => {
                console.log('Job updated successfully!', data.data.data);
                updateJob(data.data.data); // Update the job in the store
                setEditOpen(false);
            },
            onError: (error) => {
                console.log("error hai bhai", error);
            },
        });
    };

    const handleDeleteJob = async (jobId: string) => {
        await deleteJobMutation.mutateAsync(jobId, {
            onSuccess: () => {
                console.log('Job deleted successfully!');
                deleteJob(jobId); // Remove the job from the store
            },
            onError: (error) => {
                console.log("error hai bhai", error);
            },
        });
    };

    const handleViewJob = (job: Job) => {
        setSelectedJob(job);
        setViewJobOpen(true);
    };

    const handleShowApplications = (job: Job) => {
        setSelectedJob(job);
        setSelectedJobId(job.id);
        setViewApplicationsOpen(true);
    };

    const handleDownloadResume = (resumeUrl: string) => {
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'resume.pdf'; // You can adjust the filename if necessary
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6 w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png')` }}>
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center justify-between mb-4">
                    <Typography variant="h4" className="font-bold rounded-lg p-2">
                        Jobs
                    </Typography>
                    <Button className="p-2 rounded-full" variant="text" onClick={() => setOpen(true)}>
                        <PlusCircleIcon className="h-10 w-10 text-blue-500" />
                    </Button>
                </div>
                <hr className="mb-6 border-gray-300" />
                <Typography className="font-bold mb-4 text-gray-600">
                    Created Jobs
                </Typography>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {jobData?.map((job: Job, index: number) => (
                        <Card key={index} className="p-6 relative">
                            <div className="absolute top-2 right-2">
                                <Menu>
                                    <MenuHandler>
                                        <Button variant="text" size="sm" className="p-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM17.25 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                            </svg>
                                        </Button>
                                    </MenuHandler>
                                    <MenuList>
                                        <MenuItem className='flex' onClick={() => handleEditJob(job)}>
                                            <PencilIcon className="h-5 w-5  mr-2" />
                                            Edit
                                        </MenuItem>
                                        <MenuItem className='flex' onClick={() => handleDeleteJob(job.id)}>
                                            <TrashIcon className="h-5 w-5 mr-2" />
                                            Delete
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                            </div>
                            {/* <Typography variant="h6" className="font-bold mb-2">
                                {job.title}
                            </Typography> */}
                            {/* <Typography className="mb-4 text-gray-700">
                                {job.description.substring(0, 100)}... 
                                {/* here tring *
                            </Typography> */}
                            <Typography variant="h5" className="font-bold">{job.title}</Typography>

                            <Typography variant="small" className="font-semibold">Description</Typography>

                            <Typography>{job.description.length > 40 ? `${job.description.substring(0, 40)}...` : job.description}</Typography>

                            <Typography variant="small" className="font-semibold">Location</Typography>

                            <Typography>{job.location}</Typography>

                            <Typography variant="small" className="font-semibold">Work Mode</Typography>

                            <Typography>{job.workMode}</Typography>

                            <Typography variant="small" className="font-semibold">Experience</Typography>

                            <Typography>{job.experience}</Typography>

                            <Typography variant="small" className="font-semibold">Salary</Typography>

                            <Typography>{job.salary}</Typography>

                            <Typography variant="small" className="font-semibold">Education</Typography>
                            <Typography>{job.education}</Typography>

                            <Button size="sm" className="mr-2 mb-2" onClick={() => handleViewJob(job)}>
                                View
                            </Button>
                            <Button size="sm" onClick={() => handleShowApplications(job)}>
                                View Applications
                            </Button>
                        </Card>
                    ))}
                </div>

                {/* Create Job Dialog */}
                <Dialog open={open} handler={() => setOpen(false)}>
                    <DialogHeader className="flex justify-between items-center">
                        <Typography variant="h5">Create Job</Typography>
                        <Button variant="text" size="sm" className="p-1" onClick={() => setOpen(false)}>
                            <XMarkIcon className="h-6 w-6 text-gray-500" />
                        </Button>
                    </DialogHeader>
                    <DialogBody divider>
                        <form onSubmit={handleCreateJob}>
                            <Input crossOrigin={""} name="title" value={formValues.title} onChange={handleInputChange} label="Job Title" className="mb-4" required />
                            <Textarea name="description" value={formValues.description} onChange={handleInputChange} label="Job Description" className="mb-4" required />
                            <Input crossOrigin={""} name="location" value={formValues.location} onChange={handleInputChange} label="Location" className="mb-4" required />
                            <Select name="workMode" value={formValues.workMode} onChange={(value) => handleSelectChange("workMode", value as string)} label="Work Mode" className="mb-4" >
                                <Option value="ONSITE">Onsite</Option>
                                <Option value="REMOTE">Remote</Option>
                                <Option value="HYBRID">Hybrid</Option>
                                {/* come here */}
                            </Select>
                            <Input crossOrigin={""} name="experience" value={formValues.experience} onChange={handleInputChange} label="Experience" className="mb-4" required />
                            <Input crossOrigin={""} name="salary" value={formValues.salary} onChange={handleInputChange} label="Salary" className="mb-4" required />
                            <Input crossOrigin={""} name="education" value={formValues.education} onChange={handleInputChange} label="Education" className="mb-4" required />
                            <DialogFooter>
                                <Button type="submit" color="blue">
                                    Create
                                </Button>
                                <Button variant="text" color="red" onClick={() => setOpen(false)}>
                                    Cancel
                                </Button>
                            </DialogFooter>
                        </form>
                    </DialogBody>
                </Dialog>

                {/* Edit Job Dialog */}
                <Dialog open={editOpen} handler={() => setEditOpen(false)}>
                    <DialogHeader className="flex justify-between items-center">
                        <Typography variant="h5">Edit Job</Typography>
                        <Button variant="text" size="sm" className="p-1" onClick={() => setEditOpen(false)}>
                            <XMarkIcon className="h-6 w-6 text-gray-500" />
                        </Button>
                    </DialogHeader>
                    <DialogBody divider>
                        <form onSubmit={handleUpdateJob}>
                            <Input crossOrigin={""} name="title" value={formValues.title} onChange={handleInputChange} label="Job Title" className="mb-4" required />
                            <Textarea name="description" value={formValues.description} onChange={handleInputChange} label="Job Description" className="mb-4" required />
                            <Input crossOrigin={""} name="location" value={formValues.location} onChange={handleInputChange} label="Location" className="mb-4" required />
                            <Select name="workMode" value={formValues.workMode} onChange={(value) => handleSelectChange("workMode", value as string)} label="Work Mode" className="mb-4" >
                                <Option value="ONSITE">Onsite</Option>
                                <Option value="REMOTE">Remote</Option>
                                <Option value="HYBRID">Hybrid</Option>
                            </Select>
                            <Input crossOrigin={""} name="experience" value={formValues.experience} onChange={handleInputChange} label="Experience" className="mb-4" required />
                            <Input crossOrigin={""} name="salary" value={formValues.salary} onChange={handleInputChange} label="Salary" className="mb-4" required />
                            <Input crossOrigin={""} name="education" value={formValues.education} onChange={handleInputChange} label="Education" className="mb-4" required />
                            <DialogFooter>
                                <Button type="submit" color="blue">
                                    Update
                                </Button>
                                <Button variant="text" color="red" onClick={() => setEditOpen(false)}>
                                    Cancel
                                </Button>
                            </DialogFooter>
                        </form>
                    </DialogBody>
                </Dialog>

                {/* View Job Dialog */}
                <Dialog open={viewJobOpen} handler={() => setViewJobOpen(false)}>
                    <DialogHeader className="flex justify-between items-center">
                        <Typography variant="h5">Job Details</Typography>
                        <Button variant="text" size="sm" className="p-1" onClick={() => setViewJobOpen(false)}>
                            <XMarkIcon className="h-6 w-6 text-gray-500" />
                        </Button>
                    </DialogHeader>
                    <DialogBody divider>
                        {selectedJob && (
                            <div>
                                <Typography variant="h6" className="font-bold mb-2">
                                    {selectedJob.title}
                                </Typography>
                                <Typography className="mb-2">
                                    <span className="font-bold">Description:</span> {selectedJob.description}
                                </Typography>
                                <Typography className="mb-2">
                                    <span className="font-bold">Location:</span> {selectedJob.location}
                                </Typography>
                                <Typography className="mb-2">
                                    <span className="font-bold">Work Mode:</span> {selectedJob.workMode}
                                </Typography>
                                <Typography className="mb-2">
                                    <span className="font-bold">Experience:</span> {selectedJob.experience}
                                </Typography>
                                <Typography className="mb-2">
                                    <span className="font-bold">Salary:</span> {selectedJob.salary}
                                </Typography>
                                <Typography className="mb-2">
                                    <span className="font-bold">Education:</span> {selectedJob.education}
                                </Typography>
                            </div>
                        )}
                    </DialogBody>
                </Dialog>

                {/* View Applications Dialog */}
                <Dialog open={viewApplicationsOpen} handler={() => setViewApplicationsOpen(false)} >
                    <DialogHeader className="flex justify-between items-center">
                        <Typography variant="h5">Job Applications</Typography>
                        <Button variant="text" size="sm" className="p-1" onClick={() => setViewApplicationsOpen(false)}>
                            <XMarkIcon className="h-6 w-6 text-gray-500" />
                        </Button>
                    </DialogHeader>
                    <DialogBody divider>
                        {applicationData && applicationData.length > 0 ? (
                            applicationData.map((application: Application, index: number) => (
                                <div key={index} className="mb-4">
                                    <Typography variant="h6" className="font-bold mb-2">
                                        {application.applicant.fullName}
                                    </Typography>
                                    <Typography className="mb-2">
                                        <span className="font-bold">Email:</span> {application.applicant.email}
                                    </Typography>
                                    <Button size="sm" onClick={() => handleDownloadResume(application.resumeUrl)}>
                                        Download Resume
                                    </Button>
                                </div>
                            ))
                        ) : (
                            <Typography>Loading...</Typography>
                        )}
                    </DialogBody>
                </Dialog>
            </div>
        </div>
    );
};

export default JobBoard;

