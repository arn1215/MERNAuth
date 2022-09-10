import { Link } from 'react-router-dom'
import { useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'

const inputStyle = 'border-2 border-blue-500 py-2 px-3 rounded-sm w-full'

function Register() {
  const [email, setEmail] = useState("")
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const register = async () => {

    if (password === confirmPassword) {

      const newUser = {
        userName,
        password,
        email,
        confirmPassword
      }
      try {
        toast.loading("Loading...")
        const response = await axios.post('/api/auth/register', newUser)
        toast.dismiss()
        if (response.data.success) {
          toast.success(response.data.message)
        } else {
          toast.error(response.data.message)
        }

      } catch (error) {
        toast.error("Something went wrong...")

      }

    } else {
      toast.error("Passwords not matching.")
    }

  }
  return (
    <div className='flex justify-center items-center h-screen'>

      <div className='w-[500px] space-y-5 flex-col p-5 shadow-lg border border-gray-300'>
        <h1 className='font-semibold text-3xl text-gray-700'>Welcome to MERN AUTH APP</h1>
        <input type='text' placeholder='email' className={inputStyle} onChange={e => setEmail(e.target.value)} value={email} />
        <input type='text' placeholder='username' className={inputStyle} onChange={e => setUserName(e.target.value)} value={userName} />
        <input type='password' placeholder='password' className={inputStyle} onChange={e => setPassword(e.target.value)} value={password} />
        <input type='password' placeholder='confirm password' className={inputStyle} onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword} />

        <div className='flex justify-between items-end'>
          <Link className="underline" to='/login'>Click Here To Login</Link>
          <button className='py-1 px-5 text-white bg-blue-700' onClick={register}>REGISTER</button>
        </div>

      </div>

    </div>
  )
}

export default Register