const mongoose = require('mongoose')


const ticketSchema = new mongoose.Schema({

  customerId: {
    type: String,
    required: true
  },
  event: {
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
  },
  cost: {
    type: Number,
    required: true
  },
  isPaid: {
    type: Boolean,
    default: false,
    required: true
  },
},)

const ticket = mongoose.model('tickets', ticketSchema)

module.exports = ticket