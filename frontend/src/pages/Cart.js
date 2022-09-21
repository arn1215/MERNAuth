import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addItem, deleteItem } from "../Store/cart"
import { getTickets } from "../Store/tickets"


function Cart() {

  const dispatch = useDispatch()
  const user = useSelector(state => state.session)
  const tickets = useSelector(state => state.tickets.tickets)
  const cartItems = Object.values(useSelector(state => state.cart.cartItems))
  const navigate = useNavigate()

  useEffect(() => {

    const fetchTickets = async () => {

      await dispatch(getTickets(user?.user?._id))
    }
    try {
      fetchTickets()
    } catch (e) {
      console.log(e.message)
    }
  }, [])

  const modifyCart = async (e, event) => {
    const qty = e.target.value
    await dispatch(addItem({ id: event._id, qty })).then(res => console.log(res))
  }

  return (
    <>
      <div className="animate flex flex-col justify-around h-screen mt-20 text-white">
        <div className="flex flex-col  items-center h-96">
          <div className="bg-slate-700 w-4/6  min-h-full shadow-xl p-10 overflow-scroll rounded-md">
            <h1 className="text-2xl">Check Out</h1>
            <div className="flex flex-col space-y-8">
              {cartItems?.length === 0 ? <h1>Your cart is empty</h1> : (

                cartItems?.map((event) => (
                  true ?
                    <div
                      className="ticket  flex w-[100%] h-28 rounded-sm transition-all items-center justify-around"
                      // onClick={() => navigate(`/events/${event._id}`)}
                      key={event._id}
                    >
                      <img src={event.images} className="w-32 h-20 rounded-lg" alt="event" />
                      <span>{event.name}</span>
                      <span>{(event.ticketPrice * event.qty).toFixed(2)}</span>
                      <input
                        className="w-8 rounded text-black"
                        min={1}
                        max={event.ticketsInStock}
                        type="number"
                        onChange={(e) => modifyCart(e, event)}

                      />
                      <span>{event.qty}</span>
                      <button onClick={() => dispatch(deleteItem(event))}>
                        Delete
                      </button>

                    </div> : null
                ))

              )}
              {/*               {tickets.map((event) => (
                !event.isPaid ? 
                  <div className="ticket  flex w-[100%] h-28 rounded-sm transition-all items-center justify-around">
                    <img src={ticket.event.images} className="w-32 h-20 rounded-lg" />
                    <span>{ticket.event.name}</span>
                    <span>{ticket.event.ticketPrice}</span>
                  </div> : null
              ))} */}
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