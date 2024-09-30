import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const MainLayout = () => {
    return (<>
<div className='bg-orange-50 font-poppins ' >
     <Navbar />
        <Outlet />
        <ToastContainer />

</div>


    </>)

}

export default MainLayout