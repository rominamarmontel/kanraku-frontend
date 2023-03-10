import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './OneProductCard.css'
import myApi from '../../service/service'

const OneProductCard = (props) => {
  console.log(props)
  const product = props.product.oneProduct

  return (
    <div className="OneProductCard">
      <div className='container'>
        <picture>
          <img width={100} src={product.image} alt={product.name} />
        </picture>
        <div className='product-details'>
          <h2 className='name'>
            {product.name}
          </h2>
        </div>
        <p className='brand'>{product.brand}</p>
        <p className='category'>{product.category}</p>
        <p className='description'>{product.description}</p>
        <p className='price'>{product.price}</p>
        <p className='countInStock'> {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</p>
      </div>
      {/* <button
        onClick={addToCartHandler}
        className='btn-block'
        type='button'
        disabled={product.countInStock === 0}
      >Add To Cart</button> */}
    </div>
  )
}

export default OneProductCard
