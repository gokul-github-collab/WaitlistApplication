import React, { useRef, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import NotFound from '../pages/NotFound';

// Component to handle adding a product, with superuser verification and form submission
const AddProduct = () => {
    const navigate = useNavigate();
    const [isSuperUser, setIsSuperUser] = useState(false);
    const nameRef = useRef(null);  // useRef for form value
    const cardImageRef = useRef(null);  // useRef for image file

    // Check if the user is a superuser on component mount
    useEffect(() => {
        checkSuperuser();
    }, []);

    // Function to check if the user is a superuser
    const checkSuperuser = async () => {
        try {
            const res = await api.get("/api/super-user/");
            console.log("Response from check_superuser:", res);
            setIsSuperUser(res.data.is_superuser);
        } catch (err) {
            console.error("Error checking superuser:", err);
        }
    };

    // Handle form submission for creating a product
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', nameRef.current.value);  // Add name
        formData.append('card_image', cardImageRef.current.files[0]);  // Add image file

        try {
            await api.post(`/api/products/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            toast.success('Product created successfully');
            navigate(`/`);
        } catch (err) {
            toast.error(err.message);
        }
    };

    // Handle saving a product and clearing the form to add another
    const handleSaveAndAnother = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', nameRef.current.value);  // Add name
        formData.append('card_image', cardImageRef.current.files[0]);  // Add image file

        try {
            await api.post(`/api/products/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            toast.success('Product created successfully');
            // Clear form field
            nameRef.current.value = '';  // Reset input field
            cardImageRef.current.value = '';  // Reset image field
        } catch (err) {
            toast.error(err.message);
        }
    };

    return (
        <>
            {isSuperUser ? (
                <div className="isolate bg-orange-100 px-6 py-24 sm:py-32 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-brightRed sm:text-4xl">Add Product</h2>
                    </div>
                    <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20" encType="multipart/form-data">
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
                                        ref={nameRef}  // Use ref instead of state
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="card_image" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Product Image
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="file"
                                        name="card_image"
                                        id="card_image"
                                        ref={cardImageRef}  // Reference to image input
                                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                                        accept="image/*"  // Ensure only images can be uploaded
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <button
                                type="submit"
                                className="block w-full rounded-md bg-brightRed px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                            >
                                Submit
                            </button>
                        </div>
                        <div className="mt-10">
                            <button
                                type="button" onClick={handleSaveAndAnother}
                                className="block w-full rounded-md bg-gray-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                            >
                                Save and Another
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                <NotFound />
            )}
        </>
    );
}

export default AddProduct;
