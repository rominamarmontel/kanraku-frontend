// import myApi from '../../service/service'
// import React, { useState } from 'react'
// import Confetti from 'react-confetti'
// import multer from 'multer';

// const [name, setName] = useState("");
// const [price, setPrice] = useState(0);
// const [image, setImage] = useState("");
// const [brand, setBrand] = useState("");
// const [category, setCategory] = useState("");
// const [countInStock, setCountInStock] = useState(0);
// const [description, setDescription] = useState("");
// const productId = params._id;
// const upload = multer({ dest: '../../../public/upload' })

// const ProductEditPage = () => {
//   const handleSubmit = async (event) => {
//     event.preventDefault
//     const productToUpdate = {
//       name: name,
//       price: price,
//       image: image,
//       brand: brand,
//       category: category,
//       countInStock: countInStock,
//       description: description,
//     }
//     try {
//       const editProduct = await myApi.updateProduct(productId, productToUpdate)
//       if (newJoke.status === 202) {
//         navigate('/jokes')
//       }
//       console.log(newJoke)
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   useEffect(() => {
//     myApi
//       .getOneProduct(productId)
//       .then((res) => {
//         setName(res.data.oneProduct.name)
//         setPrice(res.data.oneProduct.price)
//         setImage(res.data.oneProduct.image)
//         setBrand(res.data.oneProduct.brand)
//         setCategory(res.data.oneProduct.category)
//         setDescription(res.data.oneProduct.description)
//         setCountInStock(res.data.oneProduct.countInStock)
//       })
//       .catch((e) => console.error(e))
//   }, [])

//   const AddProduct = () => {
//     const handleSubmitAdd = async (event) => {
//       event.preventDefault()
//       const productToCreate = {
//         name: name,
//         price: price,
//         image: image,
//         brand: brand,
//         category: category,
//         countInStock: countInStock,
//         description: description,
//       }
//       try {
//         const response = await myApi.createProduct(productToCreate)
//         console.log(response)
//         if (response.status === 201) {
//           setShowConfetti(true)
//           setName('')
//           setPrice(0)
//           setImage('')
//           setDescription('')
//           setBrand('')
//           setCategory('')
//           setCountInStock(0)
//           setTimeout(() => {
//             setShowConfetti(false)
//           }, 5000)
//         }
//         console.log(response)
//       } catch (error) {
//         console.error(error)
//       }
//     }
//   }

//   const uploadImage = myApi.post('/upload', upload.single('file'), function (req, res) {
//     res.send(req.file.originalname + 'Upload your file!'))

//   return (
//     <>
//       <Click onSubmit={handleSubmitAdd}>Add a Product</Click>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Product Name:</label>
//           <input
//             value={name}
//             name="input"
//             id="input"
//             onChange={(event) => setName(event.target.value)}
//           ></input>
//         </div>
//         <div>
//           <label htmlFor="image">Image:</label>
//           <form action="/upload" method="POST" enctype="multipart/form-data">
//             <input type="file" name="file" />
//             <button type="submit">SEND</button>
//           </form>
//         </div>
//         <div>
//           <label htmlFor="brand">Brand:</label>
//           <input
//             value={brand}
//             name="brand"
//             id="brand"
//             onChange={(event) => setBrand(event.target.value)}
//           ></input>
//         </div>
//         <div>
//           <label htmlFor="category">Category:</label>
//           <input
//             value={category}
//             name="category"
//             id="category"
//             onChange={(event) => setCategory(event.target.value)}
//           ></input>
//         </div>
//         <div>
//           <label htmlFor="price">Price:</label>
//           <input
//             value={price}
//             name="price"
//             id="price"
//             onChange={(event) => setPrice(event.target.value)}
//           ></input>
//         </div>
//         <div>
//           <label htmlFor="description">Description:</label>
//           <textarea
//             value={description}
//             name="description"
//             id="description"
//             col="30"
//             row="20"
//             onChange={(event) => setDescription(event.target.value)}
//           ></textarea>
//         </div>
//         <button>Update a product</button>
//       </form>
//     </>
//   )
// }

// export default ProductEditPage
import React from 'react'

const ProductEditPage = () => {
  return (
    <div>ProductEditPage</div>
  )
}

export default ProductEditPage