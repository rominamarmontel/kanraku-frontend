import React, { useState, useContext, useEffect } from "react";
import myApi from '../../service/service'
import { AuthContext } from "../../context/AuthContext";
import { useParams, Link } from "react-router-dom";
import CartPage from '../../pages/CartPage/CartPage'

const ProductInCartCard = (props) => {
  const [products, setProducts] = useState('')
  const { qty, product } = props.item
  const totalPrice = Number(product.price * qty)

  const handleDelete = (id) => {
    const newList = products.filter((product) => product.id !== id)
    setProducts(newList)
  }

  return (
    <>
      <form htmlFor="productInCartCard" >
        <div>Name: {product.name}</div>
        <div>Price: {product.price}</div>
        <img src={product.image} alt='{product.name}' width={100} />
        <div>Qty: {qty}</div>
        {/* <div>Total: {totalPrice}</div> */}
        <button
          onClick={() => handleDelete(product.id)}
          type="button"
          className="btn-delete"
        >Delete </button>
      </form>
    </>
  )
}
export default ProductInCartCard