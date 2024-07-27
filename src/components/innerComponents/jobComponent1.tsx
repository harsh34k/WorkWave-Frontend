// import React from 'react';
// import { Card, Typography, Button } from '@material-tailwind/react';
// // import { Icon } from '@iconify/react';

// const JobCard = ({
//     title = 'React Js Developer',
//     company = 'Emerging Internet Startup',
//     experience = '0-4 Yrs',
//     salary = '₹ 7-10 Lacs P.A.',
//     location = 'Noida, Ghaziabad, ...',
//     description = 'Bachelors degree in Computer Science or related field Masters degree pref...',
//     workMode = "ONsite",
// }) => {
//     return (
//         <Card className="p-4 shadow-lg rounded-lg mb-6">
//             <div className="flex items-center mb-2">
//                 <Typography variant="h5" className="font-semibold">{title}</Typography>
//                 {/* <Typography variant="paragraph" className="text-yellow-500 ml-2"> */}
//                 {/* <Icon icon="mdi:star" className="inline-block" /> {rating}+ */}
//                 {/* </Typography> */}
//             </div>
//             <Typography variant="paragraph" className="text-gray-600">{company}</Typography>
//             <div className="flex items-center mt-2">
//                 <Typography variant="paragraph" className="text-gray-500">{experience}</Typography>
//             </div>
//             <div className="flex items-center mt-2">
//                 <Typography variant="paragraph" className="text-gray-500">{salary}</Typography>
//             </div>
//             <div className="flex items-center mt-2">
//                 <Typography variant="paragraph" className="text-gray-500">{location}</Typography>
//             </div>
//             <Typography variant="paragraph" className="mt-2 text-gray-500">{description}</Typography>
//             <div className="flex flex-wrap mt-2">
//                 <Typography variant="paragraph" className="text-gray-500">{workMode}</Typography>
//             </div>
//         </Card>
//     );
// };

// export default JobCard;


// import React, { useState } from 'react';
// import { Card, Typography, Button, Dialog, DialogHeader, DialogBody, DialogFooter } from '@material-tailwind/react';
// import { BriefcaseIcon } from '@heroicons/react/24/solid';

// const JobCard = ({
//     title = 'React Js Developer',
//     company = 'Emerging Internet Startup',
//     experience = '0-4 Yrs',
//     salary = '₹ 7-10 Lacs P.A.',
//     location = 'Noida, Ghaziabad, ...',
//     description = 'Bachelors degree in Computer Science or related field Masters degree pref...',
//     workMode = "Onsite",
// }) => {
//     const [open, setOpen] = useState(false);
//     const truncatedDescription = description.length > 30 ? `${description.substring(0, 30)}...` : description;

//     const handleOpen = () => setOpen(!open);

//     return (
//         <>
//             <Card className="p-4 shadow-lg rounded-lg mb-6">
//                 <div className="flex items-center mb-2">
//                     <BriefcaseIcon className="h-6 w-6 text-blue-500 mr-2" />
//                     <Typography variant="h5" className="font-semibold">{title}</Typography>
//                 </div>
//                 <Typography variant="paragraph" className="text-gray-600">{company}</Typography>
//                 <div className="flex items-center mt-2">
//                     <Typography variant="paragraph" className="text-gray-500">{experience}</Typography>
//                 </div>
//                 <div className="flex items-center mt-2">
//                     <Typography variant="paragraph" className="text-gray-500">{salary}</Typography>
//                 </div>
//                 <div className="flex items-center mt-2">
//                     <Typography variant="paragraph" className="text-gray-500">{location}</Typography>
//                 </div>
//                 <Typography variant="paragraph" className="mt-2 text-gray-500">{truncatedDescription}</Typography>
//                 <div className="flex flex-wrap mt-2">
//                     <Typography variant="paragraph" className="text-gray-500">{workMode}</Typography>
//                 </div>
//                 <div className="flex justify-end mt-4">
//                     <Button onClick={handleOpen} color="blue" variant="gradient" size="md">
//                         <span className="text-base">View</span>
//                     </Button>
//                 </div>
//             </Card>

//             <Dialog open={open} handler={handleOpen}>
//                 <DialogHeader>
//                     <Typography variant="h5" className="font-semibold">{title}</Typography>
//                 </DialogHeader>
//                 <DialogBody divider>
//                     <Typography variant="paragraph" className="text-gray-600">{company}</Typography>
//                     <Typography variant="paragraph" className="mt-2 text-gray-500">{experience}</Typography>
//                     <Typography variant="paragraph" className="mt-2 text-gray-500">{salary}</Typography>
//                     <Typography variant="paragraph" className="mt-2 text-gray-500">{location}</Typography>
//                     <Typography variant="paragraph" className="mt-2 text-gray-500">{description}</Typography>
//                     <Typography variant="paragraph" className="mt-2 text-gray-500">{workMode}</Typography>
//                 </DialogBody>
//                 <DialogFooter>
//                     <Button variant="text" color="blue" onClick={handleOpen}>
//                         Close
//                     </Button>
//                 </DialogFooter>
//             </Dialog>
//         </>
//     );
// };

// export default JobCard;


// import React, { useState } from 'react';
// import { Card, Typography, Button, Dialog, DialogHeader, DialogBody, DialogFooter } from '@material-tailwind/react';
// import { BriefcaseIcon } from '@heroicons/react/24/solid';

// interface JobCardProps {
//     title: string;
//     experience: string;
//     salary: string;
//     location: string;
//     description: string;
//     workMode: string;
//     onApplyClick?: () => void;
//     userType?: 'employer' | 'applicant' | null;
// }

