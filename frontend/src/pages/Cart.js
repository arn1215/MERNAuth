import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTickets } from "../Store/tickets"


function Cart() {

  const dispatch = useDispatch()
  const user = useSelector(state => state.session)
  const tickets = useSelector(state => state.tickets.tickets)
  const storagedata = JSON.parse(localStorage.getItem("data"));
  useEffect(() => {
    console.log(user.user)
    const fnc = async() => {
      await dispatch(getTickets(user.user._id))
    }
    fnc()
  }, [])  
  return (
    <>
    <div className="flex flex-col justify-center items-center h-96">
      <div className="bg-slate-700 w-4/6  min-h-full rounded-2xl">
      yo
      </div>
      {tickets.map(ticket => (
        <div>{ticket.event.ticketPrice}</div>
        ))}
    </div>
        <div className="flex flex-col justify-center items-center h-96">
        <div className="bg-slate-700 w-4/6  min-h-full rounded-2xl">
        yo
        </div>
        {tickets.map(ticket => (
          <div>{ticket.event.ticketPrice}</div>
          ))}
      </div>
      </>

  )
}

export default Cart