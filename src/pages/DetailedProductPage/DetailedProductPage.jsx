
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DetailedProductCard from '../../components/DetailedProductCard/DetailedProductCard'
import myApi from '../../service/service';

const DetailedProductPage = () => {
  const [product, setProduct] = useState(null)
  const params = useParams()

  useEffect(() => {
    const url = `products/${params.id}`
    myApi.get(url)
      .then((res) => setProduct(res.data))
      .catch((e) => console.error(e))
  }, [])

  if (!product) {
    return <div className="Loading">Loading!</div>
  }
  return (
    <>
      <DetailedProductCard key={product._id} product={product} />
    </>
  )
}

export default DetailedProductPage