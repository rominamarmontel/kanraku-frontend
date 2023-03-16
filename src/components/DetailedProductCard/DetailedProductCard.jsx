import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./DetailedProductCard.css";
import myApi from "../../service/service";
import { AuthContext } from "../../context/AuthContext";
import EditProductForm from "../EditProductForm/EditProductForm";

const DetailedProductCard = () => {
  const [editIsOn, setEditIsOn] = useState(false);
  const [deleteIsOn, setDeleteIsOn] = useState(false);
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");
  const [qty, setQty] = useState(0);
  const { user } = useContext(AuthContext);
  const [product, setProduct] = useState({});
  const params = useParams();
  const productId = params.id;
  const navigate = useNavigate();
  const [message, setMessage] = useState('')

  //Click a Cart button
  const addToCartHandler = async () => {
    if (!user) {
      return navigate("/login");
    }
    if (qty === 0) {
      setMessage('Please enter the quantity!')
    } else {
      await myApi.post(`/cart/add`, { product: product._id, qty });
      navigate("/cart");
    }
  };

  useEffect(() => {
    const url = `/products/${productId}`;
    myApi
      .get(url)
      .then((res) => {
        setProduct(res.data.oneProduct);
        setName(res.data.oneProduct.name);
        setImage(res.data.oneProduct.image);
        setBrand(res.data.oneProduct.brand);
        setCategory(res.data.oneProduct.category);
        setPrice(res.data.oneProduct.price);
        setCountInStock(res.data.oneProduct.countInStock);
        setDescription(res.data.oneProduct.description);
      })
      .catch((e) => console.error(e));
  }, []);

  const editHandler = async (event) => {
    event.preventDefault();
    setEditIsOn(!editIsOn);
  }
  //Click to delete a product
  const deleteHandler = async (event) => {
    event.preventDefault;
    setDeleteIsOn(!deleteIsOn);
    const url = `/products/${productId}/`;
    try {
      await myApi.delete(url);
      setDeleteIsOn(!deleteIsOn);
      navigate("/store");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="DetailedProductCard">
      <div className="buttons">
        {user && user.isAdmin && (
          <button className="btn-block" type="button" onClick={editHandler}>
            Edit
          </button>
        )}
        {user && user.isAdmin && (
          <button className="btn-block" type="button" onClick={deleteHandler}>
            Delete
          </button>
        )}
      </div>

      <div className="container">
        <div className="title">
          <h2 className="h2">{product.name}</h2>
          <h5 className="h5">{product.category}</h5>
        </div>

        {editIsOn ? (

          <EditProductForm />
        ) : (
          <>
            {/* Product Detail */}
            <div className="product-details">
              <picture>
                <img src={product.image} alt={product.name} />
              </picture>
              <div>
                <table>
                  <tbody>
                    <tr>
                      <td></td>
                      <td>
                        <p className="price">{product.price} €</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="brand">Brand</label>
                      </td>
                      <td>
                        <p className="brand">{product.brand}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className="countInStock">
                          {" "}
                          {product.countInStock > 0
                            ? `In Stock`
                            : "Out Of Stock"}
                        </p>
                      </td>
                      <td>
                        <p className="countInStock">
                          {" "}
                          {product.countInStock > 0
                            ? `${product.countInStock}`
                            : "Out Of Stock"}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="qty">Qty</label>
                      </td>
                      <td>
                        <input
                          type="number"
                          name="qty"
                          min="0"
                          max={product.countInStock}
                          value={qty}
                          onChange={({ target }) =>
                            setQty(Number(target.value))
                          }
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div style={{ color: '#FF0000' }}>{message}</div>
                <div className="add-btn">
                  <button
                    onClick={addToCartHandler}
                    className="btn-cart"
                    type="button"
                    disabled={product.countInStock === 0}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="description">
              <p>{product.description}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DetailedProductCard;