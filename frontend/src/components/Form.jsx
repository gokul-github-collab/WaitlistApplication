import React, { useState } from 'react';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import logo from '../assets/images/apple_logo-removebg-preview.png';

// Form component for login or registration
const Form = ({ route, method }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Determine the button text based on the method (login or register)
    const name = method === 'login' ? 'Login' : "Register";

    // Handle form submission
    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        console.log("Route:", route);

        try {
            const res = await api.post(route, { email, password });
            if (method === 'login') {
                // Store tokens in local storage on successful login
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/");
            } else {
                navigate("/login");
            }
        } catch (err) {
            console.error("Error during submission:", err);
            alert(err.message || "An error occurred");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                {/* Company logo */}
                <img
                    alt="Your Company"
                    src={logo}
                    className="mx-auto h-24 w-auto"
                />
                {/* Form heading */}
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                {/* Form for login or registration */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        {/* Email input */}
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoComplete="gmail"
                                className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brightRedLight sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        {/* Password input */}
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                autoComplete="current-password"
                                className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brightRed sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        {/* Submit button */}
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-brightRed px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-brightRedLight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brightRed"
                        >
                            {name}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;
