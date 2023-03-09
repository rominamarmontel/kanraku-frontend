import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout/Layout'
import Home from './pages/Home/Home'
import Store from './pages/Store/Store'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'

function App() {
  return (
    <div className="App">
    <Routes>
      <Route element={<Layout />}>

        <Route path="/" component={<Home />} /> 
        <Route path="/store" component={<Store />} />
        <Route path="/about" component={<About />} />
        <Route path="/contact" component={<Contact />} />
        <Route path="/search/:keyword" component={<Store />} />
        
        {/* <Route element={<IsLoggedOut />}>
          <Route path="/login" component={<LoginPage />} />
          <Route path="/register" component={<RegisterPage />} />
        </Route> */}

        {/* <Route element={<ProtectedRoute />}>
          <Route path="/profile" component={<ProfilPage />} />
          <Route path="/cart/:id" component={<CartPage />} />
          <Route path="/admin/userlist" component={<UserListPage />} />
          <Route path="/admin/user/:id/edit" component={<UserEditPage/>} />
          <Route path="/admin/productlist" component={<ProductListPage />} />
          <Route path="/admin/product/:id/edit" component={<ProductEditPage />} />
          <Route path="/admin/orderlist" component={<OrderListPage />} />
        </Route> */}
      </Route>

        {/* <Route path="/product/:id" component={ProductPage} />
        <Route path="/order/:id" component={OrderPage} />
        <Route path="/placeorder" component={PlaceOrderPage} />
        <Route path="/shipping" component={ShippingPage} />
        <Route path="/payment" component={PaymentPage} />

        <Route path="*" element={<Error />} /> */}
    </Routes>
  </div>
  )
}

export default App
