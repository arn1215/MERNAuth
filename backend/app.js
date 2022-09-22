const express = require('express')
require('dotenv').config()
const cors = require('cors')
const morgan = require('morgan')
const connectDB = require("./config/mongoConnection")

connectDB()

const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

//ROUTES
const authRoute = require("./routes/auth")
const eventRoute = require("./routes/event")
const ticketRoute = require("./routes/ticket")
const orderRoute = require("./routes/order")
app.use("/api/auth", authRoute)
app.use("/api/events", eventRoute)
app.use("/api/tickets", ticketRoute)
app.use("/api/orders", orderRoute)

//paypal route
app.get('/api/config/paypal', (req, res) => res.json({ clientId: process.env.PAYPAL_CLIENT_ID }))


const mongodbConnection = require('./config/mongoConnection.js')
const port = 5000

app.get("/", (req, res) => res.send("hello"))
app.listen(port, console.log(`MERN JS SERVER listening on port ${port}`))