import React, { useEffect, useState } from 'react'
import api from '../api'
import RegisteredItems from '../components/RegisteredItems'
import { useParams } from 'react-router-dom'
import RegisteredProducts from '../components/RegisteredProducts'

const RegisteredItemsPage = () => {
    const [products, setProducts] = useState(null)
    const { email } = useParams()

    if (email) {

        const getProducts = async () => {
            const res = await api.get(`api/products/customers/${email}/`)
            setProducts(res.data)
        }
        useEffect(() => {
            getProducts()
        }, [])
    } else {

        const getProducts = async () => {
            const res = await api.get(`api/products/customers/`)
            setProducts(res.data)
        }
        useEffect(() => {
            getProducts()
        }, [])
    }

    console.log(products ? products : "no products")
    return (
        <>
            <div className="container mx-auto mt-10">

                {products && products.map((product) => (
                    <div key={product.id} className=''>
                        <RegisteredProducts registeredCustomerPosition={product.position_number} registeredCustomerReferralID={product.referral_id} product={product.name} />
                    </div>
                ))}

            </div>
        </>
    )
}

export default RegisteredItemsPage