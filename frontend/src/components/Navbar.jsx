import React, { useEffect, useState } from 'react';
import logo from '../assets/images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import api from '../api';
import { FaBars } from "react-icons/fa6"; // Import the hamburger icon

const Navbar = () => {
    const [isSuperUser, setIsSuperUser] = useState(false);
    const [isOpen, setIsOpen] = useState(false); // State to manage hamburger menu

    const checkSuperuser = async () => {
        try {
            const res = await api.get("/api/super-user/");
            console.log("Response from check_superuser:", res);
            setIsSuperUser(res.data.is_superuser);
        } catch (err) {
            console.error("Error checking superuser:", err);
        }
    };

    useEffect(() => {
        checkSuperuser();
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle the menu open/close state
    };

    return (
        <nav className="relative container mx-auto p-6">
            {/* Flex Container */}
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="pt-2">
                    <img src={logo} className="w-32" alt="Company Logo" />
                </div>
                {/* Hamburger Menu for small devices */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <FaBars className="text-2xl" />
                    </button>
                </div>
                {/* Menu Items */}
                <div className={`hidden md:flex space-x-6 ${isOpen ? 'flex' : 'hidden'} flex-col md:flex-row`}>
                    <NavLink to="/" className="hover:text-darkGrayishBlue">Home</NavLink>
                    <NavLink to="/products" className="hover:text-darkGrayishBlue">Product</NavLink>
                    <NavLink to="/about-us" className="hover:text-darkGrayishBlue">About Us</NavLink>
                    <NavLink to="/registered-products" className="hover:text-darkGrayishBlue">Registered Items</NavLink>
                    {isSuperUser && <NavLink to="/add-product" className="hover:text-darkGrayishBlue">Add Product</NavLink>}
                </div>
                {/* Button */}
                <Link
                    to="/get-started"
                    className="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
                >
                    Get Started
                </Link>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div className="flex flex-col mt-4 md:hidden">
                    <NavLink to="/" className="py-2 hover:text-darkGrayishBlue">Home</NavLink>
                    <NavLink to="/products" className="py-2 hover:text-darkGrayishBlue">Product</NavLink>
                    <NavLink to="/about-us" className="py-2 hover:text-darkGrayishBlue">About Us</NavLink>
                    {isSuperUser && <NavLink to="/add-product" className="py-2 hover:text-darkGrayishBlue">Add Product</NavLink>}
                    <Link
                        to="/get-started"
                        className="p-3 px-6 pt-2 mt-2 text-white bg-brightRed rounded-lg baseline hover:bg-brightRedLight"
                    >
                        Get Started
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
