import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { addOrder } from "../Store/order"
import toast from 'react-hot-toast'

function CheckOut() {
  const orderItems = useSelector(state => state.cart.cartItems)
  const userId = useSelector(state => state.session.user._id)
  const [paymentMethod, setPaymentMethod] = useState("")
  const dispatch = useDispatch()
  useEffect(() => {
    console.log(userId)
  }, [])


  const total = () => {
    let total = 0
    let arr = Object.values(orderItems)
    arr.forEach(item => {
      total += item.itemTotal
    })
    return total
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!paymentMethod) {
      toast.error("Please Enter Payment Method")
    } else {
      const order = {
        userId,
        orderItems,
        paymentMethod,
        totalPrice: total().toFixed(2)
      }
      console.log(order)
      dispatch(addOrder(order))
      toast.success("Payment Method Added")
    }
  }
  return (
    <div className="animate flex flex-col justify-center items-center mt-20">
      <div>CheckOut</div>
      <input type='radio' value='paypal' name='payment' id='paypal' onChange={(e) => setPaymentMethod(e.target.value)} />
      <label htmlFor='paypal'>
        Paypal
      </label>
      <input type='radio' value='stripe' name='payment' id='stripe' onChange={(e) => setPaymentMethod(e.target.value)} />
      <label htmlFor='stripe'>
        Stripe
      </label>
      <button onClick={onSubmit} type="submit" className="bg-slate-300">Submit</button>
    </div>
  )
}

export default CheckOut