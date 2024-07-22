// import React from "react";
// import {
//     Navbar,
//     IconButton,
//     Collapse,
//     Typography,
//     Button,
//     Menu,
//     MenuHandler,
//     MenuItem,
//     MenuList,
// } from "@material-tailwind/react";
// import { Link } from "react-router-dom";
// import { ChevronDownIcon } from "@heroicons/react/24/solid";

// export function StickyNavbar() {
//     const [openNav, setOpenNav] = React.useState(false);
//     const [openEmployerMenu, setOpenEmployerMenu] = React.useState(false);

//     React.useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth >= 960) {
//                 setOpenNav(false);
//                 setOpenEmployerMenu(false);
//             }
//         };

//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

//     const toggleNav = () => setOpenNav(!openNav);
//     const toggleEmployerMenu = () => setOpenEmployerMenu(!openEmployerMenu);

//     const desktopNavList = (
//         <ul className="mt-2 mb-4 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-3">
//             <Menu allowHover>
//                 <MenuHandler>
//                     <Button variant="text" size="md" className=" flex items-center">
//                         <span className="pr-1 text-base">Employer</span>
//                         <ChevronDownIcon
//                             strokeWidth={2}
//                             className={`h-3 w-3 transition-transform ${openEmployerMenu ? "rotate-180" : ""
//                                 }`}
//                         />
//                     </Button>
//                 </MenuHandler>
//                 <MenuList className=" ">
//                     <Link to="/register-employer">
//                         <MenuItem>
//                             <Typography variant="h6" color="blue-gray" className="mb-1">
//                                 Register as employer
//                             </Typography>
//                             <Typography variant="small" color="gray" className="font-normal">
//                                 Sign up to create your employer account.
//                             </Typography>
//                         </MenuItem>
//                     </Link>
//                     <Link to="/login-employer">
//                         <MenuItem>
//                             <Typography variant="h6" color="blue-gray" className="mb-1">
//                                 Login as employer
//                             </Typography>
//                             <Typography variant="small" color="gray" className="font-normal">
//                                 Already have an account? Log in here.
//                             </Typography>
//                         </MenuItem>
//                     </Link>
//                 </MenuList>
//             </Menu>

//             <Link to="/login">
//                 <Button variant="text" size="md" className="hidden lg:inline-block">
//                     <span className="text-base">Log In</span>
//                 </Button>
//             </Link>
//             <Link to="/register">
//                 <Button color="blue" variant="gradient" size="md" className="hidden lg:inline-block">
//                     <span className="text-base">Sign in</span>
//                 </Button>
//             </Link>
//         </ul>
//     );

//     const mobileNavList = (
//         <div className="lg:hidden">
//             <Button
//                 variant="text"
//                 size="lg"
//                 onClick={toggleEmployerMenu}
//                 className="w-full text-left flex items-center"
//             >
//                 <span>Employer</span>
//                 <ChevronDownIcon
//                     strokeWidth={2}
//                     className={`h-3 w-3 transition-transform ${openEmployerMenu ? "rotate-180" : ""
//                         }`}
//                 />
//             </Button>

//             <Collapse open={openEmployerMenu}>
//                 <ul className="flex flex-col gap-3 p-2">
//                     <Link to="/register-employer">
//                         <Button
//                             variant="text"
//                             size="sm"
//                             className=" text-left"
//                             onClick={toggleEmployerMenu}
//                         >
//                             Register as employer
//                         </Button>
//                     </Link>
//                     <Link to="/login-employer">
//                         <Button
//                             variant="text"
//                             size="sm"
//                             className="w-full text-left"
//                             onClick={toggleEmployerMenu}
//                         >
//                             Login as employer
//                         </Button>
//                     </Link>
//                 </ul>
//             </Collapse>
//             <hr className="my-3" />
//             <div className="flex flex-col ">

//                 <Link to="/login" >
//                     <Button variant="text" size="lg" className="">
//                         <span>Log In</span>
//                     </Button>
//                 </Link>
//                 <hr className="my-3" />
//                 <Link to="/register">
//                     <Button color="blue" variant="gradient" size="lg" className="">
//                         <span>Sign in</span>
//                     </Button>
//                 </Link>
//                 <hr className="my-3" />
//             </div>
//         </div>
//     );

