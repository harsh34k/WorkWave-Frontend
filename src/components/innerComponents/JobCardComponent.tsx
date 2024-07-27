
// import React, { useState } from 'react';
// import { useEmployerStore } from '../../stores/useEmployerStore';
// import { useApplicantStore } from '../../stores/useApplicantStore';
// import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, Input, Textarea } from '@material-tailwind/react';

// interface JobCardProps {
//     job: {
//         title: string;
//         company: string;
//         rating: number;
//         experience: string;
//         salary: string;
//         workMode: string;
//         skills: string[];
//         posted: string;
//     };
// }

// const JobCardComponent: React.FC<JobCardProps> = ({ job }) => {
//     const { currentEmployer } = useEmployerStore();
//     const { currentApplicant } = useApplicantStore();
//     const currentUser = currentEmployer || currentApplicant;

//     const [open, setOpen] = useState(false);
//     const [coverLetter, setCoverLetter] = useState('');
//     const [resume, setResume] = useState<File | null>(null);

//     const userType = currentEmployer ? 'employer' : currentApplicant ? 'applicant' : null;

//     const handleApplyClick = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     const handleResumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         if (event.target.files) {
//             setResume(event.target.files[0]);
//         }
//     };

//     return (
//         <div className='flex flex-col sm:flex-row justify-between items-center border p-4 rounded-md shadow-md'>
//             <div className='flex-1'>
//                 <h3 className="text-xl font-bold">{job.title}</h3>
//                 <p className="text-gray-700">{job.company} • {job.rating} ★ </p>
//                 <p className="text-gray-700">{job.experience} • {job.salary} • {job.workMode}</p>
//                 {/* <p className="text-gray-700">Skills: {job.skills.join(', ')}</p> */}
//                 <p className="text-gray-500">{job.posted}</p>
//             </div>
//             {userType === 'applicant' && (
//                 <div className='mt-4 sm:mt-0'>
//                     <Button color="blue" variant="gradient" size="md" onClick={handleApplyClick}>
//                         <span className="text-base">Apply</span>
//                     </Button>
//                 </div>
//             )}
//             <Dialog open={open} handler={handleClose} className="">
//                 <DialogHeader>
//                     Apply for {job.title}
//                     <Button color="red" variant="text" size="sm" className="ml-auto" onClick={handleClose}>
//                         Cancel
//                     </Button>
//                 </DialogHeader>
//                 <DialogBody divider>
//                     <div className="flex flex-col space-y-4">
//                         <Textarea
//                             label="Cover Letter"
//                             value={coverLetter}
//                             onChange={(e) => setCoverLetter(e.target.value)}
//                             maxLength={150}
//                             className="w-full"
//                         />
//                         <Input
//                             crossOrigin={""}
//                             type="file"
//                             label="Upload Resume"
//                             accept=".jpg,.jpeg,.png"
//                             onChange={handleResumeChange}
//                             className="w-full"
//                         />
//                     </div>
//                 </DialogBody>
//                 <DialogFooter>
//                     <Button color="blue" variant="gradient" size="md">
//                         <span className="text-base">Apply</span>
//                     </Button>
//                 </DialogFooter>
//             </Dialog>
//         </div>
//     );
// };

// export default JobCardComponent;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useEmployerStore } from '../../stores/useEmployerStore';
// import { useApplicantStore } from '../../stores/useApplicantStore';
// import { useMutation } from 'react-query';
// import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, Input, Textarea } from '@material-tailwind/react';
// import { useApplicationActions } from '../../hooks/useApplicationsAction';

// interface JobCardProps {
//     job: {
//         id: string;
//         title: string;
//         company: string;
//         rating: number;
//         experience: string;
//         salary: string;
//         workMode: string;
//         skills: string[];
//         posted: string;
//     };
// }

