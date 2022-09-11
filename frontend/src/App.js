
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


function App() {
  const dispatch = useDispatch()
  const token = localStorage.getItem("user")
  const session = useSelector(state => state.session)
  const user = session.user

  useEffect(() => {
    if (token) {
      dispatch(getToken(jwt_decode(localStorage.getItem("user"))))
    }
  }, [localStorage])

  return (
    <BrowserRouter>
      <Nav />
      <Sidebar />

      {user ? <Logout /> : null}
      <Routes>
        <Route path="/" element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
        <Route path="login" element={<PublicRoutes><Login /></PublicRoutes>} />
        <Route path="register" element={<PublicRoutes><Register /></PublicRoutes>} />
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
