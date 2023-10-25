import React from 'react'
import Navbar from './navbar/Navbar'
import Footer from "./footer/Footer"
import Sidebar from "./sidebar/Sidebar"

const Layout = ({ children }) => {
    return (
        <div className='layout'>
            <Navbar />
            <div className='container'>
                <div className='sidebar-container'>
                    <Sidebar />
                </div>
                <div className='main-container'>
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout