import React, { useEffect, useState } from 'react';
import logo from '../assets/images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import api from '../api';

const Navbar = () => {

    const [isSuperUser, setIsSuperUser] = useState(false)


    const checkSuperuser = async () => {
        try {
            const res = await api.get("/api/super-user/")
            console.log("Response from check_superuser:", res)
            setIsSuperUser(res.data.is_superuser)
        } catch (err) {
            console.error("Error checking superuser:", err)
        }
    }

    useEffect(() => {
        checkSuperuser()
    }, [])


    return (
        <nav className="relative container mx-auto p-6">
            {/* Flex Container */}
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="pt-2">
                    <img src={logo} className="w-32" alt="Company Logo" />
                </div>
                {/* Menu Items */}
                <div className="hidden space-x-6 md:flex">
                    <NavLink to="/" className="hover:text-darkGrayishBlue">Home</NavLink>
                    <NavLink to="/products" className="hover:text-darkGrayishBlue">Product</NavLink>
                    <NavLink to="/about-us" className="hover:text-darkGrayishBlue">About Us</NavLink>
                    <NavLink to="/careers" className="hover:text-darkGrayishBlue">Careers</NavLink>
                    {isSuperUser ? <NavLink to="/add-product" className="hover:text-darkGrayishBlue">Add Product</NavLink> : ""}

                </div>
                {/* Button */}
                <Link
                    to="/get-started"
                    className="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
                >
                    Get Started
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
