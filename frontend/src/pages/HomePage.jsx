import React, { useEffect, useState } from 'react';
import api from '../api';

import Hero from '../components/Hero';
import Feature from '../components/Feature';
import Testimonial from '../components/Testimonial';
import CTA from '../components/CTA';
import Card from '../components/Card';
import Grid from '../components/Grid.jsx'
const HomePage = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const res = await api.get('api/products/');
            setProducts(res ? res.data : []);
            console.log(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <Hero />
            <Grid />
            <Feature />

            <div className="container mx-auto mt-10 bg-orange-50">
                <div className="text-center">
                    <h1 className='text-4xl font-bold m-6'>Explore our Products</h1>

                    {/* Grid layout for products */}
                    <div className="grid  gap-6 sm:grid-cols-1 md:grid-cols-3">
                        {products.slice(0, 3).map((product) => (
                            <Card product={product} key={product.id} />
                        ))}
                    </div>
                </div>
            </div>
            <Testimonial />
            <CTA />
        </>
    );
};

export default HomePage;
