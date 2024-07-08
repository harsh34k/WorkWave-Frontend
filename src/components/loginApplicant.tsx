import React, { useState } from 'react';
import { Input, Button, Typography, Card } from '@material-tailwind/react';
import { StickyNavbar } from './ui/Navbar';
import { useNavigate } from 'react-router-dom';
import { useApplicantActions } from '../hooks/useApplicantsAction';
import { useApplicantStore } from '../stores/useApplicantStore';

const LoginFormApplicant: React.FC = () => {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        fullName: '', // Assuming you only need email and password for login
        email: '',
        password: '',
    });

    const [message, setMessage] = useState<string | null>(null);

    const { setCurrentApplicant, setAccessToken } = useApplicantStore();
    const { loginApplicant } = useApplicantActions();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage(null);

        try {
            const { email, password, fullName } = formValues;
            const response = await loginApplicant.mutateAsync({ email, password, fullName });
            // console.log("response ", response);


            // Assuming successful login returns necessary data
            if (response?.data?.accessToken) {

                setAccessToken(response.data.accessToken);
                setCurrentApplicant(response.data.user);
                setMessage('Login successful!');
                navigate('/');
            } else {
                setMessage('Login failed. Please try again.');
            }
        } catch (error) {

            setMessage('Login failed. Please try again.');

        }
    };

    return (
        <>
            <StickyNavbar />
            <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center" style={{ backgroundImage: `url('https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png')` }}>
                <div className="w-full max-w-5xl mx-auto p-6">
                    <Card className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 p-6">
                        <Card className="w-full lg:w-1/2 p-6">
                            <Typography className="mb-1 font-bold">Log in</Typography>
                            <Typography className="mb-2 text-gray-500 text-sm">Log in to manage your account</Typography>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <Input
                                    crossOrigin={""}
                                    type="string"
                                    name="fullName"
                                    variant="standard"
                                    label="FullName"
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
                                <Button type="submit" color="blue" fullWidth>
                                    Log in now
                                </Button>
                            </form>
                            {message && <p className="mt-4 text-center text-red-500">{message}</p>}
                        </Card>
                        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center border-r border-gray-200 pr-6">
                            <img src="/Connecting-teams.png" alt="Placeholder" className="w-1/2 mb-4" />
                            <Typography variant="h6" className="text-center mb-4">Start your journey with us and enjoy:</Typography>
                            <ul className="text-left">
                                <li className="mb-2">✔ Create and enhance your professional profile to stand out to recruiters</li>
                                <li className="mb-2">✔ Receive job postings directly to your email for easy access</li>
                                <li className="mb-2">✔ Discover and apply to jobs that advance your career</li>
                            </ul>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
};

export default LoginFormApplicant;
