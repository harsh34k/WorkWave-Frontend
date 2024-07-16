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
// import { PencilIcon, PlusCircleIcon, TrashIcon, XMarkIcon } from '@heroicons/react/24/solid';
// import { useEmployerStore } from '../stores/useEmployerStore';
// import { useApplicantStore } from '../stores/useApplicantStore';
// import { useApplicantActions } from '../hooks/useApplicantsAction';
// import { useEmployerActions } from '../hooks/useEmployerActions';
// import { Education, Salary } from '../types/index.types';

// const jobData = [
//     {
//         title: 'Frontend Developer',
//         description: 'Looking for an experienced Frontend Developer to join our team.',
//         link: '/jobs/frontend-developer'
//     },
//     {
//         title: 'Backend Developer',
//         description: 'Seeking a Backend Developer with expertise in Node.js.',
//         link: '/jobs/backend-developer'
//     },
//     {
//         title: 'UI/UX Designer',
//         description: 'We need a creative UI/UX Designer to design amazing user experiences.',
//         link: '/jobs/ui-ux-designer'
//     },
//     // Add more jobs as needed
// ];

// const JobBoard = () => {
//     const { currentEmployer } = useEmployerStore();
//     const { currentApplicant } = useApplicantStore();
//     const { getCurrentApplicant } = useApplicantActions();
//     const { getCurrentEmployer } = useEmployerActions();
//     const currentUser = currentEmployer || currentApplicant;
//     const userType = currentEmployer ? 'employer' : currentApplicant ? 'applicant' : null;

//     const [open, setOpen] = useState(false);
//     const [formValues, setFormValues] = useState({
//         title: '',
//         description: '',
//         location: '',
//         workMode: '',
//         experience: '',
//         salary: '',
//         education: ''
//     });

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         const { name, value } = e.target;
//         setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
//     };

//     const handleSelectChange = (name: string, value: string) => {
//         setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
//     };

//     const handleCreateJob = async () => {
//         // Add the logic to handle job creation here
//         console.log('Creating job with values:', formValues);
//         // Close the modal after creating the job
//         setOpen(false);
//     };

//     React.useEffect(() => {
//         const fetchData = async () => {
//             if (userType === "employer") {
//                 await getCurrentEmployer.refetch();
//             } else if (userType === "applicant") {
//                 await getCurrentApplicant.refetch();
//             }
//         };
//         fetchData();
//     }, []);

//     return (
//         <div className="min-h-screen bg-gray-50 p-6 w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png')` }}>
//             <div className="max-w-5xl mx-auto">
//                 <div className="flex items-center justify-between mb-4">
//                     <Typography variant="h4" className="font-bold rounded-lg p-2">
//                         Jobs
//                     </Typography>
//                     <Button className="p-2 rounded-full" variant="text" onClick={() => setOpen(true)}>
//                         <PlusCircleIcon className="h-10 w-10 text-blue-500" />
//                     </Button>
//                 </div>
//                 <hr className="mb-6 border-gray-300" />
//                 <Typography className="font-bold mb-4 text-gray-600">
//                     Created Jobs
//                 </Typography>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {jobData.map((job, index) => (
//                         <Card key={index} className="p-6 relative">
//                             <div className="absolute top-2 right-2">
//                                 <Menu>
//                                     <MenuHandler>
//                                         <Button variant="text" size="sm" className="p-1">
//                                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
//                                             </svg>
//                                         </Button>
//                                     </MenuHandler>
//                                     <MenuList>
//                                         <MenuItem className="flex items-center gap-2">
//                                             <PencilIcon className="h-5 w-5 text-gray-500" />
//                                             <Typography variant="small" color="gray" className="font-normal">
//                                                 Edit
//                                             </Typography>
//                                         </MenuItem>
//                                         <MenuItem className="flex items-center gap-2">
//                                             <TrashIcon className="h-5 w-5 text-gray-500" />
//                                             <Typography variant="small" color="gray" className="font-normal">
//                                                 Delete
//                                             </Typography>
//                                         </MenuItem>
//                                     </MenuList>
//                                 </Menu>
//                             </div>
//                             <Typography variant="h6" className="font-semibold mb-2">
//                                 {job.title}
//                             </Typography>
//                             <Typography className="text-gray-500 mb-4">
//                                 {job.description}
//                             </Typography>
//                             <Button variant="gradient" color="blue" fullWidth>
//                                 View Job
//                             </Button>
//                         </Card>
//                     ))}
//                 </div>
//             </div>

//             {/* Create Job Dialog */}
//             <Dialog open={open} handler={setOpen}>
//                 <DialogHeader className="flex justify-between items-center">
//                     <Typography variant="h5">Create New Job</Typography>
//                     <Button variant="text" size="sm" onClick={() => setOpen(false)}>
//                         <XMarkIcon className="h-5 w-5 text-gray-700" />
//                     </Button>
//                 </DialogHeader>
//                 <DialogBody divider>
//                     <div className="space-y-4">
//                         <Input
//                             variant="standard"
//                             crossOrigin={""}
//                             name="title"
//                             label="Job Title"
//                             value={formValues.title}
//                             onChange={handleInputChange}
//                             required
//                         />
//                         <Textarea
//                             className='-mb-3'
//                             name="description"
//                             label="Job Description"
//                             value={formValues.description}
//                             onChange={handleInputChange}
//                             required
//                         />
//                         <Input
//                             variant="standard"
//                             crossOrigin={""}
//                             name="location"
//                             label="Location"
//                             value={formValues.location}
//                             onChange={handleInputChange}
//                             required
//                         />
//                         <Select
//                             variant="standard"
//                             name="workMode"
//                             label="Work Mode"
//                             onChange={(value) => handleSelectChange('workMode', value as string)}
//                             value={formValues.workMode}

//                         >
//                             <Option value="ONSITE">Onsite</Option>
//                             <Option value="REMOTE">Remote</Option>
//                             <Option value="HYBRID">Hybrid</Option>
//                         </Select>
//                         <Select
//                             variant="standard"
//                             name="experience"
//                             label="Experience Level"
//                             onChange={(value) => handleSelectChange('experience', value as string)}
//                             value={formValues.experience}

//                         >
//                             <Option value="JUNIOR">Junior</Option>
//                             <Option value="MID">Mid</Option>
//                             <Option value="SENIOR">Senior</Option>
//                         </Select>
//                         <Select
//                             variant="standard"
//                             name="salary"
//                             label="Salary"
//                             onChange={(value) => handleSelectChange('salary', value as string)}
//                             value={formValues.workMode}

//                         >
// <Option value={Salary.BELOW_3_LAKHS as unknown as string}>Less than 3Lakhs</Option>
// <Option value={Salary.FROM_3_TO_6_LAKHS as unknown as string}>3-6 Lakhs</Option>
// <Option value={Salary.FROM_6_TO_10_LAKHS as unknown as string}>6-10 Lakhs</Option>
// <Option value={Salary.FROM_10_TO_15_LAKHS as unknown as string}>10-15 Lakhs</Option>
// <Option value={Salary.ABOVE_15_LAKHS as unknown as string}>15 Lakhs+</Option>
//                         </Select>
//                         {/* <Input
//                             variant="standard"
//                             crossOrigin={""}
//                             name="education"
//                             label="Required Education"
//                             value={formValues.education}
//                             onChange={handleInputChange}
//                             required
//                         /> */}
//                         <Select
//                             variant="standard"
//                             name="education"
//                             label="Education"
//                             onChange={(value) => handleSelectChange('education', value as string)}
//                             value={formValues.experience}

//                         >
//                             <Option value={Education.Tenth as unknown as string}>Tenth</Option>
//                             <Option value={Education.Twelfth as unknown as string}>Twelfth</Option>
//                             <Option value={Education.Graduation as unknown as string}>Graduation</Option>
//                             <Option value={Education.PostGraduation as unknown as string}>PostGraduation</Option>
//                             <Option value={Education.Phd as unknown as string}>Phd</Option>
//                         </Select>
//                     </div>
//                 </DialogBody>
//                 <DialogFooter>
//                     <Button color="blue" variant="gradient" onClick={handleCreateJob}>
//                         Create Job
//                     </Button>
//                 </DialogFooter>
//             </Dialog>
//         </div>
//     );
// };

// export default JobBoard;


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
// import { PencilIcon, PlusCircleIcon, TrashIcon, XMarkIcon } from '@heroicons/react/24/solid';
// import { useEmployerStore } from '../stores/useEmployerStore';
// import { useApplicantStore } from '../stores/useApplicantStore';
// import { useApplicantActions } from '../hooks/useApplicantsAction';
// import { useEmployerActions } from '../hooks/useEmployerActions';
// import { Education, Salary } from '../types/index.types';
// import { useMutation, useQueryClient } from 'react-query'; // Import necessary hooks
// import { useJobActions } from '../hooks/useJobAction';

