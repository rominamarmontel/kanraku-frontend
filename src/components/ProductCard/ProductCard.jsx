import React from 'react';
import { Link } from 'react-router-dom'
import ProductPage from '../../pages/ProductPage/ProductPage';
import "./ProductCard.css"

const ProductCard = (props) => {
  const product = props.product
  return (
    <div className="ProductCard">
      <div className='container'>
        <Link to={'/product/' + product._id} >
          <picture>
            <img width={100} src={product.image_url} alt={product.name} />
          </picture>
          <p className='name'>{product.name}</p>
        </Link>
        <p className='price'><span>price:</span> {product.price}</p>
      </div>
    </div >
  )
}

export default ProductCard