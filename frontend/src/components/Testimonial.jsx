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
                        <div className="flex flex-col shadow-lg items-center p-6 space-y-6 rounded-lg bg-veryLightGray mb-16 md:w-1/3">
                            <img src={profile} className='w-16 -mt-14 rounded-full' alt="" />
                            <h5 className="text-lg font-bold">Adhiban Madhav</h5>
                            <p className="text-sm text-darkGrayishBlue">
                                "Switching to iPhone was the best decision! The user experience is seamless, and the battery life is incredible. I love how smooth everything runs, especially for work-related apps."
                            </p>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="flex flex-col shadow-lg items-center p-6 space-y-6 rounded-lg bg-veryLightGray mb-16 md:w-1/3">
                            <img src={profile} className='w-16 -mt-14 rounded-full' alt="" />
                            <h5 className="text-lg font-bold">David</h5>
                            <p className="text-sm text-darkGrayishBlue">
                                "The camera on the new iPhone is unmatched. I use it for both personal and professional photography, and the quality blows me away. Plus, the iOS updates keep everything fresh and fast."
                            </p>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="flex flex-col shadow-lg items-center p-6 space-y-6 rounded-lg bg-veryLightGray mb-16 md:w-1/3">
                            <img src={profile} className='w-16 -mt-14 rounded-full' alt="" />
                            <h5 className="text-lg font-bold">Anisha</h5>
                            <p className="text-sm text-darkGrayishBlue">
                                "I can't imagine using any other phone. The integration between my iPhone, iPad, and MacBook is flawless. From FaceTime to AirDrop, it makes my life so much easier."
                            </p>
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
