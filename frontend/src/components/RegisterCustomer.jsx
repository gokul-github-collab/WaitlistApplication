import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const RegisterCustomer = ({ product_id, referral_id }) => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Prepare the data to be sent
        const postData = {
            email: email,
            product: product_id,  // Use product_id from props
            referral_id: referral_id || 'null',  // Use referral_id from props, set to 'null' if it's empty
        };

        try {
            // Send POST request to the Django API
            const response = await api.post('api/register/', postData);
            if (response.status === 201) {
                toast.success('Customer registered successfully');

                // Fetch the position using referral_id
                const positionResponse = await api.get(`api/check-position/${referral_id || 'null'}/`);

                // Use the response data to navigate
                return navigate(`/position/${email}/${product_id}`);
            }
            console.log('Customer registered successfully:', response.data);
        } catch (error) {
            console.error('There was an error registering the customer:', error.response?.data || error.message);
            setError(error.response?.data?.error || error.message); // Set the error state

            // Navigate to a different page or handle error navigation if necessary
            navigate(`/position/${email}/${product_id}`);
        }
    };

    return (
        <div className="border shadow-lg rounded-lg space-x-3 space-y-3 bg-white">
            <form onSubmit={handleSubmit} className='p-3'>
                <h1 className="text-4xl font-bold">Register To Buy Our Product</h1>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                    <input
                        type="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button type="submit" className='block p-3 -x-6 bg-brightRed rounded-lg text-white'>Register</button>
            </form>
        </div>
    );
};

export default RegisterCustomer;
