import React from 'react'

const Feature = () => {
    return (
        <>
            <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">

                <div className="flex flex-col space-y-12 md:w-1/2">
                    <h2 className="max-w-md text-4xl font-bold text-centermd:text-left">Lorem ipsum dolor, sit amet consectetur ?</h2>
                    <p className="max-w-sm text-center text-darkGrayishBluemd:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde similique tempore rem accusantium, voluptate sed sunt ab labore vero expedita suscipit nisi id animi iusto perferendis dolores architecto eum fugiat?</p>
                </div>
                {/* Numbered List */}
                <div className="flex flex-col space-y-8 md:w-1/2">
                    {/* List 1 */}
                    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">

                        <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                            <div className="flex items-center space-x-2">
                                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">01</div>
                                <h3 className="text-base font-bold md:mb-4 md:hidden">Lorem ipsum dolor sit amet consectetur.</h3>
                            </div>
                        </div>

                        <div className="div flex flex-col">
                            <h3 className="hidden mb-4 text-lg font-bold md:block">Lorem ipsum dolor sit amet consectetur.</h3>
                            <p className="text-darkGrayishBlue">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique recusandae id est sapiente, quasi accusantium neque. Ipsa exercitationem odio sapiente quasi voluptate debitis aperiam dolores error, explicabo provident magnam sit.
                            </p></div>
                    </div>
                    {/* list 2 */}
                    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">

                        <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                            <div className="flex items-center space-x-2">
                                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">01</div>
                                <h3 className="text-base font-bold md:mb-4 md:hidden">Lorem ipsum dolor sit amet consectetur.</h3>
                            </div>
                        </div>

                        <div className="div flex flex-col">
                            <h3 className="hidden mb-4 text-lg font-bold md:block">Lorem ipsum dolor sit amet consectetur.</h3>
                            <p className="text-darkGrayishBlue">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique recusandae id est sapiente, quasi accusantium neque. Ipsa exercitationem odio sapiente quasi voluptate debitis aperiam dolores error, explicabo provident magnam sit.
                            </p></div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Feature