// // Your job data
// const jobData = [
//     {
//         title: 'Frontend Developer',
//         description: 'Looking for an experienced Frontend Developer to join our team.',
//         link: '/jobs/frontend-developer'
//     },
//     {
//         title: 'Backend Developer',
//         description: 'Seeking a Backend Developer with expertise in Node.js.',
//         link: '/jobs/backend-developer'
//     },
//     {
//         title: 'UI/UX Designer',
//         description: 'We need a creative UI/UX Designer to design amazing user experiences.',
//         link: '/jobs/ui-ux-designer'
//     },
//     // Add more jobs as needed
// ];


// const JobBoard = () => {
//     const { currentEmployer } = useEmployerStore();
//     const { currentApplicant } = useApplicantStore();
//     const { getCurrentApplicant } = useApplicantActions();
//     const { getCurrentEmployer } = useEmployerActions();
//     const currentUser = currentEmployer || currentApplicant;
//     const userType = currentEmployer ? 'employer' : currentApplicant ? 'applicant' : null;

//     const [open, setOpen] = useState(false);
//     const [formValues, setFormValues] = useState({
//         title: '',
//         description: '',
//         location: '',
//         workMode: '',
//         experience: '',
//         salary: '',
//         education: ''
//     });

//     const { publishJob } = useJobActions(); // Use the mutation hook

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         const { name, value } = e.target;
//         setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
//     };

//     const handleSelectChange = (name: string, value: string) => {
//         setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
//     };

//     const handleCreateJob = async (e: React.FormEvent) => {
//         e.preventDefault()
//         const formData = new FormData();
//         Object.entries(formValues).forEach(([key, value]) => {
//             formData.append(key, value);
//         });

//         const response = await publishJob.mutateAsync(formData, {
//             onSuccess: () => {
//                 console.log('Job created successfully!');
//                 setOpen(false);
//                 // Reset form values if needed
//                 setFormValues({
//                     title: '',
//                     description: '',
//                     location: '',
//                     workMode: '',
//                     experience: '',
//                     salary: '',
//                     education: ''
//                 });
//             },
//             onError: (error) => {
//                 console.log("error hai bhai", error);
//                 // console.log("error k sath message  hai bhai", message);

//                 // setMessage(error?.response?.data?.message || 'Registration failed!');
//             },
//         });
//         console.log("response", response);
//     };

//     React.useEffect(() => {
//         const fetchData = async () => {
//             if (userType === "employer") {
//                 await getCurrentEmployer.refetch();
//             } else if (userType === "applicant") {
//                 await getCurrentApplicant.refetch();
//             }
//         };
//         fetchData();
//     }, []);

//     return (
//         <div className="min-h-screen bg-gray-50 p-6 w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png')` }}>
//             <div className="max-w-5xl mx-auto">
//                 <div className="flex items-center justify-between mb-4">
//                     <Typography variant="h4" className="font-bold rounded-lg p-2">
//                         Jobs
//                     </Typography>
//                     <Button className="p-2 rounded-full" variant="text" onClick={() => setOpen(true)}>
//                         <PlusCircleIcon className="h-10 w-10 text-blue-500" />
//                     </Button>
//                 </div>
//                 <hr className="mb-6 border-gray-300" />
//                 <Typography className="font-bold mb-4 text-gray-600">
//                     Created Jobs
//                 </Typography>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {jobData.map((job, index) => (
//                         <Card key={index} className="p-6 relative">
//                             <div className="absolute top-2 right-2">
//                                 <Menu>
//                                     <MenuHandler>
//                                         <Button variant="text" size="sm" className="p-1">
//                                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
//                                             </svg>
//                                         </Button>
//                                     </MenuHandler>
//                                     <MenuList>
//                                         <MenuItem className="flex items-center gap-2">
//                                             <PencilIcon className="h-5 w-5 text-gray-500" />
//                                             <Typography variant="small" color="gray" className="font-normal">
//                                                 Edit
//                                             </Typography>
//                                         </MenuItem>
//                                         <MenuItem className="flex items-center gap-2">
//                                             <TrashIcon className="h-5 w-5 text-gray-500" />
//                                             <Typography variant="small" color="gray" className="font-normal">
//                                                 Delete
//                                             </Typography>
//                                         </MenuItem>
//                                     </MenuList>
//                                 </Menu>
//                             </div>
//                             <Typography variant="h6" className="font-semibold mb-2">
//                                 {job.title}
//                             </Typography>
//                             <Typography className="text-gray-500 mb-4">
//                                 {job.description}
//                             </Typography>
//                             <Button variant="gradient" color="blue" fullWidth>
//                                 View Job
//                             </Button>
//                         </Card>
//                     ))}
//                 </div>
//             </div>

//             {/* Create Job Dialog */}
//             <Dialog open={open} handler={setOpen}>
//                 <DialogHeader className="flex justify-between items-center">
//                     <Typography variant="h5">Create New Job</Typography>
//                     <Button variant="text" size="sm" onClick={() => setOpen(false)}>
//                         <XMarkIcon className="h-5 w-5 text-gray-700" />
//                     </Button>
//                 </DialogHeader>
//                 <DialogBody divider>
//                     <div className="space-y-4">
//                         <Input
//                             variant="standard"
//                             crossOrigin={""}
//                             name="title"
//                             label="Job Title"
//                             value={formValues.title}
//                             onChange={handleInputChange}
//                             required
//                         />
//                         <Textarea
//                             className='-mb-3'
//                             name="description"
//                             label="Job Description"
//                             value={formValues.description}
//                             onChange={handleInputChange}
//                             required
//                         />
//                         <Input
//                             variant="standard"
//                             crossOrigin={""}
//                             name="location"
//                             label="Location"
//                             value={formValues.location}
//                             onChange={handleInputChange}
//                             required
//                         />
//                         <Select
//                             variant="standard"
//                             name="workMode"
//                             label="Work Mode"
//                             onChange={(value) => handleSelectChange('workMode', value as string)}
//                             value={formValues.workMode}
//                         >
//                             <Option value="ONSITE">Onsite</Option>
//                             <Option value="REMOTE">Remote</Option>
//                             <Option value="HYBRID">Hybrid</Option>
//                         </Select>
//                         <Select
//                             variant="standard"
//                             name="experience"
//                             label="Experience Level"
//                             onChange={(value) => handleSelectChange('experience', value as string)}
//                             value={formValues.experience}
//                         >
//                             <Option value="JUNIOR">Junior</Option>
//                             <Option value="MID">Mid</Option>
//                             <Option value="SENIOR">Senior</Option>
//                         </Select>
//                         <Select
//                             variant="standard"
//                             name="salary"
//                             label="Salary"
//                             onChange={(value) => handleSelectChange('salary', value as string)}
//                             value={formValues.salary}
//                         >
//                             <Option value={Salary.BELOW_3_LAKHS as unknown as string}>Less than 3Lakhs</Option>
//                             <Option value={Salary.FROM_3_TO_6_LAKHS as unknown as string}>3-6 Lakhs</Option>
//                             <Option value={Salary.FROM_6_TO_10_LAKHS as unknown as string}>6-10 Lakhs</Option>
//                             <Option value={Salary.FROM_10_TO_15_LAKHS as unknown as string}>10-15 Lakhs</Option>
//                             <Option value={Salary.ABOVE_15_LAKHS as unknown as string}>15 Lakhs+</Option>
//                         </Select>
//                         <Select
//                             variant="standard"
//                             name="education"
//                             label="Education Level"
//                             onChange={(value) => handleSelectChange('education', value as string)}
//                             value={formValues.education}
//                         >
//                             <Option value={Education.TENTH as unknown as string}>Tenth</Option>
//                             <Option value={Education.TWELFTH as unknown as string}>Twelfth</Option>
//                             <Option value={Education.GRADUATION as unknown as string}>Graduation</Option>
//                             <Option value={Education.POSTGRADUATION as unknown as string}>PostGraduation</Option>
//                             <Option value={Education.PHD as unknown as string}>Phd</Option>
//                         </Select>
//                     </div>
//                 </DialogBody>
//                 <DialogFooter>
//                     <Button variant="gradient" color="blue" onClick={handleCreateJob}>
//                         Create Job
//                     </Button>
//                 </DialogFooter>
//             </Dialog>
//         </div>
//     );
// };

// export default JobBoard;




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
// import { PencilIcon, PlusCircleIcon, TrashIcon, XMarkIcon } from '@heroicons/react/24/solid';
// import { useEmployerStore } from '../stores/useEmployerStore';
// import { useApplicantStore } from '../stores/useApplicantStore';
// import { useApplicantActions } from '../hooks/useApplicantsAction';
// import { useEmployerActions } from '../hooks/useEmployerActions';
// import { ApiResponse, Applicant, Education, Salary, Employer, Job } from '../types/index.types';
// import { useMutation, useQueryClient } from 'react-query'; // Import necessary hooks
// import { useJobActions } from '../hooks/useJobAction';
// import { index } from '@material-tailwind/react/types/components/select';

