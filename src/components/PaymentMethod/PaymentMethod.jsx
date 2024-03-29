import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './PaymentMethod.css'
import CreditCardForm from './CreditCardForm/CreditCardForm'
import PaypalForm from './PayPalForm/PaypalForm'

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

    <form onSubmit={handleSubmit}>
      <h3>2. Choose payment method</h3>

        <table>
        <tbody>
          <tr>
            <td><input type='radio' id='creditCard' name='paymentMethod' value='creditCard' checked={paymentMethod === 'creditCard'} onChange={handlePaymentMethodChange} /></td>
            <td><label htmlFor='creditCard'>Credit Card</label></td>
          </tr>

          <tr>
            <td><input type='radio' id='paypal' name='paymentMethod' value='paypal' checked={paymentMethod === 'paypal'} onChange={handlePaymentMethodChange} /></td>
            <td><label htmlFor='paypal'>Paypal</label></td>
          </tr>
          </tbody>
        </table>

        {errorMessage && <p className='error'>{errorMessage}</p>}
        <button type='submit'>Continue</button>
      </form>

      {paymentMethod === 'creditCard' && <CreditCardForm />}
      {paymentMethod === 'paypal' && <PaypalForm />}

    </div>
  )
}

export default PaymentMethod
