import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { addItem } from "../Store/cart"
import { getEvent } from "../Store/event"


function Event() {

  const dispatch = useDispatch()
  const params = useParams()
  const navigate = useNavigate()
  const event = useSelector(state => state.event.event)

  const [qty, setQty] = useState(1)

  useEffect(() => {
    dispatch(getEvent(params.id))

  }, [params, dispatch])

  const addToCart = async () => {
    let itemTotal = (qty * event.ticketPrice)
    await dispatch(addItem({ id: event._id, qty, itemTotal })).then(res => console.log(res))
    navigate(`/cart`)
  }


  return (
    <div className="animate flex flex-col justify-center items-center">
      <div className=" flex w-[50%] h-96 bg-black  bg-cover rounded-t-2xl mt-32" style={{ backgroundImage: `url(${event.images})` }}>
      </div>
      <div className="flex flex-col bg-slate-700 w-[50%] h-32 rounded-b-3xl text-md text-white p-4 shadow-2xl">
        <table className="w-[100%]" >
          <tbody>
            <tr className="bg-slate-900 h-10 ">
              <td>Name</td>
              <td>Description</td>
              <td>Price</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>{event.name}</td>
              <td>{event.description}</td>
              <td>{event.ticketPrice}</td>
              <td>
                {event.ticketsInStock > 0 ?

                  <div className="space-x-2">
                    <input
                      className="text-black w-10 h-7 rounded-sm"
                      type="number"
                      value={qty}
                      min="0"
                      max={`${event.ticketsInStock}`}
                      onChange={(e) => setQty(e.target.value)}
                    />
                    <button
                      onClick={() => addToCart()}
                      className="btn rounded-md p-1 transition-all bg-red-300 hover:bg-red-400">Add To Cart</button>
                  </div>
                  :
                  <div>SOLD OUT</div>

                }
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Event