import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import api from '../api';

const ProductList = () => {
    const [products, setProducts] = useState([]); // State to store the list of products

    // Function to fetch products from the API
    const getProducts = async () => {

        const res = await api.get('api/products/');
        setProducts(res ? res.data : []); // Update state with fetched products

    };

    // Fetch products when the component mounts
    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="container mx-auto mt-10">
            <div className="flex flex-col items-center">
                <h1 className='text-4xl font-bold m-6'>Explore our Products</h1>
                <div className="flex flex-wrap">
                    {products.map((product) => (
                        <div className="w-1/3 p-3" key={product.id}>
                            <Card product={product} /> {/* Render a Card component for each product */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
