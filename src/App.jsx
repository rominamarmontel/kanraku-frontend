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
import Error from './pages/Error/Error'
import Navbar from './components/Navbar/Navbar'

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
            <Route path="/register" element={<RegisterPage />} />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<ProfilePage />} />
            {/* <Route path="/order/:id" element={OrderPage} />
            <Route path="/placeorder" element={PlaceOrderPage} />
            <Route path="/shipping" element={ShippingPage} />
            <Route path="/payment" element={PaymentPage} />
            <Route path="/admin/productlist" element={<ProductListPage />} />
            <Route path="/admin/product/:id/edit" element={<ProductEditPage />} />
            <Route path="/admin/userlist" element={<UserListPage />} />
            <Route path="/admin/user/:id/edit" element={<UserEditPage />} />
            <Route path="/admin/orderlist" element={<OrderListPage />} /> */}
          </Route>

          {/* <Route path="/cart/:id" element={<CartPage />} />
          <Route path="/product/:id" element={ProductPage} /> */}

          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
