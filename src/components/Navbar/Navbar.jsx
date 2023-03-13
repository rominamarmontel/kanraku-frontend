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

        <NavLink to="/"><img src='/images/logo3.png' alt='logo_yoko' width={600} /></NavLink>

        <NavLink to="/">HOME</NavLink>
        <NavLink to="/store">STORE</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
        {!user ? (
          <>
            <NavLink to="/login">LOGIN</NavLink>
            <NavLink to="/signup">SIGNUP</NavLink>
          </>
        ) : (
          <>
            <NavLink to="/profile">PROFILE</NavLink>
            <NavLink to='/cart'>
              <lord-icon src="https://cdn.lordicon.com/udbbfuld.json" trigger="hover" color="black" state="hover"></lord-icon>
            </NavLink>
            <button onClick={handleClick}>LOGOUT</button>
          </>
        )}

    </div>
  )
}

export default Navbar