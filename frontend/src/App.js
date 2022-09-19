
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
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


function App() {
  const dispatch = useDispatch()
  const token = localStorage.getItem("user")
  const session = useSelector(state => state.session)
  const user = session.user

  useEffect(() => {
    if (token && user) {
    /*   dispatch(getToken(jwt_decode(localStorage.getItem("user")))) */
    console.log("yo")
    }
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
        
        <Route path='/cart' element={<ProtectedRoutes><Cart /></ProtectedRoutes>} />
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
