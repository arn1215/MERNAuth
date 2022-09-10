
import {useNavigate} from 'react-router-dom'

function Logout() {
  const navigate = useNavigate()


  const logout = () => {
    localStorage.removeItem('user')
    let thing = JSON.parse(localStorage.getItem("user"))
    
    navigate("/login")
  }

  return (
    <button onClick={logout}>Logout</button>
  )
}

export default Logout