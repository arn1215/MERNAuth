
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getSearchItems } from '../Store/search'
import NavLinks from './NavLinks'
import image from "./Ticketr-logos_white.png"

function Nav() {
  const [query, setQuery] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (

    <>
      <header className=" bg-gray-300">
        <div
          className="flex fixed items-center justify-around h-12 px-4 mx-auto w-screen bg-gray-300 shadow-md" z>
          <img src={image} alt="logo" style={{ height: '50px' }} />
          <input
            className='w-96 h-8 rounded'
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
          <button onClick={() => dispatch(getSearchItems(query))}>search</button>
          <NavLinks />
        </div>
      </header>
    </>
  )
}

export default Nav