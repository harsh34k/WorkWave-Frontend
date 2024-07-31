import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEmployerStore } from '../../stores/useEmployerStore';
import { useApplicantStore } from '../../stores/useApplicantStore';
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, Input, Textarea } from '@material-tailwind/react';
import { useApplicationActions } from '../../hooks/useApplicationsAction';
import JobCard from '../innerComponents/jobComponent1'; // Ensure the correct path to JobCard component
import { BiLoaderCircle } from 'react-icons/bi';
import { experienceMapping, formatValue, salaryMapping } from '../utils/mapping';
import toast from 'react-hot-toast';

interface JobCardProps {
    job: {
        id: string;
        title: string;
        company: string;
        location: string;
        education: string;
        rating: number;
        experience: string;
        salary: string;
        workMode: string;
        skills: string[];
        posted: string;
        description: string;
    };
}

const JobCardComponent: React.FC<JobCardProps> = ({ job }) => {
    const { currentEmployer } = useEmployerStore();
    const { currentApplicant } = useApplicantStore();
    const { applyJob } = useApplicationActions();
    const currentUser = currentEmployer || currentApplicant;
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const [coverLetter, setCoverLetter] = useState('');
    const [resume, setResume] = useState<File | null>(null);

    const userType = currentEmployer ? 'employer' : currentApplicant ? 'applicant' : null;

    const handleApplyClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleResumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setResume(event.target.files[0]);
        }
    };

    const handleApply = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('jobId', job.id);
        formData.append('coverLetter', coverLetter);
        if (currentUser?.id) {
            formData.append('applicantId', currentUser.id);
        }

        if (resume) {
            formData.append('resume', resume);
        }
        console.log("job education", job.education);


        try {
            const data = await applyJob.mutateAsync(formData);
            console.log('Application submitted successfully!', data.data.data.appliedJob);
            // setApplicationList(data.data.data.appliedJob)

            setOpen(false);
            setCoverLetter('');
            setResume(null);
            toast("Application submitted successfully!")

            navigate('/applications');
        } catch (error: any) {
            setOpen(false)
            toast.error(error?.message || 'Error submitting application')
            console.error('Error submitting application', error);
        }
    };

    return (
        <>
            <JobCard
                id={job.id}
                title={job.title}
                experience={formatValue(job.experience, experienceMapping)}
                education={job.education}
                salary={formatValue(job.salary, salaryMapping)}
                location={job.location}
                description={job.description}
                workMode={job.workMode}
                onApplyClick={handleApplyClick}
                userType={userType}
            />
            <Dialog open={open} handler={handleClose} className="">
                <DialogHeader>
                    Apply for {job.title}
                    <Button color="red" variant="text" size="sm" className="ml-auto" onClick={handleClose}>
                        Cancel
                    </Button>
                </DialogHeader>
                <form onSubmit={handleApply}>
                    <DialogBody divider>
                        <div className="flex flex-col space-y-4">
                            <Textarea
                                label="Cover Letter"
                                value={coverLetter}
                                onChange={(e) => setCoverLetter(e.target.value)}
                                maxLength={150}
                                className="w-full"
                            />
                            <Input
                                crossOrigin={""}
                                type="file"
                                label="Upload Resume"
                                accept=".jpg,.jpeg,.png,.pdf"
                                onChange={handleResumeChange}
                                className="w-full"
                            />
                        </div>
                    </DialogBody>
                    <DialogFooter>
                        <Button type="submit" color="blue" variant="gradient" className='flex justify-center items-center' size="md" disabled={applyJob.isLoading}>
                            {applyJob.isLoading && <BiLoaderCircle className="animate-spin mr-2" />}
                            <span className="text-base">Apply</span>
                        </Button>
                    </DialogFooter>
                </form>
            </Dialog>
        </>
    );
};

export default JobCardComponent;
