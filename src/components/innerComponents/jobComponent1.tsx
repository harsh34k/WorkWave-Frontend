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
import { BriefcaseIcon } from '@heroicons/react/24/solid';
import { useApplicationStore } from '../../stores/useApplicationStore';
import { useApplicationActions } from '../../hooks/useApplicationsAction';

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

    const handleOpen = () => {
        setOpen(!open);
    };
    console.log("job education", education);


    return (
        <>
            <Card className="p-4 shadow-lg rounded-lg mb-6">
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
