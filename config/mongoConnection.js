const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser : true})

const connection = mongoose.connection

connection.on('error', (error) => {
  console.log(error)
})

connection.on('connected', (msg) => {
  console.log("Mongo DB connection was successful.")
})