// // Your job data
// const jobData = [
//     {
//         title: 'Frontend Developer',
//         description: 'Looking for an experienced Frontend Developer to join our team.',
//         link: '/jobs/frontend-developer'
//     },
//     {
//         title: 'Backend Developer',
//         description: 'Seeking a Backend Developer with expertise in Node.js.',
//         link: '/jobs/backend-developer'
//     },
//     {
//         title: 'UI/UX Designer',
//         description: 'We need a creative UI/UX Designer to design amazing user experiences.',
//         link: '/jobs/ui-ux-designer'
//     },
//     // Add more jobs as needed
// ];
// interface CurrentUserResponse extends ApiResponse {
//     data: Employer | Applicant
// }

// const isEmployer = (user: Employer | Applicant): user is Employer => {
//     return (user as Employer).companyName !== undefined;
// };

// const isApplicant = (user: Employer | Applicant): user is Applicant => {
//     return (user as Applicant).fullName !== undefined;
// };

// const JobBoard = () => {
//     const { currentEmployer } = useEmployerStore();
//     const { currentApplicant } = useApplicantStore();
//     const { getCurrentApplicant } = useApplicantActions();
//     const { getCurrentEmployer } = useEmployerActions();
//     const currentUser = (currentEmployer || currentApplicant) ;
//     if (!currentUser) {
//         return <div>loading...</div>
//     }
//     console.log("currentUser from jobBoard", currentUser);

//     const jobData = currentUser.email


//     const userType = currentEmployer ? 'employer' : currentApplicant ? 'applicant' : null;
//     // const jobData = currentUser.

//     const [open, setOpen] = useState(false);
//     const [formValues, setFormValues] = useState({
//         title: '',
//         description: '',
//         location: '',
//         workMode: '',
//         experience: '',
//         salary: '',
//         education: ''
//     });

//     const { publishJob } = useJobActions(); // Use the mutation hook

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         const { name, value } = e.target;
//         setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
//     };

//     const handleSelectChange = (name: string, value: string) => {
//         setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
//     };

//     const handleCreateJob = async (e: React.FormEvent) => {
//         e.preventDefault()
//         const formData = new FormData();
//         Object.entries(formValues).forEach(([key, value]) => {
//             console.log("formValues", formValues);

//             formData.append(key, value);
//         });
//         console.log("formData from job.tsx frontend", formData);
//         for (let pair of formData.entries()) {
//             console.log(`${pair[0]}: ${pair[1]}`);
//         }


//         const response = await publishJob.mutateAsync(formData, {
//             onSuccess: () => {
//                 console.log('Job created successfully!');
//                 setOpen(false);
//                 // Reset form values if needed
//                 setFormValues({
//                     title: '',
//                     description: '',
//                     location: '',
//                     workMode: '',
//                     experience: '',
//                     salary: '',
//                     education: ''
//                 });
//             },
//             onError: (error) => {
//                 console.log("error hai bhai", error);
//                 // console.log("error k sath message  hai bhai", message);

//                 // setMessage(error?.response?.data?.message || 'Registration failed!');
//             },
//         });
//         console.log("response", response);
//     };

//     React.useEffect(() => {
//         const fetchData = async () => {
//             if (userType === "employer") {
//                 await getCurrentEmployer.refetch();
//             } else if (userType === "applicant") {
//                 await getCurrentApplicant.refetch();
//             }
//         };
//         fetchData();
//     }, []);

//     return (
// <div className="min-h-screen bg-gray-50 p-6 w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png')` }}>
//             <div className="max-w-5xl mx-auto">
//                 <div className="flex items-center justify-between mb-4">
//                     <Typography variant="h4" className="font-bold rounded-lg p-2">
//                         Jobs
//                     </Typography>
//                     <Button className="p-2 rounded-full" variant="text" onClick={() => setOpen(true)}>
//                         <PlusCircleIcon className="h-10 w-10 text-blue-500" />
//                     </Button>
//                 </div>
//                 <hr className="mb-6 border-gray-300" />
//                 <Typography className="font-bold mb-4 text-gray-600">
//                     Created Jobs
//                 </Typography>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {jobData.map((job: Job, index: index) => (
//                         <Card key={index} className="p-6 relative">
//                             <div className="absolute top-2 right-2">
//                                 <Menu>
//                                     <MenuHandler>
//                                         <Button variant="text" size="sm" className="p-1">
//                                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
//                                             </svg>
//                                         </Button>
//                                     </MenuHandler>
//                                     <MenuList>
//                                         <MenuItem className="flex items-center gap-2">
//                                             <PencilIcon className="h-5 w-5 text-gray-500" />
//                                             <Typography variant="small" color="gray" className="font-normal">
//                                                 Edit
//                                             </Typography>
//                                         </MenuItem>
//                                         <MenuItem className="flex items-center gap-2">
//                                             <TrashIcon className="h-5 w-5 text-gray-500" />
//                                             <Typography variant="small" color="gray" className="font-normal">
//                                                 Delete
//                                             </Typography>
//                                         </MenuItem>
//                                     </MenuList>
//                                 </Menu>
//                             </div>
//                             <Typography variant="h6" className="font-semibold mb-2">
//                                 {job.title}
//                             </Typography>
//                             <Typography className="text-gray-500 mb-4">
//                                 {job.description}
//                             </Typography>
//                             <Typography>
//                                 {job.location}
//                             </Typography>
//                             <Typography>
//                                 {job.salary}
//                             </Typography>
//                             <Typography>
//                                 {job.workMode}
//                             </Typography>
//                             <Typography>
//                                 {job.education}
//                             </Typography>
//                             <Typography>
//                                 {job.experience}
//                             </Typography>
//                             <Button variant="gradient" color="blue" fullWidth>
//                                 View Job
//                             </Button>
//                         </Card>
//                     ))}
//                 </div>
//             </div>

//             {/* Create Job Dialog */}
//             <Dialog open={open} handler={setOpen}>
//                 <DialogHeader className="flex justify-between items-center">
//                     <Typography variant="h5">Create New Job</Typography>
//                     <Button variant="text" size="sm" onClick={() => setOpen(false)}>
//                         <XMarkIcon className="h-5 w-5 text-gray-700" />
//                     </Button>
//                 </DialogHeader>
//                 <DialogBody divider>
//                     <div className="space-y-4">
//                         <Input
//                             variant="standard"
//                             crossOrigin={""}
//                             name="title"
//                             label="Job Title"
//                             value={formValues.title}
//                             onChange={handleInputChange}
//                             required
//                         />
//                         <Textarea
//                             className='-mb-3'
//                             name="description"
//                             label="Job Description"
//                             value={formValues.description}
//                             onChange={handleInputChange}
//                             required
//                         />
//                         <Input
//                             variant="standard"
//                             crossOrigin={""}
//                             name="location"
//                             label="Location"
//                             value={formValues.location}
//                             onChange={handleInputChange}
//                             required
//                         />
//                         <Select
//                             variant="standard"
//                             name="workMode"
//                             label="Work Mode"
//                             onChange={(value) => handleSelectChange('workMode', value as string)}
//                             value={formValues.workMode}
//                         >
//                             <Option value="ONSITE">Onsite</Option>
//                             <Option value="REMOTE">Remote</Option>
//                             <Option value="HYBRID">Hybrid</Option>
//                         </Select>
//                         <Select
//                             variant="standard"
//                             name="experience"
//                             label="Experience Level"
//                             onChange={(value) => handleSelectChange('experience', value as string)}
//                             value={formValues.experience}
//                         >
//                             <Option value="FRESHER">FRESHER</Option>
//                             <Option value="ONE_TO_TWO_YEARS">1-2 Years</Option>
//                             <Option value="TWO_TO_THREE_YEARS">2-3 Years</Option>
//                             <Option value="THREE_TO_FOUR_YEARS">3-4 Years</Option>
//                             <Option value="FOUR_TO_FIVE_YEARS">4-5 Years</Option>
//                             <Option value="ABOVE_FIVE_YEARS"> 5+ Years</Option> Senior
//                         </Select>
//                         <Select
//                             variant="standard"
//                             name="salary"
//                             label="Salary"
//                             onChange={(value) => handleSelectChange('salary', value as string)}
//                             value={formValues.salary}
//                         >
//                             <Option value="BELOW_3_LAKHS">Less than 3 Lakhs</Option>
//                             <Option value="FROM_3_TO_6_LAKHS">3-6 Lakhs</Option>
//                             <Option value="FROM_6_TO_10_LAKHS">6-10 Lakhs</Option>
//                             <Option value="FROM_10_TO_15_LAKHS">10-15 Lakhs</Option>
//                             <Option value="ABOVE_15_LAKHS">15 Lakhs+</Option>
//                         </Select>
//                         <Select
//                             variant="standard"
//                             name="education"
//                             label="Education Level"
//                             onChange={(value) => handleSelectChange('education', value as string)}
//                             value={formValues.education}
//                         >
//                             <Option value="TENTH">Tenth</Option>
//                             <Option value="TWELFTH">Twelfth</Option>
//                             <Option value="GRADUATION">Graduation</Option>
//                             <Option value="POST_GRADUATION">PostGraduation</Option>
//                             <Option value="PHD">PhD</Option>
//                         </Select>
//                     </div>
//                 </DialogBody>
//                 <DialogFooter>
//                     <Button variant="gradient" color="blue" onClick={handleCreateJob}>
//                         Create Job
//                     </Button>
//                 </DialogFooter>
//             </Dialog>
//         </div>
//     );
// };

