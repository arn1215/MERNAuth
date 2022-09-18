const bcrypt = require('bcryptjs')


const users = [
  {
    name: 'Admin User',
    email: 'yo@whatsup.com',
    isAdmin: true
  },
  {
    name: 'Ali',
    email: 'ali@whatsup.com',
    password: bcrypt.hashSync('password', 10)
  },
  {
    name: 'Jimi',
    email: 'jimi@whatsup.com',
    password: bcrypt.hashSync('password', 10)
  },
]


module.exports = users