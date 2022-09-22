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


module.exports = router