// export default JobBoard;


// import React, { useState, useEffect } from 'react';
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
// import { PencilIcon, PlusCircleIcon, TrashIcon, XMarkIcon } from '@heroicons/react/24/solid';
// import { useEmployerStore } from '../stores/useEmployerStore';
// import { useApplicantStore } from '../stores/useApplicantStore';
// import { useApplicantActions } from '../hooks/useApplicantsAction';
// import { useEmployerActions } from '../hooks/useEmployerActions';
// import { ApiResponse, Applicant, Education, Salary, Employer, Job } from '../types/index.types';
// import { useMutation, useQueryClient } from 'react-query'; // Import necessary hooks
// import { useJobActions } from '../hooks/useJobAction';
// import JobCard from './innerComponents/JobCard';
// '../'; // Adjust the import path as necessary

// interface CurrentUserResponse extends ApiResponse {
//     data: Employer | Applicant;
// }

// const isEmployer = (user: Employer | Applicant): user is Employer => {
//     return (user as Employer).companyName !== undefined;
// };

// const isApplicant = (user: Employer | Applicant): user is Applicant => {
//     return (user as Applicant).fullName !== undefined;
// };

// const JobBoard = () => {
//     const { currentEmployer } = useEmployerStore();
//     const { currentApplicant } = useApplicantStore();
//     const { getCurrentApplicant } = useApplicantActions();
//     const { getCurrentEmployer } = useEmployerActions();

//     const currentUser = (currentEmployer || currentApplicant) as unknown as ApiResponse;
//     if (!currentUser) {
//         return <div>Loading...</div>;
//     }
//     const jobData = currentUser.data.createdJobs;

//     const userType = currentEmployer ? 'employer' : currentApplicant ? 'applicant' : null;

//     const [open, setOpen] = useState(false);
//     const [formValues, setFormValues] = useState({
//         title: '',
//         description: '',
//         location: '',
//         workMode: '',
//         experience: '',
//         salary: '',
//         education: '',
//     });

//     const { publishJob } = useJobActions(); // Use the mutation hook

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         const { name, value } = e.target;
//         setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
//     };

//     const handleSelectChange = (name: string, value: string) => {
//         setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
//     };

//     const handleCreateJob = async (e: React.FormEvent) => {
//         e.preventDefault();
//         const formData = new FormData();
//         Object.entries(formValues).forEach(([key, value]) => {
//             formData.append(key, value);
//         });

//         await publishJob.mutateAsync(formData, {
//             onSuccess: () => {
//                 setOpen(false);
//                 setFormValues({
//                     title: '',
//                     description: '',
//                     location: '',
//                     workMode: '',
//                     experience: '',
//                     salary: '',
//                     education: '',
//                 });
//             },
//             onError: (error) => {
//                 console.error(error);
//             },
//         });
//     };

// useEffect(() => {
//     const fetchData = async () => {
//         if (userType === 'employer') {
//             await getCurrentEmployer.refetch();
//         } else if (userType === 'applicant') {
//             await getCurrentApplicant.refetch();
//         }
//     };
//     fetchData();
// }, []);

//     return (
//         <div className="min-h-screen bg-gray-50 p-6 w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png')` }}>
//             <div className="max-w-5xl mx-auto">
//                 <div className="flex items-center justify-between mb-4">
//                     <Typography variant="h4" className="font-bold rounded-lg p-2">
//                         Jobs
//                     </Typography>
//                     <Button className="p-2 rounded-full" variant="text" onClick={() => setOpen(true)}>
//                         <PlusCircleIcon className="h-10 w-10 text-blue-500" />
//                     </Button>
//                 </div>
//                 <hr className="mb-6 border-gray-300" />
//                 <Typography className="font-bold mb-4 text-gray-600">
//                     Created Jobs
//                 </Typography>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {jobData.map((job: Job, index: number) => (
//                         <JobCard key={index} job={job} />
//                     ))}
//                 </div>
//             </div>

//             {/* Create Job Dialog */}
//             <Dialog open={open} handler={setOpen}>
//                 <DialogHeader className="flex justify-between items-center">
//                     <Typography variant="h5">Create New Job</Typography>
//                     <Button variant="text" size="sm" onClick={() => setOpen(false)}>
//                         <XMarkIcon className="h-5 w-5 text-gray-700" />
//                     </Button>
//                 </DialogHeader>
//                 <DialogBody divider>
//                     <div className="space-y-4">
//                         <Input
//                             variant="standard"
//                             crossOrigin={''}
//                             name="title"
//                             label="Job Title"
//                             onChange={handleInputChange}
//                             value={formValues.title}

//                         />
//                         <Textarea
//                             name="description"
//                             label="Job Description"
//                             onChange={handleInputChange}
//                             value={formValues.description}

//                         />
//                         <Input
//                             variant="standard"
//                             crossOrigin={''}
//                             name="location"
//                             label="Location"
//                             onChange={handleInputChange}
//                             value={formValues.location}

//                         />
//                         <Select
//                             variant="standard"

//                             name="workMode"
//                             label="Work Mode"
//                             onChange={(value) => handleSelectChange('workMode', value as string)}
//                             value={formValues.workMode}

//                         >
//                             <Option value="ONSITE">Onsite</Option>
//                             <Option value="REMOTE">Remote</Option>
//                             <Option value="HYBRID">Hybrid</Option>
//                         </Select>
//                         <Input
//                             variant="standard"
//                             crossOrigin={''}
//                             name="experience"
//                             label="Experience"
//                             onChange={handleInputChange}
//                             value={formValues.experience}

//                         />
//                         <Input
//                             variant="standard"
//                             crossOrigin={''}
//                             name="salary"
//                             label="Salary"
//                             onChange={handleInputChange}
//                             value={formValues.salary}

//                         />
//                         <Input
//                             variant="standard"
//                             crossOrigin={''}
//                             name="education"
//                             label="Education"
//                             onChange={handleInputChange}
//                             value={formValues.education}

//                         />
//                     </div>
//                 </DialogBody>
//                 <DialogFooter>
//                     <Button variant="text" color="red" onClick={() => setOpen(false)}>
//                         Cancel
//                     </Button>
//                     <Button variant="gradient" color="green" onClick={handleCreateJob}>
//                         Create
//                     </Button>
//                 </DialogFooter>
//             </Dialog>
//         </div>
//     );
// };

// export default JobBoard;





// import React, { useEffect, useState } from 'react';
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
// import { PencilIcon, PlusCircleIcon, TrashIcon, XMarkIcon } from '@heroicons/react/24/solid';
// import { useEmployerStore } from '../stores/useEmployerStore';
// import { useApplicantStore } from '../stores/useApplicantStore';
// import { useApplicantActions } from '../hooks/useApplicantsAction';
// import { useEmployerActions } from '../hooks/useEmployerActions';
// import { ApiResponse, Applicant, Education, Salary, Employer, Job } from '../types/index.types';
// import { useMutation, useQueryClient } from 'react-query'; // Import necessary hooks
// import { useJobActions } from '../hooks/useJobAction';
// import { index } from '@material-tailwind/react/types/components/select';

// // Your job data
// // const jobData = [
// //     {
// //         title: 'Frontend Developer',
// //         description: 'Looking for an experienced Frontend Developer to join our team.',
// //         link: '/jobs/frontend-developer'
// //     },
// //     {
// //         title: 'Backend Developer',
// //         description: 'Seeking a Backend Developer with expertise in Node.js.',
// //         link: '/jobs/backend-developer'
// //     },
// //     {
// //         title: 'UI/UX Designer',
// //         description: 'We need a creative UI/UX Designer to design amazing user experiences.',
// //         link: '/jobs/ui-ux-designer'
// //     },
// //     // Add more jobs as needed
// // ];
// interface CurrentUserResponse extends ApiResponse {
//     data: Employer | Applicant
// }

// const isEmployer = (user: Employer | Applicant): user is Employer => {
//     return (user as Employer).companyName !== undefined;
// };

// const isApplicant = (user: Employer | Applicant): user is Applicant => {
//     return (user as Applicant).fullName !== undefined;
// };

// const JobBoard = () => {
//     const { currentEmployer, setCurrentEmployer } = useEmployerStore();
//     const { currentApplicant } = useApplicantStore();
//     const { getCurrentApplicant } = useApplicantActions();
//     const { getCurrentEmployer } = useEmployerActions();
//     const currentUser = currentEmployer as unknown as ApiResponse;
//     console.log("currentsuer from jobtsx", currentUser);

//     const userType = currentEmployer ? 'employer' : currentApplicant ? 'applicant' : null;
//     console.log("here", userType);

//     useEffect(() => {
//         console.log("hello bro kya hal lchalll");

