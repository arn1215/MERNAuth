
const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    mongoose.connect("mongodb://mongo:WXqbNNEMEwp1sW9j2Q6c@containers-us-west-99.railway.app:5637", { useNewUrlParser: true })

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