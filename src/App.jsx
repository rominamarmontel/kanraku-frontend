import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout/Layout'
import Home from './pages/Home/Home'
import Store from './pages/Store/Store'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import ProtectedRoute from './pages/Navigation/ProtectedRoute'
import IsLoggedOut from './pages/Navigation/IsLoggedOut'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import Error from './pages/Error/Error'
import DetailedProductPage from './pages/DetailedProductPage/DetailedProductPage'
import CartPage from './pages/CartPage/CartPage'
import OrderPage from './pages/OrderPage/OrderPage'
import PlaceOrderPage from './pages/PlaceOrderPage/PlaceOrderPage'
import ShippingPage from './pages/ShippingPage/ShippingPage'
import PaymentPage from './pages/PaymentPage/PaymentPage'
import ProductCreatePage from './pages/Admin/ProductCreatePage/ProductCreatePage'
import UserListPage from './pages/Admin/UserListPage/UserListPage'
import UserEditPage from './pages/Admin/UserEditPage/UserEditPage'
import OrderListPage from './pages/Admin/OrderListPage/OrderListPage'

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

          <Route element={<IsLoggedOut />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>

          {/* <Route element={<ProtectedRoute />}> */}
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/order/:id" element={<OrderPage />} />
          <Route path="/placeorder" element={<PlaceOrderPage />} />
          <Route path="/shipping" element={<ShippingPage />} />
          <Route path="/payment" element={<PaymentPage />} />


          <Route path="/admin/products/create" element={<ProductCreatePage />} />
          <Route path="/admin/userlist" element={<UserListPage />} />
          <Route path="/admin/user/:id/edit" element={<UserEditPage />} />
          <Route path="/admin/orderlist" element={<OrderListPage />} />
          <Route path="/cart" element={<CartPage />} />
          {/* </Route> */}
          <Route path="/products/:id" element={<DetailedProductPage />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