//         const fetchData = async () => {
//             console.log("hello bro kya hal lchalll");
//             if (userType === "employer") {
//                 await getCurrentEmployer.refetch()

//             }
//         }

//         fetchData();
//     }, [])

//     // useEffect(() => {
//     //     const fetchData = async () => {
//     //         console.log("hello bro kya hal lchalll");
//     //         if (userType === 'employer') {
//     //             await getCurrentEmployer.refetch();
//     //         } else if (userType === 'applicant') {
//     //             await getCurrentApplicant.refetch();
//     //         }
//     //     };
//     //     fetchData();
//     // }, []);

//     const jobData = currentUser?.data?.createdJobs

//     const [open, setOpen] = useState(false);
//     const [formValues, setFormValues] = useState({
//         title: '',
//         description: '',
//         location: '',
//         workMode: '',
//         experience: '',
//         salary: '',
//         education: ''
//     });

//     const { publishJob } = useJobActions(); // Use the mutation hook

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         const { name, value } = e.target;
//         setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
//     };

//     const handleSelectChange = (name: string, value: string) => {
//         setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
//     };

//     const handleCreateJob = async (e: React.FormEvent) => {
//         e.preventDefault()
//         const formData = new FormData();
//         Object.entries(formValues).forEach(([key, value]) => {
//             console.log("formValues", formValues);

//             formData.append(key, value);
//         });
//         console.log("formData from job.tsx frontend", formData);
//         for (let pair of formData.entries()) {
//             console.log(`${pair[0]}: ${pair[1]}`);
//         }


//         const response = await publishJob.mutateAsync(formData, {
//             onSuccess: () => {
//                 console.log('Job created successfully!');
//                 setOpen(false);
//                 // Reset form values if needed
//                 setFormValues({
//                     title: '',
//                     description: '',
//                     location: '',
//                     workMode: '',
//                     experience: '',
//                     salary: '',
//                     education: ''
//                 });
//             },
//             onError: (error) => {
//                 console.log("error hai bhai", error);
//                 // console.log("error k sath message  hai bhai", message);

//                 // setMessage(error?.response?.data?.message || 'Registration failed!');
//             },
//         });
//         console.log("response", response);
//     };



//     return (
//         <div className="min-h-screen bg-gray-50 p-6 w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png')` }}>
//             {/* <div className="min-h-screen bg-gray-50 p-6 w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png`) }}> */}
//             <div className="max-w-5xl mx-auto">
//                 <div className="flex items-center justify-between mb-4">
//                     <Typography variant="h4" className="font-bold rounded-lg p-2">
//                         Jobs
//                     </Typography>
//                     <Button className="p-2 rounded-full" variant="text" onClick={() => setOpen(true)}>
//                         <PlusCircleIcon className="h-10 w-10 text-blue-500" />
//                     </Button>
//                 </div>
//                 <hr className="mb-6 border-gray-300" />
//                 <Typography className="font-bold mb-4 text-gray-600">
//                     Created Jobs
//                 </Typography>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {jobData?.map((job: Job, index: index) => (
//                         <Card key={index} className="p-6 relative">
//                             <div className="absolute top-2 right-2">
//                                 <Menu>
//                                     <MenuHandler>
//                                         <Button variant="text" size="sm" className="p-1">
//                                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
//                                             </svg>
//                                         </Button>
//                                     </MenuHandler>
//                                     <MenuList>
//                                         <MenuItem className="flex items-center gap-2">
//                                             <PencilIcon className="h-5 w-5 text-gray-500" />
//                                             <Typography variant="small" color="gray" className="font-normal">
//                                                 Edit
//                                             </Typography>
//                                         </MenuItem>
//                                         <MenuItem className="flex items-center gap-2">
//                                             <TrashIcon className="h-5 w-5 text-gray-500" />
//                                             <Typography variant="small" color="gray" className="font-normal">
//                                                 Delete
//                                             </Typography>
//                                         </MenuItem>
//                                     </MenuList>
//                                 </Menu>
//                             </div>
//                             <Typography variant="h6" className="font-semibold mb-2">
//                                 {job.title}
//                             </Typography>
//                             <Typography className="text-gray-500 mb-4">
//                                 {job.description}
//                             </Typography>
//                             <Typography>
//                                 {job.location}
//                             </Typography>
//                             <Typography>
//                                 {job.salary}
//                             </Typography>
//                             <Typography>
//                                 {job.workMode}
//                             </Typography>
//                             <Typography>
//                                 {job.education}
//                             </Typography>
//                             <Typography>
//                                 {job.experience}
//                             </Typography>
//                             <Button variant="gradient" color="blue" fullWidth>
//                                 View Job
//                             </Button>
//                         </Card>
//                     ))}
//                 </div>
//             </div>

//             {/* Create Job Dialog */}
//             <Dialog open={open} handler={setOpen}>
//                 <DialogHeader className="flex justify-between items-center">
//                     <Typography variant="h5">Create New Job</Typography>
//                     <Button variant="text" size="sm" onClick={() => setOpen(false)}>
//                         <XMarkIcon className="h-5 w-5 text-gray-700" />
//                     </Button>
//                 </DialogHeader>
//                 <DialogBody divider>
//                     <div className="space-y-4">
//                         <Input
//                             variant="standard"
//                             crossOrigin={""}
//                             name="title"
//                             label="Job Title"
//                             value={formValues.title}
//                             onChange={handleInputChange}
//                             required
//                         />
//                         <Textarea
//                             className='-mb-3'
//                             name="description"
//                             label="Job Description"
//                             value={formValues.description}
//                             onChange={handleInputChange}
//                             required
//                         />
//                         <Input
//                             variant="standard"
//                             crossOrigin={""}
//                             name="location"
//                             label="Location"
//                             value={formValues.location}
//                             onChange={handleInputChange}
//                             required
//                         />
//                         <Select
//                             variant="standard"
//                             name="workMode"
//                             label="Work Mode"
//                             onChange={(value) => handleSelectChange('workMode', value as string)}
//                             value={formValues.workMode}
//                         >
//                             <Option value="ONSITE">Onsite</Option>
//                             <Option value="REMOTE">Remote</Option>
//                             <Option value="HYBRID">Hybrid</Option>
//                         </Select>
// <Select
//     variant="standard"
//     name="experience"
//     label="Experience Level"
//     onChange={(value) => handleSelectChange('experience', value as string)}
//     value={formValues.experience}
// >
//     <Option value="FRESHER">FRESHER</Option>
//     <Option value="ONE_TO_TWO_YEARS">1-2 Years</Option>
//     <Option value="TWO_TO_THREE_YEARS">2-3 Years</Option>
//     <Option value="THREE_TO_FOUR_YEARS">3-4 Years</Option>
//     <Option value="FOUR_TO_FIVE_YEARS">4-5 Years</Option>
//     <Option value="ABOVE_FIVE_YEARS"> 5+ Years</Option> Senior
// </Select>
// <Select
//     variant="standard"
//     name="salary"
//     label="Salary"
//     onChange={(value) => handleSelectChange('salary', value as string)}
//     value={formValues.salary}
// >
//     <Option value="BELOW_3_LAKHS">Less than 3 Lakhs</Option>
//     <Option value="FROM_3_TO_6_LAKHS">3-6 Lakhs</Option>
//     <Option value="FROM_6_TO_10_LAKHS">6-10 Lakhs</Option>
//     <Option value="FROM_10_TO_15_LAKHS">10-15 Lakhs</Option>
//     <Option value="ABOVE_15_LAKHS">15 Lakhs+</Option>
// </Select>
// <Select
//     variant="standard"
//     name="education"
//     label="Education Level"
//     onChange={(value) => handleSelectChange('education', value as string)}
//     value={formValues.education}
// >
//     <Option value="TENTH">Tenth</Option>
//     <Option value="TWELFTH">Twelfth</Option>
//     <Option value="GRADUATION">Graduation</Option>
//     <Option value="POSTGRADUATION">PostGraduation</Option>
//     <Option value="PHD">PhD</Option>
// </Select>
//                     </div>
//                 </DialogBody>
//                 <DialogFooter>
//                     <Button variant="gradient" color="blue" onClick={handleCreateJob}>
//                         Create Job
//                     </Button>
//                 </DialogFooter>
//             </Dialog>
//         </div>
//     );
// };

// export default JobBoard;



// import React, { useEffect, useState } from 'react';
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
// import { PencilIcon, PlusCircleIcon, TrashIcon, XMarkIcon } from '@heroicons/react/24/solid';
// import { useEmployerStore } from '../stores/useEmployerStore';
// import { useApplicantStore } from '../stores/useApplicantStore';
// import { useApplicantActions } from '../hooks/useApplicantsAction';
// import { useEmployerActions } from '../hooks/useEmployerActions';
// import { ApiResponse, Applicant, Employer, Job } from '../types/index.types';
// import { useMutation, useQueryClient } from 'react-query'; // Import necessary hooks
// import { useJobActions } from '../hooks/useJobAction';
// import { index } from '@material-tailwind/react/types/components/select';
// import { useJobStore } from '../stores/useJobStore'; // Import the job store

