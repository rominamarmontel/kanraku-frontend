import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

const Navbar = () => {
  const { user, authenticateUser, removeToken } = useContext(AuthContext)
  function handleClick() {
    removeToken()
    authenticateUser()
  }
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
          {!user ? (
            <>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/signup">Signup</NavLink>
              </li>
            </>
          ) : (
            <>
              <NavLink to="/contact">Profile</NavLink>
              <button onClick={handleClick}>Logout</button>
            </>
          )}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar