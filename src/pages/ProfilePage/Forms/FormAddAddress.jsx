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
      setUser(response.data)
      navigate('/profile')
      
    } catch (error) {
      setMessage('An error occurred while creating changes')
    }
  }

  return (
    <div className='FormAddAddress'>
      <h2>Add Shipping Address</h2>
      <form onSubmit={handleSubmit}>
      <table>
      <tbody>
        <tr>
          <td><label htmlFor='address'>Address:</label></td>
          <td><input type="text" value={address} name='address' id='address' onChange={handleAddressChange} placeholder='Address'/></td>
        </tr>
        <tr>
          <td><label htmlFor='postalCode'>Postal Code:</label></td>
          <td><input type="text" value={postalCode} name='postalCode' id='postalCode' onChange={handlePostalCodeChange} placeholder='Postal code'/></td>
        </tr>
        <tr>
          <td><label htmlFor='city'>City:</label></td>
          <td><input type="text" value={city} name='city' id='city' onChange={handleCityChange} placeholder='City'/></td>
        </tr>
        <tr>
            <td><label htmlFor='country'>Country:</label></td>
            <td><input type="text" value={country} name='country' id='country' onChange={handleCountryChange} placeholder='Country'/></td>
        </tr>
      </tbody>
      </table>
        <button>Save Changes</button>
      </form>
      <div>{message}</div>
    </div>
  )
}

export default AddAddress