// interface CurrentUserResponse extends ApiResponse {
//     data: Employer | Applicant
// }

// const isEmployer = (user: Employer | Applicant): user is Employer => {
//     return (user as Employer).companyName !== undefined;
// };

// const isApplicant = (user: Employer | Applicant): user is Applicant => {
//     return (user as Applicant).fullName !== undefined;
// };

// const JobBoard = () => {
//     const { currentEmployer } = useEmployerStore();
//     const { currentApplicant } = useApplicantStore();
//     const { getCurrentApplicant } = useApplicantActions();
//     const { getCurrentEmployer } = useEmployerActions();
//     const { jobList, addJob } = useJobStore(); // Use the job store

//     const userType = currentEmployer ? 'employer' : currentApplicant ? 'applicant' : null;

//     useEffect(() => {
//         const fetchData = async () => {
//             if (userType === "employer") {
//                 await getCurrentEmployer.refetch()
//             }
//         }
//         fetchData();
//     }, [])

//     const jobData = jobList; // Use jobList from the store

//     const [open, setOpen] = useState(false);
//     const [formValues, setFormValues] = useState({
//         title: '',
//         description: '',
//         location: '',
//         workMode: '',
//         experience: '',
//         salary: '',
//         education: ''
//     });

//     const { publishJob } = useJobActions(); // Use the mutation hook

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         const { name, value } = e.target;
//         setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
//     };

//     const handleSelectChange = (name: string, value: string) => {
//         setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
//     };

//     const handleCreateJob = async (e: React.FormEvent) => {
//         e.preventDefault();
//         const formData = new FormData();
//         Object.entries(formValues).forEach(([key, value]) => {
//             formData.append(key, value);
//         });

//         const response = await publishJob.mutateAsync(formData, {
//             onSuccess: (data) => {
//                 console.log('Job created successfully!', data.data.data);
//                 addJob(data.data.data); // Add the new job to the store
//                 setOpen(false);
//                 // Reset form values if needed
//                 setFormValues({
//                     title: '',
//                     description: '',
//                     location: '',
//                     workMode: '',
//                     experience: '',
//                     salary: '',
//                     education: ''
//                 });
//             },
//             onError: (error) => {
//                 console.log("error hai bhai", error);
//             },
//         });
//         console.log("response", response);
//     };

//     return (
//         <div className="min-h-screen bg-gray-50 p-6 w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png')` }}>
//             <div className="max-w-5xl mx-auto">
//                 <div className="flex items-center justify-between mb-4">
//                     <Typography variant="h4" className="font-bold rounded-lg p-2">
//                         Jobs
//                     </Typography>
//                     <Button className="p-2 rounded-full" variant="text" onClick={() => setOpen(true)}>
//                         <PlusCircleIcon className="h-10 w-10 text-blue-500" />
//                     </Button>
//                 </div>
//                 <hr className="mb-6 border-gray-300" />
//                 <Typography className="font-bold mb-4 text-gray-600">
//                     Created Jobs
//                 </Typography>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {jobData?.map((job: Job, index: index) => (
//                         <Card key={index} className="p-6 relative">
//                             <div className="absolute top-2 right-2">
//                                 <Menu>
//                                     <MenuHandler>
// <Button variant="text" size="sm" className="p-1">
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
//     </svg>
// </Button>
//                                     </MenuHandler>
//                                     <MenuList>
//                                         <MenuItem className="flex items-center gap-2">
//                                             <PencilIcon className="h-5 w-5 text-gray-500" />
//                                             <Typography variant="small" color="gray" className="font-normal">
//                                                 Edit
//                                             </Typography>
//                                         </MenuItem>
//                                         <MenuItem className="flex items-center gap-2">
//                                             <TrashIcon className="h-5 w-5 text-gray-500" />
//                                             <Typography variant="small" color="gray" className="font-normal">
//                                                 Delete
//                                             </Typography>
//                                         </MenuItem>
//                                     </MenuList>
//                                 </Menu>
//                             </div>
//                             <Typography variant="h6" className="font-semibold mb-2">
//                                 {job.title}
//                             </Typography>
//                             <Typography className="text-gray-500 mb-4">
//                                 {job.description}
//                             </Typography>
//                             <Typography>
//                                 {job.location}
//                             </Typography>
//                             <Typography>
//                                 {job.salary}
//                             </Typography>
//                             <Typography>
//                                 {job.workMode}
//                             </Typography>
//                             <Typography>
//                                 {job.education}
//                             </Typography>
//                             <Typography>
//                                 {job.experience}
//                             </Typography>
//                             <Button variant="gradient" color="blue" fullWidth>
//                                 View Job
//                             </Button>
//                         </Card>
//                     ))}
//                 </div>
//             </div>

//             {/* Create Job Dialog */}
//             <Dialog open={open} handler={setOpen}>
//                 <DialogHeader className="flex justify-between items-center">
//                     <Typography variant="h5">Create New Job</Typography>
//                     <Button variant="text" size="sm" onClick={() => setOpen(false)}>
//                         <XMarkIcon className="h-5 w-5 text-gray-700" />
//                     </Button>
//                 </DialogHeader>
//                 <DialogBody divider>
//                     <form onSubmit={handleCreateJob} className="space-y-4">
//                         <Input
//                             crossOrigin={""}
//                             label="Job Title"
//                             name="title"
//                             size="lg"
//                             value={formValues.title}
//                             onChange={handleInputChange}
//                             required
//                         />
//                         <Textarea
//                             label="Description"
//                             name="description"
//                             size="lg"
//                             value={formValues.description}
//                             onChange={handleInputChange}
//                             required
//                         />
//                         <Input
//                             crossOrigin={""}
//                             label="Location"
//                             name="location"
//                             size="lg"
//                             value={formValues.location}
//                             onChange={handleInputChange}
//                             required
//                         />
//                         <Select
//                             label="Work Mode"
//                             value={formValues.workMode}
//                             onChange={(value) => handleSelectChange('workMode', value as string)}

//                         >
//                             <Option value="ONSITE">Onsite</Option>
//                             <Option value="REMOTE">Remote</Option>
//                             <Option value="HYBRID">Hybrid</Option>
//                         </Select>
// <Select
//     variant="standard"
//     name="experience"
//     label="Experience Level"
//     onChange={(value) => handleSelectChange('experience', value as string)}
//     value={formValues.experience}
// >
//     <Option value="FRESHER">FRESHER</Option>
//     <Option value="ONE_TO_TWO_YEARS">1-2 Years</Option>
//     <Option value="TWO_TO_THREE_YEARS">2-3 Years</Option>
//     <Option value="THREE_TO_FOUR_YEARS">3-4 Years</Option>
//     <Option value="FOUR_TO_FIVE_YEARS">4-5 Years</Option>
//     <Option value="ABOVE_FIVE_YEARS"> 5+ Years</Option> Senior
// </Select>
// <Select
//     variant="standard"
//     name="salary"
//     label="Salary"
//     onChange={(value) => handleSelectChange('salary', value as string)}
//     value={formValues.salary}
// >
//     <Option value="BELOW_3_LAKHS">Less than 3 Lakhs</Option>
//     <Option value="FROM_3_TO_6_LAKHS">3-6 Lakhs</Option>
//     <Option value="FROM_6_TO_10_LAKHS">6-10 Lakhs</Option>
//     <Option value="FROM_10_TO_15_LAKHS">10-15 Lakhs</Option>
//     <Option value="ABOVE_15_LAKHS">15 Lakhs+</Option>
// </Select>
// <Select
//     variant="standard"
//     name="education"
//     label="Education Level"
//     onChange={(value) => handleSelectChange('education', value as string)}
//     value={formValues.education}
// >
//     <Option value="TENTH">Tenth</Option>
//     <Option value="TWELFTH">Twelfth</Option>
//     <Option value="GRADUATION">Graduation</Option>
//     <Option value="POSTGRADUATION">PostGraduation</Option>
//     <Option value="PHD">PhD</Option>
// </Select>
//                         <DialogFooter>
//                             <Button variant="gradient" color="blue" type="submit" fullWidth>
//                                 Create Job
//                             </Button>
//                         </DialogFooter>
//                     </form>
//                 </DialogBody>
//             </Dialog>
//         </div>
//     );
// };

// export default JobBoard;



// import React, { useEffect, useState } from 'react';
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
// import { PencilIcon, PlusCircleIcon, TrashIcon, XMarkIcon } from '@heroicons/react/24/solid';
// import { useEmployerStore } from '../stores/useEmployerStore';
// import { useApplicantStore } from '../stores/useApplicantStore';
// import { useApplicantActions } from '../hooks/useApplicantsAction';
// import { useEmployerActions } from '../hooks/useEmployerActions';
// import { ApiResponse, Applicant, Employer, Job } from '../types/index.types';
// import { useMutation, useQueryClient } from 'react-query'; // Import necessary hooks
// import { useJobActions } from '../hooks/useJobAction';
// import { index } from '@material-tailwind/react/types/components/select';
// import { useJobStore } from '../stores/useJobStore'; // Import the job store
// import { AxiosError } from 'axios';

