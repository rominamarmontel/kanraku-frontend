import React, { useState, useEffect } from "react";
import myApi from '../../service/service'
import { Link } from "react-router-dom";
import ProductInCartCard from "../../components/ProductInCartCard/ProductInCartCard";
import './CartPage.css'

const CartPage = () => {
  const [product, setProduct] = useState(null)
  const [totalPrice, setTotalPrice] = useState(0)
  const fetchCart = () => {
    myApi
      .get('/cart')
      .then((res) => {
        setProduct(res.data)
      })
      .catch((e) => console.error(e))
  }
  useEffect(() => {
    fetchCart()
  }, [])

  useEffect(() => calculateTotalPrice(), [product])

  function calculateTotalPrice() {
    if (!product) return
    const allPrices = product.reduce((acc, val) => {
      return acc + val.qty * val.product.price
    }, 0)
    setTotalPrice(allPrices)
  }

  const handleRemoveAll = async () => {
    try {
      await myApi.delete('/cart/remove-all')
      setProduct([])
      setTotalPrice(0)
    } catch (e) {
      console.error(e)
    }
  }

  if (!product) return <p>Loading..</p>

  return (
    <>
    {product.length === 0 ? (
      <div className='msg-empty'>Your cart is empty</div>
    ) : (
      <>
      <div className="CartPage">
          <div className='items-list'>{product.map((item) => {
            return <ProductInCartCard key={item.product._id} item={item} onRemove={fetchCart} />
          })}
          </div>

        <div className="checkout">
          <p><span className='text'>Total:</span> {totalPrice} €</p>
          <Link to="/checkout">
            <button> CHECKOUT 
              <lord-icon src="https://cdn.lordicon.com/jxwksgwv.json" trigger="hover" colors="primary:#ffffff" state="hover-2" />
              </button>
          </Link>
        </div>
      </div>

      <div className='remove-all-btn'>
        <button onClick={handleRemoveAll}> Empty cart 
        <lord-icon src="https://cdn.lordicon.com/jmkrnisz.json" trigger="hover" colors="primary:#ffffff"/>
        </button>
      </div>

      </>
    )}
    </>
  )
}

export default CartPage;
