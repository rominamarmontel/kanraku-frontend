import React, { useState, useContext, useEffect } from "react";
import myApi from '../../service/service'
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import ProductInCartCard from "../../components/ProductInCartCard/ProductInCartCard";
import './CartPage.css'

const CartPage = () => {
  const [qty, setQty] = useState('')
  const [name, setName] = useState('')
  const [brand, setBrand] = useState('')
  const [category, setCategory] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState(0)
  const [countInStock, setCountInStock] = useState(0)
  const [description, setDescription] = useState('')
  const { user } = useContext(AuthContext);
  const [product, setProduct] = useState(null)
  const [username, setUsername] = useState('')

  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const url = '/cart';
    myApi
      .get(url)
      .then((res) => {
        console.log(res.data)
        setProduct(res.data)
        setQty(res.data.qty)
        setName(res.data.name)
        setImage(res.data.image)
        setBrand(res.data.brand)
        setCategory(res.data.category)
        setPrice(res.data.price)
        setCountInStock(res.data.countInStock)
        setDescription(res.data.description)
        setUsername(res.data.username)
      }).catch((e) => console.error(e))
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
      const url = '/cart/remove-all'
      const res = await myApi.delete(url)
      setProduct([])
      setTotalPrice(0)
    } catch (e) {
      console.error(e)
    }
  }
  
  //to delete once fixed
  if (!user || !product) return

  return (
    <>
    {product.length === 0 ? (
      <div className='msg-empty'>Your cart is empty</div>
    ) : (
      <>
      <div className="CartPage">
          <div className='items-list'>{product.map((item) => {
            return <ProductInCartCard key={item._id} item={item} />
          })}
          </div>

        <div className="checkout">
          <p><span className='text'>Total:</span> {totalPrice} €</p>
          <Link to="/shipping">
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
