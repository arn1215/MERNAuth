
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearCart } from '../Store/cart'
import { getToken } from '../Store/session'

function Logout() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logout = () => {
    localStorage.clear()
    dispatch(getToken(null))
    dispatch(clearCart())

    //todo 
    let token = JSON.parse(localStorage.getItem("user"))

    navigate("/login")
  }

  return (
    <button className="px-5 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700  transition-all rounded-lg" onClick={logout}>Logout</button>
  )
}

export default Logout