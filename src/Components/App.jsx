import React from 'react'
import { BrowserRouter,   Routes,Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'
import ProductContextProvider from '../global/ProductContext'
import CartContextProvider from '../global/CartContext'
import WishlistContextProvider from '../global/WishlistContext'
import Shop from './Shop'
import SingleProduct from './SingleProduct'
import Cart from './Cart'
import Profile from './Profile'
import Login from './Login'
import SignUP from './SignUp'
import ContactUs from './ContactUs'
export default function App() {
  return (
    <>

      <ProductContextProvider>
        <CartContextProvider>
      <WishlistContextProvider>
      <BrowserRouter>
          <Navbar />
          <Routes>
          <Route path='/' element={< Home />}></Route>
          <Route path="/shop/:mc/:sc/:brand" element={< Shop />}></Route>
          <Route path='product/:id' element={<SingleProduct/>}> </Route>
          <Route path='/cart' element={<Cart/>}> </Route>
          <Route path='/profile' element={<Profile/>}> </Route>
          <Route path='/login' element={<Login/>}> </Route>
          <Route path='/signup' element={<SignUP/>}> </Route>
          <Route path='/contactus' element={<ContactUs/>}> </Route>
          </Routes>
        </BrowserRouter>
         <Footer />
      </WishlistContextProvider>
        </CartContextProvider>
      </ProductContextProvider>
    </>
  )
}