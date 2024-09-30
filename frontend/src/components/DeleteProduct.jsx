import React from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api'
import { toast } from 'react-toastify'
import { useState } from 'react'
import { useEffect } from 'react'

const DeleteProduct = ({ product_id }) => {
    const navigate = useNavigate()
    useEffect(() => {
        getProduct(product_id)
    }, [product_id])

    console.log(product_id)
    const [product, setProduct] = useState(null)

    const getProduct = (id) => {
        api.get(`/api/products/${id}/`).
            then((res) => {
                setProduct(res.data)
            }).catch((err) => toast.error(err))

    }


    const handleDeleteCourseOutcome = async () => {
        if (window.confirm(`Are you sure you want to delete ${product ? product.name : ''}`)) {
            try {
                await api.delete(`/api/products/delete/${product ? product.id : ''}/`);
                toast.error('Product deleted successfully');
                setTimeout(() => {
                    window.location.reload(); // Reload the page after 1.5 seconds             
                }, 1500);
                navigate('/products')
            } catch (err) {
                alert(err);
            }
        }
    };
    return (
        <button className="inline bg-gradient-to-tr mt-2 from-red-500 to-red-700 mb-1 text-white rounded-lg px-4 py-2 hover:bg-red-600 hover:to-red-800 shadow-md" onClick={handleDeleteCourseOutcome} >Delete</button>
    )
}

export default DeleteProduct