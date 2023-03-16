import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import './FormEditProfile.css'
import myApi from '../../../service/service'


const EditInformation = () => {
  const { user, setUser } = useContext(AuthContext)
  const navigate = useNavigate()
  const [username, setUsername] = useState(user.username)
  const [email, setEmail] = useState(user.email)
  const [message, setMessage] = useState('')


  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const changes = { username, email }

   
    try {
      const response = await myApi.patch('/user/edit', changes)
      setUser(response.data)
      navigate('/profile')
    
    } catch (error) {
      console.log(error)
      setMessage('An error occurred while saving changes')
    }
  }

  return (
    <div className='FormEditProfile'>
      <h2>Edit Informations</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>New Username:</label>
          <input type="text" value={username} name='username' id='username' onChange={handleUsernameChange} placeholder='new useranme'/>

        <label htmlFor='email'>New Email:</label>
          <input type="text" value={email} name='email' id='email' onChange={handleEmailChange} placeholder='new email'/>

        <button>Save Changes</button>
      </form>
      <div>{message}</div>
    </div>
  )
}

export default EditInformation
