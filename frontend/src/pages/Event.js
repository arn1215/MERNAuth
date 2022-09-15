import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getEvent } from "../Store/event"


function Event() {

  const dispatch = useDispatch()
  const params = useParams()
  const event = useSelector(state => state.event.event)
  useEffect(() => {
    dispatch(getEvent(params.id))
  }, [params])

  return (
    <div className="flex flex-col justify-center items-center">

        <div className="flex w-[50%] h-96 bg-black  bg-cover rounded-2xl mt-20" style={{ backgroundImage: `url(${event.images})` }}>
        </div>
      <div className="flex  items-center flex-row justify-around w-[50%]">
        <h1>{event.name}</h1>
        <h1>{event.description}</h1>
        <h1>{event.ticketPrice}</h1>
      </div>
    </div>
  )
}

export default Event