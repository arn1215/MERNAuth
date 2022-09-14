

function EventCard({event}) {
  return (
  
    <div style={{ backgroundImage: `url(${event.images})` }} className='flex p-4 font-semibold  bg-sky-200 w-96 h-60 rounded-2xl shadow-md mt-5 mr-5 text-white bg-cover'>
      <div className='flex flex-col justify-between'>
        <span>
          {event.name}
        </span>
        <div>
        <span className='flex-end'>
          {event.description}
        </span>
        </div>
      </div>
  </div>
  )
}

export default EventCard