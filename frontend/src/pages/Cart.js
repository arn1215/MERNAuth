import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import cart, { addItem, deleteItem } from "../Store/cart"
import { getTickets } from "../Store/tickets"



function Cart() {

  const dispatch = useDispatch()
  const user = useSelector(state => state.session)
  const tickets = useSelector(state => state.tickets.tickets)
  const vanillaCartItems = useSelector(state => state.cart.cartItems)
  const cartItems = Object.values(useSelector(state => state.cart.cartItems))
  const navigate = useNavigate()

  const [sdkReady, setSdkReady] = useState(false)

  useEffect(() => {
    if (vanillaCartItems !== {}) {
      localStorage.setItem("cartItems", JSON.stringify(vanillaCartItems))
    }
    const fetchTickets = async () => {

      await dispatch(getTickets(user?.user?._id))
    }
    try {
      fetchTickets()
    } catch (e) {
      console.log(e.message)
    }



  }, [])

  const updateStorage = () => {
    try {
      localStorage.removeItem('cartItems')
      localStorage.setItem('cartItems', JSON.stringify(vanillaCartItems))
      toast.success("set")
    } catch (error) {
      toast.error(`${error.message}`)
    }
  }

  let total = 0;

  const modifyCart = async (e, event) => {
    const qty = e.target.value
    dispatch(addItem({ id: event._id, qty }))

  }

  return (
    <>
      <div className="animate flex flex-col justify-around h-screen mt-20 text-white">
        <div className="flex flex-col  items-center h-96">
          <div className="bg-slate-700 w-4/6  min-h-full shadow-xl p-10 overflow-scroll rounded-md">
            <h1 className="text-2xl">Cart</h1>
            <div className="flex flex-col space-y-8">
              {cartItems?.length === 0 ? <h1>Your cart is empty</h1> : (
                cartItems?.map((event) => {
                  total += event.ticketPrice * event.qty
                  return (
                    true ?
                      <div
                        className="ticket  flex w-[100%] h-28 rounded-sm transition-all items-center justify-around"
                        // onClick={() => navigate(`/events/${event._id}`)}
                        key={event._id}
                      >
                        <img src={event.images} className="w-32 h-20 rounded-lg" alt="event" />
                        <span>{event.name}</span>
                        <span>{(event.ticketPrice * event.qty).toFixed(2)}</span>
                        <select
                          className="w-8 rounded text-black"
                          min={1}
                          max={event.ticketsInStock}
                          type="number"
                          onChange={(e) => modifyCart(e, event)}
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                          <option selected>{event.qty}</option>
                        </select>
                        <span>{event.qty}</span>
                        <button onClick={() => dispatch(deleteItem(event))}>
                          Delete
                        </button>
                      </div> : null
                  )
                })

              )}

            </div>
            <div className="w-[100%] p-5 flex flex-col space-y-4">
              <h1 className="self-end">{`SUBTOTAL: ${total.toFixed(2)}`}</h1>
              {cartItems.length > 0 &&
                <button className=" align-bottom px-5 py-2 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg" onClick={() => navigate("/checkout")}>Checkout</button>
              }
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
                    <img alt="event" src={ticket.event.images} className="w-32 h-20 rounded-lg" />
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