import React from 'react'

function Login() {
  return (
    <div>
    <div className='flex justify-center items-center h-screen space-y-5 flex-col'>
      
      <input type='text' placeholder='username' className='border-2 border-gray-500 py-2 px-5'/>
      <input type='text' placeholder='password' className='border-2 border-gray-500 py-2 px-5'/>
      <button className="bg-blue-500 py-2 px-5 text-white">LOGIN</button>

    </div>
  </div>
  )
}

export default Login