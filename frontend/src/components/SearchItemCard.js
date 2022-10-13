import React from 'react'


function SearchItemCard({ item }) {
  return (

    <li className='b w-84 rounded-sm p-1 text-black hover:bg-slate-500 hover:animate-pulse'>
      <span>{item.name}</span>
    </li>

  )
}

export default SearchItemCard