// const JobCard: React.FC<JobCardProps> = ({
//     title,
//     experience,
//     salary,
//     location,
//     description,
//     workMode,
//     onApplyClick,
//     userType
// }) => {
//     const [open, setOpen] = useState(false);

//     const handleOpen = () => {
//         setOpen(!open);
//     };

//     return (
//         <>
//             <Card className="p-4 shadow-lg rounded-lg mb-6  " >
//                 <div className="flex items-center mb-2">
//                     <BriefcaseIcon className="h-6 w-6 text-gray-700 mr-2" />
//                     <Typography variant="h5" className="font-semibold">{title}</Typography>
//                 </div>
//                 <Typography variant="paragraph" className="mt-2 text-gray-500">
//                     {description.length > 30 ? `${description.substring(0, 38)}...` : description}
//                 </Typography>
//                 {/* <Typography variant="paragraph" className="text-gray-600">{company}</Typography> */}
//                 <div className="flex items-center mt-2">
//                     <Typography variant="paragraph" className="text-gray-500">{experience}</Typography>
//                 </div>
//                 <div className="flex items-center mt-2">
//                     <Typography variant="paragraph" className="text-gray-500">{salary}</Typography>
//                 </div>
//                 <div className="flex items-center mt-2">
//                     <Typography variant="paragraph" className="text-gray-500">{location}</Typography>
//                 </div>

//                 <div className="flex flex-wrap mt-2">
//                     <Typography variant="paragraph" className="text-gray-500">{workMode}</Typography>
//                 </div>
//                 <div className="flex justify-end mt-4 space-x-2">
//                     <Button onClick={handleOpen} color="blue" variant="gradient" size="md">
//                         <span className="text-base">View</span>
//                     </Button>
//                     {userType === 'applicant' && (
//                         <Button color="blue" variant="gradient" size="md" onClick={onApplyClick}>
//                             <span className="text-base">Apply</span>
//                         </Button>
//                     )}
//                 </div>
//             </Card>
//             <Dialog open={open} handler={handleOpen} size="lg">
//                 <DialogHeader>Job Details</DialogHeader>
//                 <DialogBody divider>
//                     <Typography variant="h5" className="font-semibold mb-4">{title}</Typography>
//                     {/* <Typography variant="paragraph" className="text-gray-600 mb-2">{company}</Typography> */}
//                     <Typography variant="paragraph" className="text-gray-500 mb-2">{experience}</Typography>
//                     <Typography variant="paragraph" className="text-gray-500 mb-2">{salary}</Typography>
//                     <Typography variant="paragraph" className="text-gray-500 mb-2">{location}</Typography>
//                     <Typography variant="paragraph" className="text-gray-500 mb-2">{description}</Typography>
//                     <Typography variant="paragraph" className="text-gray-500">{workMode}</Typography>
//                 </DialogBody>
//                 <DialogFooter>
//                     <Button color="red" variant="text" onClick={handleOpen}>
//                         <span>Close</span>
//                     </Button>
//                 </DialogFooter>
//             </Dialog>
//         </>
//     );
// };

// export default JobCard;


import React, { useState } from 'react';
import {
    Card,
    Typography,
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem
} from '@material-tailwind/react';
import { BriefcaseIcon, TrashIcon } from '@heroicons/react/24/solid';
import { useApplicationStore } from '../../stores/useApplicationStore';
import { useApplicationActions } from '../../hooks/useApplicationsAction';
import { BiLoaderCircle } from 'react-icons/bi';

interface JobCardProps {
    id: string
    title: string;
    experience: string;
    education: string;
    salary: string;
    location: string;
    description: string;
    workMode: string;
    onApplyClick?: () => void;
    userType?: 'employer' | 'applicant' | null;
}

const JobCard: React.FC<JobCardProps> = ({
    id,
    title,
    experience,
    education,
    salary,
    location,
    description,
    workMode,
    onApplyClick,
    userType,
}) => {
    const [open, setOpen] = useState(false);
    const { deleteApplication } = useApplicationStore();
    const { deleteJobApplication } = useApplicationActions();

    const handleOpen = () => {
        setOpen(!open);
    };
    console.log("job education", education);


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
        <>
            <Card className="p-4 shadow-lg rounded-lg mb-6">
                {/* <div className="relative">
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
                                <MenuItem className="flex items-center gap-2" onClick={() => handleDeleteApplication(id)}>
                                    {deleteJobApplication.isLoading && <BiLoaderCircle className="animate-spin mr-2" />}
                                    <span className='flex justify-center items-center' ><TrashIcon className="h-4 w-4 mr-2" /> Delete</span>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </div>
                </div> */}
                <div className="flex items-center mb-2">
                    <BriefcaseIcon className="h-6 w-6 text-gray-700 mr-2" />
                    <Typography variant="h5" className="font-semibold">{title}</Typography>
                </div>
                <Typography variant="paragraph" className="mt-2 text-gray-500">
                    {description.length > 30 ? `${description.substring(0, 38)}...` : description}
                </Typography>
                <div className="flex items-center mt-2">
                    <Typography variant="paragraph" className="text-gray-500">{experience}</Typography>
                </div>
                <div className="flex items-center mt-2">
                    <Typography variant="paragraph" className="text-gray-500">{education}</Typography>
                </div>
                <div className="flex items-center mt-2">
                    <Typography variant="paragraph" className="text-gray-500">{salary}</Typography>
                </div>
                <div className="flex items-center mt-2">
                    <Typography variant="paragraph" className="text-gray-500">{location}</Typography>
                </div>
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
