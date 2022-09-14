const mongoose = require('mongoose')


const eventSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  startTime: {
    type: Number,
    required: true
  },
  images: {
    type: String,
    required: true
  },
  ticketPrice: {
    type: Number,
    required: true,
    //todo : remove the hardcoded default
    default: 10.00
  },
  venueId: {
    type: Number,
    required: true,
    //todo : remove the hardcoded default
    default: 1
  }
})

const event = mongoose.model('events', eventSchema)

module.exports = event