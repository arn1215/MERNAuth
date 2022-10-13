import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { addOrder, orderPaid } from "../Store/order"
import toast from 'react-hot-toast'
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'
import { clearCart } from "../Store/cart"
import { useNavigate } from "react-router-dom"

function CheckOut() {
  const cart = useSelector(state => state.cart)
  const orderItems = cart.cartItems
  const userId = useSelector(state => state.session.user._id)
  const orderObj = useSelector(state => state.order)


  const [isConfirmed, setIsConfirmed] = useState(false)
  const [approved, setApproved] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    console.log(approved)
    if (approved) {
      toast.success("Order Approved!")
    }

  }, [approved])


  const totalFunc = () => {
    let total = 0;
    let arr = Object.values(orderItems)
    arr.forEach(item => {
      total += item.itemTotal
    })
    return total
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    const order = {
      userId,
      orderItems,
      paymentMethod: "paypal",
      totalPrice: totalRes.toFixed(2)
    }
    console.log(order)
    dispatch(addOrder(order))
    setIsConfirmed(true)

  }
  const totalRes = totalFunc()

  const createOrder = (data, action) => {
    return action.order.create({
      purchase_units: [
        {
          description: 'Ticket',
          amount: {
            currency_code: 'USD',
            value: totalRes
          },
        },
      ],
      application_context: {
        shipping_preference: 'NO_SHIPPING'
      }
    }).then(orderId => { return orderId })
  }

  const onSuccess = () => {
    toast.success("Payment Accepted. Thank You.")
  }

  const onApprove = (data, actions) => {
    return actions.order.capture().then(details => {
      setApproved(true)
      onSuccess()
      dispatch(orderPaid(orderObj.order._id))
      dispatch(clearCart())
      setIsConfirmed(false)
      navigate("/cart")
    })
  }

  const onError = (data, actions) => {

    console.log("error happened")
    toast.error(`${data}`)
  }


  return (
    <div className="animate flex flex-col justify-center items-center space-y-10 h-screen">
      <PayPalScriptProvider
        options={{
          "client-id":
            "AZ7cRFCT-EXswyt3kgKLhhOh4JNMESzZFR8BmOEwzdLauZ2yeR353j5jEU91mPitu-O-QZFCvrb8w9Dm",
          components: 'buttons',
          currency: "USD",
        }}
      >

        <div className="animate flex flex-col justify-center items-center p-10 text-white bg-slate-400 rounded-xl shadow-xl space-y-5">
          {Object.values(orderItems).map(item => {
            return (
              <div className="flex items-center space-x-10">
                <img src={item.images} alt='event' className="h-20 w-20 rounded-xl" />
                <p>{item.name} x {item.qty}</p>
                <span>{item.ticketPrice}</span>
              </div>
            )
          })}
          <span>Total: {totalRes.toFixed(2)}</span>
          {!isConfirmed &&
            <button onClick={onSubmit} className="px-5 py-2 text-sm font-medium text-white bg-blue-600  hover:bg-blue-700  transition-all rounded-lg w-64">Confirm Order</button>

          }
          {isConfirmed &&
            <PayPalButtons style={{ layout: 'vertical', shape: 'rect', color: 'white', size: 'full' }} createOrder={createOrder} onApprove={onApprove} onError={onError}>
            </PayPalButtons>
          }
        </div>
      </PayPalScriptProvider>
    </div >
  )
}

export default CheckOut