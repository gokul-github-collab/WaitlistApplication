import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api';
import NotFound from '../pages/NotFound';

const EditProduct = () => {
    const navigate = useNavigate();
    const { product_id } = useParams(); // Get the product ID from the URL
    const [isSuperUser, setIsSuperUser] = useState(false);
    const [name, setName] = useState('');
    const [cardImage, setCardImage] = useState(null); // New state for card_image
    const [cardImageURL, setCardImageURL] = useState(''); // Separate state for existing image URL

    useEffect(() => {
        checkSuperuser();
        if (product_id) {
            fetchProductDetails(product_id); // Fetch product details if editing
        }
    }, [product_id]);

    // Check if the user is a superuser
    const checkSuperuser = async () => {
        try {
            const res = await api.get("/api/super-user/");
            console.log("Response from check_superuser:", res);
            setIsSuperUser(res.data.is_superuser);
        } catch (err) {
            console.error("Error checking superuser:", err);
        }
    };

    // Fetch product details for editing
    const fetchProductDetails = async (id) => {
        try {
            const res = await api.get(`/api/products/${id}/`);
            setName(res.data.name); // Pre-fill the form with product name
            setCardImageURL(res.data.card_image); // Set the image URL for display if it exists
        } catch (err) {
            console.error("Error fetching product details:", err);
            toast.error("Error fetching product details");
        }
    };

    // Handle form submission to update product
    const handleSubmit = async (e) => {
        e.preventDefault();
        const productData = new FormData();
        productData.append('name', name);
        if (cardImage) {
            productData.append('card_image', cardImage); // Append the image file if uploaded
        }

        try {
            await api.put(`/api/products/${product_id}/`, productData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Set the header for file uploads
                },
            });
            toast('Product updated successfully');
            navigate(`/products/${product_id}`); // Redirect to the homepage or product list after update
        } catch (err) {
            toast.error(err.message);
        }
    };

    // Handle file input change for the image
    const handleImageChange = (e) => {
        setCardImage(e.target.files[0]); // Set the selected file
    };

    return (
        <>
            {isSuperUser ? (
                <div className="isolate bg-orange-100 px-6 py-24 sm:py-32 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-brightRed sm:text-4xl">
                            Edit Product
                        </h2>
                    </div>
                    <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div className="sm:col-span-2">
                                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Product Name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="card_image" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Card Image
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="file"
                                        name="card_image"
                                        id="card_image"
                                        onChange={handleImageChange} // Handle file input change
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                                {/* If an image is uploaded or exists from API, show it */}
                                {cardImage ? (
                                    <div className="mt-2">
                                        <img src={URL.createObjectURL(cardImage)} alt="Product Card" className="w-full h-64 object-cover" />
                                    </div>
                                ) : cardImageURL && (
                                    <div className="mt-2">
                                        <img src={cardImageURL} alt="Product Card" className="w-full h-64 object-cover" />
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="mt-10">
                            <button
                                type="submit"
                                className="block w-full rounded-md bg-brightRed px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                            >
                                Update Product
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                <NotFound />
            )}
        </>
    );
};

export default EditProduct;
