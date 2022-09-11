import { Toaster } from 'react-hot-toast'
import NavLinks from './NavLinks'

function Nav() {
  return (
    <header class="shadow-sm">
      <div
        class="flex items-center justify-between h-12 px-4 mx-auto max-w-screen-xl"
      >
        <div class="flex flex-1 w-0 lg:hidden">
          <button class="p-2 text-gray-600 bg-gray-100 rounded-full" type="button">
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewbox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
            </svg>
          </button>
        </div>

        <div class="flex items-center space-x-4">
          <span class="w-20 h-10 bg-gray-200 rounded-lg"></span>

         
        </div>
      
        <div class="flex justify-end flex-1 w-0 lg:hidden">
          <button class="p-2 text-gray-500 bg-gray-100 rounded-full" type="button">
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewbox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <nav
          class="items-center justify-center hidden text-sm font-medium space-x-8 lg:flex lg:flex-1 lg:w-0"
        >
                   <form class="hidden mb-0 lg:flex">
            <div class="relative">
              <input
                class="h-10 pr-10 text-sm placeholder-gray-300 border-gray-200 rounded-lg focus:z-10 w-96 border-wid"
                placeholder="Search..."
                type="text"
              />

              <button
                class="absolute inset-y-0 right-0 p-2 mr-px text-gray-600 rounded-r-lg"
                type="submit"
              >

              </button>
            </div>
          </form>
        </nav>
        <NavLinks />
      </div>

      <div class="border-t border-gray-100 lg:hidden">
        <nav
          class="flex items-center justify-center p-4 overflow-x-auto text-sm font-medium"
        >
  
        </nav>
      </div>
    </header>
  )
}

export default Nav