// interface CurrentUserResponse extends ApiResponse {
//     data: Employer | Applicant
// }

// const isEmployer = (user: Employer | Applicant): user is Employer => {
//     return (user as Employer).companyName !== undefined;
// };

// const isApplicant = (user: Employer | Applicant): user is Applicant => {
//     return (user as Applicant).fullName !== undefined;
// };

// const JobBoard = () => {
//     const { currentEmployer } = useEmployerStore();
//     const { currentApplicant } = useApplicantStore();
//     const { getCurrentApplicant } = useApplicantActions();
//     const { getCurrentEmployer } = useEmployerActions();
//     const { jobList, addJob } = useJobStore(); // Use the job store

//     const userType = currentEmployer ? 'employer' : currentApplicant ? 'applicant' : null;

//     useEffect(() => {
//         const fetchData = async () => {
//             if (userType === "employer") {
//                 await getCurrentEmployer.refetch()
//             }
//         }
//         fetchData();
//     }, [])

//     const jobData = jobList; // Use jobList from the store

//     const [open, setOpen] = useState(false);
//     const [editOpen, setEditOpen] = useState(false); // State for edit modal
//     const [selectedJob, setSelectedJob] = useState<Job | null>(null); // State for selected job

//     const [formValues, setFormValues] = useState({
//         title: '',
//         description: '',
//         location: '',
//         workMode: '',
//         experience: '',
//         salary: '',
//         education: ''
//     });

//     const { publishJob, updateJob, deleteJob } = useJobActions(); // Use the mutation hook

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         const { name, value } = e.target;
//         setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
//     };

//     const handleSelectChange = (name: string, value: string) => {
//         setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
//     };

//     const handleCreateJob = async (e: React.FormEvent) => {
//         e.preventDefault();
//         const formData = new FormData();
//         Object.entries(formValues).forEach(([key, value]) => {
//             formData.append(key, value);
//         });

//         const response = await publishJob.mutateAsync(formData, {
//             onSuccess: (data) => {
//                 console.log('Job created successfully!', data.data.data);
//                 addJob(data.data.data); // Add the new job to the store
//                 setOpen(false);
//                 // Reset form values if needed
//                 setFormValues({
//                     title: '',
//                     description: '',
//                     location: '',
//                     workMode: '',
//                     experience: '',
//                     salary: '',
//                     education: ''
//                 });
//             },
//             onError: (error) => {
//                 console.log("error hai bhai", error);
//             },
//         });
//         console.log("response", response);
//     };

//     const handleEditJob = (job: Job) => {
//         setSelectedJob(job);
//         setFormValues({
//             title: job.title,
//             description: job.description,
//             location: job.location,
//             workMode: job.workMode as unknown as string,
//             experience: job.experience as unknown as string,
//             salary: job.salary as unknown as string,
//             education: job.education as unknown as string
//         });
//         setEditOpen(true);
//     };

//     const handleUpdateJob = async (e: React.FormEvent) => {
//         e.preventDefault();
//         if (!selectedJob) return;

//         const formData = new FormData();
//         Object.entries(formValues).forEach(([key, value]) => {
//             formData.append(key, value);
//         });

//         await updateJob.mutateAsync({ jobId: selectedJob.id, formData }, {
//             onSuccess: (data: any) => {
//                 console.log("data", data);

//                 console.log('Job updated successfully!', data.data.data);
//                 // updateJob(data.data.data); // Update the job in the store
//                 setEditOpen(false);
//             },
//             onError: (error) => {
//                 console.log("error hai bhai", error);
//             },
//         });
//     };

//     const handleDeleteJob = async (jobId: string) => {
//         await deleteJob.mutateAsync(jobId, {
//             onSuccess: () => {
//                 console.log('Job deleted successfully!');
//                 // deleteJob(jobId); // Remove the job from the store
//             },
//             onError: (error) => {
//                 console.log("error hai bhai", error);
//             },
//         });
//     };

//     return (
//         <div className="min-h-screen bg-gray-50 p-6 w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png')` }}>
//             <div className="max-w-5xl mx-auto">
//                 <div className="flex items-center justify-between mb-4">
//                     <Typography variant="h4" className="font-bold rounded-lg p-2">
//                         Jobs
//                     </Typography>
//                     <Button className="p-2 rounded-full" variant="text" onClick={() => setOpen(true)}>
//                         <PlusCircleIcon className="h-10 w-10 text-blue-500" />
//                     </Button>
//                 </div>
//                 <hr className="mb-6 border-gray-300" />
//                 <Typography className="font-bold mb-4 text-gray-600">
//                     Created Jobs
//                 </Typography>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {jobData?.map((job: Job, index: index) => (
//                         <Card key={index} className="p-6 relative">
//                             <div className="absolute top-2 right-2">
//                                 <Menu>
//                                     <MenuHandler>
//                                         <Button variant="text" size="sm" className="p-1">
//                                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
//                                             </svg>
//                                         </Button>
//                                     </MenuHandler>
//                                     <MenuList>
//                                         <MenuItem className="flex items-center gap-2" onClick={() => handleEditJob(job)}>
//                                             <PencilIcon className="h-5 w-5 text-gray-500" />
//                                             <Typography variant="small" color="gray" className="font-normal">
//                                                 Edit
//                                             </Typography>
//                                         </MenuItem>
//                                         <MenuItem className="flex items-center gap-2" onClick={() => handleDeleteJob(job.id)}>
//                                             <TrashIcon className="h-5 w-5 text-gray-500" />
//                                             <Typography variant="small" color="gray" className="font-normal">
//                                                 Delete
//                                             </Typography>
//                                         </MenuItem>
//                                     </MenuList>
//                                 </Menu>
//                             </div>
//                             <Typography variant="h6" className="font-semibold mb-2">
//                                 {job.title}
//                             </Typography>
//                             <Typography className="text-gray-500 mb-4">
//                                 {job.description}
//                             </Typography>
//                             <Typography className="text-sm text-gray-500">
//                                 <strong>Location:</strong> {job.location}
//                             </Typography>
//                             <Typography className="text-sm text-gray-500">
//                                 <strong>Work Mode:</strong> {job.workMode}
//                             </Typography>
//                             <Typography className="text-sm text-gray-500">
//                                 <strong>Experience:</strong> {job.experience}
//                             </Typography>
//                             <Typography className="text-sm text-gray-500">
//                                 <strong>Salary:</strong> {job.salary}
//                             </Typography>
//                             <Typography className="text-sm text-gray-500">
//                                 <strong>Education:</strong> {job.education}
//                             </Typography>
//                             <Button variant="gradient" color="blue" fullWidth>
//                                 View Job
//                             </Button>
//                         </Card>
//                     ))}
//                 </div>
//             </div>

//             {/* Create Job Modal */}
//             <Dialog open={open} handler={() => setOpen(!open)} size="lg">
//                 <DialogHeader className="flex justify-between">
//                     <Typography variant="h5" color="blue-gray">
//                         Post a Job
//                     </Typography>
//                     <Button variant="text" color="red" onClick={() => setOpen(false)}>
//                         <XMarkIcon className="h-5 w-5" />
//                     </Button>
//                 </DialogHeader>
//                 <form onSubmit={handleCreateJob}>
//                     <DialogBody divider>
//                         <div className="grid grid-cols-1 gap-4">
//                             <Input crossOrigin={""} label="Title" name="title" value={formValues.title} onChange={handleInputChange} required />
//                             <Textarea label="Description" name="description" value={formValues.description} onChange={handleInputChange} required />
//                             <Input crossOrigin={""} label="Location" name="location" value={formValues.location} onChange={handleInputChange} required />
//                             <Select label="Work Mode" name="workMode" value={formValues.workMode} onChange={(value) => handleSelectChange('workMode', value as string)} >
//                                 <Option value="ONSITE">Onsite</Option>
//                                 <Option value="REMOTE">Remote</Option>
//                                 <Option value="HYBRID">Hybrid</Option>
//                             </Select>
//                             <Input crossOrigin={""} label="Experience" name="experience" value={formValues.experience} onChange={handleInputChange} required />
//                             <Input crossOrigin={""} label="Salary" name="salary" value={formValues.salary} onChange={handleInputChange} required />
//                             <Input crossOrigin={""} label="Education" name="education" value={formValues.education} onChange={handleInputChange} required />
//                         </div>
//                     </DialogBody>
//                     <DialogFooter>
//                         <Button variant="text" color="red" onClick={() => setOpen(false)}>
//                             Cancel
//                         </Button>
//                         <Button variant="gradient" color="blue" type="submit">
//                             Create Job
//                         </Button>
//                     </DialogFooter>
//                 </form>
//             </Dialog>

