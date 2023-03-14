import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import './FormEditAddress.css'
import myApi from '../../../service/service'

const EditAddress = () => {
  const { user, setUser } = useContext(AuthContext)
  const navigate = useNavigate()
  const [address, setAddress] = useState(user.shippingAddress.address)
  const [postalCode, setPostalCode] = useState(user.shippingAddress.postalCode)
  const [city, setCity] = useState(user.shippingAddress.city)
  const [country, setCountry] = useState(user.shippingAddress.country)
  const [message, setMessage] = useState('')

  const handleAddressChange = (event) => {
    setAddress(event.target.value)
  }

  const handlePostalCodeChange = (event) => {
    setPostalCode(event.target.value)
  }

  const handleCityChange = (event) => {
    setCity(event.target.value)
  }

  const handleCountryChange = (event) => {
    setCountry(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const editedAddress = {
      shippingAddress : {
        address,
        postalCode,
        city,
        country
      }
    }

    try {
      const response = await myApi.patch('/user/edit', editedAddress)
      // console.log(editedAddress)
      setUser(response.data)
      navigate('/profile')
      
    } catch (error) {
      console.log(error)
      setMessage('An error occurred while saving changes')
    }
  }

  return (
    <div className='FormEditAddress'>
      <h2>Edit Shipping Address</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='address'>New Address:</label>
          <input type="text" value={address} name='address' id='address' onChange={handleAddressChange} placeholder='new address'/>

        <label htmlFor='postalCode'>New Postal Code:</label>
          <input type="text" value={postalCode} name='postalCode' id='postalCode' onChange={handlePostalCodeChange} placeholder='new postal code'/>

        <label htmlFor='city'>New City:</label>
          <input type="text" value={city} name='city' id='city' onChange={handleCityChange} placeholder='new city'/>

        <label htmlFor='country'>New Country:</label>
          <input type="text" value={country} name='country' id='country' onChange={handleCountryChange} placeholder='new country'/>

        <button>Save Changes</button>
      </form>
      <div>{message}</div>
    </div>
  )
}

export default EditAddress
