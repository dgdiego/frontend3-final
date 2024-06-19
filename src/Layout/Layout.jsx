import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
        <ToastContainer />
    </div>
  )
}

export default Layout