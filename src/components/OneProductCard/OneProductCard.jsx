import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './OneProductCard.css'
import myApi from '../../service/service'
import { AuthContext } from '../../context/AuthContext'

const OneProductCard = (props) => {
  const [editIsOn, setEditIsOn] = useState(false)
  const [deleteIsOn, setDeleteIsOn] = useState(false)
  const [quantity, setQuantity] = useState(0);
  const { user } = useContext(AuthContext)

  console.log(props)
  const product = props.product.oneProduct
  const navigate = useNavigate()

  const addToCartHandler = async () => {
    if (!user) return navigate("/login")

    if (quantity > product.countInStock) {
      return setQuantity(0)
    }

    await myApi.post(`/products/${product._id}`, { quantity })
  }

  return (

    <div className="OneProductCard">
      <div className='buttons'>
        {/* {user && user.isAdmin && <button
          className='btn-block'
          type='button'
          onClick={() => setEditIsOn(!editIsOn)}> Edit</button>} */}
        {true && <button
          className='btn-block'
          type='button'
          onClick={() => setEditIsOn(!editIsOn)}> Edit</button>}
        {/* {user && user.isAdmin && <button
          className='btn-block'
          type='button'
          onClick={() => setDeleteIsOn(!deleteIsOn)}> Delete</button>} */}
        {true && <button
          className='btn-block'
          type='button'
          onClick={() => setDeleteIsOn(!deleteIsOn)}> Delete</button>}
      </div>
    
      <div className='container'>
        <div className='product-details'>
            <h2 className='name'>{product.name}</h2>

          <picture>
            <img src={product.image} alt={product.name} />
          </picture>

          {editIsOn && <input type="file" />}
          {/* {true && <input type="file" />} */}
 

          {editIsOn ?
            <input type="text" name="brand" value={product.brand} />
            :
            <>
              <p>{product.brand}</p>
              <p>{product.category}</p>
              <p>{product.description}</p>
              <p>{product.price} €</p>
              <p> {product.countInStock > 0 ? `In Stock: ${product.countInStock}` : 'Out Of Stock'}</p>
              <input type="number" name="quantity" min="0" max={product.countInStock} value={quantity} onChange={({ target }) => setQuantity(Number(target.value))} />

              <button
                onClick={addToCartHandler}
                className='btn-block'
                type='button'
                disabled={product.countInStock === 0} >
                  Add To Cart
                  </button>
            </>
          }
        </div>
      </div>
    </div >
  )
}

export default OneProductCard
