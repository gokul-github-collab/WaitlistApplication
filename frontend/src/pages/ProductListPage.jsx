import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import api from '../api';

const ProductList = () => {
    const [products, setProducts] = useState([]); // State to store the list of products
    const [searchTerm, setSearchTerm] = useState(''); // State to store the search term

    // Function to fetch products from the API
    const getProducts = async () => {
        try {
            const res = await api.get('api/products/');
            setProducts(res ? res.data : []); // Update state with fetched products
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    // Fetch products when the component mounts
    useEffect(() => {
        getProducts();
    }, []);

    // Function to filter products based on search term
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mx-auto mt-10">
            {/* Search Bar */}
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search for a product..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
            </div>

            <div className="flex flex-col">
                <h1 className='text-4xl font-bold m-6 text-center'>Explore our Products</h1>
                {/* Product Grid */}
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <Card product={product} key={product.id} />
                        ))
                    ) : (
                        <p className="text-center text-lg">No products found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
