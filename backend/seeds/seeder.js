const mongoose = require('mongoose')
const dotenv = require('dotenv')
const users = require('./users')
const events = require('./events')
const User = require('../models/user')
const Event = require('../models/event') 
const Order = require("../models/order")
const Venue =  require("../models/venue")
const connectDB = require('../config/mongoConnection')

require('dotenv').config()

connectDB()

const importData = async () => {
  try {
    await Order.deleteMany()
    await Event.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users)

    const adminUser = createdUsers[0]._id

    const sampleEvents = events.map(event => {
      return {...event, creatorId: adminUser}
    })

    await Event.insertMany(sampleEvents)

    console.log("data imported W")
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Event.deleteMany()
    await User.deleteMany()
    console.log("data destroyed W!")
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

if (process.argv[2] === "-destroy") {
  destroyData()
} else {
  importData()
}