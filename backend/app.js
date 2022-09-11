const express = require('express')
require('dotenv').config()
const cors = require('cors')
const morgan = require('morgan')



const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

const authRoute = require("./routes/auth")
app.use("/api/auth", authRoute)
const mongodbConnection = require('./config/mongoConnection.js')
const port = 5000 

app.get("/", (req, res) => res.send("hello"))
app.listen(port, console.log(`MERN JS SERVER listening on port ${port}`))