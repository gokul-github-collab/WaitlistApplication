import React from 'react';
import vision from '../assets/images/vision.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";

// Card component to display product details with a link to more information
const Card = ({ product }) => {

    return (
        <>
            <div className="flex flex-col space-x-6 border border-gray-300 rounded-lg">
                {/* Product image */}
                <div className="h-full v-hull">
                    <img src={vision} className='rounded-t-lg' alt="" />
                </div>
                <div className="p-2">
                    {/* Product name */}
                    <h1 className="text-2xl font-bold text-left">
                        {product.name}
                    </h1>
                    {/* Product description */}
                    <p className="text-darkGrayishBlue md:text-left">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus earum laudantium nemo odit voluptatem eius ullam.
                    </p>
                    {/* Link to product details */}
                    <div className="inline-block mt-2 rounded-lg text-white bg-brightRed p-2 px-6 hover:bg-brightRedLight">
                        <Link
                            to={`/products/${product ? product.id : ""}`}
                            className='flex items-center space-x-2'
                        >
                            <span>Read More</span>
                            <FaArrowRight className='' />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
