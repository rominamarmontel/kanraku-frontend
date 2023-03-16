import React, { useContext, useState, useEffect } from "react"
import { useNavigate, useParams, Link } from "react-router-dom";
import './EditProductForm.css'
import myApi from '../../service/service'

const EditProductForm = (props) => {
  const [editIsOn, setEditIsOn] = useState(false);
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState('');
  const [imageURL, setImageURL] = useState('');
  // const { user } = useContext(AuthContext);
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const params = useParams();
  const productId = params.id;

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

  //Click to valid your edition
  const editHandler = async (event) => {
    event.preventDefault();
    setEditIsOn(!editIsOn);

    try {
      const formData = new FormData();

      formData.append("image", imageFile);
      const { data: { image } } = await myApi.post("/products/images", formData);
      setImageURL(image);

      const productToUpdate = {
        name,
        brand,
        category,
        image,
        price,
        countInStock,
        description,
      };

      const res = await myApi.patch(`/products/${productId}`, productToUpdate);
      setProduct(res.data);
      setName(res.data.name);
      setImageURL(res.data.image);
      setBrand(res.data.brand);
      setCategory(res.data.category);
      setPrice(res.data.price);
      setCountInStock(res.data.countInStock);
      setDescription(res.data.description);
      navigate(`/store`)
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="EditProductForm">
        <div>
          <h2>ADMIN PAGE</h2>
          <h5>EDIT A PRODUCT</h5>
        </div>
        <form onSubmit={editHandler} action="">
          <div className="form-box">
            <div>
              <label htmlFor="edit-name">Name:</label>
              <div>
                <input
                  name="name"
                  value={name}
                  id="name"
                  onChange={(event) => setName(event.target.value)}
                ></input>
              </div>

              <label htmlFor="edit-brand">Brand:</label>
              <div>
                <input
                  name="brand"
                  value={brand}
                  id="brand"
                  onChange={(event) => setBrand(event.target.value)}
                />
              </div>
              <label htmlFor="edit-category">Category:</label>
              <div>
                <input
                  name="category"
                  value={category}
                  id="category"
                  onChange={(event) =>
                    setCategory(event.target.value)
                  }
                />
              </div>
              <label htmlFor="edit-price">Price:</label>
              <div>
                <input
                  name="price"
                  value={price}
                  id="price"
                  onChange={(event) => setPrice(event.target.value)}
                />
              </div>
              <label htmlFor="edit-countInstock">
                Count in stock:
              </label>
              <div>
                <input
                  name="countInStock"
                  value={countInStock}
                  id="countInStock"
                  onChange={(event) =>
                    setCountInStock(event.target.value)
                  }
                />
              </div>
            </div>

            <div>
              <label htmlFor="edit-image">Image:</label>
              <div>
                <input type='file' name='image' onChange={(e) => setImageFile(e.target.files[0])} />
              </div>
              <label htmlFor="edit-description">Description:</label>
              <div>
                <textarea
                  name="description"
                  value={description}
                  id="description"
                  cols="30"
                  rows="10"
                  onChange={(event) =>
                    setDescription(event.target.value)
                  }
                />
              </div>
            </div>
          </div>
          <button>Update a product</button>
        </form>
      </div>
    </>
  )
};

export default EditProductForm