// import React from 'react';
// import { useEmployerStore } from '../../stores/useEmployerStore';
// import { useApplicantStore } from '../../stores/useApplicantStore';

// import { Button } from '@material-tailwind/react';

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
//     const { currentEmployer, } = useEmployerStore();
//     const { currentApplicant, } = useApplicantStore();
//     const currentUser = currentEmployer || currentApplicant;
//     console.log("currentUser from job page", currentUser);

//     const userType = currentEmployer ? 'employer' : currentApplicant ? 'applicant' : null;

//     return (
//         <div className='flex flex-col sm:flex-row justify-between items-center border p-4 rounded-md shadow-md'>
//             <div className='flex-1'>
//                 <h3 className="text-xl font-bold">{job.title}</h3>
//                 <p className="text-gray-700">{job.company} • {job.rating} ★ </p>
//                 <p className="text-gray-700">{job.experience} • {job.salary} • {job.workMode}</p>
//                 <p className="text-gray-700">Skills: {job.skills.join(', ')}</p>
//                 <p className="text-gray-500">{job.posted}</p>
//             </div>
//             {userType === 'applicant' && (
//                 <div className='mt-4 sm:mt-0'>
//                     <Button color="blue" variant="gradient" size="md">
//                         <span className="text-base">Apply</span>
//                     </Button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default JobCardComponent;

import React, { useState } from 'react';
import { useEmployerStore } from '../../stores/useEmployerStore';
import { useApplicantStore } from '../../stores/useApplicantStore';
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, Input, Textarea } from '@material-tailwind/react';

interface JobCardProps {
    job: {
        title: string;
        company: string;
        rating: number;
        experience: string;
        salary: string;
        workMode: string;
        skills: string[];
        posted: string;
    };
}

const JobCardComponent: React.FC<JobCardProps> = ({ job }) => {
    const { currentEmployer } = useEmployerStore();
    const { currentApplicant } = useApplicantStore();
    const currentUser = currentEmployer || currentApplicant;

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

    return (
        <div className='flex flex-col sm:flex-row justify-between items-center border p-4 rounded-md shadow-md'>
            <div className='flex-1'>
                <h3 className="text-xl font-bold">{job.title}</h3>
                <p className="text-gray-700">{job.company} • {job.rating} ★ </p>
                <p className="text-gray-700">{job.experience} • {job.salary} • {job.workMode}</p>
                <p className="text-gray-700">Skills: {job.skills.join(', ')}</p>
                <p className="text-gray-500">{job.posted}</p>
            </div>
            {userType === 'applicant' && (
                <div className='mt-4 sm:mt-0'>
                    <Button color="blue" variant="gradient" size="md" onClick={handleApplyClick}>
                        <span className="text-base">Apply</span>
                    </Button>
                </div>
            )}
            <Dialog open={open} handler={handleClose} className="">
                <DialogHeader>
                    Apply for {job.title}
                    <Button color="red" variant="text" size="sm" className="ml-auto" onClick={handleClose}>
                        Cancel
                    </Button>
                </DialogHeader>
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
                            accept=".jpg,.jpeg,.png"
                            onChange={handleResumeChange}
                            className="w-full"
                        />
                    </div>
                </DialogBody>
                <DialogFooter>
                    <Button color="blue" variant="gradient" size="md">
                        <span className="text-base">Apply</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </div>
    );
};

export default JobCardComponent;
