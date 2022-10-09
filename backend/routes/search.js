.find({ $text: { $search: searchString } })

const { Router } = require("express")
const express = require("express")


const Event = require("../models/event")



const router = express.Router()


router.get("/", async (req, res) => {
  try {
    const events = await Event.find({}).limit(9)
    res.send(events)
  } catch (error) {
    res.send(error.message)
  }

})


module.exports = router