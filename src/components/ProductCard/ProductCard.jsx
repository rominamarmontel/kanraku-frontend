import React from 'react';
import { Link } from 'react-router-dom'
import "./ProductCard.css"

const ProductCard = (props) => {
  const product = props.product
  return (
    <div className="ProductCard">
      <div className='container'>
        <picture>
          <img width={100} src={product.image_url} alt={product.name} />
        </picture>
        <div className='product-info'>
          <h2 className='name'>{product.name}</h2>
          <p className='brand'><span>Brand:</span> {product.brand}</p>
          <p className='category'><span>Category:</span> {product.category}</p>
          <p className='category'><span>description:</span> {product.description}</p>
          <p className='price'><span>price:</span> {product.price}</p>
          <p className='stock'><span>stock:</span> {product.stock}</p>
        </div>
        <Link to={'/store/' + product._id}>Order</Link>
      </div>
    </div>
  )
}

export default ProductCard