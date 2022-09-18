const mongoose = require('mongoose')


const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  headliner: {
    type: String, 
    required: true
  },
  description: {
    type: String,
    required: true
  },
  startTime: {
    type: Date,
    required: true,
    default: new Date()
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
  ticketsInStock: {
    type: Number,
    required: true,
    default: 0
  },
  category: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'users'
  },
  venueId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "venues"
    //todo : remove the hardcoded default

  }
}, {
  timestamps: true,
})

const event = mongoose.model('events', eventSchema)

module.exports = event