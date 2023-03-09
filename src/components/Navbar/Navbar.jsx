import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='home-logo'>
          <NavLink to="/">HOME</NavLink>
        </div>
      <nav>  
          <ul>
            <li>
              <NavLink to="/store">STORE</NavLink>
            </li>
            <li>
              <NavLink to="/about">ABOUT</NavLink>
            </li>
            <li>
              <NavLink to="/contact">CONTACT</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar