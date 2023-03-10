import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './OneProductCard.css'
import myApi from '../../service/service'

const OneProductCard = (props) => {
  const product = props
  console.log(product)
  return (
    <div className="OneProductCard">
      <div className='container'>
        <picture>
          <img width={100} src={product.image_url} alt={product.name} />
        </picture>
        <div className='product-details'>
          <h2 className='name'>
            {product.name}
          </h2>
        </div>
        <p className='brand'>{product.brand}</p>
        <p className='category'>{product.category}</p>
        <p className='description'>{product.tagline}</p>
        <p className='price'>{product.price}</p>
        {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
        <p className='qty'>{product.qty}</p>
      </div>
      <button
        onClick={addToCartHandler}
        className='btn-block'
        type='button'
        disabled={product.countInStock === 0}
      >Add To Cart</button>
    </div>
  )
}

export default OneProductCard
