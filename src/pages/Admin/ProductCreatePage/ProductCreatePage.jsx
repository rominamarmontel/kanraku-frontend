import React, { useState } from 'react'
import Confetti from 'react-confetti'
import './ProductCreatePage.css'
import myApi from '../../../service/service'
import { Link } from 'react-router-dom'
// import Upload from '../../../components/Upload/Upload'

const ProductCreatePage = () => {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [brand, setBrand] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState(0)
  const [countInStock, setCountInStock] = useState(0)
  const [description, setDescription] = useState('')
  const [showConfetti, setShowConfetti] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const productToCreate = { name, image, brand, category, description, price, countInStock }
    try {
      const response = await myApi.post('/products/create', productToCreate)
      console.log(response)
      if (response.status === 201) {
        setShowConfetti(true)
        setName('')
        setImage('')
        setBrand('')
        setCategory('')
        setPrice('')
        setCountInStock('')
        setDescription('')
        setTimeout(() => {
          setShowConfetti(false)
        }, 5000)
      }
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div className='first'>
        <div className='direction'>
          <Link to={`/`} >Home</Link><p> / Admin</p>
        </div>
      </div>
      <div className='ProductCreatePage'>
        <div className='container'>
          <div>
            <h2>ADMIN PAGE</h2>
            <h5>CREATE A PRODUCT</h5>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='form-box'>
              <div>
                <label htmlFor="name">Name:</label>
                <div>
                  <input
                    type='text'
                    value={name}
                    name="name"
                    id="name"
                    onChange={(event) => setName(event.target.value)}
                  ></input>
                </div>

                <label htmlFor="brand">Brand: </label>
                <div>
                  <input
                    type='text'
                    value={brand}
                    name="brand"
                    id="brand"
                    onChange={(event) => setBrand(event.target.value)}
                  ></input>
                </div>
                <label htmlFor="category">Category: </label>
                <div>
                  <input
                    type='text'
                    value={category}
                    name="category"
                    id="category"
                    onChange={(event) => setCategory(event.target.value)}
                  ></input>
                </div>
                <label htmlFor="price">Price: </label>
                <div>
                  <input
                    type='number'
                    value={price}
                    name="price"
                    id="price"
                    onChange={(event) => setPrice(event.target.value)}
                  ></input>
                </div>
                <label htmlFor="countInStock">Count in stock: </label>
                <div>
                  <input
                    type='number'
                    value={countInStock}
                    name="countInStock"
                    id="countInStock"
                    onChange={(event) => setCountInStock(event.target.value)}
                  ></input>
                </div>
              </div>

              <div>
                <label htmlFor="edit-image">Image:</label>
                <div>
                  {/* <Upload /> */}
                </div>
                <label htmlFor="description">Description: </label>
                <div>
                  <textarea
                    type='text'
                    value={description}
                    name="description"
                    id="description"
                    onChange={(event) => setDescription(event.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
            <button>Create</button>
            {showConfetti && <Confetti recycle={false} />}
          </form>
        </div>
      </div>
    </>
  )
}

export default ProductCreatePage