import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTickets } from "../Store/tickets"


function Cart() {

  const dispatch = useDispatch()
  const user = useSelector(state => state.session)
  const tickets = useSelector(state => state.tickets.tickets)
  const storagedata = JSON.parse(localStorage.getItem("data"));
  const [total, setTotal] = useState(0)
  useEffect(() => {
    console.log(user.user)
    const fetchTickets = async () => {
      await dispatch(getTickets(user.user._id))
    }
    fetchTickets()
  }, [])
  return (
    <>
      <div className="flex flex-col justify-around h-screen mt-20 text-white">
        <div className="flex flex-col  items-center h-96">
          <div className="bg-slate-700 w-4/6  min-h-full shadow-xl p-10 overflow-scroll rounded-md">
            <h1 className="text-2xl">Check Out</h1>
            <div className="flex flex-col space-y-8">
              {tickets.map((ticket) => (
                !ticket.isPaid ? 
                  <div className="ticket  flex w-[100%] h-28 rounded-sm transition-all items-center justify-around">
                    <img src={ticket.event.images} className="w-32 h-20 rounded-lg" />
                    <span>{ticket.event.name}</span>
                    <span>{ticket.event.ticketPrice}</span>
                  </div> : null
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col  items-center h-96">
          <div className="bg-slate-700 w-4/6  min-h-full shadow-xl p-10 overflow-scroll rounded-md">
            <h1 className="text-2xl">Purchased</h1>
            <div className="flex flex-col space-y-8">
              {tickets.map((ticket) => (
                ticket.isPaid ?
                <div className="ticket  flex w-[100%] h-28 rounded-sm transition-all items-center justify-around">
                <img src={ticket.event.images} className="w-32 h-20 rounded-lg" />
                <span>{ticket.event.name}</span>
                <span>{ticket.event.ticketPrice}</span>
              </div> : null
              ))}
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Cart