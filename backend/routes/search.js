
const { Router, query } = require("express")
const express = require("express")


const Event = require("../models/event")



const router = express.Router()


router.get("/:query", async (req, res) => {
  try {
    const events = await Event.find({ $text: { $search: req.params.query } })
    res.send(events)
  } catch (error) {
    res.send(error.message)
  }
})


module.exports = router