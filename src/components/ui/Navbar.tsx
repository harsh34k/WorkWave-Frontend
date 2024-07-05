import React from 'react';

// import logo from ".../images/logo"
interface MenuItem {
    label: string;
    href?: string;
    submenu?: MenuItem[];
}

interface NavbarProps {
    title: string;
    menuItems: MenuItem[];
}

const Navbar: React.FC = () => {
    return (
        <div className="navbar ">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl"><img src="/logo.jpg" className="w-60 h-20" alt="logo" /></a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 ">
                    <li><a>Become A Employer</a></li>
                    <li><a>SignIn</a></li>
                    <li><a>Join+</a></li>

                </ul>
            </div>
        </div>
    );
};

export default Navbar;
