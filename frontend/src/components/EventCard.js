
import { useNavigate } from "react-router-dom"



function EventCard({ event }) {

  const navigate = useNavigate()


  const onClick = async (id) => {

    navigate(`/events/${id}`)
  }

  return (

    <div onClick={() => onClick(event._id)} style={{ backgroundImage: `url(${event.images})` }} className='flex p-4 font-semibold  bg-sky-200 w-96 h-60 rounded-2xl shadow-md mt-5 mr-5 text-white bg-cover cursor-pointer'>
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