import { useEffect, useState } from "react"


function CheckOut() {
  const [paymentMethod, setPaymentMethod] = useState("")

  useEffect(() => {

  }, [])

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(paymentMethod)

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