const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({

  userName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isverified: {
    type: Boolean,
    default: false,
  },
})

const user = mongoose.model('users', userSchema)

module.exports = userSchema