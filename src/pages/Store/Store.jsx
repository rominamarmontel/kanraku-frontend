import React, { useState, useEffect, useContext } from "react"
import ProductCard from "../../components/ProductCard/ProductCard"
import { Link } from "react-router-dom"
import myApi from "../../service/service"
import "./Store.css"
import { AuthContext } from "../../context/AuthContext"

const Store = () => {
  const [products, setProducts] = useState(null)
  const [sortKey, setSortKey] = useState(null)
  const [sortDir, setSortDir] = useState(null)
  const { user } = useContext(AuthContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await myApi.get('/products')
        setProducts(res.data)
      } catch (e) {
        console.error(e)
      }
    };
    fetchData()
  }, [])

  const handleSort = (key) => {
    if (sortKey === key) {
      // Toggle sort direction if the same key is clicked again
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc')
    } else {
      // Set new sort key and direction
      setSortKey(key)
      setSortDir('asc')
    }
  };

  const sortedProducts = products
    ? products.slice().sort((a, b) => {
          // sort by name
        if (sortKey === 'name') {
          const aName = a.name.toUpperCase()
          const bName = b.name.toUpperCase()
          if (aName < bName) return sortDir === 'asc' ? -1 : 1
          if (aName > bName) return sortDir === 'asc' ? 1 : -1
          return 0;
          // sort by created
        } else if (sortKey === 'createdAt') {
          const aDate = new Date(a.createdAt)
          const bDate = new Date(b.createdAt)
          if (aDate < bDate) return sortDir === 'asc' ? -1 : 1
          if (aDate > bDate) return sortDir === 'asc' ? 1 : -1
          return 0
          // sort by price
        } else if (sortKey === 'price') {
          if (a.price < b.price) return sortDir === 'asc' ? -1 : 1
          if (a.price > b.price) return sortDir === 'asc' ? 1 : -1
          return 0
        } else {
          return 0
        }
      })
    : []

  return (
    <div className="Store">
      <div className="container">
        <div className="title">
          <div className="font">
            <h2>STORE</h2>
            <h5>OUR SELECTION</h5>
          </div>
          <div className="Create">
            {user && user.isAdmin && (
              <Link to={'/admin/products/create'} className='btn-create'>Create</Link>
            )}

            <button onClick={() => handleSort('name')}>Sort by name</button>
            <button onClick={() => handleSort('createdAt')}>Sort by latest</button>
            <button onClick={() => handleSort('price')}>Sort by price</button>

          </div>

        </div>
        <div className="productCard">
          {sortedProducts.map((product) => {
            return <ProductCard key={product._id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Store;

