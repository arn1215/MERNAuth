
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { Toaster } from 'react-hot-toast'
import Logout from './components/Logout';
import { useEffect } from 'react';
import { Provider } from 'react-redux'


import { store } from './Store'

function App() {

  useEffect(() => {

  }, [])

  return (
    <Provider store={store}>
        <BrowserRouter>
          <Toaster position='top-center' reverseOrder={false} />
          <Logout />
          <Routes>
            <Route path="/" element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
            <Route path="login" element={<PublicRoutes><Login /></PublicRoutes>} />
            <Route path="register" element={<PublicRoutes><Register /></PublicRoutes>} />
          </Routes>
        </BrowserRouter>
    </Provider>
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
