import React, { useState, useContext, useEffect } from "react";
import myApi from '../../service/service'
import { AuthContext } from "../../context/AuthContext";
import { useParams } from "react-router-dom";
import ProductInCartCard from "../../components/ProductInCartCard/ProductInCartCard";


const CartPage = () => {
  const [qty, setQty] = useState('')
  const [name, setName] = useState('')
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");
  const { user } = useContext(AuthContext);
  const [product, setProduct] = useState('')
  const [username, setUsername] = useState('')
  const params = useParams();
  const productId = params.id;
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
        setImage(res.data.image);
        setBrand(res.data.brand);
        setCategory(res.data.category);
        setPrice(res.data.price);
        setCountInStock(res.data.countInStock);
        setDescription(res.data.description);
        setUsername(res.data.username)
        calculateTotalPrice()
      }).catch((e) => console.error(e))
    // console.log('=======', product, user)
    // console.log('= = = = ', product[0].product)
  }, []);

  function calculateTotalPrice() {
    const allPrices = product.reduce((acc, val) => {
      return acc + val.qty * val.product.price
    }, 0)
    setTotalPrice(allPrices)
  }

  if (!user || !product) return
  return (
    <>
      <div className="container">
        <div className="title">
          {product.map((item) => {
            return <ProductInCartCard key={item._id} item={item} />
          })}
        </div>
        <div>Amount total: {totalPrice}</div>
      </div>
    </>
  )
}

export default CartPage;
