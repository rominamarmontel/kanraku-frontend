import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'

const ShippingPage = () => {
  const { user } = useContext(AuthContext)

  const [address, setAddress] = useState(user?.shippingAddress?.address || '');
  const [postalCode, setPostalCode] = useState(user?.shippingAddress?.postalCode || '');
  const [city, setCity] = useState(user?.shippingAddress?.city || '');
  const [country, setCountry] = useState(user?.shippingAddress?.country || '');
  const [phone, setPhone] = useState(user?.shippingAddress?.phone || '');
  const [isAddressValid, setIsAddressValid] = useState(false);

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  }

  const handlePostalCodeChange = (event) => {
    setPostalCode(event.target.value);
  }

  const handleCityChange = (event) => {
    setCity(event.target.value);
  }

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  }

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  }

  const handleAddressValidation = () => {
    // Add code to validate the address here
    setIsAddressValid(true);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddressValidation();
  }

  return (
    
    <div>


    <form className='shippingAddress' onSubmit={handleSubmit}>
      <h2>Shipping Address</h2>

      <div>
        <label htmlFor='address'>Address:</label>
        <input type='text' value={address} name='address' id='address' required onChange={handleAddressChange} />
      </div>

      <div>
        <label htmlFor='postalCode'>Postal Code:</label>
        <input type='text' value={postalCode} name='postalCode' id='postalCode' required onChange={handlePostalCodeChange} />
      </div>

      <div>
        <label htmlFor='city'>City:</label>
        <input type='text' value={city} name='city' id='city' required onChange={handleCityChange} />
      </div>

      <div>
        <label htmlFor='country'>Country:</label>
        <input type='text' value={country} name='country' id='country' required onChange={handleCountryChange} />
      </div>

      <div>
        <label htmlFor='phone'>Phone:</label>
        <input type='tel' value={phone} name='phone' id='phone' required onChange={handlePhoneChange} />
      </div>

      <div className="form-address-btns">
        <button type='submit'>Validate Address</button>
      </div>
    </form>

    {isAddressValid && (
  <div>
    {/* Render the payment method component here */}
  </div>
)}


    </div>

  )
}

export default ShippingPage
