
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getToken } from '../Store/session'

function Logout() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logout = () => {
    localStorage.removeItem('user')
    dispatch(getToken(null))
    let token = JSON.parse(localStorage.getItem("user"))

    navigate("/login")
  }

  return (
    <button className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg" onClick={logout}>Logout</button>
  )
}

export default Logout