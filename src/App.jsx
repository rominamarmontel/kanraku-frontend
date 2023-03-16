import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import ProtectedRoute from "./pages/Navigation/ProtectedRoute";
import IsLoggedOut from "./pages/Navigation/IsLoggedOut";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import FormEditProfile from "./pages/ProfilePage/Forms/FormEditProfile";
import FormEditAddress from "./pages/ProfilePage/Forms/FormEditAddress";
import FormAddAddress from "./pages/ProfilePage/Forms/FormAddAddress";
import Error from "./pages/Error/Error";
import DetailedProductPage from "./pages/DetailedProductPage/DetailedProductPage";
import CartPage from "./pages/CartPage/CartPage";
import CheckOutgPage from './pages/CheckoutPage/CheckOutPage'
import OrderPage from "./pages/OrderPage/OrderPage";
import ProductCreatePage from './pages/Admin/ProductCreatePage/ProductCreatePage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search/:keyword" element={<Store />} />
          <Route path="/products/:id" element={<DetailedProductPage />} />

          <Route element={<IsLoggedOut />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/profile/edit-informations" element={<FormEditProfile />}/>
            <Route path="/profile/edit-address" element={<FormEditAddress />} />
            <Route path="/profile/add-address" element={<FormAddAddress />} />
            <Route path="/orders" element={<OrderPage />} />
            <Route path="/admin/products/create" element={<ProductCreatePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckOutgPage />} />
          </Route>

            <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
