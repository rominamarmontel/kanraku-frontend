import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout/Layout'
import Home from './pages/Home/Home'
import Store from './pages/Store/Store'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import LoginPage from './pages/Login/Login'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import ProtectedRoute from './pages/Navigation/ProtectedRoute'
import IsLoggedOut from './pages/Navigation/IsLoggedOut'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import FormEditProfile from './pages/ProfilePage/Forms/FormEditProfile'
import FormEditAddress from './pages/ProfilePage/Forms/FormEditAddress'
import FormAddAddress from './pages/ProfilePage/Forms/FormAddAddress'
import Error from './pages/Error/Error'
import Navbar from './components/Navbar/Navbar'
import ProductPage from './pages/ProductPage/ProductPage'
import CartPage from './pages/CartPage/CartPage'
import OrderPage from './pages/OrderPage/OrderPage'
import PlaceOrderPage from './pages/PlaceOrderPage/PlaceOrderPage'
import ShippingPage from './pages/ShippingPage/ShippingPage'
import PaymentPage from './pages/PaymentPage/PaymentPage'
import ProductListPage from './pages/Admin/ProductListPage/ProductListPage'
import ProductEditPage from './pages/Admin/ProductEditPage/ProductEditPage'
import ProductCreateForm from './pages/Admin/ProductCreateForm/ProductCreateForm'
import UserListPage from './pages/Admin/UserListPage/UserListPage'
import UserEditPage from './pages/Admin/UserEditPage/UserEditPage'
import OrderListPage from './pages/Admin/OrderListPage/OrderListPage'


function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search/:keyword" element={<Store />} />

          <Route element={<IsLoggedOut />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<RegisterPage />} />
          </Route>

          {/* <Route element={<ProtectedRoute />}> */}
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/edit-informations" element={<FormEditProfile />} />
          <Route path="/profile/edit-address" element={<FormEditAddress />} />
          <Route path="/profile/add-address" element={<FormAddAddress />} />
          <Route path="/orders" element={<OrderPage />} />
          <Route path="/placeorder" element={<PlaceOrderPage />} />
          <Route path="/shipping" element={<ShippingPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/admin/productlist" element={<ProductListPage />} />
          <Route path="/admin/product/:id/edit" element={<ProductEditPage />} />
          <Route path="/admin/product/create" element={<ProductCreateForm />} />
          <Route path="/admin/userlist" element={<UserListPage />} />
          <Route path="/admin/user/:id/edit" element={<UserEditPage />} />
          <Route path="/admin/orderlist" element={<OrderListPage />} />
          <Route path="/cart" element={<CartPage />} />
          {/* </Route> */}

          <Route path="/product/:id" element={<ProductPage />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
