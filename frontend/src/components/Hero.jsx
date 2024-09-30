import React from 'react'
import app11 from '../assets/images/app2_2.png'
const Hero = () => {
    return (
        <>

            <section id='hero ' className='bg-orange-50'>
                {/* Flex Container */}
                <div className="container  flex flex-col-reverse  items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
                    {/* Left Item */}
                    <div className="flex flex-col mb-32 space-y-12 md:w-1/2">

                        <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
                            The best way to buy the
                            products you love.
                        </h1>
                        <p className="max-w-sm text-center text-darkGrayinhBlue md:text-left">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat excepturi dolore explicabo, maxime quisquam rem at quae enim molestias.
                        </p>
                        <div className="flex justify-centermd:justify-start">
                            <a href="" className="md:block p-3 px-6 pt-2 pb-2 text-white bg-brightRed rounded-full hover:bg-brightRedLight">Get Started</a>
                        </div>
                    </div>

                    {/* Image */}

                    <div className="md:w-1/2">
                        <img src={app11} alt="" />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Hero