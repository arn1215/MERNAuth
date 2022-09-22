
import { BrowserRouter, Routes, Route, Navigate, useRoutes } from 'react-router-dom'
import jwt_decode from 'jwt-decode';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import Logout from './components/Logout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { getToken } from './Store/session';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import { Toaster } from 'react-hot-toast';
import Event from './pages/Event';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';


function App() {
  const dispatch = useDispatch()
  const token = localStorage.getItem("user")
  const session = useSelector(state => state.session)
  const cart = useSelector(state => state.cart.cartItems)
  const user = session.user


  useEffect(() => {
    if (token && user) {
      dispatch(getToken(jwt_decode(localStorage.getItem("user"))))
    }
    const cart = localStorage.getItem("cartItems")


  }, [localStorage])

  return (
    <BrowserRouter>
      <Nav />
      <Sidebar />
      <Toaster position='center' />

      {user ? <Logout /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path='events/:id' element={<Event />} />

        <Route path="cart" element={<ProtectedRoutes><Cart /></ProtectedRoutes>} />
        <Route path="cart/:id" element={<ProtectedRoutes><Cart /></ProtectedRoutes>} />
        <Route path="checkout" element={<ProtectedRoutes><CheckOut /></ProtectedRoutes>} />
      </Routes>
    </BrowserRouter>
  );
}

export function ProtectedRoutes({ children }) {
  const user = localStorage.getItem("user")
  if (user && user !== "") {
    return children
  } else {
    return <Navigate to='/login' />
  }
}

export function PublicRoutes({ children }) {
  const user = localStorage.getItem("user")
  if (user && user !== "") {
    return <Navigate to="/" />
  } else {
    return children
  }
}

export default App;
