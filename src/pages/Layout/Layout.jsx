// import { useContext } from 'react'
// import { AuthContext } from '../../context/AuthContext'
import React from 'react'
import './Layout.css'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
