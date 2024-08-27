import React, { useEffect, useState } from 'react';
import api from '../api';

// Component to display a list of customers registered for a specific product
const FilterCustomers = ({ product_id }) => {
    const [customers, setCustomers] = useState([]);

    // Fetch the list of customers registered for the product
    const getCustomers = async () => {
        try {
            const res = await api.get(`api/products/${product_id}/customers/`);
            setCustomers(res.data.customers);
        } catch (error) {
            console.error('Error fetching customers:', error);
        }
    };

    // Fetch customers whenever the product_id changes
    useEffect(() => {
        getCustomers();
    }, [product_id]);

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            {/* Title of the section */}
            <h1 className="text-2xl font-bold mb-4">Registered Customers</h1>
            {/* Display list of customers or a message if there are none */}
            {customers.length > 0 ? (
                customers.map(customer => (
                    <div key={customer.id} className="mb-4">
                        {/* Customer information */}
                        <div className="flex flex-row justify-between items-center bg-gray-100 p-3 rounded-lg">
                            <h2 className="text-lg font-semibold text-gray-800">{customer.email}</h2>
                            <p className="text-lg text-gray-600">Position: {customer.position_number}</p>
                        </div>
                        <hr className="my-2 border-gray-300" />
                    </div>
                ))
            ) : (
                <p className="text-gray-600">No customers registered yet.</p>
            )}
        </div>
    );
};

export default FilterCustomers;
