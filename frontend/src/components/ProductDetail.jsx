import React, { useEffect, useState } from 'react';
import v1 from '../assets/images/v1.jpg';
import h1 from '../assets/images/horizontal2.jpg';
import h2 from '../assets/images/horizontal.jpeg';
import api from '../api';
import { useParams } from 'react-router-dom';
import FilterCustomers from './FilterCustomers';
import RegisterCustomer from './RegisterCustomer';

// Component to display product details along with registration and filtering features
const ProductDetail = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [customerIsRegistered, setCustomerIsRegistered] = useState(false);
    const [registeredCustomerPosition, setRegisteredCustomerPosition] = useState('');
    const [loggedInUserEmail, setLoggedInUserEmail] = useState('');
    const { id, referral_id } = useParams();
    const [isSuperUser, setIsSuperUser] = useState(false);
    const [product, setProduct] = useState()
    // Fetch user and superuser status on component mount
    useEffect(() => {
        const fetchData = async () => {
            await checkSuperuser();
            await getIsLoggedIn();
            await getProduct()
        };
        fetchData();
    }, []);

    // Check user registration status when logged in status or email changes
    useEffect(() => {
        if (isLoggedIn && loggedInUserEmail) {
            checkUserRegistration();
        }
    }, [isLoggedIn, loggedInUserEmail, id]);

    // Check if the user is a superuser
    const checkSuperuser = async () => {
        try {
            const res = await api.get('/api/super-user/');
            setIsSuperUser(res.data.is_superuser);
        } catch (err) {
            console.error('Error checking superuser:', err);
        }
    };

    const getProduct = async () => {
        const res = await api.get(`api/products/${id}/`)
        setProduct(res.data)

    }

    // Check if the user is logged in
    const getIsLoggedIn = async () => {
        try {
            const res = await api.get('api/login-check/');
            setIsLoggedIn(res.data.is_logged_in);
            setLoggedInUserEmail(res.data.requested_user);
        } catch (error) {
            console.error('Error fetching login status:', error);
        }
    };

    // Check if the logged-in user is registered for the product
    const checkUserRegistration = async () => {
        try {
            const result = await api.get(`api/check-user-registered/${id}/${loggedInUserEmail || ''}/`);
            setRegisteredCustomerPosition(result.data.position);
            setCustomerIsRegistered(result.data.registered);
        } catch (error) {
            console.error('Error checking user registration:', error);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen py-10 px-4">
            <div className="container mx-auto max-w-7xl bg-white shadow-md rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                    {/* Main product image */}
                    <img src={v1} className="rounded-lg w-full" alt="Product Image" />
                    <div className="space-y-4">
                        {/* Product thumbnails */}
                        <img src={h1} className="rounded-lg w-full" alt="Product Thumbnail 1" />
                        <img src={h2} className="rounded-lg w-full" alt="Product Thumbnail 2" />
                    </div>
                    <div className="space-y-4">
                        {/* Another view of the main product image */}
                        <img src={v1} className="rounded-lg w-full" alt="Product Image" />
                    </div>
                </div>

                <div className="p-6 space-y-6">
                    <div className="md:flex md:items-start md:space-x-6">
                        <div className="flex-1">
                            {/* Product title */}
                            <h1 className="text-4xl font-extrabold text-gray-900">{product ? product.name : ""}</h1>
                            {/* Product description */}
                            <p className="text-lg text-gray-700 mt-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sequi voluptatum deleniti porro veniam labore quae unde. Eos autem alias tenetur cum quaerat at maiores ullam possimus, quas, error nostrum?
                            </p>
                            <div className="md:flex md:space-x-6">
                                <div className="flex-1 space-y-4">
                                    {/* Product highlights */}
                                    <h2 className="text-xl font-semibold text-gray-800 mt-3">Highlights</h2>
                                    <ul className="list-disc list-inside pl-5 text-gray-600 space-y-2">
                                        <li>Lorem ipsum dolor sit amet.</li>
                                        <li>Lorem ipsum dolor sit amet.</li>
                                        <li>Lorem ipsum dolor sit amet.</li>
                                        <li>Lorem ipsum dolor sit amet.</li>
                                    </ul>
                                </div>
                            </div>
                            {/* Show filter component if the user is a superuser */}
                            {isSuperUser && <FilterCustomers product_id={id} />}
                        </div>
                        <div className="md:w-1/4 mt-6 md:mt-0">
                            {/* Registration component */}
                            <RegisterCustomer product_id={id} referral_id={referral_id} />
                        </div>
                    </div>

                    {/* Display registration status if logged in and registered */}
                    {isLoggedIn && customerIsRegistered && (
                        <div className="bg-gray-50 p-4 rounded-lg shadow-inner mt-6">
                            <h2 className="text-lg font-semibold text-gray-800">Already Registered</h2>
                            <p className="text-sm text-gray-600">Position: {registeredCustomerPosition}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
