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


import React, { useState } from 'react';
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
import { PencilIcon, PlusCircleIcon, TrashIcon, XMarkIcon, ClockIcon, CurrencyRupeeIcon, MapPinIcon, BookmarkIcon } from '@heroicons/react/24/solid';
import { Job } from '../../types/index.types';

interface JobCardProps {
    job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
    return (
        <Card className="p-6 relative bg-white shadow-md rounded-lg">
            <div className="absolute top-2 right-2">
                <Menu>
                    <MenuHandler>
                        <Button variant="text" size="sm" className="p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                            </svg>
                        </Button>
                    </MenuHandler>
                    <MenuList>
                        <MenuItem className="flex items-center gap-2">
                            <PencilIcon className="h-5 w-5 text-gray-500" />
                            <Typography variant="small" color="gray" className="font-normal">
                                Edit
                            </Typography>
                        </MenuItem>
                        <MenuItem className="flex items-center gap-2">
                            <TrashIcon className="h-5 w-5 text-gray-500" />
                            <Typography variant="small" color="gray" className="font-normal">
                                Delete
                            </Typography>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </div>
            <Typography variant="h6" className="font-semibold mb-2 truncate">
                {job.title}
            </Typography>
            <div className="flex items-center gap-2 mb-4">
                <ClockIcon className="h-5 w-5 text-gray-500" />
                <Typography className="text-gray-500">{job.experience}</Typography>
                <CurrencyRupeeIcon className="h-5 w-5 text-gray-500" />
                <Typography className="text-gray-500">{job.salary}</Typography>
                <MapPinIcon className="h-5 w-5 text-gray-500" />
                <Typography className="text-gray-500">{job.location}</Typography>
            </div>
            <Typography className="text-gray-700 mb-4 truncate">
                {job.description}
            </Typography>
            <div className="flex flex-wrap gap-2 mb-4">
                <Typography className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md">{job.workMode}</Typography>
                <Typography className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md">{job.education}</Typography>
            </div>
            <div className="flex justify-between items-center">
                {/* <Typography className="text-gray-500 text-sm">{job.createdAt}</Typography> */}
                <BookmarkIcon className="h-5 w-5 text-gray-500" />
            </div>
        </Card>
    );
};

export default JobCard;
