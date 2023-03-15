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
            <img width={150} src={product.image} alt={product.name} />
          </picture>
          <div>
            <p>{product.name}</p>
          </div>
        </Link>
        <div>
          <p className='price'>{product.price} €</p>
        </div>
      </div>
    </div >
  )
}

export default ProductCard