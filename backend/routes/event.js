const { Router } = require("express")
const express = require("express")
const seedData = require("./seed")

const Event = require("../models/event")



const router = express.Router()


router.get("/", async (req, res) => {
  try {
    const events = await Event.find({})
    res.send(events)
  } catch (error) {
    res.send(error.message)
  }

})


/* router.get("/seed", async (req, res) => {
  try {
    const events = await Event.insertMany([])
    res.send(events)
  } catch (error) {
    res.send(error.message)
  }

}) */


router.post("/", async (req, res) => {
  try {
    const eventExists = await Event.findOne(req.body)
    let response;
    if (eventExists) {
      response = "This Event Already Exists...."
    } else {
      const event = new Event(req.body)
      const save = await event.save()
      response = event
    }
    res.send(response)
  } catch (error) {
    res.send(error.message)
  }
})

router.put("/:id", async (req, res) => {
  const { id } = req.params
  try {
    const eventToUpdate = await Event.findOneAndUpdate({ _id: id }, req.body)

    res.send(eventToUpdate)
  } catch (error) {
    res.send(error.message)
  }
})



router.delete("/:id", async (req, res) => {
  const { id } = req.params
  try {
    const deletedEvent = await Event.findOneAndDelete({_id: id})
    res.send(deletedEvent)
  } catch (error) {
    res.send(error.message)
  }

})






module.exports = router