
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { clearSearchItems, getSearchItems } from '../Store/search'
import NavLinks from './NavLinks'
import SearchItemCard from './SearchItemCard'
import image from "./Ticketr-logos_white.png"
function Nav() {
  const [query, setQuery] = useState("")

  const dispatch = useDispatch()

  const search = useSelector(state => state.search)

  return (

    <>
      <header className=" bg-gray-300">
        <div
          className="flex fixed items-center justify-around h-12 px-4 mx-auto w-screen bg-gray-300 shadow-md" z>
          <img src={image} alt="logo" style={{ height: '50px' }} />
          <div className='flex justify-center items-center'>
            <div className='flex flex-col'>
              <input
                className='w-96 h-8 rounded p-2 border-hidden !outline-none'
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={(e) => dispatch(getSearchItems(e.target.value))}
                value={query}
              />
              {search.searchItems.length > 0 &&
                <div className='absolute bg-white w-96 rounded-sm mt-7 text-white shadow-lg h-64 overflow-scroll animate-slide overflow-x-auto'>
                  <ul>

                    {search.searchItems.map(item => {
                      return (
                        <Link onClick={() => dispatch(clearSearchItems())} to={`/events/${item._id}`}>
                          <SearchItemCard item={item} />
                        </Link>
                      )
                    })
                    }

                  </ul>
                </div>
              }
            </div>
            {/* <button onClick={() => dispatch(getSearchItems(query))}> */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="45px" height="45px"><linearGradient id="R8TaTjY68qDdglNtdLAaCa" x1="32" x2="32" y1="9.083" y2="54.676" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff" /><stop offset="1" stop-color="#c822ff" /></linearGradient><path fill="url(#R8TaTjY68qDdglNtdLAaCa)" d="M50,55H14c-2.757,0-5-2.243-5-5V14c0-2.757,2.243-5,5-5h36c2.757,0,5,2.243,5,5v36 C55,52.757,52.757,55,50,55z M14,11c-1.654,0-3,1.346-3,3v36c0,1.654,1.346,3,3,3h36c1.654,0,3-1.346,3-3V14c0-1.654-1.346-3-3-3H14 z" /><linearGradient id="R8TaTjY68qDdglNtdLAaCb" x1="33.5" x2="33.5" y1="10.438" y2="55.752" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff" /><stop offset="1" stop-color="#c822ff" /></linearGradient><path fill="url(#R8TaTjY68qDdglNtdLAaCb)" d="M47,45.545l-8.387-8.388C40.103,35.344,41,33.025,41,30.5C41,24.71,36.29,20,30.5,20 S20,24.71,20,30.5S24.71,41,30.5,41c2.525,0,4.845-0.897,6.658-2.388L45.545,47L47,45.545z M30.5,39c-4.687,0-8.5-3.813-8.5-8.5 s3.813-8.5,8.5-8.5s8.5,3.813,8.5,8.5S35.187,39,30.5,39z" /><linearGradient id="R8TaTjY68qDdglNtdLAaCc" x1="30.5" x2="30.5" y1="24" y2="37" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff" /><stop offset="1" stop-color="#e6abff" /></linearGradient><path fill="url(#R8TaTjY68qDdglNtdLAaCc)" d="M30.5 24A6.5 6.5 0 1 0 30.5 37A6.5 6.5 0 1 0 30.5 24Z" /></svg>
            {/* </button> */}
          </div>
          <NavLinks />
        </div>
      </header>
    </>
  )
}

export default Nav