// const JobCardComponent: React.FC<JobCardProps> = ({ job }) => {
//     const { currentEmployer } = useEmployerStore();
//     const { currentApplicant } = useApplicantStore();
//     const { applyJob } = useApplicationActions();
//     const currentUser = currentEmployer || currentApplicant;
//     const navigate = useNavigate();

//     const [open, setOpen] = useState(false);
//     const [coverLetter, setCoverLetter] = useState('');
//     const [resume, setResume] = useState<File | null>(null);

//     const userType = currentEmployer ? 'employer' : currentApplicant ? 'applicant' : null;

//     const handleApplyClick = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     const handleResumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         if (event.target.files) {
//             setResume(event.target.files[0]);
//         }
//     };

//     const handleApply = async (e: React.FormEvent) => {
//         console.log("here les say");

//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('jobId', job.id);
//         formData.append('coverLetter', coverLetter);
//         if (currentUser?.id) {
//             formData.append('applicantId', currentUser.id);
//         }

//         if (resume) {
//             formData.append('resume', resume);
//         }
//         for (let [key, value] of formData.entries()) {
//             console.log("hey");

//             console.log(key, value);
//         }

//         try {

//             const data = await applyJob.mutateAsync(formData);
//             console.log('Application submitted successfully!', data.data);

//             // Update the stores if necessary
//             // e.g., addApplication(data.data);

//             setOpen(false);
//             setCoverLetter('');
//             setResume(null);

//             // Navigate to the login page
//             navigate('/login');
//         } catch (error) {
//             console.error('Error submitting application', error);
//         }
//     };

//     return (
//         <div className='flex flex-col sm:flex-row justify-between items-center border p-4 rounded-md shadow-md'>
//             <div className='flex-1'>
//                 <h3 className="text-xl font-bold">{job.title}</h3>
//                 <p className="text-gray-700">{job.company} • {job.rating} ★ </p>
//                 <p className="text-gray-700">{job.experience} • {job.salary} • {job.workMode}</p>
//                 {/* <p className="text-gray-700">Skills: {job.skills.join(', ')}</p> */}
//                 <p className="text-gray-500">{job.posted}</p>
//             </div>
//             {userType === 'applicant' && (
//                 <div className='mt-4 sm:mt-0'>
//                     <Button color="blue" variant="gradient" size="md" onClick={handleApplyClick}>
//                         <span className="text-base">Apply</span>
//                     </Button>
//                 </div>
//             )}
//             <Dialog open={open} handler={handleClose} className="">
//                 <DialogHeader>
//                     Apply for {job.title}
//                     <Button color="red" variant="text" size="sm" className="ml-auto" onClick={handleClose}>
//                         Cancel
//                     </Button>
//                 </DialogHeader>
//                 <form onSubmit={handleApply}>
//                     <DialogBody divider>
//                         <div className="flex flex-col space-y-4">
//                             <Textarea
//                                 label="Cover Letter"
//                                 value={coverLetter}
//                                 onChange={(e) => setCoverLetter(e.target.value)}
//                                 maxLength={150}
//                                 className="w-full"
//                             />
//                             <Input
//                                 crossOrigin={""}
//                                 type="file"
//                                 label="Upload Resume"
//                                 accept=".jpg,.jpeg,.png,.pdf"
//                                 onChange={handleResumeChange}
//                                 className="w-full"
//                             />
//                         </div>
//                     </DialogBody>
//                     <DialogFooter>
//                         <Button type="submit" color="blue" variant="gradient" size="md">
//                             <span className="text-base">Apply</span>
//                         </Button>
//                     </DialogFooter>
//                 </form>
//             </Dialog>
//         </div>
//     );
// };

// export default JobCardComponent;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useEmployerStore } from '../../stores/useEmployerStore';
// import { useApplicantStore } from '../../stores/useApplicantStore';
// import { useMutation } from 'react-query';
// import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, Input, Textarea } from '@material-tailwind/react';
// import { useApplicationActions } from '../../hooks/useApplicationsAction';
// import JobCard from '../innerComponents/jobComponent1'; // Ensure the correct path to JobCard component

