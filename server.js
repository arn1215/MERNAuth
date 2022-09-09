const express = require('express')
require('dotenv').config()

const app = express()
const mongodbConnection = require('./config/mongoConnection.js')
const port = 5000 

app.get("/", (req, res) => res.send("hello"))
app.listen(port, console.log(`MERN JS SERVER listening on port ${port}`))