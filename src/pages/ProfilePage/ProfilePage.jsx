import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import myApi from '../../service/service'

const ProfilePage = () => {
  const [username, setUsername] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  // const [address, setAddress] = useState('')
  // const [city, setCity] = useState('')
  // const [postalCode, setPostalCode] = useState('')
  // const [country, setCountry] = useState('')
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    myApi
      .getOneUser(params._id)
      .then((res) => {
        setUsername(res.data.OneUser.username)
        setEmail(res.data.OneUser.email)
        setPassword(res.data.OneUser.password)
        // setAddress(res.data.OneUser.address)
        // setCity(res.data.OneUser.city)
        // setPostalCode(res.data.OneUser.postalCode)
        // setCountry(res.data.OneUser.country)
      })
      .catch((e) => console.error(e))
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()

    const userToUpdate = { username, email, password, address, city, postalCode, country }

    try {
      const editUser = await myApi.updateJoke(params._id, userToUpdate)
      if (editUser.status === 202) {
        navigate('/profile')
      }
      console.log(editUser)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Name:</label>
      <div>
        <input
          value={username}
          name="username"
          id="username"
          onChange={(event) => setUsername(event.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          value={email}
          name="email"
          id="email"
          onChange={(event) => setEmail(event.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          value={password}
          name="password"
          id="password"
          onChange={(event) => setPassword(event.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="address">Shipping Address: </label>
        <input
          value={''}
          name="address"
          id="address"
          onChange={(event) => setAddress(event.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="city">City: </label>
        <input
          value={''}
          name="city"
          id="city"
          onChange={(event) => setCity(event.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="postalCode">Postal Code: </label>
        <input
          value={''}
          name="postalCode"
          id="postalCode"
          onChange={(event) => setPostalCode(event.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="country">Country: </label>
        <input
          value={''}
          name="country"
          id="country"
          onChange={(event) => setCountry(event.target.value)}
        ></input>
      </div>
      <button>Update your profile</button>
    </form >
  )
}
export default ProfilePage