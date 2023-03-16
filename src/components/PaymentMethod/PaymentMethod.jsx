import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './PaymentMethod.css'

const PaymentMethod = () => {
  const [paymentMethod, setPaymentMethod] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value)
  }

  const validateOrder = () => {
    return !!paymentMethod
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault()
  
    if (!paymentMethod) {
      setErrorMessage('Please choose a payment method.')
      return
    }
  
    if (!validateOrder()) {
      setErrorMessage('Your order is not valid.')
      return
    }
    navigate('/orders')
  }
  
  return (
    <div className='PaymentMethod'>
      <h3>Choose your payment method</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <input type='radio' id='creditCard' name='paymentMethod' value='creditCard' checked={paymentMethod === 'creditCard'} onChange={handlePaymentMethodChange} />
          <label htmlFor='creditCard'>Credit Card</label>
        </div>
        <div>
          <input type='radio' id='paypal' name='paymentMethod' value='paypal' checked={paymentMethod === 'paypal'} onChange={handlePaymentMethodChange} />
          <label htmlFor='paypal'>Paypal</label>
        </div>

        {errorMessage && <p className='error'>{errorMessage}</p>}
        <button type='submit'>Continue</button>
      </form>
    </div>
  )
}

export default PaymentMethod
