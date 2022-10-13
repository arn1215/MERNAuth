
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import EventCard from '../components/EventCard'
import { getEvents } from '../Store/events'




function Home() {

  const dispatch = useDispatch()
  const events = useSelector(state => state.events.events)


  useEffect(() => {

    dispatch(getEvents())
  }, [dispatch])

  return (
    <div className='animate flex justify-center items-center '>
      <div className='w-[90%] flex items-center flex-wrap justify-center  h-screen mt-20 mb-20'>
        {/* {searchItems.length > 0 ?
          searchItems.map(event => (
            <EventCard event={event} key={event._id} />
          ))
          :
          events.map(event => (
            <EventCard event={event} key={event._id} />
          ))
          
        } */}
        {
          events.map(event => (
            <EventCard event={event} key={event._id} />
          ))
        }
      </div>
    </div>
  )
}

export default Home