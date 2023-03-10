import React, { useState, useEffect } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import { useSearchParams } from 'react-router-dom'
import Search from '../../components/Search/Search';
import myApi from '../../service/service';
import './Store.css'

const Store = () => {
  const [products, setProducts] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const q = searchParams.get('q')

  useEffect(() => {
    const url = q ? `/products/search?q=${q}` : `/products`
    myApi.get(url)
      .then((res) => setProducts(res.data))
      .catch((e) => console.error(e))
  }, [searchParams])

  if (!products) {
    return <div className="Loading">Loading...</div>
  }

  // const handleInputChange = (event) => {
  //   setSearchParams({ q: event.target.value })
  // };

  return (
    <div className='Store'>
      <h1>Store</h1>
      {/* <Search handleInputChange={handleInputChange} /> */}
      {products.map((product) => {
        return <ProductCard key={product._id} product={product} />
      })}
    </div>
  )
}
export default Store