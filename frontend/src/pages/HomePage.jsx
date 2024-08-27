import React, { useEffect, useState } from 'react'
import api from '../api'
import Hero from '../components/Hero'
import Feature from '../components/Feature'
import Testimonial from '../components/Testimonial'
import CTA from '../components/CTA'
import Card from '../components/Card'
const HomePage = () => {
    const [products, setProducts] = useState([])


    const getProducts = async () => {
        try {

            const res = await api.get('api/products/')
            setProducts(res ? res.data : [])
            console.log(res.data)
        } catch (err) {
            console.error(err)
        }
    }
    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>

            <Hero />
            <Feature />

            <div className="container mx-auto mt-10 ">
                <div className="flex flex-col items-center">

                    <h1 className=' text-4xl font-bold m-6'>Explore our Products</h1>
                    <div className="flex space-x-6">

                        {products.slice(0, 3).map((product) => (
                            <Card className='md:w-1/3 ' product={product} key={product.id} />
                        ))}
                    </div>
                </div>
            </div>
            <Testimonial />
            <CTA />

        </>
    )
}

export default HomePage