import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

const Navbar = () => {
  const { user, authenticateUser, removeToken } = useContext(AuthContext)
  const navigate = useNavigate()

  function handleClick() {
    removeToken()
    authenticateUser()
    navigate('/')

  }
  const handleInputChange = (event) => {
    setSearchParams({ q: event.target.value })
  };
  return (
    <div className='Navbar'>
      <div className='home-logo'>
        <NavLink to="/"><img src='/images/logo3.png' alt='logo_yoko' width={600} /></NavLink>
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
              <NavLink to="/profile">Profile</NavLink>
              <button onClick={handleClick}>Logout</button>
            </>
          )}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar