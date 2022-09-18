const mongoose = require('mongoose')
const dotenv = require('dotenv')
const users = require('./users')
const events = require('./events')
const User = require('../models/user')
const Event = require('../models/event') 
const Order = require("../models/order")
const connectDb = require