// // src/components/JobCategories.tsx

// import React from 'react';
// import backgroundImage from "/gradient-bg.png"

// const jobCategories = [
//     { title: 'Full Stack Developer', jobs: '17K+ Jobs' },
//     { title: 'Mobile / App Developer', jobs: '2.2K+ Jobs' },
//     { title: 'Front End Developer', jobs: '3.2K+ Jobs' },
//     { title: 'DevOps Engineer', jobs: '2K+ Jobs' },
//     { title: 'Engineering Manager', jobs: '1.2K+ Jobs' },
//     // { title: 'Technical Lead', jobs: '10.3K+ Jobs' },
// ];

// const JobCategories: React.FC = () => {
//     return (
//         <div className=" w-full max-w-5xl  flex items-center p-8 rounded-lg shadow-lg" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', height: "27rem" }}>
//             <div className="flex-1">
//                 <img src="/vector.png" alt="Illustration" style={{ height: "22rem" }} />
//                 <h2 className="text-2xl font-bold ">Discover jobs across popular roles</h2>
//                 <p className="text-lg ">Select a role and we’ll show you relevant jobs for it!</p>
//             </div>
//             <div className="flex-1 bg-white p-6 rounded-md shadow-lg " style={{ height: "29rem" }}>
//                 {jobCategories.map((category, index) => (
//                     <div key={index} className="p-4 border-b last:border-b-0">
//                         <h3 className="text-xl font-semibold">{category.title}</h3>
//                         <p className="text-gray-500">{category.jobs}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default JobCategories;


// import React from 'react';
// import backgroundImage from "/gradient-bg.png";

// const jobCategories = [
//     { title: 'Full Stack Developer', jobs: '17K+ Jobs' },
//     { title: 'Mobile / App Developer', jobs: '2.2K+ Jobs' },
//     { title: 'Front End Developer', jobs: '3.2K+ Jobs' },
//     { title: 'DevOps Engineer', jobs: '2K+ Jobs' },
//     { title: 'Engineering Manager', jobs: '1.2K+ Jobs' },
// ];

// const JobCategories: React.FC = () => {
//     return (
//         <div
//             className="w-full max-w-5xl flex flex-col md:flex-row items-center p-8 rounded-lg shadow-lg"
//             style={{
//                 backgroundImage: `url(${backgroundImage})`,
//                 backgroundSize: 'cover',
//                 height: 'auto', // Set height to auto for responsiveness
//                 backgroundPosition: 'center',
//             }}
//         >
//             <div className="flex-1 mb-8 md:mb-0">
//                 <img
//                     src="/vector.png"
//                     alt="Illustration"
//                     className="w-full max-w-xs md:max-w-none mx-auto"
//                     style={{ height: 'auto' }}
//                 />
//                 <h2 className="text-2xl font-bold mt-4 text-center md:text-left">
//                     Discover jobs across popular roles
//                 </h2>
//                 <p className="text-lg text-center md:text-left mt-2">
//                     Select a role and we’ll show you relevant jobs for it!
//                 </p>
//             </div>
//             <div
//                 className="flex-1 bg-white p-6 rounded-md shadow-lg w-full max-w-sm md:max-w-none"
//                 style={{ height: 'auto' }}
//             >
//                 {jobCategories.map((category, index) => (
//                     <div key={index} className="p-4 border-b last:border-b-0">
//                         <h3 className="text-xl font-semibold">{category.title}</h3>
//                         <p className="text-gray-500">{category.jobs}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default JobCategories;


// src/components/JobCategories.tsx


// src/components/JobCategories.tsx

// import React from 'react';
// import backgroundImage from '/gradient-bg.png';

// const jobCategories = [
//     { title: 'Full Stack Developer', jobs: '17K+ Jobs' },
//     { title: 'Mobile / App Developer', jobs: '2.2K+ Jobs' },
//     { title: 'Front End Developer', jobs: '3.2K+ Jobs' },
//     { title: 'DevOps Engineer', jobs: '2K+ Jobs' },
//     { title: 'Engineering Manager', jobs: '1.2K+ Jobs' },
// ];

// const JobCategories: React.FC = () => {
//     return (
//         <div
//             className="w-full max-w-5xl flex flex-col md:flex-row items-center p-4 md:p-8 rounded-lg shadow-lg"
//             style={{
//                 backgroundImage: `url(${backgroundImage})`,
//                 backgroundSize: 'cover',
//                 height: 'auto',
//                 backgroundPosition: 'center',
//             }}
//         >
//             <div className="flex-1 mb-6 md:mb-0 md:mr-6">
//                 <img
//                     src="/vector.png"
//                     alt="Illustration"
//                     className="w-full max-w-xs md:max-w-none mx-auto "
//                     style={{ height: 'auto' }}
//                 />
//                 <h2 className="text-2xl font-bold mt-4 text-center md:text-left">
//                     Discover jobs across popular roles
//                 </h2>
//                 <p className="text-lg text-center md:text-left mt-2">
//                     Select a role and we’ll show you relevant jobs for it!
//                 </p>
//             </div>
//             <div
//                 className="flex-1 bg-white p-6 rounded-md shadow-lg w-full"
//                 style={{ minHeight: '15rem' }}
//             >
//                 {jobCategories.map((category, index) => (
//                     <div key={index} className="p-4 border-b last:border-b-0">
//                         <h3 className="text-xl font-semibold">{category.title}</h3>
//                         <p className="text-gray-500">{category.jobs}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default JobCategories;

