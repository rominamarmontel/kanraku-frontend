import { useState, useContext } from 'react'
import myApi from './../../service/service'
import { AuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { storeToken, authenticateUser } = useContext(AuthContext)

  async function handleSubmit(event) {
    event.preventDefault()
    const userToLogin = { email, password }

    try {
      const response = await myApi.post('/auth/login', userToLogin)
      storeToken(response.data.token)
      await authenticateUser()
    } catch (error) {
      setError(error.response.data.message)
    }
  }
  return (
    <section id='Login'>
      <form onSubmit={handleSubmit}>
        <div className='Login'>
          <p>Login</p>
          <div className='email'>
            <label htmlFor="email">
              Email:&nbsp;
              <input
                type="text"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
          </div>
          <div className='password'>
            <label htmlFor="password">
              Password:&nbsp;
              <input
                type="password"
                id="password" autoComplete="on"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
          </div>
          <div className='btn-login'>
            {error.length > 0 && <p className="error">{error}</p>}
            <button>Login</button>
          </div>
          <div><h4>You don't have an account yet? </h4>
            <h4>Create your account <Link to='/Signup'> HERE</Link> !!</h4></div>
        </div>
      </form>
    </section>
  )
}

export default Login