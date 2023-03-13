import React from 'react';
import { Link } from 'react-router-dom'
import "./ProductCard.css"

const ProductCard = (props) => {
  const product = props.product
  return (
    <div className="ProductCard">
      <div className='container'>
        <Link to={`/products/${product._id}`} >
          <picture>
            <img src={product.image} alt={product.name} />
          </picture>
          <p className='name'>{product.name}</p>
        </Link>
        <p className='price'>{product.price} €</p>
      </div>
    </div >
  )
}

export default ProductCard