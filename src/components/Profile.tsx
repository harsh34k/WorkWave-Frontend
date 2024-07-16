import React, { useState } from 'react';
import { Card, Typography, Input, Button } from '@material-tailwind/react';

const ProfilePage = () => {
    const [formValues, setFormValues] = useState({
        fullName: '',
        email: '',
        password: ''
    });
    const [message, setMessage] = useState('');
    const [avatar, setAvatar] = useState('/path/to/default/avatar.png'); // default avatar image

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // handle form submission logic here
    };

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (e.target && typeof e.target.result === 'string') {
                    setAvatar(e.target.result);
                }
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center w-full  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png')` }}>
            <div className="w-full max-w-5xl mx-auto p-6">
                <Card className="flex flex-col items-center space-y-6 p-6">
                    <div className="relative">
                        <img src="/vector.png" alt="Avatar" className="w-24 h-24 rounded-full object-cover mb-4" />
                        <input
                            type="file"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            onChange={handleAvatarChange}
                        />
                    </div>
                    <Typography variant="h5" className="text-center">
                        John Smith
                    </Typography>
                    <Typography className="text-blue-500 mb-2">Hover over container</Typography>
                    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-sm">
                        <Input
                            crossOrigin={""}
                            type="text"
                            name="fullName"
                            variant="standard"
                            label="Full Name"
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
                            Save Changes
                        </Button>
                    </form>
                    {message && <p className="mt-4 text-center text-red-500">{message}</p>}
                </Card>
            </div>
        </div>
    );
};

export default ProfilePage;
