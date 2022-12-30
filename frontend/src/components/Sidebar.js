import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getToken } from "../Store/session"
import image from "./Ticketr-logos_white.png"
import { Link } from "react-router-dom"


function Sidebar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('user')
    dispatch(getToken(null))
    let token = JSON.parse(localStorage.getItem("user"))

    navigate("/login")
  }


  return (

    <div className="flex flex-col justify-between w-16 h-screen bg-gray-300 border-r fixed">
      <div>
        <div className="inline-flex items-center justify-center w-16 h-16">
          <img className="block w-10 h-10 bg-gray-200 rounded-lg" src={image}></img>
        </div>

        <div className="border-t border-gray-100">
          <nav className="flex flex-col p-2">
            <div className="py-4">
              <Link
                to="/cart"
                className="flex justify-center px-2 py-1.5 t text-blue-700 rounded bg-blue-50 group relative ml-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16"> <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" /> </svg>

                <span
                  className="absolute text-xs font-medium text-white bg-gray-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100"
                >
                  Cart
                </span>
              </Link>
            </div>

            <ul className="pt-4 border-t border-gray-100 space-y-1">
              <li>
                <button
                  onClick={() => navigate("/")}
                  className="flex justify-center px-2 py-1.5  rounded text-gray-500 hover:bg-blue-50 group relative ml-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" /> <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" /> </svg>

                  <span
                    className="absolute text-xs font-medium text-white bg-gray-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100"
                  >
                    Home
                  </span>
                </button>

              </li>

            </ul>
          </nav>
        </div>
      </div>

      <div className="sticky inset-x-0 bottom-0 p-2 bg-white border-t border-gray-100">
        <button
          onClick={logout}
          type="submit"
          className="flex justify-center w-full px-2 py-1.5 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700 group relative"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 opacity-75"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"

          >
            <path


              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>

          <span
            className="absolute text-xs font-medium text-white bg-gray-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100"
          >
            Logout
          </span>
        </button>

      </div>
    </div>


  )
}

export default Sidebar