// interface JobCardProps {
//     job: {
//         id: string;
//         title: string;
//         company: string;
//         location: string;
//         rating: number;
//         experience: string;
//         salary: string;
//         workMode: string;
//         skills: string[];
//         posted: string;
//         description: string;
//     };
// }

// const JobCardComponent: React.FC<JobCardProps> = ({ job }) => {
//     const { currentEmployer } = useEmployerStore();
//     const { currentApplicant } = useApplicantStore();
//     const { applyJob } = useApplicationActions();
//     const currentUser = currentEmployer || currentApplicant;
//     const navigate = useNavigate();

//     const [open, setOpen] = useState(false);
//     const [coverLetter, setCoverLetter] = useState('');
//     const [resume, setResume] = useState<File | null>(null);

//     const userType = currentEmployer ? 'employer' : currentApplicant ? 'applicant' : null;

//     const handleApplyClick = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     const handleResumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         if (event.target.files) {
//             setResume(event.target.files[0]);
//         }
//     };

//     const handleApply = async (e: React.FormEvent) => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('jobId', job.id);
//         formData.append('coverLetter', coverLetter);
//         if (currentUser?.id) {
//             formData.append('applicantId', currentUser.id);
//         }

//         if (resume) {
//             formData.append('resume', resume);
//         }

//         try {
//             const data = await applyJob.mutateAsync(formData);
//             console.log('Application submitted successfully!', data.data);

//             setOpen(false);
//             setCoverLetter('');
//             setResume(null);

//             navigate('/login');
//         } catch (error) {
//             console.error('Error submitting application', error);
//         }
//     };

//     return (
//         <>
//             <div>

//                 <JobCard
//                     title={job.title}
//                     company={job.company}
//                     experience={job.experience}
//                     salary={job.salary}
//                     location={job.location}
//                     description={job.description}
//                     workMode={job.workMode}
//                 />
//             </div>
//             {userType === 'applicant' && (
//                 <div className='mt-4 sm:mt-0'>
//                     <Button color="blue" variant="gradient" size="md" onClick={handleApplyClick}>
//                         <span className="text-base">Apply</span>
//                     </Button>
//                 </div>
//             )}
//             <Dialog open={open} handler={handleClose} className="">
//                 <DialogHeader>
//                     Apply for {job.title}
//                     <Button color="red" variant="text" size="sm" className="ml-auto" onClick={handleClose}>
//                         Cancel
//                     </Button>
//                 </DialogHeader>
//                 <form onSubmit={handleApply}>
//                     <DialogBody divider>
//                         <div className="flex flex-col space-y-4">
//                             <Textarea
//                                 label="Cover Letter"
//                                 value={coverLetter}
//                                 onChange={(e) => setCoverLetter(e.target.value)}
//                                 maxLength={150}
//                                 className="w-full"
//                             />
//                             <Input
//                                 crossOrigin={""}
//                                 type="file"
//                                 label="Upload Resume"
//                                 accept=".jpg,.jpeg,.png,.pdf"
//                                 onChange={handleResumeChange}
//                                 className="w-full"
//                             />
//                         </div>
//                     </DialogBody>

//                 </form>
//             </Dialog>
//         </>
//     );
// };

// export default JobCardComponent;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEmployerStore } from '../../stores/useEmployerStore';
import { useApplicantStore } from '../../stores/useApplicantStore';
import { useMutation } from 'react-query';
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, Input, Textarea } from '@material-tailwind/react';
import { useApplicationActions } from '../../hooks/useApplicationsAction';
import JobCard from '../innerComponents/jobComponent1'; // Ensure the correct path to JobCard component
import { BiLoaderCircle } from 'react-icons/bi';
import { experienceMapping, formatValue, salaryMapping } from '../utils/mapping';

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

            navigate('/applications');
        } catch (error) {
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
