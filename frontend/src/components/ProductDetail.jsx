import React, { useEffect, useState } from 'react';
import v1 from '../assets/images/v1.jpg';
import v2 from '../assets/images/v2.jpg';
import h1 from '../assets/images/horizontal2.jpg';
import h2 from '../assets/images/horizontal.jpeg';
import api from '../api';
import { Link, useParams } from 'react-router-dom';
import FilterCustomers from './FilterCustomers';
import RegisterCustomer from './RegisterCustomer';
import DeleteProduct from './DeleteProduct';

// Component to display product details along with registration and filtering features
const ProductDetail = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [customerIsRegistered, setCustomerIsRegistered] = useState(false);
    const [registeredCustomerPosition, setRegisteredCustomerPosition] = useState('');
    const [registeredCustomerReferralID, setRegisteredCustomerReferralID] = useState('');
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
            setRegisteredCustomerReferralID(result.data.referral_id)
        } catch (error) {
            console.error('Error checking user registration:', error);
        }
    };

    return (
        <div className="bg-orange-100 min-h-screen py-10 px-4">
            <div className="container bg-orange-50 mx-auto max-w-7xl  shadow-md rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                    {/* Main product image */}
                    <img src={v1} className="rounded-3xl w-full bg-orange-50" alt="Product Image" />
                    <div className="space-y-1">
                        {/* Product thumbnails */}
                        <img src={h2} className="rounded-lg h-1/2" alt="Product Thumbnail 1" />
                        <img src={h1} className="rounded-lg h-1/2" alt="Product Thumbnail 2" />
                    </div>
                    <div className="space-y-4">
                        {/* Another view of the main product image */}
                        <img src={v2} className="rounded-3xl w-full bg-orange-50" alt="Product Image" />
                    </div>
                </div>

                <div className="p-6 space-y-6">
                    <div className="md:flex md:items-start md:space-x-6">
                        <div className="flex-1">
                            {/* Product title */}
                            <h1 className="text-4xl font-extrabold text-gray-900">{product ? product.name : ""}</h1>
                            {/* Product description */}
                            <p className="text-lg text-gray-700 mt-4">
                                Apple devices are renowned for their design aesthetic and attention to detail. Tight integration between hardware and software gives their systems a performance advantage over competitor systems with similar specifications.
                            </p>
                            <div className="md:flex md:space-x-6">
                                <div className="flex-1 space-y-4">
                                    {/* Product highlights */}
                                    <h2 className="text-xl font-semibold text-gray-800 mt-3">Highlights</h2>
                                    <ul className="list-disc list-inside pl-5 text-gray-600 space-y-2">
                                        <li>Mac computer. The Macintosh, or Mac, is Apple's line of personal computers</li>
                                        <li>iPhone and iPad. The iPhone is Apple's smartphone line, and the iPad is its tablet.</li>
                                        <li>Services. Apple also provides several services that seamlessly work with its products.</li>
                                        <li>The Apple Vision Pro is a mixed reality</li>
                                    </ul>
                                </div>
                            </div>
                            {/* Show filter component if the user is a superuser */}
                            {isSuperUser && (
                                <div className="">
                                    <FilterCustomers product_id={id} />

                                </div>

                            )}
                        </div>
                        <div className="md:w-1/4 mt-6 md:mt-0">
                            {/* Registration component */}
                            <RegisterCustomer product_id={id} referral_id={referral_id} />


                        </div>
                        {isSuperUser && (
                            <>
                                <div className="flex flex-col">

                                    <Link to={`/edit-product/${product ? product.id : ""}`} className="inline bg-gradient-to-tr mt-2 from-indigo-500 to-indigo-700 mb-1 text-white text-center rounded-lg px-4 py-2 hover:bg-indigo-600 hover:to-indigo-800 shadow-md" >Edit Product</Link>
                                    <DeleteProduct product_id={product ? product.id : ""} />
                                </div>
                            </>
                        )}
                    </div>

                    {/* Display registration status if logged in and registered */}
                    {isLoggedIn && customerIsRegistered && (
                        <div className="bg-gradient-to-r from-brightRedLight via-red-600 to-brightRed p-4 rounded-lg shadow-lg mt-6">
                            <h2 className="text-lg font-semibold text-white mb-2">You're Already Registered!</h2>
                            <p className="text-xl font-bold text-white">Position: <span className="text-yellow-300">{registeredCustomerPosition}</span></p>
                            <p className="text-sm text-white mt-2">Thank you for joining the waitlist. Share your referral link to climb up the list! -- "{registeredCustomerReferralID}"</p>
                        </div>
                    )}

                </div>
            </div>
        </div >
    );
};

export default ProductDetail;
