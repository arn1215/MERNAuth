import {Link} from 'react-router-dom'

const inputStyle = 'border-2 border-blue-500 py-2 px-3 rounded-sm w-full'

function Register() {
  return (
    <div className='flex justify-center items-center h-screen'>

      <div className='w-[500px] space-y-5'>
        <h1 className='font-semibold text-3xl text-gray-700'>Welcome to MERN AUTH APP</h1>
        <input type='text' placeholder='username' className={inputStyle}/>
        <input type='text' placeholder='email' className={inputStyle}/>
        <input type='text' placeholder='password' className={inputStyle}/>
        <input type='text' placeholder='confirm password' className={inputStyle}/>
        
        <div className='flex justify-between items-end'>
          <Link className="underline" to='/login'>Click Here To Login</Link>
          <button className='py-1 px-5 text-white bg-blue-700'>REGISTER</button>
        </div>
        
      </div>

    </div>
  )
}

export default Register