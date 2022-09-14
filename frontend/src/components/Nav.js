
import NavLinks from './NavLinks'
import image from "./Ticketr-logos_white.png"

function Nav() {
  return (
    <>
      <header class=" bg-gray-300">
        <div
          class="flex fixed items-center justify-around h-12 px-4 mx-auto w-screen bg-gray-300 shadow-md"
        >
          <img src={image}  alt="logo" style={{height: '50px'}}/>
          <input 
          className='w-96'
          />
          <NavLinks />
        </div>
      </header>
    </>
  )
}

export default Nav