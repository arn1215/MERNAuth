import { useEffect, useState } from "react"
import { useSelector } from 'react-redux'


function CheckOut() {
  const orderItems = useSelector(state => state.cart.cartItems)
  const [paymentMethod, setPaymentMethod] = useState("")

  useEffect(() => {

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
    const order = {
      orderItems,
      paymentMethod,
      totalPrice: total().toFixed(2)
    }
    console.log(order)
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