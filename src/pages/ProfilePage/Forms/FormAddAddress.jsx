import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import './FormAddAddress.css'
import myApi from '../../../service/service'

const AddAddress = () => {
  const { user, setUser } = useContext(AuthContext)
  const navigate = useNavigate()
  const [address, setAddress] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState(' ')
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

    const newAddress = {
      shippingAddress : {
        address,
        postalCode,
        city,
        country
      }
    }

    try {
      const response = await myApi.patch('/user/edit', newAddress)
      // console.log(editedAddress)
      setUser(response.data)
      navigate('/profile')
      
    } catch (error) {
      console.log(error)
      setMessage('An error occurred while creating changes')
    }
  }

  return (
    <div className='FormAddAddress'>
      <h2>Add Shipping Address</h2>
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

export default AddAddress
