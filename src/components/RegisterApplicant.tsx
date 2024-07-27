import React, { useState } from 'react';
import { Input, Button, Typography, Card } from '@material-tailwind/react';
import { StickyNavbar } from './ui/Navbar';
import { useNavigate } from 'react-router-dom';
import { useApplicantActions } from '../hooks/useApplicantsAction';
import { BiLoaderCircle } from 'react-icons/bi';
import toast from 'react-hot-toast';

const RegistrationFormApplicant: React.FC = () => {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        fullName: '',
        email: '',
        password: '',
    });

    const [profileImage, setProfileImage] = useState<File | null>(null);
    const [message, setMessage] = useState<string | null>(null);

    const { registerApplicant } = useApplicantActions();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setProfileImage(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage(null);

        const formData = new FormData();
        Object.entries(formValues).forEach(([key, value]) => {
            formData.append(key, value);
        });

        if (profileImage) {
            formData.append('avatarUrl', profileImage);
        }

        try {
            const response = await registerApplicant.mutateAsync(formData);
            toast.success(response?.message || 'Registration successful!')

            // Reset form
            setFormValues({
                fullName: '',
                email: '',
                password: '',
            });
            setProfileImage(null);

            navigate('/login'); // Adjust the route if needed
        } catch (error: any) {
            toast.error(error?.message || 'Registration failed!');
        }
    };

    return (
        <>
            {/* <StickyNavbar /> */}
            <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center" style={{ backgroundImage: `url('https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png')` }}>
                <div className="w-full max-w-5xl mx-auto p-6">
                    <Card className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 p-6">
                        <Card className="w-full lg:w-1/2 p-6">
                            <Typography className="mb-1 font-bold">Create your profile</Typography>
                            <Typography className="mb-2 text-gray-500 text-sm">Post your job to India's No.1 Job Site</Typography>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <Input
                                    crossOrigin={""}
                                    type="text"
                                    name="fullName"
                                    variant="standard"
                                    label="Full name"
                                    value={formValues.fullName}
                                    onChange={handleInputChange}
                                    required
                                />
                                <Input
                                    crossOrigin={""}
                                    type="email"
                                    name="email"
                                    variant="standard"
                                    label="Email ID"
                                    value={formValues.email}
                                    onChange={handleInputChange}
                                    required
                                />
                                <Input
                                    crossOrigin={""}
                                    type="password"
                                    name="password"
                                    variant="standard"
                                    label="Password"
                                    value={formValues.password}
                                    onChange={handleInputChange}
                                    required
                                />
                                <Input
                                    crossOrigin={""}
                                    type="file"
                                    name="avatarUrl"
                                    variant="standard"
                                    label="Profile Image"
                                    onChange={handleImageChange}
                                    accept="image/*"
                                />
                                <Button type="submit" color="blue" className='flex justify-center items-center' disabled={registerApplicant.isLoading} fullWidth>
                                    {registerApplicant.isLoading && <BiLoaderCircle className="animate-spin mr-2" />}
                                    <span className="ml-2">Register now</span>
                                </Button>
                            </form>
                        </Card>
                        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center border-r border-gray-200 pr-6 ">
                            <img src="/Onboarding-employer.png" alt="Placeholder" className="w-1/2 mb-4" />
                            <Typography variant="h6" className="text-center mb-4">On registering, you can</Typography>
                            <ul className="text-left">
                                <li className="mb-2">✔ Build your profile and let recruiters find you</li>
                                <li className="mb-2">✔ Get job postings delivered right to your email</li>
                                <li className="mb-2">✔ Find a job and grow your career</li>
                            </ul>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
};

export default RegistrationFormApplicant;



