import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Logout from './Logout'


function NavLinks() {
  const session = useSelector(state => state.session)
  const user = session.user
  const navigate = useNavigate()




  return (

    <div>
      {!user?._id ?

        <>
          <div className="items-center hidden space-x-4 lg:flex">
            <button
              className="px-5 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg"
              onClick={() => navigate("/login")}
            >
              Log in
            </button>
            {/*          todo   <button
              className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg"
              onClick={() => navigate("/register")}
            >
              Sign up
            </button> */}
          </div>
        </>

        :

        <Logout />
      }
    </div>
  )
}

export default NavLinks