// src/components/JobCategories.tsx

// src/components/HomePageBody.tsx



// src/components/JobCategories.tsx

import React from 'react';
import backgroundImage from '/gradient-bg.png';

const jobCategories = [
    { title: 'Full Stack Developer', jobs: '17K+ Jobs' },
    { title: 'Mobile / App Developer', jobs: '2.2K+ Jobs' },
    { title: 'Front End Developer', jobs: '3.2K+ Jobs' },
    { title: 'DevOps Engineer', jobs: '2K+ Jobs' },
    { title: 'Engineering Manager', jobs: '1.2K+ Jobs' },
];

const JobCategories: React.FC = () => {
    return (
        <div
            className="w-full max-w-5xl flex flex-col md:flex-row items-center p-4 md:p-8 rounded-lg shadow-lg"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="flex-1 mb-6 md:mb-0 md:mr-6">
                <img
                    src="/vector.png"
                    alt="Illustration"
                    className="w-full max-w-xs md:max-w-none mx-auto sm:pt-[5rem] md:pt-[5rem] lg:pt-0"
                // Padding-top of 5rem only on small and medium screens
                />
                <h2 className="text-2xl font-bold mt-4 text-center md:text-left">
                    Discover jobs across popular roles
                </h2>
                <p className="text-lg text-center md:text-left mt-2">
                    Select a role and we’ll show you relevant jobs for it!
                </p>
            </div>
            <div
                className="flex-1 bg-white p-6 rounded-md shadow-lg w-full"
                style={{ minHeight: '15rem' }}
            >
                {jobCategories.map((category, index) => (
                    <div key={index} className="p-4 border-b last:border-b-0">
                        <h3 className="text-xl font-semibold">{category.title}</h3>
                        <p className="text-gray-500">{category.jobs}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobCategories;


// import React, { useState } from 'react';
// import { useEmployerStore } from '../../stores/useEmployerStore';
// import { useApplicantStore } from '../../stores/useApplicantStore';
// import {
//     Button,
//     Dialog,
//     DialogHeader,
//     DialogBody,
//     DialogFooter,
//     Input,
//     Textarea,
//     Typography,
//     Card,
//     IconButton
// } from '@material-tailwind/react';
// import { XMarkIcon } from '@heroicons/react/24/solid';


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
//         <div className='flex flex-col sm:flex-row justify-between items-center p-6 rounded-lg shadow-lg bg-white'>
//             <div className='flex-1'>
//                 <h3 className="text-2xl font-bold">{job.title}</h3>
//                 <p className="text-gray-700">{job.company} • {job.rating} ★ </p>
//                 <p className="text-gray-700">{job.experience} • {job.salary} • {job.workMode}</p>
//                 <p className="text-gray-700">Skills: {job.skills.join(', ')}</p>
//                 <p className="text-gray-500">{job.posted}</p>
//             </div>
//             {userType === 'applicant' && (
//                 <div className='mt-4 sm:mt-0'>
//                     <Button color="blue" variant="gradient" size="md" onClick={handleApplyClick}>
//                         <span className="text-base">Apply</span>
//                     </Button>
//                 </div>
//             )}
//             <Dialog open={open} handler={handleClose} className="fixed inset-0 flex items-center justify-center p-4 bg-opacity-50 backdrop-filter backdrop-blur-sm">
//                 <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md">
//                     <DialogHeader className="flex items-center justify-between p-4 border-b border-gray-200">
//                         <Typography variant="h5">Apply for {job.title}</Typography>
//                         <IconButton variant="text" size="sm" onClick={handleClose}>
//                             <XMarkIcon className="h-5 w-5 text-gray-700" />
//                         </IconButton>
//                     </DialogHeader>
//                     <DialogBody divider className="p-4">
//                         <Card className="space-y-4 p-4">
//                             <Typography className="mb-1 font-bold">Apply</Typography>
//                             <Typography className="mb-2 text-gray-500 text-sm">Submit your application for this job</Typography>
//                             <form className="space-y-4">
//                                 <Textarea
//                                     label="Cover Letter"
//                                     value={coverLetter}
//                                     onChange={(e) => setCoverLetter(e.target.value)}
//                                     maxLength={150}
//                                     className="w-full"
//                                     required
//                                 />
//                                 <Input
//                                     crossOrigin={""}
//                                     type="file"
//                                     label="Upload Resume"
//                                     accept=".pdf,.doc,.docx"
//                                     onChange={handleResumeChange}
//                                     className="w-full"
//                                     required
//                                 />
//                                 <Button color="blue" variant="gradient" size="md" fullWidth onClick={handleClose}>
//                                     <span className="text-base">Apply</span>
//                                 </Button>
//                             </form>
//                         </Card>
//                     </DialogBody>
//                 </div>
//             </Dialog>
//         </div>
//     );
// };

// export default JobCardComponent;
