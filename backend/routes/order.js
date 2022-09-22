const { Router } = require("express")
const express = require("express")


const Order = require("../models/order")



const router = express.Router()



router.post("/orders", async (req, res) => {
  const {
    orderItems,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body

  if (orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error("No order items")
    return
  } else {
    const order = new Order({
      orderItems,
      user: req.user,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice
    })

    const newOrder = await order.save()
    res.status(201).json(newOrder)
  }

  const order = await Order.insertMany({})
})
