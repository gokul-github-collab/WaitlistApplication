import React, { useEffect, useState } from 'react';
import api from '../api';
import { Link } from 'react-router-dom';
const FilterCustomers = ({ product_id }) => {
    const [customers, setCustomers] = useState([]);

    const getCustomers = async () => {
        try {
            const res = await api.get(`api/products/${product_id}/customers/`);
            setCustomers(res.data.customers);
        } catch (error) {
            console.error('Error fetching customers:', error);
        }
    };

    useEffect(() => {
        getCustomers();
    }, [product_id]);

    return (
        <div className="p-6 bg-gray-50 rounded-lg shadow-lg mt-6">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">Registered Customers</h1>
            {customers.length > 0 ? (
                customers.map(customer => (
                    <div key={customer.id} className="mb-4">
                        <div className="flex flex-row justify-between items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                            <Link to={`/registered-products/${customer.email}`} className="text-lg font-medium text-orange-400 hover:text-brightRed">{customer.email}</Link>
                            <p className="text-lg text-gray-500">Referral ID: {customer.referral_id}</p>
                            <p className="text-lg text-gray-500">Position: {customer.position_number}</p>
                        </div>
                        <hr className="my-2 border-gray-200" />
                    </div>
                ))
            ) : (
                <p className="text-gray-600">No customers registered yet.</p>
            )}
        </div>
    );
};

export default FilterCustomers;
