// import React, { useState } from 'react';
// import { Card, Typography, Input, Button } from '@material-tailwind/react';

// const ProfilePage = () => {
//     const [formValues, setFormValues] = useState({
//         fullName: '',
//         email: '',
//         password: ''
//     });
//     const [message, setMessage] = useState('');
//     const [avatar, setAvatar] = useState('/path/to/default/avatar.png'); // default avatar image

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setFormValues({
//             ...formValues,
//             [name]: value
//         });
//     };

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         // handle form submission logic here
//     };

//     const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         if (e.target.files && e.target.files[0]) {
//             const reader = new FileReader();
//             reader.onload = (e) => {
//                 if (e.target && typeof e.target.result === 'string') {
//                     setAvatar(e.target.result);
//                 }
//             };
//             reader.readAsDataURL(e.target.files[0]);
//         }
//     };

//     return (
//         <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center w-full  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png')` }}>
//             <div className="w-full max-w-5xl mx-auto p-6">
//                 <Card className="flex flex-col items-center space-y-6 p-6">
//                     <div className="relative">
//                         <img src="/vector.png" alt="Avatar" className="w-24 h-24 rounded-full object-cover mb-4" />
//                         <input
//                             type="file"
//                             className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                             onChange={handleAvatarChange}
//                         />
//                     </div>
//                     <Typography variant="h5" className="text-center">
//                         John Smith
//                     </Typography>
//                     <Typography className="text-blue-500 mb-2">Hover over container</Typography>
//                     <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-sm">
//                         <Input
//                             crossOrigin={""}
//                             type="text"
//                             name="fullName"
//                             variant="standard"
//                             label="Full Name"
//                             value={formValues.fullName}
//                             onChange={handleInputChange}
//                             required
//                         />
//                         <Input
//                             crossOrigin={""}
//                             type="email"
//                             name="email"
//                             variant="standard"
//                             label="Email ID"
//                             value={formValues.email}
//                             onChange={handleInputChange}
//                             required
//                         />
//                         <Input
//                             crossOrigin={""}
//                             type="password"
//                             name="password"
//                             variant="standard"
//                             label="Password"
//                             value={formValues.password}
//                             onChange={handleInputChange}
//                             required
//                         />
//                         <Button type="submit" color="blue" fullWidth>
//                             Save Changes
//                         </Button>
//                     </form>
//                     {message && <p className="mt-4 text-center text-red-500">{message}</p>}
//                 </Card>
//             </div>
//         </div>
//     );
// };

// export default ProfilePage;

// import React, { useEffect, useState } from 'react';
// import { Card, Typography, Input, Button } from '@material-tailwind/react';
// import { useEmployerActions } from '../hooks/useEmployerActions';
// import { useEmployerStore } from '../stores/useEmployerStore';

// const ProfilePage = () => {
//     const { currentEmployer } = useEmployerStore();
//     const { changeCurrentPassword, updateEmployerAccountDetails, updateEmployerAvatar } = useEmployerActions();

//     const [formValues, setFormValues] = useState({
//         fullName: '',
//         email: '',
//         password: ''
//     });
//     const [message, setMessage] = useState('');
//     const [avatar, setAvatar] = useState('/path/to/default/avatar.png'); // default avatar image
//     const [avatarFile, setAvatarFile] = useState<File | null>(null);

//     useEffect(() => {
//         if (currentEmployer) {
//             setFormValues({
//                 fullName: currentEmployer.fullName,
//                 email: currentEmployer.email,
//                 password: '' // Password should not be prefilled
//             });
//             setAvatar(currentEmployer.avatarUrl || '/path/to/default/avatar.png');
//         }
//     }, [currentEmployer]);

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setFormValues({
//             ...formValues,
//             [name]: value
//         });
//     };

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         try {
//             if (formValues.password) {
//                 await changeCurrentPassword.mutateAsync({
//                     oldPassword: '', // Provide old password if necessary
//                     newPassword: formValues.password
//                 });
//             }
//             await updateEmployerAccountDetails.mutateAsync({
//                 fullName: formValues.fullName,
//                 email: formValues.email
//             });
//             if (avatarFile) {
//                 const formData = new FormData();
//                 formData.append('avatar', avatarFile);
//                 await updateEmployerAvatar.mutateAsync(formData);
//             }
//             setMessage('Profile updated successfully!');
//         } catch (error) {
//             setMessage('Error updating profile');
//             console.error('Error updating profile', error);
//         }
//     };

//     const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         if (e.target.files && e.target.files[0]) {
//             const reader = new FileReader();
//             setAvatarFile(e.target.files[0]);
//             reader.onload = (e) => {
//                 if (e.target && typeof e.target.result === 'string') {
//                     setAvatar(e.target.result);
//                 }
//             };
//             reader.readAsDataURL(e.target.files[0]);
//         }
//     };

//     return (
//         <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png')` }}>
//             <div className="w-full max-w-5xl mx-auto p-6">
//                 <Card className="flex flex-col items-center space-y-6 p-6">
//                     <div className="relative">
//                         <img src={avatar} alt="Avatar" className="w-24 h-24 rounded-full object-cover mb-4" />
//                         <input
//                             type="file"
//                             className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                             onChange={handleAvatarChange}
//                         />
//                     </div>
//                     <Typography variant="h5" className="text-center">
//                         {formValues.fullName || 'John Smith'}
//                     </Typography>
//                     <Typography className="text-blue-500 mb-2">Hover over container</Typography>
//                     <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-sm">
//                         <Input
//                             crossOrigin={""}
//                             type="text"
//                             name="fullName"
//                             variant="standard"
//                             label="Full Name"
//                             value={formValues.fullName}
//                             onChange={handleInputChange}
//                             required
//                         />
//                         <Input
//                             crossOrigin={""}
//                             type="email"
//                             name="email"
//                             variant="standard"
//                             label="Email ID"
//                             value={formValues.email}
//                             onChange={handleInputChange}
//                             required
//                         />
//                         <Input
//                             crossOrigin={""}
//                             type="password"
//                             name="password"
//                             variant="standard"
//                             label="Password"
//                             value={formValues.password}
//                             onChange={handleInputChange}
//                             required
//                         />
//                         <Button type="submit" color="blue" fullWidth>
//                             Save Changes
//                         </Button>
//                     </form>
//                     {message && <p className="mt-4 text-center text-red-500">{message}</p>}
//                 </Card>
//             </div>
//         </div>
//     );
// };

// export default ProfilePage;


// import React, { useEffect, useState } from 'react';
// import { Card, Typography, Input, Button } from '@material-tailwind/react';
// import { useEmployerActions } from '../hooks/useEmployerActions';
// import { useEmployerStore } from '../stores/useEmployerStore';

// const ProfilePage = () => {
//     const { currentEmployer } = useEmployerStore();
//     const { changeCurrentPassword, updateEmployerAccountDetails, updateEmployerAvatar } = useEmployerActions();

//     const [formValues, setFormValues] = useState({
//         fullName: '',
//         email: '',
//         password: ''
//     });
//     const [message, setMessage] = useState('');
//     const [avatar, setAvatar] = useState('/path/to/default/avatar.png'); // default avatar image
//     const [avatarFile, setAvatarFile] = useState<File | null>(null);

//     useEffect(() => {
//         if (currentEmployer) {
//             setFormValues({
//                 fullName: currentEmployer.fullName,
//                 email: currentEmployer.email,
//                 password: '' // Password should not be prefilled
//             });
//             setAvatar(currentEmployer.avatarUrl || '/path/to/default/avatar.png');
//         }
//     }, [currentEmployer]);

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setFormValues({
//             ...formValues,
//             [name]: value
//         });
//     };

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         try {
//             if (formValues.password) {
//                 await changeCurrentPassword.mutateAsync({
//                     oldPassword: '', // Provide old password if necessary
//                     newPassword: formValues.password
//                 });
//             }
//             await updateEmployerAccountDetails.mutateAsync({
//                 fullName: formValues.fullName,
//                 email: formValues.email
//             });
//             if (avatarFile) {
//                 const formData = new FormData();
//                 formData.append('avatar', avatarFile);
//                 await updateEmployerAvatar.mutateAsync(formData);
//             }
//             setMessage('Profile updated successfully!');
//         } catch (error) {
//             setMessage('Error updating profile');
//             console.error('Error updating profile', error);
//         }
//     };

//     const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         if (e.target.files && e.target.files[0]) {
//             const reader = new FileReader();
//             setAvatarFile(e.target.files[0]);
//             reader.onload = (e) => {
//                 if (e.target && typeof e.target.result === 'string') {
//                     setAvatar(e.target.result);
//                 }
//             };
//             reader.readAsDataURL(e.target.files[0]);
//         }
//     };

//     return (
//         <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png')` }}>
//             <div className="w-full max-w-5xl mx-auto p-6">
//                 <Card className="flex flex-col items-center space-y-6 p-6">
//                     <div className="relative">
//                         <img src={avatar} alt="Avatar" className="w-24 h-24 rounded-full object-cover mb-4" />
//                         <input
//                             type="file"
//                             className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                             onChange={handleAvatarChange}
//                         />
//                     </div>
//                     <Typography variant="h5" className="text-center">
//                         {formValues.fullName || 'John Smith'}
//                     </Typography>
//                     <Typography className="text-blue-500 mb-2">Hover over container</Typography>
//                     <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-sm">
//                         <Input
//                             crossOrigin={""}
//                             type="text"
//                             name="fullName"
//                             variant="standard"
//                             label="Full Name"
//                             value={formValues.fullName}
//                             onChange={handleInputChange}

//                         />
//                         <Input
//                             crossOrigin={""}
//                             type="email"
//                             name="email"
//                             variant="standard"
//                             label="Email ID"
//                             value={formValues.email}
//                             onChange={handleInputChange}

//                         />
//                         <Input
//                             crossOrigin={""}
//                             type="password"
//                             name="password"
//                             variant="standard"
//                             label="Password"
//                             value={formValues.password}
//                             onChange={handleInputChange}

//                         />
//                         <Button type="submit" color="blue" fullWidth>
//                             Save Changes
//                         </Button>
//                     </form>
//                     {message && <p className="mt-4 text-center text-red-500">{message}</p>}
//                 </Card>
//             </div>
//         </div>
//     );
// };

// export default ProfilePage;




// import React, { useEffect, useState } from 'react';
// import { Card, Typography, Input, Button, Dialog, DialogHeader, DialogBody, DialogFooter } from '@material-tailwind/react';
// import { useEmployerActions } from '../hooks/useEmployerActions';
// import { useEmployerStore } from '../stores/useEmployerStore';

// const ProfilePage = () => {
//     const { currentEmployer } = useEmployerStore();
//     const { changeCurrentPassword, updateEmployerAccountDetails, updateEmployerAvatar } = useEmployerActions();

//     const [formValues, setFormValues] = useState({
//         fullName: '',
//         email: ''
//     });
//     const [message, setMessage] = useState('');
//     const [avatar, setAvatar] = useState('/path/to/default/avatar.png'); // default avatar image
//     const [avatarFile, setAvatarFile] = useState<File | null>(null);
//     const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
//     const [passwordValues, setPasswordValues] = useState({
//         oldPassword: '',
//         newPassword: ''
//     });

//     useEffect(() => {
//         if (currentEmployer) {
//             setFormValues({
//                 fullName: currentEmployer.fullName,
//                 email: currentEmployer.email
//             });
//             setAvatar(currentEmployer.avatarUrl || '/path/to/default/avatar.png');
//         }
//     }, [currentEmployer]);

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setFormValues({
//             ...formValues,
//             [name]: value
//         });
//     };

//     const handlePasswordInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setPasswordValues({
//             ...passwordValues,
//             [name]: value
//         });
//     };

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         try {
//             if (avatarFile) {
//                 const formData = new FormData();
//                 formData.append('avatar', avatarFile);
//                 await updateEmployerAvatar.mutateAsync(formData);
//             }

//             if (formValues.fullName !== currentEmployer?.fullName || formValues.email !== currentEmployer?.email) {
//                 await updateEmployerAccountDetails.mutateAsync({
//                     fullName: formValues.fullName,
//                     email: formValues.email
//                 });
//             }

//             setMessage('Profile updated successfully!');
//         } catch (error) {
//             setMessage('Error updating profile');
//             console.error('Error updating profile', error);
//         }
//     };

//     const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         if (e.target.files && e.target.files[0]) {
//             const reader = new FileReader();
//             setAvatarFile(e.target.files[0]);
//             reader.onload = (e) => {
//                 if (e.target && typeof e.target.result === 'string') {
//                     setAvatar(e.target.result);
//                 }
//             };
//             reader.readAsDataURL(e.target.files[0]);
//         }
//     };

//     const handleChangePassword = async () => {
//         try {
//             await changeCurrentPassword.mutateAsync({
//                 oldPassword: passwordValues.oldPassword,
//                 newPassword: passwordValues.newPassword
//             });
//             setMessage('Password changed successfully!');
//             setIsPasswordModalOpen(false);
//         } catch (error) {
//             setMessage('Error changing password');
//             console.error('Error changing password', error);
//         }
//     };

//     return (
//         <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png')` }}>
//             <div className="w-full max-w-5xl mx-auto p-6">
//                 <Card className="flex flex-col items-center space-y-6 p-6">
//                     <div className="relative">
//                         <img src={avatar} alt="Avatar" className="w-24 h-24 rounded-full object-cover mb-4" />
//                         <input
//                             type="file"
//                             className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                             onChange={handleAvatarChange}
//                         />
//                     </div>
//                     <Typography variant="h5" className="text-center">
//                         {formValues.fullName || 'John Smith'}
//                     </Typography>
//                     <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-sm">
//                         <Input
//                             crossOrigin={""}
//                             type="text"
//                             name="fullName"
//                             variant="standard"
//                             label="Full Name"
//                             value={formValues.fullName}
//                             onChange={handleInputChange}
//                         />
//                         <Input
//                             crossOrigin={""}
//                             type="email"
//                             name="email"
//                             variant="standard"
//                             label="Email ID"
//                             value={formValues.email}
//                             onChange={handleInputChange}
//                         />
//                         <Button color="white" fullWidth variant='gradient' onClick={() => setIsPasswordModalOpen(true)}>
//                             Change Password
//                         </Button>
//                         <Button type="submit" color="blue" fullWidth>
//                             Save Changes
//                         </Button>
//                     </form>

//                     {message && <p className="mt-4 text-center text-red-500">{message}</p>}
//                 </Card>
//             </div>
//             <Dialog open={isPasswordModalOpen} handler={setIsPasswordModalOpen} color='blue'>
//                 <DialogHeader>Change Password</DialogHeader>
//                 <DialogBody>
//                     <Input
//                         crossOrigin={""}
//                         type="password"
//                         name="oldPassword"
//                         variant="standard"
//                         label="Old Password"
//                         value={passwordValues.oldPassword}
//                         onChange={handlePasswordInputChange}
//                         required
//                     />
//                     <Input
//                         crossOrigin={""}
//                         type="password"
//                         name="newPassword"
//                         variant="standard"
//                         label="New Password"
//                         value={passwordValues.newPassword}
//                         onChange={handlePasswordInputChange}
//                         required
//                     />
//                 </DialogBody>
//                 <DialogFooter>
//                     <Button variant='gradient' className='mr-4' onClick={() => setIsPasswordModalOpen(false)}>
//                         Cancel
//                     </Button>
//                     <Button color="blue" onClick={handleChangePassword}>
//                         Change Password
//                     </Button>
//                 </DialogFooter>
//             </Dialog>
//         </div>
//     );
// };

// export default ProfilePage;

import React, { useEffect, useState } from 'react';
import { Card, Typography, Input, Button, Dialog, DialogHeader, DialogBody, DialogFooter } from '@material-tailwind/react';
import { useEmployerActions } from '../hooks/useEmployerActions';
import { useEmployerStore } from '../stores/useEmployerStore';
import { useApplicantActions } from '../hooks/useApplicantsAction';
import { useApplicantStore } from '../stores/useApplicantStore';
import { BiLoaderCircle } from 'react-icons/bi';

const ProfilePage = () => {
    const { currentEmployer } = useEmployerStore();
    const { currentApplicant } = useApplicantStore();

    const { changeCurrentPassword: changeEmployerPassword, updateEmployerAccountDetails, updateEmployerAvatar } = useEmployerActions();
    const { changeApplicantPassword, updateApplicantAccountDetails, updateApplicantAvatar } = useApplicantActions();

    const currentUser = currentEmployer || currentApplicant;

    const [formValues, setFormValues] = useState({
        fullName: '',
        email: ''
    });
    const [message, setMessage] = useState('');
    const [avatar, setAvatar] = useState('/path/to/default/avatar.png'); // default avatar image
    const [avatarFile, setAvatarFile] = useState<File | null>(null);
    const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
    const [passwordValues, setPasswordValues] = useState({
        oldPassword: '',
        newPassword: ''
    });

    useEffect(() => {
        if (currentUser) {
            setFormValues({
                fullName: currentUser.fullName,
                email: currentUser.email
            });
            setAvatar(currentUser.avatarUrl || '/path/to/default/avatar.png');
        }
    }, [currentUser]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const handlePasswordInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPasswordValues({
            ...passwordValues,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (avatarFile) {
                const formData = new FormData();
                formData.append('avatar', avatarFile);

                if (currentEmployer) {
                    await updateEmployerAvatar.mutateAsync(formData);
                } else if (currentApplicant) {
                    await updateApplicantAvatar.mutateAsync(formData);
                }
            }

            if (formValues.fullName !== currentUser?.fullName || formValues.email !== currentUser?.email) {
                if (currentEmployer) {
                    await updateEmployerAccountDetails.mutateAsync({
                        fullName: formValues.fullName,
                        email: formValues.email
                    });
                } else if (currentApplicant) {
                    await updateApplicantAccountDetails.mutateAsync({
                        fullName: formValues.fullName,
                        email: formValues.email
                    });
                }
            }

            setMessage('Profile updated successfully!');
        } catch (error) {
            setMessage('Error updating profile');
            console.error('Error updating profile', error);
        }
    };

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            setAvatarFile(e.target.files[0]);
            reader.onload = (e) => {
                if (e.target && typeof e.target.result === 'string') {
                    setAvatar(e.target.result);
                }
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleChangePassword = async () => {
        try {
            if (currentEmployer) {
                await changeEmployerPassword.mutateAsync({
                    oldPassword: passwordValues.oldPassword,
                    newPassword: passwordValues.newPassword
                });
            } else if (currentApplicant) {
                await changeApplicantPassword.mutateAsync({
                    oldPassword: passwordValues.oldPassword,
                    newPassword: passwordValues.newPassword
                });
            }
            setMessage('Password changed successfully!');
            setIsPasswordModalOpen(false);
        } catch (error) {
            setMessage('Error changing password');
            console.error('Error changing password', error);
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png')` }}>
            <div className="w-full max-w-5xl mx-auto p-6">
                <Card className="flex flex-col items-center space-y-6 p-6">
                    <div className="relative">
                        <img src={avatar} alt="Avatar" className="w-24 h-24 rounded-full object-cover mb-4" />
                        <input
                            type="file"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            onChange={handleAvatarChange}
                        />
                    </div>
                    <Typography variant="h5" className="text-center">
                        {formValues.fullName || 'John Smith'}
                    </Typography>
                    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-sm">
                        <Input
                            crossOrigin={""}
                            type="text"
                            name="fullName"
                            variant="standard"
                            label="Full Name"
                            value={formValues.fullName}
                            onChange={handleInputChange}
                        />
                        <Input
                            crossOrigin={""}
                            type="email"
                            name="email"
                            variant="standard"
                            label="Email ID"
                            value={formValues.email}
                            onChange={handleInputChange}
                        />
                        <Button color="white" fullWidth variant='gradient' onClick={() => setIsPasswordModalOpen(true)}>
                            Change Password
                        </Button>
                        <Button type="submit" color="blue" className='flex justify-center items-center' fullWidth disabled={updateEmployerAccountDetails.isLoading}>
                            {updateEmployerAccountDetails.isLoading && <BiLoaderCircle />}
                            <span>Save Changes</span>
                        </Button>
                    </form>

                    {message && <p className="mt-4 text-center text-red-500">{message}</p>}
                </Card>
            </div>
            <Dialog open={isPasswordModalOpen} handler={setIsPasswordModalOpen} color='blue'>
                <DialogHeader>Change Password</DialogHeader>
                <DialogBody>
                    <Input
                        crossOrigin={""}
                        type="password"
                        name="oldPassword"
                        variant="standard"
                        label="Old Password"
                        value={passwordValues.oldPassword}
                        onChange={handlePasswordInputChange}
                        required
                    />
                    <Input
                        crossOrigin={""}
                        type="password"
                        name="newPassword"
                        variant="standard"
                        label="New Password"
                        value={passwordValues.newPassword}
                        onChange={handlePasswordInputChange}
                        required
                    />
                </DialogBody>
                <DialogFooter>
                    <Button variant='gradient' className='mr-4' onClick={() => setIsPasswordModalOpen(false)}>
                        Cancel
                    </Button>
                    <Button color="blue" className='flex justify-center items-center' onClick={handleChangePassword}>
                        {(changeEmployerPassword.isLoading || changeApplicantPassword.isLoading) && <BiLoaderCircle className="animate-spin mr-2" />}
                        <span className="ml-2">Change Password</span>

                    </Button>
                </DialogFooter>
            </Dialog>
        </div>
    );
};

export default ProfilePage;
