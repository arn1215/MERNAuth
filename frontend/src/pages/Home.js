
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import EventCard from '../components/EventCard'
import { getEvents } from '../Store/events'


const data = ["yo", "yo"]

function Home() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const events = useSelector(state => state.events.events)
  const searchItems = useSelector(state => state.search.searchItems)

  useEffect(() => {
    const user = localStorage.getItem('user')
    dispatch(getEvents())
  }, [])

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