import React from 'react'
import profile from '../assets/images/profile.webp'
const Testimonial = () => {
    return (
        <>

            <section>

                {/* Container to heading and testimonial block */}

                <div className="max-w-6xl px-5 mx-auto mt-32  text-center">
                    {/* Heading */}

                    <h2 className="text-4xl font-bold text-center">
                        What's different about Apple
                    </h2>
                    {/* Testimonial Container */}
                    <div className="flex flex-col mt-24 md:flex-row md:space-x-6 ">

                        {/* Testimonial 1 */}
                        <div className=" flex flex-col shadow-lg  items-center p-6 space-y-6 rounded-lg bg-veryLightGray mb-16  md:w-1/3">
                            <img src={profile} className='w-16 -mt-14 rounded-full' alt="" />   <h5 className="text-lg font-bold">Adhiban Madhav</h5>
                            <p className="text-sm text-darkGrayishBlue">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet id animi voluptate aliquam a, ea nemo natus rem voluptates ad enim tempore sapiente nam. Voluptatem illum sit facere alias laboriosam.</p>
                        </div>
                        {/* Testimonial 1 */}
                        <div className="flex flex-col shadow-lg  items-center p-6 space-y-6 rounded-lg bg-veryLightGray mb-16  md:w-1/3">
                            <img src={profile} className='w-16 -mt-14 rounded-full' alt="" />   <h5 className="text-lg font-bold">David</h5>
                            <p className="text-sm text-darkGrayishBlue">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet id animi voluptate aliquam a, ea nemo natus rem voluptates ad enim tempore sapiente nam. Voluptatem illum sit facere alias laboriosam.</p>
                        </div>
                        {/* Testimonial 1 */}
                        <div className="flex flex-col shadow-lg  items-center p-6 space-y-6 rounded-lg bg-veryLightGray mb-16  md:w-1/3">
                            <img src={profile} className='w-16 -mt-14 rounded-full' alt="" />
                            <h5 className="text-lg font-bold">Anisha</h5>
                            <p className="text-sm text-darkGrayishBlue">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet id animi voluptate aliquam a, ea nemo natus rem voluptates ad enim tempore sapiente nam. Voluptatem illum sit facere alias laboriosam.</p>
                        </div>

                    </div>

                    <div className="button">
                        <a href="" className="p-3 px-6 mb-6 bg-brightRed rounded-full text-white">Get Started</a>
                    </div>
                </div>
            </section>



        </>
    )
}

export default Testimonial