//     return (
//         <div className="max-h-[768px] overflow-hidden relative top-0 shadow-lg">
//             <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
//                 <div className="flex items-center justify-between text-blue-gray-900">
//                     <div>
//                         <Link to="/">
//                             <img
//                                 className="h-14 w-full object-cover object-center cursor-pointer"
//                                 src="/logo.png"
//                                 alt="nature image"
//                             />
//                         </Link>
//                     </div>
//                     <div className="flex items-center">
//                         <div className="mr-4 hidden lg:block">{desktopNavList}</div>
//                         <IconButton
//                             variant="text"
//                             className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
//                             ripple={false}
//                             onClick={toggleNav}
//                         >
//                             {openNav ? (
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     fill="none"
//                                     className="h-6 w-6"
//                                     viewBox="0 0 24 24"
//                                     stroke="currentColor"
//                                     strokeWidth={2}
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         d="M6 18L18 6M6 6l12 12"
//                                     />
//                                 </svg>
//                             ) : (
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     className="h-6 w-6"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     strokeWidth={2}
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         d="M4 6h16M4 12h16M4 18h16"
//                                     />
//                                 </svg>
//                             )}
//                         </IconButton>
//                     </div>
//                 </div>
//                 <Collapse open={openNav}>{mobileNavList}</Collapse>
//             </Navbar>
//         </div>
//     );
// }


// import React from "react";
// import {
//     Navbar,
//     IconButton,
//     Collapse,
//     Typography,
//     Button,
//     Menu,
//     MenuHandler,
//     MenuItem,
//     MenuList,
//     Avatar,
// } from "@material-tailwind/react";
// import { Link } from "react-router-dom";
// import { ChevronDownIcon, UserCircleIcon, Cog6ToothIcon, PowerIcon } from "@heroicons/react/24/solid";
// import { useEmployerStore } from '../../stores/useEmployerStore';
// import { useApplicantStore } from '../../stores/useApplicantStore';

// export function StickyNavbar() {
//     const [openNav, setOpenNav] = React.useState(false);
//     const [openEmployerMenu, setOpenEmployerMenu] = React.useState(false);
//     const { currentEmployer, setCurrentEmployer } = useEmployerStore();
//     const { currentApplicant, setCurrentApplicant } = useApplicantStore();

//     React.useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth >= 960) {
//                 setOpenNav(false);
//                 setOpenEmployerMenu(false);
//             }
//         };

//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

//     const toggleNav = () => setOpenNav(!openNav);
//     const toggleEmployerMenu = () => setOpenEmployerMenu(!openEmployerMenu);

//     const handleSignOut = () => {
//         setCurrentEmployer(null);
//         // Perform any other sign out logic here (e.g., clearing tokens, redirecting, etc.)
//     };

//     const profileMenuItems = [
//         {
//             label: "My Profile",
//             icon: UserCircleIcon,
//             action: () => console.log('My Profile clicked') // Replace with actual navigation/action
//         },
//         {
//             label: "Edit Profile",
//             icon: Cog6ToothIcon,
//             action: () => console.log('Edit Profile clicked') // Replace with actual navigation/action
//         },
//         {
//             label: "Sign Out",
//             icon: PowerIcon,
//             action: handleSignOut
//         },
//     ];

//     const desktopNavList = (
//         <ul className="mt-2 mb-4 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-3">
//             <Menu allowHover>
//                 <MenuHandler>
//                     <Button variant="text" size="md" className=" flex items-center">
//                         <span className="pr-1 text-base">Employer</span>
//                         <ChevronDownIcon
//                             strokeWidth={2}
//                             className={`h-3 w-3 transition-transform ${openEmployerMenu ? "rotate-180" : ""
//                                 }`}
//                         />
//                     </Button>
//                 </MenuHandler>
//                 <MenuList className=" ">
//                     <Link to="/register-employer">
//                         <MenuItem>
//                             <Typography variant="h6" color="blue-gray" className="mb-1">
//                                 Register as employer
//                             </Typography>
//                             <Typography variant="small" color="gray" className="font-normal">
//                                 Sign up to create your employer account.
//                             </Typography>
//                         </MenuItem>
//                     </Link>
//                     <Link to="/login-employer">
//                         <MenuItem>
//                             <Typography variant="h6" color="blue-gray" className="mb-1">
//                                 Login as employer
//                             </Typography>
//                             <Typography variant="small" color="gray" className="font-normal">
//                                 Already have an account? Log in here.
//                             </Typography>
//                         </MenuItem>
//                     </Link>
//                 </MenuList>
//             </Menu>

