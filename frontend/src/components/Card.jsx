import React from 'react';
import vision from '../assets/images/horizontal2.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";

// Card component to display product details with a link to more information
const Card = ({ product }) => {

    return (
        <div className='p-2'>


<div className="relative grid h-[35rem] max-w-full flex-col items-end justify-center overflow-hidden rounded-xl bg-white shadow-2xl">
  <div
    className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent"
    style={{ backgroundImage: `url(${product.card_image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
  >
    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
  </div>
  <div className="relative text-center p-6 px-6 py-14 md:px-12 ">

    <h5 className="mb-4 text-xl font-semibold text-slate-300">
      {product.name}
    </h5>
    <Link to={`/products/${product.id}`} className='bg-brightRed py-2 px-4 inline-block rounded-lg text-white' >Let's Go  <FaArrowRight className='inline   mb-0.5' /></Link>
  </div>
</div>

        </div>
    );
}

export default Card;


 {/*<div className="flex flex-col space-x-6 border border-gray-300 shadow-lg  rounded-lg">*/}
            {/*    /!* Product image *!/*/}
            {/*    <div className="h-full v-hull">*/}
            {/*        <img src={vision} className='rounded-t-lg' alt="" />*/}
            {/*    </div>*/}
            {/*    <div className="p-2">*/}
            {/*        /!* Product name *!/*/}
            {/*        <h1 className="text-2xl font-bold text-left">*/}
            {/*            {product.name}*/}
            {/*        </h1>*/}
            {/*        /!* Product description *!/*/}
            {/*        <p className="text-darkGrayishBlue md:text-left">*/}
            {/*            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus earum laudantium nemo odit voluptatem eius ullam.*/}
            {/*        </p>*/}
            {/*        /!* Link to product details *!/*/}
            {/*        <div className="inline-block mt-2 rounded-lg text-white bg-brightRed p-2 px-6 hover:bg-brightRedLight">*/}
            {/*            <Link*/}
            {/*                to={`/products/${product ? product.id : ""}`}*/}
            {/*                className='flex items-center space-x-2'*/}
            {/*            >*/}
            {/*                <span>Read More</span>*/}
            {/*                <FaArrowRight className='' />*/}
            {/*            </Link>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
