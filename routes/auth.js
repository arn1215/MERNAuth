const { Router } = require('express')
const express = require('express')
const router = express.Router()
const User = require("../models/user")



router.post("/register", async (req, res) => {

  try {
    const newUser = new User(req.body)
    await newUser.save()
    res.status(200).send({
      success: true,
      message: "User Registered successfully"
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
      password,
    })
    if (user) {
      res.status(200).send({ success: true, message: "User logged in successfully", data: user, })
    } else {
      res.status(200).send({ success: false, message: "User login failed", data: null, })
    }
  } catch (error) {
    res.status(400).send(error)
  }

})

module.exports = router