import React from 'react'

const Feature = () => {
    return (
        <>
            <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">

                <div className="flex flex-col space-y-12 md:w-1/2">
                    <h2 className="max-w-md text-4xl font-bold text-centermd:text-left">
                        Why iPhone is a Game Changer in the Market?
                    </h2>
                    <p className="max-w-sm text-center text-darkGrayishBluemd:text-left">
                        iPhone continues to redefine the smartphone experience with its powerful hardware, intuitive design, and seamless software updates. Whether you're taking professional-grade photos or managing your tasks, iPhone ensures a smooth, secure, and reliable experience.
                    </p>
                </div>

                {/* Numbered List */}
                <div className="flex flex-col space-y-8 md:w-1/2">

                    {/* List 1 */}
                    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                        <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                            <div className="flex items-center space-x-2">
                                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">01</div>
                                <h3 className="text-base font-bold md:mb-4 md:hidden">
                                    Cutting-edge Camera Technology
                                </h3>
                            </div>
                        </div>

                        <div className="div flex flex-col">
                            <h3 className="hidden mb-4 text-lg font-bold md:block">
                                Cutting-edge Camera Technology
                            </h3>
                            <p className="text-darkGrayishBlue">
                                With each iPhone release, the camera capabilities become even more advanced. The iPhone camera delivers professional-level photography with minimal effort, featuring enhanced low-light performance, ultra-wide shots, and impressive video stabilization.
                            </p>
                        </div>
                    </div>

                    {/* List 2 */}
                    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                        <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                            <div className="flex items-center space-x-2">
                                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">02</div>
                                <h3 className="text-base font-bold md:mb-4 md:hidden">
                                    Superior Performance and Battery Life
                                </h3>
                            </div>
                        </div>

                        <div className="div flex flex-col">
                            <h3 className="hidden mb-4 text-lg font-bold md:block">
                                Superior Performance and Battery Life
                            </h3>
                            <p className="text-darkGrayishBlue">
                                Powered by the latest A-series chip, the iPhone is a powerhouse that delivers unmatched speed, efficiency, and battery life. Whether you're multitasking or gaming, you can trust the iPhone to handle it with ease while maintaining impressive battery life.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Feature
