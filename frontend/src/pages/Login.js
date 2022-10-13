import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getToken } from '../Store/session'
import jwt_decode from "jwt-decode";


const inputStyle = 'border-2 border-blue-500 py-2 px-3 rounded-sm w-full'

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const login = async () => {
    const user = {
      password, email,
    }
    try {
      toast.loading("Loading...")
      const response = await axios.post("/api/auth/login", user)
      toast.dismiss()
      if (response.data.success) {
        toast.success(response.data.message)
        localStorage.setItem("user", response.data.data)
        dispatch(getToken(jwt_decode(response.data.data)))
        navigate("/")
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.dismiss();
      toast.error(`Something Went Wrong`)
    }
  }
  return (
    <div className='animate flex justify-center items-center h-screen'>


      <div className='w-[500px] space-y-5 flex-col p-5 shadow-lg border border-gray-300  rounded-xl'>
        <h1 className='font-semibold text-3xl text-gray-700'>Welcome Back</h1>
        <input type='text' placeholder='email' className={inputStyle} onChange={e => setEmail(e.target.value)} value={email} />
        <input type='password' placeholder='password' className={inputStyle} onChange={e => setPassword(e.target.value)} value={password} />

        <div className='flex justify-between items-end'>
          <Link className="underline" to='/register'>Click Here To Register</Link>
          <button className='py-1 px-5 text-white bg-blue-700 rounded' onClick={login}>LOGIN</button>
        </div>

      </div>

    </div>
  )
}

export default Login