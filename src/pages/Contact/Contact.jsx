import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
      <div className='first'>
        <div className='direction'>
          <Link to={`/`} >Home</Link><p> / Contact</p>
        </div>
      </div>

      <div className='Contact'>
        <div className='container'>
          <div className='title'>
            <h2>Contact</h2>
            <h5>PLEASE CONTACT ME</h5>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, nesciunt? Nostrum similique nisi quam aliquam nam, accusantium autem aliquid dolorem rerum, voluptas, illo minus asperiores veritatis quisquam excepturi provident vel.</p>
        </div>
      </div>
    </>
  )
}


export default Contact