//             {/* Edit Job Modal */}
//             <Dialog open={editOpen} handler={() => setEditOpen(!editOpen)} size="lg">
//                 <DialogHeader className="flex justify-between">
//                     <Typography variant="h5" color="blue-gray">
//                         Edit Job
//                     </Typography>
//                     <Button variant="text" color="red" onClick={() => setEditOpen(false)}>
//                         <XMarkIcon className="h-5 w-5" />
//                     </Button>
//                 </DialogHeader>
//                 <form onSubmit={handleUpdateJob}>
//                     <DialogBody divider>
//                         <div className="grid grid-cols-1 gap-4">
//                             <Input crossOrigin={""} label="Title" name="title" value={formValues.title} onChange={handleInputChange} required />
//                             <Textarea label="Description" name="description" value={formValues.description} onChange={handleInputChange} required />
//                             <Input crossOrigin={""} label="Location" name="location" value={formValues.location} onChange={handleInputChange} required />
//                             <Select label="Work Mode" name="workMode" value={formValues.workMode} onChange={(value) => handleSelectChange('workMode', value as string)} >
//                                 <Option value="ONSITE">Onsite</Option>
//                                 <Option value="REMOTE">Remote</Option>
//                                 <Option value="HYBRID">Hybrid</Option>
//                             </Select>
//                             <Input crossOrigin={""} label="Experience" name="experience" value={formValues.experience} onChange={handleInputChange} required />
//                             <Input crossOrigin={""} label="Salary" name="salary" value={formValues.salary} onChange={handleInputChange} required />
//                             <Input crossOrigin={""} label="Education" name="education" value={formValues.education} onChange={handleInputChange} required />
//                         </div>
//                     </DialogBody>
//                     <DialogFooter>
//                         <Button variant="text" color="red" onClick={() => setEditOpen(false)}>
//                             Cancel
//                         </Button>
//                         <Button variant="gradient" color="blue" type="submit">
//                             Update Job
//                         </Button>
//                     </DialogFooter>
//                 </form>
//             </Dialog>
//         </div>
//     );
// };

// export default JobBoard;


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
import { useApplicantActions } from '../hooks/useApplicantsAction';
import { useEmployerActions } from '../hooks/useEmployerActions';
import { ApiResponse, Applicant, Employer, Job } from '../types/index.types';
import { useMutation, useQueryClient } from 'react-query';
import { useJobActions } from '../hooks/useJobAction';
import { index } from '@material-tailwind/react/types/components/select';
import { useJobStore } from '../stores/useJobStore';
import { AxiosError } from 'axios';

interface CurrentUserResponse extends ApiResponse {
    data: Employer | Applicant
}

const isEmployer = (user: Employer | Applicant): user is Employer => {
    return (user as Employer).companyName !== undefined;
};

const isApplicant = (user: Employer | Applicant): user is Applicant => {
    return (user as Applicant).fullName !== undefined;
};

const JobBoard = () => {
    const { currentEmployer } = useEmployerStore();
    const { currentApplicant } = useApplicantStore();
    const { getCurrentApplicant } = useApplicantActions();
    const { getCurrentEmployer } = useEmployerActions();
    const { jobList, addJob, updateJob, deleteJob } = useJobStore();

    const userType = currentEmployer ? 'employer' : currentApplicant ? 'applicant' : null;

    useEffect(() => {
        const fetchData = async () => {
            if (userType === "employer") {
                await getCurrentEmployer.refetch()
            }
        }
        fetchData();
    }, [])

    const jobData = jobList;

    const [open, setOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);

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
                    education: ''
                });
            },
            onError: (error) => {
                console.log("error hai bhai", error);
            },
        });
        console.log("response", response);
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
                    {jobData?.map((job: Job, index: index) => (
                        <Card key={index} className="p-6 relative">
                            <div className="absolute top-2 right-2">
                                <Menu>
                                    <MenuHandler>
                                        {/* <Button variant="text" size="sm" className="p-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                            </svg>
                                        </Button> */}
                                        <Button variant="text" size="sm" className="p-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                                            </svg>
                                        </Button>
                                    </MenuHandler>
                                    <MenuList>
                                        <MenuItem onClick={() => handleEditJob(job)}>
                                            <Typography variant="small" className="flex items-center gap-2">
                                                <PencilIcon className="h-4 w-4" />
                                                Edit
                                            </Typography>
                                        </MenuItem>
                                        <MenuItem onClick={() => handleDeleteJob(job.id)}>
                                            <Typography variant="small" className="flex items-center gap-2">
                                                <TrashIcon className="h-4 w-4" />
                                                Delete
                                            </Typography>
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                            </div>
                            <Typography variant="h6" className="mb-2 font-bold">
                                {job.title}
                            </Typography>
                            <Typography variant="small" className="mb-2">
                                <span className="font-semibold">Description: </span>{job.description}
                            </Typography>
                            <Typography variant="small" className="mb-2">
                                <span className="font-semibold">Location: </span>{job.location}
                            </Typography>
                            <Typography variant="small" className="mb-2">
                                <span className="font-semibold">Work Mode: </span>{job.workMode}
                            </Typography>
                            <Typography variant="small" className="mb-2">
                                <span className="font-semibold">Experience: </span>{job.experience}
                            </Typography>
                            <Typography variant="small" className="mb-2">
                                <span className="font-semibold">Salary: </span>{job.salary}
                            </Typography>
                            <Typography variant="small" className="mb-2">
                                <span className="font-semibold">Education: </span>{job.education}
                            </Typography>
                        </Card>
                    ))}
                </div>
            </div>
            <Dialog open={open} handler={setOpen} size="lg" className="bg-transparent shadow-none">
                <form onSubmit={handleCreateJob}>
                    <Card className="p-6 relative">
                        <div className='flex '>
                            <DialogHeader className="mx-auto text-center">Create Job</DialogHeader>
                            <Button variant="text" color="red" onClick={() => setOpen(false)}>
                                <XMarkIcon className="h-5 w-5" />
                            </Button>
                        </div>
                        <DialogBody divider className="grid place-items-center gap-4">
                            <Input crossOrigin={""} label="Title" size="lg" name="title" value={formValues.title} onChange={handleInputChange} />
                            <Textarea label="Description" size="lg" name="description" value={formValues.description} onChange={handleInputChange} />
                            <Input crossOrigin={""} label="Location" size="lg" name="location" value={formValues.location} onChange={handleInputChange} />
                            <Select label="Work Mode" size="lg" value={formValues.workMode} onChange={(value) => handleSelectChange('workMode', value as string)}>
                                <Option value="ONSITE">On-site</Option>
                                <Option value="REMOTE">Remote</Option>
                                <Option value="HYBRID">Hybrid</Option>
                            </Select>
                            {/* <Input crossOrigin={""} label="Experience" size="lg" name="experience" value={formValues.experience} onChange={handleInputChange} />
                            <Input crossOrigin={""} label="Salary" size="lg" name="salary" value={formValues.salary} onChange={handleInputChange} />
                            <Input crossOrigin={""} label="Education" size="lg" name="education" value={formValues.education} onChange={handleInputChange} /> */}
                            <Select
                                variant="standard"
                                name="experience"
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
                        </DialogBody>
                        <DialogFooter className="space-x-2">
                            {/* <Button variant="text" color="red" onClick={() => setOpen(false)}>
                                Cancel
                            </Button> */}
                            <Button variant="gradient" color="blue" type="submit">
                                Create
                            </Button>
                        </DialogFooter>
                    </Card>
                </form>
            </Dialog>
            <Dialog open={editOpen} handler={setEditOpen} size="lg" className="bg-transparent shadow-none">
                <form onSubmit={handleUpdateJob}>
                    <Card className="mx-auto w-full max-w-[24rem]">
                        <DialogHeader className="mx-auto text-center">Edit Job</DialogHeader>
                        <DialogBody divider className="grid place-items-center gap-4">
                            <Input crossOrigin={""} label="Title" size="lg" name="title" value={formValues.title} onChange={handleInputChange} />
                            <Textarea label="Description" size="lg" name="description" value={formValues.description} onChange={handleInputChange} />
                            <Input crossOrigin={""} label="Location" size="lg" name="location" value={formValues.location} onChange={handleInputChange} />
                            <Select label="Work Mode" size="lg" value={formValues.workMode} onChange={(value) => handleSelectChange('workMode', value as string)}>
                                <Option value="ONSITE">On-site</Option>
                                <Option value="REMOTE">Remote</Option>
                                <Option value="HYBRID">Hybrid</Option>
                            </Select>
                            <Input crossOrigin={""} label="Experience" size="lg" name="experience" value={formValues.experience} onChange={handleInputChange} />
                            <Input crossOrigin={""} label="Salary" size="lg" name="salary" value={formValues.salary} onChange={handleInputChange} />
                            <Input crossOrigin={""} label="Education" size="lg" name="education" value={formValues.education} onChange={handleInputChange} />
                        </DialogBody>
                        <DialogFooter className="space-x-2">
                            <Button variant="text" color="red" onClick={() => setEditOpen(false)}>
                                Cancel
                            </Button>
                            <Button variant="gradient" color="blue" type="submit">
                                Update
                            </Button>
                        </DialogFooter>
                    </Card>
                </form>
            </Dialog>
        </div>
    );
};

export default JobBoard;
