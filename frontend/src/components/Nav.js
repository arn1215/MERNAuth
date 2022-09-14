
import NavLinks from './NavLinks'
import image from "./Ticketr-logos_white.png"

function Nav() {
  return (
    <>
      <header class="shadow-md bg-gray-300">
        <div
          class="flex items-center justify-between h-12 px-4 mx-auto max-w-screen-xl"
        >
          <img src={image}  alt="logo" style={{height: '50px'}}/>
          <NavLinks />
        </div>
      </header>
    </>
  )
}

export default Nav