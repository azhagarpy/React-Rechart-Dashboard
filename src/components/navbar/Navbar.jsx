import React from 'react'
import {FaUser,FaSearch,FaSquare,FaBell,FaCog} from "react-icons/fa";
import "./navbar.scss"
import profile from "../../assets/images/img1.jpg"
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <FaUser/>
            <h2>IamAdmin</h2>
        </div>
        <div className="nav-icons">
        <FaSearch/>
        <FaSquare/>
        <div className="notification">
        <FaBell/>
        <span>1</span>
        </div>
        <div className="user">
            <img src={profile} alt="profile" />
            <p>Jhon</p>
        </div>
        <FaCog/>
        </div>
    </div>
  )
}

export default Navbar