//             <Link to="/login">
//                 <Button variant="text" size="md" className="hidden lg:inline-block">
//                     <span className="text-base">Log In</span>
//                 </Button>
//             </Link>
//             <Link to="/register">
//                 <Button color="blue" variant="gradient" size="md" className="hidden lg:inline-block">
//                     <span className="text-base">Sign in</span>
//                 </Button>
//             </Link>
//         </ul>
//     );

//     const mobileNavList = (
//         <div className="lg:hidden">
//             <Button
//                 variant="text"
//                 size="lg"
//                 onClick={toggleEmployerMenu}
//                 className="w-full text-left flex items-center"
//             >
//                 <span>Employer</span>
//                 <ChevronDownIcon
//                     strokeWidth={2}
//                     className={`h-3 w-3 transition-transform ${openEmployerMenu ? "rotate-180" : ""
//                         }`}
//                 />
//             </Button>

//             <Collapse open={openEmployerMenu}>
//                 <ul className="flex flex-col gap-3 p-2">
//                     <Link to="/register-employer">
//                         <Button
//                             variant="text"
//                             size="sm"
//                             className=" text-left"
//                             onClick={toggleEmployerMenu}
//                         >
//                             Register as employer
//                         </Button>
//                     </Link>
//                     <Link to="/login-employer">
//                         <Button
//                             variant="text"
//                             size="sm"
//                             className="w-full text-left"
//                             onClick={toggleEmployerMenu}
//                         >
//                             Login as employer
//                         </Button>
//                     </Link>
//                 </ul>
//             </Collapse>
//             <hr className="my-3" />
//             <div className="flex flex-col ">

//                 <Link to="/login" >
//                     <Button variant="text" size="lg" className="">
//                         <span>Log In</span>
//                     </Button>
//                 </Link>
//                 <hr className="my-3" />
//                 <Link to="/register">
//                     <Button color="blue" variant="gradient" size="lg" className="">
//                         <span>Sign in</span>
//                     </Button>
//                 </Link>
//                 <hr className="my-3" />
//             </div>
//         </div>
//     );

//     const signedInNav = (
//         <div className="flex items-center">
//             <Menu>
//                 <MenuHandler>
//                     <Avatar
//                         src={currentEmployer?.avatarUrl || "/default-avatar.png"}
//                         alt="user avatar"
//                         variant="circular"
//                         className="cursor-pointer"
//                     />
//                 </MenuHandler>
//                 <MenuList>
//                     {profileMenuItems.map(({ label, icon: Icon, action }, index) => (
//                         <MenuItem key={index} onClick={action} className="flex items-center gap-2">
//                             <Icon className="h-5 w-5 text-gray-500" />
//                             <Typography as="span" variant="small" color="gray" className="font-normal">
//                                 {label}
//                             </Typography>
//                         </MenuItem>
//                     ))}
//                 </MenuList>
//             </Menu>
//         </div>
//     );

//     return (
//         <div className="max-h-[768px] overflow-hidden relative top-0 shadow-lg">
//             <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
//                 <div className="flex items-center justify-between text-blue-gray-900">
//                     <div>
//                         <Link to="/">
//                             <img
//                                 className="h-14 w-full object-cover object-center cursor-pointer"
//                                 src="/logo.png"
//                                 alt="logo"
//                             />
//                         </Link>
//                     </div>
//                     {currentEmployer ? (
//                         signedInNav
//                     ) : (
//                         <div className="flex items-center">
//                             <div className="mr-4 hidden lg:block">{desktopNavList}</div>
//                             <IconButton
//                                 variant="text"
//                                 className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
//                                 ripple={false}
//                                 onClick={toggleNav}
//                             >
//                                 {openNav ? (
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         fill="none"
//                                         className="h-6 w-6"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                         strokeWidth={2}
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             d="M6 18L18 6M6 6l12 12"
//                                         />
//                                     </svg>
//                                 ) : (
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         className="h-6 w-6"
//                                         fill="none"
//                                         stroke="currentColor"
//                                         strokeWidth={2}
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             d="M4 6h16M4 12h16M4 18h16"
//                                         />
//                                     </svg>
//                                 )}
//                             </IconButton>
//                         </div>
//                     )}
//                 </div>
//                 {!currentEmployer && <Collapse open={openNav}>{mobileNavList}</Collapse>}
//             </Navbar>
//         </div>
//     );
// }

import React from "react";
import {
    Navbar,
    IconButton,
    Collapse,
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuItem,
    MenuList,
    Avatar,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDownIcon, UserCircleIcon, Cog6ToothIcon, PowerIcon } from "@heroicons/react/24/solid";
import { useEmployerStore } from '../../stores/useEmployerStore';
import { useApplicantStore } from '../../stores/useApplicantStore';
import { useApplicantActions } from '../../hooks/useApplicantsAction';
import { useEmployerActions } from '../../hooks/useEmployerActions';
import axios from "axios";

export const StickyNavbar = React.memo(() => {
    const navigate = useNavigate();
    const [openNav, setOpenNav] = React.useState(false);
    const [openEmployerMenu, setOpenEmployerMenu] = React.useState(false);
    const { currentEmployer, } = useEmployerStore();
    const { currentApplicant, } = useApplicantStore();

    const { logoutApplicant } = useApplicantActions();
    const { logoutEmployer } = useEmployerActions();
    const currentUser = currentEmployer || currentApplicant;
    console.log("currentUser", currentUser);

    const userType = currentEmployer ? 'employer' : currentApplicant ? 'applicant' : null;

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 960) {
                setOpenNav(false);
                setOpenEmployerMenu(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleNav = () => setOpenNav(!openNav);
    const toggleEmployerMenu = () => setOpenEmployerMenu(!openEmployerMenu);

    const handleSignOut = async () => {
        if (userType === 'employer') {
            await logoutEmployer.mutateAsync()
            // const response = await axios.post(`http://localhost:8000/api/v1/employers/logout`,)
            // console.log("ressponse from logout", response);
            // setCurrentEmployer(null);
            console.log("inside navbar handleSignOut");

            navigate("/login")
        } else if (userType === 'applicant') {
            await logoutApplicant.mutateAsync()
            // setCurrentApplicant(null);
            console.log("inside navbar handleSignOut");

            navigate("/login")
        }
        // Perform any other sign out logic here (e.g., clearing tokens, redirecting, etc.)
    };

    const profileMenuItems = [
        {
            label: "My Profile",
            icon: UserCircleIcon,
            action: () => navigate("/profile")
        },
        {
            label: "Jobs",
            icon: Cog6ToothIcon,
            // action: () => {
            //     if (userType === "employer") {
            //         navigate("/employers/jobs");
            //     } else if (userType === "applicant") {
            //         navigate("/applicants/jobs");
            //     }
            // }
            action: () => navigate("/jobs")
        },
        {
            label: "Sign Out",
            icon: PowerIcon,
            action: handleSignOut
        },
    ];
    const applicantMenuItems = [
        {
            label: "My Profile",
            icon: UserCircleIcon,
            action: () => navigate("/profile")
        }, {
            label: "Applications",
            icon: Cog6ToothIcon,
            action: () => navigate("/applications")
        },
        {
            label: "Sign Out",
            icon: PowerIcon,
            action: handleSignOut
        },
    ];


    const desktopNavList = (
        <ul className="mt-2 mb-4 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-3">
            <Menu allowHover>
                <MenuHandler>
                    <Button variant="text" size="md" className=" flex items-center">
                        <span className="pr-1 text-base">Employer</span>
                        <ChevronDownIcon
                            strokeWidth={2}
                            className={`h-3 w-3 transition-transform ${openEmployerMenu ? "rotate-180" : ""}`}
                        />
                    </Button>
                </MenuHandler>
                <MenuList className=" ">
                    <Link to="/register-employer">
                        <MenuItem>
                            <Typography variant="h6" color="blue-gray" className="mb-1">
                                Register as employer
                            </Typography>
                            <Typography variant="small" color="gray" className="font-normal">
                                Sign up to create your employer account.
                            </Typography>
                        </MenuItem>
                    </Link>
                    <Link to="/login-employer">
                        <MenuItem>
                            <Typography variant="h6" color="blue-gray" className="mb-1">
                                Login as employer
                            </Typography>
                            <Typography variant="small" color="gray" className="font-normal">
                                Already have an account? Log in here.
                            </Typography>
                        </MenuItem>
                    </Link>
                </MenuList>
            </Menu>

            <Link to="/login">
                <Button variant="text" size="md" className="hidden lg:inline-block">
                    <span className="text-base">Log In</span>
                </Button>
            </Link>
            <Link to="/register">
                <Button color="blue" variant="gradient" size="md" className="hidden lg:inline-block">
                    <span className="text-base">Sign in</span>
                </Button>
            </Link>
        </ul>
    );

    const mobileNavList = (
        <div className="lg:hidden">
            <Button
                variant="text"
                size="lg"
                onClick={toggleEmployerMenu}
                className="w-full text-left flex items-center"
            >
                <span>Employer</span>
                <ChevronDownIcon
                    strokeWidth={2}
                    className={`h-3 w-3 transition-transform ${openEmployerMenu ? "rotate-180" : ""}`}
                />
            </Button>

            <Collapse open={openEmployerMenu}>
                <ul className="flex flex-col gap-3 p-2">
                    <Link to="/register-employer">
                        <Button
                            variant="text"
                            size="sm"
                            className=" text-left"
                            onClick={toggleEmployerMenu}
                        >
                            Register as employer
                        </Button>
                    </Link>
                    <Link to="/login-employer">
                        <Button
                            variant="text"
                            size="sm"
                            className="w-full text-left"
                            onClick={toggleEmployerMenu}
                        >
                            Login as employer
                        </Button>
                    </Link>
                </ul>
            </Collapse>
            <hr className="my-3" />
            <div className="flex flex-col ">

                <Link to="/login">
                    <Button variant="text" size="lg" className="">
                        <span>Log In</span>
                    </Button>
                </Link>
                <hr className="my-3" />
                <Link to="/register">
                    <Button color="blue" variant="gradient" size="lg" className="">
                        <span>Sign in</span>
                    </Button>
                </Link>
                <hr className="my-3" />
            </div>
        </div>
    );

    const signedInNav = (
        <div className="flex items-center">
            <Menu>
                <MenuHandler>
                    <Avatar
                        src={currentUser?.avatarUrl || "/default-avatar.png"}
                        alt="user avatar"
                        variant="circular"
                        className="cursor-pointer"
                    />
                </MenuHandler>
                <MenuList>
                    {(userType === 'employer' ? profileMenuItems : applicantMenuItems).map(({ label, icon: Icon, action }, index) => (
                        <MenuItem key={index} onClick={action} className="flex items-center gap-2">
                            <Icon className="h-5 w-5 text-gray-500" />
                            <Typography as="span" variant="small" color="gray" className="font-normal">
                                {label}
                            </Typography>
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </div>
    );

    return (
        <div className="max-h-[768px] overflow-hidden relative top-0 shadow-lg">
            <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <div>
                        <Link to="/">
                            <img
                                className="h-14 w-full object-cover object-center cursor-pointer"
                                src="/logo.png"
                                alt="logo"
                            />
                        </Link>
                    </div>
                    {currentUser ? (
                        signedInNav
                    ) : (
                        <div className="flex items-center">
                            <div className="mr-4 hidden lg:block">{desktopNavList}</div>
                            <IconButton
                                variant="text"
                                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                                ripple={false}
                                onClick={toggleNav}
                            >
                                {openNav ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        className="h-6 w-6"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </IconButton>
                        </div>
                    )}
                </div>
                {!currentUser && <Collapse open={openNav}>{mobileNavList}</Collapse>}
            </Navbar>
        </div>
    );
})
