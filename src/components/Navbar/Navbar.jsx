import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='logo' src={logo} alt="" />
        <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className="nav-right">
            <select>
                <option value="usd">USD</option>
                <option value="inr">INR</option>
                <option value="eur">EURO</option>
            </select>
            <button>Sign up <img src={arrow_icon} alt="" /></button>
        </div>
    </div>
  )
}

export default Navbar