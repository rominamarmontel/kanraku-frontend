import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import OneProductCard from '../../components/OneProductCard/OneProductCard'
import myApi from '../../service/service';

const ProductPage = () => {
  const [product, setProduct] = useState(null)
  const params = useParams()

  useEffect(() => {
    const url = `/product/:${params._id}`
    myApi.get(url)
      .then((res) => setProduct(res.data))
      .catch((e) => console.error(e))
  }, [params])

  if (!product) {
    return <div className="Loading">Loading!</div>
  }
  return <OneProductCard product={product} />
}

export default ProductPage