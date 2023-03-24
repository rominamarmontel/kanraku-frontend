import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import PaymentMethod from '../../components/PaymentMethod/PaymentMethod'
import './CheckOutPage.css'

const CheckOutPage = () => {
  const { user } = useContext(AuthContext)
  const [address, setAddress] = useState(user.shippingAddress?.address || '')
  const [postalCode, setPostalCode] = useState(user.shippingAddress?.postalCode || '')
  const [city, setCity] = useState(user.shippingAddress?.city || '')
  const [country, setCountry] = useState(user.shippingAddress?.country || '')
  const [isAddressValid, setIsAddressValid] = useState(false)
  

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

  const handleAddressValidation = () => {
    if (address.trim() === '') {
      alert('Please enter a valid address.')
      return
    }
    if (postalCode.trim() === '') {
      alert('Please enter a valid postal code.')
      return
    }
    if (city.trim() === '') {
      alert('Please enter a valid city.')
      return
    }
    if (country.trim() === '') {
      alert('Please enter a valid country.')
      return
    }
    setIsAddressValid(true)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    handleAddressValidation()
  }

  return (
    
    <div className='CheckOutPage'> 
      <h2>Check out</h2>

      <div className='form'>
        <form className='shippingAddress' onSubmit={handleSubmit}>
      <h3>1. Confirm shipping address </h3>

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

      <div className="form-address-btns">
        <button type='submit'>Confirm Address</button>
      </div>
    </form>

    </div>


    {isAddressValid && (
      <div className='form'>
       <PaymentMethod />
      </div>
    )}
  </div>
  )
}

export default CheckOutPage
