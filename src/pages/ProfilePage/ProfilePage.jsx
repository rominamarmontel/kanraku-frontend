import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import './ProfilePage.css'

const ProfilePage = (props) => {
  const { user } = useContext(AuthContext)
  
  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className='ProfilePage'>
      <h2>{user.username}'s Profile</h2>

      <div className="UserProfile">
        <div className='ProfileInfos'>
        <h3>Your informations</h3>
          <p><span>Username:</span> {user.username}</p>
          <p><span>Email:</span> {user.email}</p>
          <Link to="edit-informations">
            <button>Edit informations</button>
          </Link>
        </div>

        {user.shippingAddress ? (
          <div className='UserShippingAddress'>
              <h3>Your address</h3>
            <p>{user.shippingAddress.address}</p>
            <p>{user.shippingAddress.postalCode} {user.shippingAddress.city}</p>
            <p>{user.shippingAddress.country}</p>
            <Link to ='edit-address'>
              <button>Edit shipping address</button>
            </Link>
          </div>
        ) : (
          <div className='NoShippingAddress'>
            <p>No shipping address yet.</p>
            <Link to='add-address'
              ><button>Add a shipping address</button>
            </Link>
          </div>
        )}
      </div>

      <div className='UserOrders'>
        <div className='OrdersContainer'>
          <p>Find all of your previous orders here.</p>
          <Link to='/orders'>
            <button>My orders</button>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage