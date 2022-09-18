const { Router } = require("express")
const express = require("express")


const ticket = require("../models/ticket")



const router = express.Router()


router.get("/:userId", async (req, res) => {
  const {userId} = req.params
  try {
    const tickets = await ticket.find({customerId: userId})
    res.send(tickets)
  } catch (error) {
    res.send(error.message)
  }

})

/* router.get("/:id", async (req, res) => {
  const { id } = req.params
  try {
    const tickets = await ticket.findOne({ _id: id })
    res.send(tickets)
  } catch (error) {
    res.send(error.message)
  }

})
 */
/* router.get("/seed", async (req, res) => {
  try {
    const tickets = await ticket.insertMany([])
    res.send(tickets)
  } catch (error) {
    res.send(error.message)
  }

}) */


router.post("/", async (req, res) => {
  try {
    let response;
      const newTicket = new ticket(req.body)
      const save = await newTicket.save()
    res.send(save)
  } catch (error) {
    res.send(error.message)
  }
})

router.put("/:id", async (req, res) => {
  const { id } = req.params
  try {
    const ticketToUpdate = await ticket.findOneAndUpdate({ _id: id }, req.body)

    res.send(ticketToUpdate)
  } catch (error) {
    res.send(error.message)
  }
})



router.delete("/:id", async (req, res) => {
  const { id } = req.params
  try {
    const deletedticket = await ticket.findOneAndDelete({ _id: id })
    res.send(deletedticket)
  } catch (error) {
    res.send(error.message)
  }

})






module.exports = router