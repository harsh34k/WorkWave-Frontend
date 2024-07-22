// import React from 'react';
// import { Card, Typography, Button, Menu, MenuHandler, MenuList, MenuItem } from '@material-tailwind/react';
// import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
// import { Job } from '../../types/index.types';


// interface JobCardProps {
//     job: Job;
// }

// const JobCard: React.FC<JobCardProps> = ({ job }) => {
//     return (
//         <Card className="p-6 relative shadow-md hover:shadow-lg transition-shadow duration-300">
//             <div className="absolute top-2 right-2">
//                 <Menu>
//                     <MenuHandler>
//                         <Button variant="text" size="sm" className="p-1">
//                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
//                             </svg>
//                         </Button>
//                     </MenuHandler>
//                     <MenuList>
//                         <MenuItem className="flex items-center gap-2">
//                             <PencilIcon className="h-5 w-5 text-gray-500" />
//                             <Typography variant="small" color="gray" className="font-normal">
//                                 Edit
//                             </Typography>
//                         </MenuItem>
//                         <MenuItem className="flex items-center gap-2">
//                             <TrashIcon className="h-5 w-5 text-gray-500" />
//                             <Typography variant="small" color="gray" className="font-normal">
//                                 Delete
//                             </Typography>
//                         </MenuItem>
//                     </MenuList>
//                 </Menu>
//             </div>
//             <Typography variant="h6" className="font-semibold mb-2">
//                 {job.title}
//             </Typography>
//             <Typography className="text-gray-500 mb-4">
//                 {job.description}
//             </Typography>
//             <Typography className="flex items-center text-sm text-gray-600 mb-2">
//                 <span className="mr-2">📍</span> {job.location}
//             </Typography>
//             <Typography className="flex items-center text-sm text-gray-600 mb-2">
//                 <span className="mr-2">💼</span> {job.workMode}
//             </Typography>
//             <Typography className="flex items-center text-sm text-gray-600 mb-2">
//                 <span className="mr-2">🕒</span> {job.experience}
//             </Typography>
//             <Typography className="flex items-center text-sm text-gray-600 mb-2">
//                 <span className="mr-2">🎓</span> {job.education}
//             </Typography>
//             <Typography className="flex items-center text-sm text-gray-600 mb-2">
//                 <span className="mr-2">💰</span> {job.salary}
//             </Typography>
//             <Button variant="gradient" color="blue" fullWidth>
//                 View Job
//             </Button>
//         </Card>
//     );
// };

// export default JobCard;


// import React, { useState } from 'react';
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
// import { PencilIcon, PlusCircleIcon, TrashIcon, XMarkIcon, ClockIcon, CurrencyRupeeIcon, MapPinIcon, BookmarkIcon } from '@heroicons/react/24/solid';
// import { Job } from '../../types/index.types';

// interface JobCardProps {
//     job: Job;
// }

// const JobCard: React.FC<JobCardProps> = ({ job }) => {
//     return (
//         <Card className="p-6 relative bg-white shadow-md rounded-lg">
//             <div className="absolute top-2 right-2">
//                 <Menu>
//                     <MenuHandler>
//                         <Button variant="text" size="sm" className="p-1">
//                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
//                             </svg>
//                         </Button>
//                     </MenuHandler>
//                     <MenuList>
//                         <MenuItem className="flex items-center gap-2">
//                             <PencilIcon className="h-5 w-5 text-gray-500" />
//                             <Typography variant="small" color="gray" className="font-normal">
//                                 Edit
//                             </Typography>
//                         </MenuItem>
//                         <MenuItem className="flex items-center gap-2">
//                             <TrashIcon className="h-5 w-5 text-gray-500" />
//                             <Typography variant="small" color="gray" className="font-normal">
//                                 Delete
//                             </Typography>
//                         </MenuItem>
//                     </MenuList>
//                 </Menu>
//             </div>
//             <Typography variant="h6" className="font-semibold mb-2 truncate">
//                 {job.title}
//             </Typography>
//             <div className="flex items-center gap-2 mb-4">
//                 <ClockIcon className="h-5 w-5 text-gray-500" />
//                 <Typography className="text-gray-500">{job.experience}</Typography>
//                 <CurrencyRupeeIcon className="h-5 w-5 text-gray-500" />
//                 <Typography className="text-gray-500">{job.salary}</Typography>
//                 <MapPinIcon className="h-5 w-5 text-gray-500" />
//                 <Typography className="text-gray-500">{job.location}</Typography>
//             </div>
//             <Typography className="text-gray-700 mb-4 truncate">
//                 {job.description}
//             </Typography>
//             <div className="flex flex-wrap gap-2 mb-4">
//                 <Typography className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md">{job.workMode}</Typography>
//                 <Typography className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md">{job.education}</Typography>
//             </div>
//             <div className="flex justify-between items-center">
//                 {/* <Typography className="text-gray-500 text-sm">{job.createdAt}</Typography> */}
//                 <BookmarkIcon className="h-5 w-5 text-gray-500" />
//             </div>
//         </Card>
//     );
// };

