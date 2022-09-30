const { Router } = require("express")
const express = require("express")


const Order = require("../models/order")



const router = express.Router()



router.post("/", async (req, res) => {
  const {
    orderItems,
    paymentMethod,
    totalPrice,
    userId
  } = req.body

  if (orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error("No order items")
  } else {
    const order = new Order({
      orderItems,
      userId,
      paymentMethod,
      totalPrice,
    })

    const newOrder = await order.save()
    res.status(201).json(newOrder)
  }

})

router.put("/:id", async (req, res) => {
  const { id } = req.params

  const update = await Order.findByIdAndUpdate({ _id: id }, { isPaid: true })

  res.send(update)

})


router.get("/user/:id", async (req, res) => {
  const { userId } = req.body
  let events = []
  try {
    const orders = await Order.find({ user: userId, isPaid: true }).select('orderItems')
    orders.forEach(order => {
      for (let key in order.orderItems) {
        events.push(order.orderItems[key])
      }
    })
    res.send(events)
  } catch (error) {
    res.send(error)
  }
})

module.exports = router