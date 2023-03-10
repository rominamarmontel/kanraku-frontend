import React, { useState, useEffect } from 'react'
import myApi from '../../service/service'
import ProductCard from '../../components/ProductCard/ProductCard'
import List from '../../components/List/List'

const ProductListPage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const url = `/products`
    myApi.get(url)
      .then((res) => setProducts(res.data))
      .catch((e) => console.error(e))
  }, [])

  if (!products) {
    return <div className="Loading">Loading!</div>
  }

  return (
    // {
    //   products.map((product) => {
    //     return <ProductCard key={product._id} product={...product} />
    //   })
    // }
    < List array={products} MyComponent={ProductCard} />
  )
}

export default ProductListPage