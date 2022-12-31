
const mongoose = require('mongoose')
require('dotenv').config()
const db = process.env.MONGO_URI
const connectDB = async () => {
  try {
    mongoose.connect(db, { useNewUrlParser: true })

    const connection = mongoose.connection


    connection.on('error', (error) => {
      console.log(error)
    })

    connection.on('connected', (msg) => {
      console.log("Mongo DB connection was successful.")
    })


  } catch (error) {
    console.error(`${error.message}`)
    process.exit(1)
  }
}

module.exports = connectDB