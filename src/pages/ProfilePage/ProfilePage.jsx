import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import myApi from '../../service/service'

const ProfilePage = (props) => {
  console.log(props)
  const { user } = useContext(AuthContext)
  
  return (
    <>
      <h2>Profile page</h2>

        <div className="UserProfile">

          <div className='profileInfos'>
          <p>{user.username}</p>
          <p>{user.email}</p>
          
            <button> Edit your profile</button>
          </div>

          <div className='shippingAdress'>
            <button> Edit your shipping address</button>
          </div>
        </div>
    </>
  );
}

export default ProfilePage
