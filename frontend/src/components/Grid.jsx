import React from 'react'
import lesli from '../assets/lesli.jpg'
import iphones from '../assets/iphones.png'
const Grid = () => {
    return (
        <>
            <div className="container mx-auto px-4 py-8 sm:px-6 sm:py-12">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">Recommended by iPhone users</h2>

                {/* <!-- First Section --> */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* <!-- Average Rating Card --> */}
                    <div className="col-span-1 shadow-lg bg-brightRed text-white p-6 rounded-2xl flex flex-col justify-between">
                        <div className="flex flex-col justify-end items-left mt-auto">
                            <span className="text-4xl sm:text-5xl font-bold">4.8</span>
                            <span className="ml-2 text-base sm:text-lg">Average rating score for iPhones</span>
                        </div>
                    </div>

                    {/* <!-- User Review 1 --> */}
                    <div className="col-span-1 bg-orange-200 border rounded-2xl p-6 shadow-lg flex flex-col justify-between">
                        <p className="text-lg italic mb-4">“The performance and design are unbeatable! I love how smooth everything runs.”</p>
                        <p className="font-semibold mt-auto">Hanna Jane</p>
                    </div>

                    {/* <!-- Satisfaction Percentage Card --> */}
                    <div className="col-span-1 md:col-span-2 shadow-lg text-white rounded-2xl relative">
                        {/* Image with full width */}
                        <img src={iphones} className="w-full rounded-2xl" alt="Iphones" />

                        {/* Overlaying text */}
                        <div className="absolute top-4 left-4 p-2 rounded">
                            <span className="text-4xl sm:text-5xl font-bold">90%</span>
                            <span className="ml-2 text-sm sm:text-lg">Satisfied users from real iPhone owners</span>
                        </div>
                    </div>
                </div>

                {/* <!-- Second Section --> */}
                <div className="grid grid-cols-1 md:grid-cols-8 gap-6 mt-6">
                    {/* <!-- User Review 2 --> */}
                    <div className="col-span-1 md:col-span-6 bg-white border rounded-2xl p-6 shadow-md flex flex-col md:flex-row">
                        {/* <!-- Image --> */}
                        <img src={lesli} alt="Lesli" className="rounded-3xl p-2 w-full md:w-1/3 object-cover mx-auto mb-4 md:mb-0" />
                        <div className="flex flex-col justify-between space-y-10 sm:space-y-28 p-4">
                            <p className="text-lg italic mb-4">“Each iPhone generation brings exciting new features and seamless performance. I use mine all day without any issues.”</p>
                            <p className="font-semibold">Kristin Watson</p>
                        </div>
                    </div>

                    {/* <!-- Call to Action Card --> */}
                    <div className="col-span-1 md:col-span-2 bg-amber-100 shadow-lg text-center p-6 rounded-2xl flex flex-col justify-center space-y-6">
                        <h3 className="text-xl sm:text-2xl font-bold mb-4">Explore the latest iPhone models and features</h3>
                        <a href="#" className="bg-black text-white py-2 px-1 rounded-full">Read more</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Grid
