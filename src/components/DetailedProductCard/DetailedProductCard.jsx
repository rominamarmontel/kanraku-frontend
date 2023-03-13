import React, { useContext, useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import './DetailedProductCard.css'
import myApi from '../../service/service'
import { AuthContext } from '../../context/AuthContext'
import Upload from '../Upload/Upload'

const DetailedProductCard = (props) => {
  const [editIsOn, setEditIsOn] = useState(false)
  const [deleteIsOn, setDeleteIsOn] = useState(false)
  const [name, setName] = useState('')
  const [brand, setBrand] = useState('')
  const [category, setCategory] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState(0)
  const [countInStock, setCountInStock] = useState(0)
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState(0);
  const { user } = useContext(AuthContext)
  const [product, setProduct] = useState({})
  const navigate = useNavigate()
  const params = useParams()
  const productId = params.id

  //Click a Cart button
  const addToCartHandler = async () => {
    if (!user) return navigate("/login")
    if (quantity > product.countInStock) {
      return setQuantity(0)
    }
    await myApi.post(`/products/${productId}`, { quantity })
  }

  useEffect(() => {
    const url = `/products/${productId}`
    myApi
      .get(url)
      .then((res) => {
        setProduct(res.data.oneProduct)
        setName(res.data.oneProduct.name)
        setImage(res.data.oneProduct.image)
        setBrand(res.data.oneProduct.brand)
        setCategory(res.data.oneProduct.category)
        setPrice(res.data.oneProduct.price)
        setCountInStock(res.data.oneProduct.countInStock)
        setDescription(res.data.oneProduct.description)
      })
      .catch((e) => console.error(e))
  }, [])

  //Click to valid your edittion
  const editHandler = async (event) => {
    event.preventDefault()
    setEditIsOn(!editIsOn)
    const productToUpdate = { name, brand, category, image, price, countInStock, description }
    const url = `/products/${productId}`
    try {
      const res = await myApi.patch(url, productToUpdate)
      setProduct(res.data)
      setName(res.data.name)
      setImage(res.data.image)
      setBrand(res.data.brand)
      setCategory(res.data.category)
      setPrice(res.data.price)
      setCountInStock(res.data.countInStock)
      setDescription(res.data.description)
    } catch (error) {
      console.error(error)
    }
  }

  //Click to delete a product
  const deleteHandler = async (event) => {
    event.preventDefault
    setDeleteIsOn(!deleteIsOn)
    const url = `/products/${productId}/`
    try {
      await myApi.delete(url)
      setDeleteIsOn(!deleteIsOn)
      navigate('/store')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      {/* User page */}
      <div className="OneProductCard">
        <div className='container'>
          <div>
            <h2>{product.name}</h2>
            <h5>{product.category}</h5>
          </div>


          {/* {user && user.isAdmin && <button
            className='btn-block'
            type='button'
            onClick={editHandler}> Edit</button>} */}
          {true && <button
            className='btn-admin'
            type='button'
            onClick={editHandler}> Edit</button>}
          {/* {user && user.isAdmin && <button
            className='btn-block'
            type='button'
            onClick={deleteHandler}> Delete</button>} */}
          {true && <button
            className='btn-admin'
            type='button'
            onClick={deleteHandler}> Delete</button>}


          {editIsOn ?
            <>
              {/* Edit product for Admin */}
              <div className='first'>
                <div className='direction'>
                  <Link to={`/`} >Home</Link><p> / Admin</p>
                </div>
              </div>
              <div className='ProductEditPage'>
                <div className='container'>
                  <div>
                    <h2>ADMIN PAGE</h2>
                    <h5>EDIT A PRODUCT</h5>
                  </div>
                  <form onSubmit={editHandler} action=''>
                    <div className='form-box'>
                      <div>
                        <label htmlFor="edit-name">Name:</label>
                        <div>
                          <input name="name" value={name} id='name' onChange={(event) => setName(event.target.value)}></input>
                        </div>

                        <label htmlFor="edit-brand">Brand:</label>
                        <div>
                          <input name="brand" value={brand} id='brand' onChange={(event) => setBrand(event.target.value)} />
                        </div>
                        <label htmlFor="edit-category">Category:</label>
                        <div>
                          <input name="category" value={category} id='category' onChange={(event) => setCategory(event.target.value)} />
                        </div>
                        <label htmlFor="edit-price">Price:</label>
                        <div>
                          <input name="price" value={price} id='price' onChange={(event) => setPrice(event.target.value)} />
                        </div>
                        <label htmlFor="edit-countInstock">Count in stock:</label>
                        <div>
                          <input name="countInStock" value={countInStock} id='countInStock' onChange={(event) => setCountInStock(event.target.value)} />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="edit-image">Image:</label>
                        <div>
                          <Upload />
                        </div>
                        <label htmlFor="edit-description">Description:</label>
                        <div>
                          <textarea name="description" value={description} id='description' cols="30"
                            rows="10" onChange={(event) => setDescription(event.target.value)} />
                        </div>
                      </div>
                    </div>
                    <button>Update a product</button>
                  </form>
                </div>
              </div>
            </>
            :
            <>
              {/* Product Detail */}
              <div className='product-details'>
                <picture>
                  <img src={product.image} alt={product.name} />
                </picture>
                <div>
                  <table>
                    <tbody>
                      <tr>
                        <td></td>
                        <td><p className='price'>{product.price} €</p></td>
                      </tr>
                      <tr>
                        <td><label htmlFor="brand">Brand</label></td>
                        <td><p className='brand'>{product.brand}</p></td>
                      </tr>
                      <tr>
                        <td><p className='countInStock'> {product.countInStock > 0 ? `In Stock` : 'Out Of Stock'}</p></td>
                        <td><p className='countInStock'> {product.countInStock > 0 ? `${product.countInStock}` : 'Out Of Stock'}</p></td>
                      </tr>
                      <tr>
                        <td><label htmlFor="qty">Qty</label></td>
                        <td><input type="number" name="quantity" min="0" max={product.countInStock} value={quantity} onChange={({ target }) => setQuantity(Number(target.value))} /></td>
                      </tr>
                    </tbody>
                  </table>
                  <div className='add-btn'>
                    <button
                      onClick={addToCartHandler}
                      className='btn-block'
                      type='button'
                      disabled={product.countInStock === 0}
                    >Add To Cart</button>
                  </div>
                  <div className='description'>
                    <p>{product.description}</p>
                  </div>
                </div>
              </div>
            </>
          }
        </div >
      </div >
    </>
  )
}

export default DetailedProductCard
