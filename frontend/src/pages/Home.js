import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()


  useEffect(() => {
    const user = localStorage.getItem('user')
  }, [])

  return (
    <div className='flex justify-center items-center '>

      <div className='w-[90%] flex items-center flex-wrap justify-center  h-screen mt-20 mb-20'>
        <div className='flex bg-sky-200 w-96 h-60 rounded-2xl shadow-md mt-5 mr-5'>
          home
        </div>
        <div className='flex bg-sky-200 w-96 h-60 rounded-2xl shadow-md mt-5 mr-5'>
          home
        </div>
        <div className='flex bg-sky-200 w-96 h-60 rounded-2xl shadow-md mt-5 mr-5'>
          home
        </div>
        <div className='flex bg-sky-200 w-96 h-60 rounded-2xl shadow-md mt-5 mr-5'>
          home
        </div>
        <div className='flex bg-sky-200 w-96 h-60 rounded-2xl shadow-md mt-5 mr-5'>
          home
        </div>
        <div className='flex bg-sky-200 w-96 h-60 rounded-2xl shadow-md mt-5 mr-5'>
          home
        </div>
        <div className='flex bg-sky-200 w-96 h-60 rounded-2xl shadow-md mt-5 mr-5'>
          home
        </div>
        <div className='flex bg-sky-200 w-96 h-60 rounded-2xl shadow-md mt-5 mr-5'>
          home
        </div>
        <div className='flex bg-sky-200 w-96 h-60 rounded-2xl shadow-md mt-5 mr-5'>
          home
        </div>

      </div>
    </div>
  )
}

export default Home