import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../api';

// Component to display customer's position and referral link
const PositionNumber = () => {
    const { no, ref_no, p_id, email, product_id } = useParams();

    const [position, setPosition] = useState('');
    const [referralID, setRefferalID] = useState('');

    // Fetch the customer details based on product_id and email
    const getCustomer = async () => {
        const res = await api.get(`api/customers/${product_id}/${email}/`);
        setPosition(res.data.position);
        setRefferalID(res.data.referral_id);
    };

    useEffect(() => {
        getCustomer();
    }, []);

    // Construct the product URL using route parameters and referral ID
    const productUrl = `/products/${p_id ? p_id : product_id ? product_id : ""}/${ref_no ? ref_no : referralID ? referralID : ''}`;

    console.log(position);

    return (
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                {/* Display customer's email */}
                <p className="text-4xl font-semibold text-brightRed">Email: {email}</p>
                {/* Display customer's position */}
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Your Position: {no ? no : position ? position : ""}
                </h1>
                <div className="mt-6"></div>
                {/* Display referral link */}
                <Link to={productUrl} className="mt-12 text-brightRed text-base leading-7 font-bold">
                    {`http://localhost:5173${productUrl}`}
                </Link>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    {/* Message about using the referral link */}
                    <a href="#" className="text-sm font-semibold text-gray-900">
                        USE THIS LINK TO REFER AND GO TO THE TOP OF THE LIST TO BUY YOUR DREAM PRODUCT
                    </a>
                </div>
            </div>
        </main>
    );
};

export default PositionNumber;
