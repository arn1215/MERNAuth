
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { getToken } from '../Store/session'

function Logout() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logout = () => {
    localStorage.removeItem('user')
    dispatch(getToken(null))
    let thing = JSON.parse(localStorage.getItem("user"))
    
    navigate("/login")
  }

  return (
    <button onClick={logout}>Logout</button>
  )
}

export default Logout