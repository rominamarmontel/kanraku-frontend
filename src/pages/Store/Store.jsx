import React, { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useSearchParams, Link } from "react-router-dom";
import Search from "../../components/Search/Search";
import myApi from "../../service/service";
import "./Store.css";

const Store = () => {
  const [products, setProducts] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");
  const isAdmin = true;

  useEffect(() => {
    const url = q ? `/products/search?q=${q}` : `/products`;
    myApi
      .get(url)
      .then((res) => setProducts(res.data))
      .catch((e) => console.error(e));
  }, [searchParams]);

  if (!products) {
    return <div className="Loading">Loading...</div>;
  }

  const handleInputChange = (event) => {
    setSearchParams({ q: event.target.value });
  };

  return (
    <>
      <div className="Store">
        <div className="container">
          <div className="title">
            <div>
              <h2>STORE</h2>
              <h5>OUR SELECTION</h5>
            </div>
            <div className="SearchAndCreate">
              {true && <Link to={'/admin/products/create'} className='btn-create'>Create</Link>}
              {/* {user && user.isAdmin && <Link to={'/admin/products/create'} className='btn-create'>Create</Link>} */}
              <Search handleInputChange={handleInputChange} />
            </div>
          </div>
          <div className="productCard">
            {products.map((product) => {
              return <ProductCard key={product._id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Store;
