import React from 'react'

const FormEditProfile = () => {

  const [username, setUsername] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [country, setCountry] = useState('')
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    myApi
      .get(params._id)
      .then((res) => {
        setUsername(res.data.username)
        setEmail(res.data.email)
        setPassword(res.data.password)
        // setAddress(res.data.OneUser.address)
        // setCity(res.data.OneUser.city)
        // setPostalCode(res.data.OneUser.postalCode)
        // setCountry(res.data.OneUser.country)
      })
      .catch((e) => console.error(e))
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const userToUpdate = { username, email, password }
    try {
      const editUser = await myApi.updateUser(params._id, userToUpdate)
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
      <button>Update your profile</button>
    </form>
  )
}

export default FormEditProfile