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
            <div className="flex flex-col ">
                <h1 className='text-4xl font-bold m-6 text-center'>Explore our Products</h1>
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 ">
                    {products.map((product) => (

                            <Card product={product} key={product.id}/>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
