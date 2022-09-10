const { Router } = require('express')
const express = require('express')
const router = express.Router()
const User = require("../models/user")
const bcrypt = require('bcrypt')



router.post("/register", async (req, res) => {
  
  try {
    //check to see if its a duplicate user
    const existingUser = await User.findOne({email: req.body.email})
    if(existingUser){
     return res.status(200).send({success: false, message: "User Already Exists"})
    }
    
    const password = req.body.password
    const saltRounds = 10
    const salt = await bcrypt.genSalt(saltRounds)

    const hashedPassword = await bcrypt.hash(password, salt)
    req.body.password = hashedPassword

    const newUser = new User(req.body)
    const save = await newUser.save()
    res.status(200).send({
      success: true,
      message: `User Registered successfully`
    })

  } catch (error) {
    res.status(400).send(error)
  }

})


router.post("/login", async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({
      email,
      
    })
    if (user) {
      const passwordsMatched = await bcrypt.compare(password, user.password)
      if (passwordsMatched) {

        res.status(200).send({
          success: true,
          message: "User Login Successful",
          data: user,
        })
      } else {
        res
        .status(200)
        .send({success: false, message: "Try Again", data: user})
      }
    } else {
      res.status(200).send({ success: false, message: "User login failed", data: null, })
    }
  } catch (error) {
    res.status(400).send(error)
  }

})

module.exports = router