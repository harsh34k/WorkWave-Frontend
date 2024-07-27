import React, { useState } from 'react';
import { Input, Button, Typography, Card } from '@material-tailwind/react';
import { StickyNavbar } from './ui/Navbar';
import { useEmployerActions } from '../hooks/useEmployerActions';
import { useEmployerStore } from '../stores/useEmployerStore';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BiLoaderCircle } from 'react-icons/bi';



const LoginForm: React.FC = () => {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        fullName: '', // Assuming you only need email and password for login
        email: '',
        password: '',
    });

    const [message, setMessage] = useState<string | null>(null);

    const { setCurrentEmployer, setAccessToken } = useEmployerStore();
    const { loginEmployer } = useEmployerActions(); // Assuming you have a hook to get login mutation

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage(null);

        try {
            const { email, password, fullName } = formValues;
            const response = await loginEmployer.mutateAsync({ email, password, fullName });
            console.log("response hai bhai from login", response);
            // const response = await axios.post(`http://localhost:8000/api/v1/employers/login`, { email, password, fullName });
            // console.log("response after changes", response);


            // Assuming successful login returns necessary data
            if (response?.data?.accessToken) {
                // Handle success, set tokens or user context
                //set current user to this user
                console.log("response.data from loginEmployer", response.data);

                setAccessToken(response.data.accessToken);
                setCurrentEmployer(response.data.user);
                setMessage('Login successful!');
                navigate('/'); // Redirect to dashboard or wherever needed
            } else {
                // Handle unexpected response
                setMessage('Login failed. Please try again.');
            }
        } catch (error) {
            // Handle network errors, or custom error responses
            setMessage('Login failed. Please try again.');
            // setMessage(error?.response?.data?.message || 'Login failed. Please try again.');
        }
    };

    return (
        <>
            {/* <StickyNavbar /> */}
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
                                <Button type="submit" color="blue" className='flex justify-center items-center' fullWidth disabled={loginEmployer.isLoading}>
                                    {loginEmployer.isLoading && <BiLoaderCircle className="animate-spin mr-2" />}
                                    <span className="ml-2">Log in now</span>
                                </Button>
                            </form>
                            {message && <p className="mt-4 text-center text-red-500">{message}</p>}
                        </Card>
                        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center border-r border-gray-200 pr-6">
                            <img src="/Connecting-teams.png" alt="Placeholder" className="w-1/2 mb-4" />
                            <Typography variant="h6" className="text-center mb-4">Start your journey with us and enjoy:</Typography>
                            <ul className="text-left">
                                <li className="mb-2">✔ Showcase your company profile to attract top talent</li>
                                <li className="mb-2">✔ Receive notifications for relevant job postings directly to your inbox</li>
                                <li className="mb-2">✔ Explore new opportunities and grow your business</li>
                            </ul>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
};

export default LoginForm;
