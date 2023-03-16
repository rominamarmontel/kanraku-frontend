import React, { useState } from "react";
import myApi from '../../service/service'

const ProductInCartCard = (props) => {
  const [products, setProducts] = useState('')
  const { qty, product } = props.item
  const totalPrice = Number(product.price * qty)

  const handleDelete = async (id) => {
    try {
      const response = await myApi.delete(`/cart/remove/${product._id}`)
      const newList = response.data.map((item) => ({
        qty: item.qty,
        product: item.product,
      }))
      setProducts(newList)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <div className='productInCart'>

        <div><p className='text'>Name:</p> <p>{product.name}</p></div>
        <img src={product.image} alt='{product.name}' width={100} />
        <div><p className='text'>Qty:</p> <p>{qty}</p></div>
        <div><p className='text'>Price:</p> <p>{totalPrice} €</p></div>
        
        <form onSubmit={handleSubmit}>
        <button onClick={() => handleDelete(product._id)} type="button"className="btn-delete">
          <lord-icon src="https://cdn.lordicon.com/jfhbogmw.json" trigger="hover"colors="primary:#e83a30" state="hover-2"></lord-icon>
        </button>
        </form>
      </div>
    </>
  )
}
export default ProductInCartCard