// export default JobCard;


import React, { useState } from 'react';
import { Card, Typography, Button, Dialog, DialogHeader, DialogBody, DialogFooter } from '@material-tailwind/react';
import { BriefcaseIcon } from '@heroicons/react/24/solid';

interface JobCardProps {
    title: string;
    company: string;
    experience: string;
    salary: string;
    location: string;
    description: string;
    workMode: string;
    onApplyClick?: () => void; // Optional handler for apply button click
    userType?: 'employer' | 'applicant' | null; // Explicitly define userType
}

const JobCard: React.FC<JobCardProps> = ({
    title = 'React Js Developer',
    company = 'Emerging Internet Startup',
    experience = '0-4 Yrs',
    salary = '₹ 7-10 Lacs P.A.',
    location = 'Noida, Ghaziabad, ...',
    description = 'Bachelors degree in Computer Science or related field Masters degree pref...',
    workMode = "Onsite",
    onApplyClick, // New handler for apply button click
    userType
}) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <>
            <Card className="p-4 shadow-lg rounded-lg mb-6">
                <div className="flex items-center mb-2">
                    <BriefcaseIcon className="h-6 w-6 text-gray-700 mr-2" />
                    <Typography variant="h5" className="font-semibold">{title}</Typography>
                </div>
                <Typography variant="paragraph" className="text-gray-600">{company}</Typography>
                <div className="flex items-center mt-2">
                    <Typography variant="paragraph" className="text-gray-500">{experience}</Typography>
                </div>
                <div className="flex items-center mt-2">
                    <Typography variant="paragraph" className="text-gray-500">{salary}</Typography>
                </div>
                <div className="flex items-center mt-2">
                    <Typography variant="paragraph" className="text-gray-500">{location}</Typography>
                </div>
                <Typography variant="paragraph" className="mt-2 text-gray-500">{description.length > 30 ? `${description.substring(0, 30)}...` : description}</Typography>
                <div className="flex flex-wrap mt-2">
                    <Typography variant="paragraph" className="text-gray-500">{workMode}</Typography>
                </div>
                <div className="flex justify-end mt-4 space-x-2">
                    <Button onClick={handleOpen} color="blue" variant="gradient" size="md">
                        <span className="text-base">View</span>
                    </Button>
                    {userType === 'applicant' && (
                        <Button color="blue" variant="gradient" size="md" onClick={onApplyClick}>
                            <span className="text-base">Apply</span>
                        </Button>
                    )}
                </div>
            </Card>
            <Dialog open={open} handler={handleOpen} size="lg">
                <DialogHeader>Job Details</DialogHeader>
                <DialogBody divider>
                    <Typography variant="h5" className="font-semibold mb-4">{title}</Typography>
                    <Typography variant="paragraph" className="text-gray-600 mb-2">{company}</Typography>
                    <Typography variant="paragraph" className="text-gray-500 mb-2">{experience}</Typography>
                    <Typography variant="paragraph" className="text-gray-500 mb-2">{salary}</Typography>
                    <Typography variant="paragraph" className="text-gray-500 mb-2">{location}</Typography>
                    <Typography variant="paragraph" className="text-gray-500 mb-2">{description}</Typography>
                    <Typography variant="paragraph" className="text-gray-500">{workMode}</Typography>
                </DialogBody>
                <DialogFooter>
                    <Button color="red" variant="text" onClick={handleOpen}>
                        <span>Close</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
};

export default JobCard;
