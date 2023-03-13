import React, { useState, useContext } from 'react'
import './FormAddAddress.css'
import myApi from '../../../service/service'
import { AuthContext } from '../../../context/AuthContext'


const FormAddAddress = () => {
  const [address, setAddress] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [message, setMessage] = useState('')
  const { user } = useContext(AuthContext)

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
    event.preventDefault();
  
    const address = {
      address : user.shippingAddress.address,
      postalCode : user.shippingAddress.postalCode,
      city : user.shippingAddress.city,
      country : user.shippingAddress.country
    };
  
    try {
      const response = await myApi.patch('/user/edit', JSON.stringify(address), {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (response.ok) {
        setMessage('Address added successfully')
      } else {
        setMessage('Failed to add address')
      }
    } catch (error) {
      console.log(error);
      setMessage('An error occurred while adding address')
    }
  };
  
  

  return (
    <div className='FormAddAddress'>
      <h2>Add Shipping Address</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='address'>Address:</label>
          <input type="text" value={address} name='address' id='address' onChange={handleAddressChange} placeholder='your address'/>

        <label htmlFor='postalCode'>Postal Code:</label>
          <input type="text" value={postalCode} name='postalCode' id='postalCode' onChange={handlePostalCodeChange} placeholder='postal code'/>

        <label htmlFor='city'>City:</label>
          <input type="text" value={city} name='city' id='city' onChange={handleCityChange} placeholder='city'/>

        <label htmlFor='country'>Country:</label>
          <input type="text" value={country} name='country' id='country' onChange={handleCountryChange} placeholder='country'/>

        <button>Add Address</button>
      </form>
      <div>{message}</div>
    </div>
  )
}

export default FormAddAddress
