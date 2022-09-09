import {Link} from 'react-router-dom'
import { useState } from 'react'

const inputStyle = 'border-2 border-blue-500 py-2 px-3 rounded-sm w-full'

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const login = () => {
    const user = {
      password, email, 
    }
    console.log(user)
  }
  return (
    <div className='flex justify-center items-center h-screen'>

      <div className='w-[500px] space-y-5 flex-col p-5 shadow-lg border border-gray-300'>
        <h1 className='font-semibold text-3xl text-gray-700'>Welcome Back</h1>
        <input type='text' placeholder='email' className={inputStyle} onChange={e => setEmail(e.target.value)} value={email}/>
        <input type='text' placeholder='password' className={inputStyle} onChange={e => setPassword(e.target.value)} value={password}/>
        
        <div className='flex justify-between items-end'>
          <Link className="underline" to='/register'>Click Here To Register</Link>
          <button className='py-1 px-5 text-white bg-blue-700' onClick={login}>LOGIN</button>
        </div>

      </div>

    </div>
  )
}

export default Login