import React, { useState, useEffect } from 'react'
import './Home.css'
import './main'
import ProductCard from '../../components/ProductCard/ProductCard'
import myApi from '../../service/service';

const Home = () => {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    const url = '/products'
    myApi.get(url)
      .then((res) => setProducts(res.data))
      .catch((e) => console.error(e))
  }, [])

  if (!products) {
    return <div className="Loading">Loading...</div>
  }
  // carousel image
  return (
    <section className="slider">
      <div className="slides">
        <input type="radio" name="radio-btn" id="radio1" />
        <input type="radio" name="radio-btn" id="radio2" />
        <input type="radio" name="radio-btn" id="radio3" />
        <input type="radio" name="radio-btn" id="radio4" />

        <div className="slide first">
          <img src="/images/chris-barbalis-LBnCbaWBeDI-unsplash.jpg" alt="picture1" />
        </div>
        <div className="slide">
          <img src="/images/s-tsuchiya-OHkUl23cmPI-unsplash.jpg" alt="picture2" />
        </div>
        <div className="slide">
          <img src="/images/jase-bloor-oCZHIa1D4EU-unsplash.jpg" alt="picture3" />
        </div>
        <div className="slide">
          <img src="/images/s-tsuchiya-OeCJupSiHjs-unsplash.jpg" alt="picture4" />
        </div>
        <div className="navigation-auto">
          <div className="auto-btn1"></div>
          <div className="auto-btn2"></div>
          <div className="auto-btn3"></div>
          <div className="auto-btn4"></div>
        </div>
      </div>
      <div className="navigation-manual">
        <label htmlFor="radio1" className="manual-btn"></label>
        <label htmlFor="radio2" className="manual-btn"></label>
        <label htmlFor="radio3" className="manual-btn"></label>
        <label htmlFor="radio4" className="manual-btn"></label>
      </div>
      <div className="slider-text">
        <h1>KANRAKU HOSAI</h1>
      </div>

      <div className='new-products'>
        <div className='container'>
          <h2>NEW ARRIVING</h2>
          <h5>DON'T MISS OUT</h5>
          <div className='Home-productCard'>
            {products.map((product) => {
              return <ProductCard key={product._id} product={product} />
            })}
          </div>
        </div>
      </div>
      <script src="./main.jsx"></script>
    </section>
  )
}

export default Home