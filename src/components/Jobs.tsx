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
import { educationMapping, experienceMapping, formatValue, salaryMapping } from './utils/mapping';
import { BiLoaderCircle } from 'react-icons/bi';
import toast from 'react-hot-toast';



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

    const { data: applicationData, refetch: fetchApplications, isLoading } = useQuery(
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

        const response = await publishJob.mutateAsync(formData, {
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
                    education: '',
                });
                toast.success('Job created successfully!');
            },
            onError: (error: any) => {
                setOpen(false)
                toast.error(error?.message || "Failed to create job.");
                console.log('error hai bhai', error);
            },
        });
        return response
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

        const response = await updateJobMutation.mutateAsync({ jobId: selectedJob.id, formData }, {
            onSuccess: (data: any) => {
                console.log('Job updated successfully!', data.data.data);
                updateJob(data.data.data); // Update the job in the store
                setEditOpen(false);
                toast.success('Job updated successfully!');
            },
            onError: (error: any) => {
                console.log("error hai bhai", error);
                setEditOpen(false)
                toast.error(error?.message || 'Failed to update job.');
            },
        });
        return response
    };

    const handleDeleteJob = async (jobId: string) => {
        await deleteJobMutation.mutateAsync(jobId, {
            onSuccess: () => {
                console.log('Job deleted successfully!');
                deleteJob(jobId); // Remove the job from the store
                toast.success('Job deleted successfully!');
            },
            onError: (error: any) => {
                console.log("error hai bhai", error);

                toast.error(error?.message || 'Failed to delete job.');
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
                    <Button className="p-2 rounded-full" variant="text" onClick={() => setOpen(true)} disabled={publishJob.isLoading}>
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
                                        <MenuItem className='flex' onClick={() => handleDeleteJob(job.id)} disabled={deleteJobMutation.isLoading}>
                                            <TrashIcon className="h-5 w-5 mr-2" />
                                            Delete
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                            </div>
                            <Typography variant="h5" className="font-bold">{job.title}</Typography>

                            <Typography variant="small" className="font-semibold">Description</Typography>

                            <Typography>{job.description.length > 40 ? `${job.description.substring(0, 40)}...` : job.description}</Typography>

                            <Typography variant="small" className="font-semibold">Location</Typography>

                            <Typography>{job.location}</Typography>

                            <Typography variant="small" className="font-semibold">Work Mode</Typography>

                            <Typography>{job.workMode}</Typography>

                            <Typography variant="small" className="font-semibold">Experience</Typography>

                            <Typography>{formatValue(job.experience, experienceMapping)}</Typography>

                            <Typography variant="small" className="font-semibold">Salary</Typography>

                            <Typography>{formatValue(job.salary, salaryMapping)}</Typography>

                            <Typography variant="small" className="font-semibold">Education</Typography>
                            <Typography>{formatValue(job.education, educationMapping)}</Typography>

                            <Button size="sm" color='blue' className="mr-2 mb-2" onClick={() => handleViewJob(job)}>
                                View
                            </Button>

                            <Button size="sm" color='blue' onClick={() => handleShowApplications(job)}>
                                View Applications
                            </Button>
                        </Card>
                    ))}
                </div>

                {/* Create Job Dialog */}
                <Dialog open={open} handler={() => setOpen(false)}>
                    <DialogHeader className="flex justify-between items-center">
                        {publishJob.isLoading && <BiLoaderCircle className="animate-spin" />}
                        <Typography variant="h5">Create Job</Typography>
                        <Button variant="text" size="sm" className="p-1" onClick={() => setOpen(false)}>
                            <XMarkIcon className="h-6 w-6 text-gray-500" />
                        </Button>
                    </DialogHeader>
                    <DialogBody divider>
                        <form onSubmit={handleCreateJob} className='flex flex-col items-stretch'>
                            <Input crossOrigin={""} name="title" value={formValues.title} onChange={handleInputChange} label="Job Title" className="mb-4" required />
                            <Textarea name="description" value={formValues.description} onChange={handleInputChange} label="Job Description" className="mb-4" required />
                            <Input crossOrigin={""} name="location" value={formValues.location} onChange={handleInputChange} label="Location" className="mb-4" required />
                            <Select name="workMode" value={formValues.workMode} variant="standard" onChange={(value) => handleSelectChange("workMode", value as string)} label="Work Mode" className="mb-4" >
                                <Option value="ONSITE">Onsite</Option>
                                <Option value="REMOTE">Remote</Option>
                                <Option value="HYBRID">Hybrid</Option>
                                {/* come here */}
                            </Select>
                            <Select
                                name="experience"
                                variant="standard"
                                label="Experience Level"
                                onChange={(value) => handleSelectChange('experience', value as string)}
                                value={formValues.experience}
                            >
                                <Option value="FRESHER">FRESHER</Option>
                                <Option value="ONE_TO_TWO_YEARS">1-2 Years</Option>
                                <Option value="TWO_TO_THREE_YEARS">2-3 Years</Option>
                                <Option value="THREE_TO_FOUR_YEARS">3-4 Years</Option>
                                <Option value="FOUR_TO_FIVE_YEARS">4-5 Years</Option>
                                <Option value="ABOVE_FIVE_YEARS"> 5+ Years</Option> Senior
                            </Select>
                            <Select
                                variant="standard"
                                name="salary"
                                label="Salary"
                                onChange={(value) => handleSelectChange('salary', value as string)}
                                value={formValues.salary}
                            >
                                <Option value="BELOW_3_LAKHS">Less than 3 Lakhs</Option>
                                <Option value="FROM_3_TO_6_LAKHS">3-6 Lakhs</Option>
                                <Option value="FROM_6_TO_10_LAKHS">6-10 Lakhs</Option>
                                <Option value="FROM_10_TO_15_LAKHS">10-15 Lakhs</Option>
                                <Option value="ABOVE_15_LAKHS">15 Lakhs+</Option>
                            </Select>
                            <Select
                                variant="standard"
                                name="education"
                                label="Education Level"
                                onChange={(value) => handleSelectChange('education', value as string)}
                                value={formValues.education}
                            >
                                <Option value="TENTH">Tenth</Option>
                                <Option value="TWELFTH">Twelfth</Option>
                                <Option value="GRADUATION">Graduation</Option>
                                <Option value="POSTGRADUATION">PostGraduation</Option>
                                <Option value="PHD">PhD</Option>
                            </Select>
                            <DialogFooter>
                                <Button type="submit" color="blue" disabled={publishJob.isLoading}>
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
                {/* <Dialog open={editOpen} handler={() => setEditOpen(false)}>
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
                            <Input crossOrigin={""} name="experience" value={formatValue(formValues.experience, experienceMapping)} onChange={handleInputChange} label="Experience" className="mb-4" required />
                            <Input crossOrigin={""} name="salary" value={formatValue(formValues.salary, salaryMapping)} onChange={handleInputChange} label="Salary" className="mb-4" required />
                            <Input crossOrigin={""} name="education" value={formatValue(formValues.education, educationMapping)} onChange={handleInputChange} label="Education" className="mb-4" required />
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
                </Dialog> */}
                <Dialog open={editOpen} handler={() => setEditOpen(false)}>
                    <DialogHeader className="flex justify-between items-center">
                        <Typography variant="h5">Edit Job</Typography>
                        <Button variant="text" size="sm" className="p-1" onClick={() => setEditOpen(false)}>
                            <XMarkIcon className="h-6 w-6 text-gray-500" />
                        </Button>
                    </DialogHeader>
                    <DialogBody divider>
                        <form onSubmit={handleUpdateJob}>
                            <Input
                                crossOrigin={""}
                                name="title"
                                value={formValues.title}
                                onChange={handleInputChange}
                                label="Job Title"
                                className="mb-4"
                                required
                            />
                            <Textarea
                                name="description"
                                value={formValues.description}
                                onChange={handleInputChange}
                                label="Job Description"
                                className="mb-4"
                                required
                            />
                            <Input
                                crossOrigin={""}
                                name="location"
                                value={formValues.location}
                                onChange={handleInputChange}
                                label="Location"
                                className="mb-4"
                                required
                            />
                            <Select
                                name="workMode"
                                variant="standard"
                                value={formValues.workMode}
                                onChange={(value) => handleSelectChange("workMode", value as string)}
                                label="Work Mode"
                                className="mb-4"
                            >
                                <Option value="ONSITE">Onsite</Option>
                                <Option value="REMOTE">Remote</Option>
                                <Option value="HYBRID">Hybrid</Option>
                            </Select>
                            <Select
                                name="experience"
                                variant="standard"
                                label="Experience Level"
                                onChange={(value) => handleSelectChange('experience', value as string)}
                                value={formValues.experience}
                            >
                                <Option value="FRESHER">FRESHER</Option>
                                <Option value="ONE_TO_TWO_YEARS">1-2 Years</Option>
                                <Option value="TWO_TO_THREE_YEARS">2-3 Years</Option>
                                <Option value="THREE_TO_FOUR_YEARS">3-4 Years</Option>
                                <Option value="FOUR_TO_FIVE_YEARS">4-5 Years</Option>
                                <Option value="ABOVE_FIVE_YEARS"> 5+ Years</Option> Senior
                            </Select>
                            <Select
                                variant="standard"
                                name="salary"
                                label="Salary"
                                onChange={(value) => handleSelectChange('salary', value as string)}
                                value={formValues.salary}
                            >
                                <Option value="BELOW_3_LAKHS">Less than 3 Lakhs</Option>
                                <Option value="FROM_3_TO_6_LAKHS">3-6 Lakhs</Option>
                                <Option value="FROM_6_TO_10_LAKHS">6-10 Lakhs</Option>
                                <Option value="FROM_10_TO_15_LAKHS">10-15 Lakhs</Option>
                                <Option value="ABOVE_15_LAKHS">15 Lakhs+</Option>
                            </Select>
                            <Select
                                variant="standard"
                                name="education"
                                label="Education Level"
                                onChange={(value) => handleSelectChange('education', value as string)}
                                value={formValues.education}
                            >
                                <Option value="TENTH">Tenth</Option>
                                <Option value="TWELFTH">Twelfth</Option>
                                <Option value="GRADUATION">Graduation</Option>
                                <Option value="POSTGRADUATION">PostGraduation</Option>
                                <Option value="PHD">PhD</Option>
                            </Select>
                            <DialogFooter>
                                <Button type="submit" color="blue" className='flex justify-center items-center mt-4'>
                                    {updateJobMutation.isLoading && <BiLoaderCircle className="animate-spin mr-2" />}
                                    <span className="ml-2">Update</span>
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
                                    <span className="font-bold">Experience:</span> {formatValue(selectedJob.experience, experienceMapping)}
                                </Typography>
                                <Typography className="mb-2">
                                    <span className="font-bold">Salary:</span> {formatValue(selectedJob.salary, salaryMapping)}
                                </Typography>
                                <Typography className="mb-2">
                                    <span className="font-bold">Education:</span> {formatValue(selectedJob.education, educationMapping)}
                                </Typography>
                            </div>
                        )}
                    </DialogBody>
                </Dialog>

                {/* View Applications Dialog */}
                <Dialog open={viewApplicationsOpen} handler={() => setViewApplicationsOpen(false)} className='shadow-md' >
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
                                    <Typography variant="h6" className="font-bold mb-2">
                                        {application.coverLetter}
                                    </Typography>
                                    <Typography className="mb-2">
                                        <span className="font-bold">Email:</span> {application.applicant.email}
                                    </Typography>
                                    <Button size="sm" onClick={() => handleDownloadResume(application.resumeUrl)}>
                                        Download Resume
                                    </Button>
                                    <hr className='mt-4' />
                                </div>

                            ))
                        ) : (isLoading && <BiLoaderCircle className="animate-spin" />)}
                        {applicationData?.length === 0 && <div>No Application found</div>}
                    </DialogBody>

                </Dialog>
            </div>
        </div>
    );
};

export default JobBoard;

