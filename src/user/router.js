const userSignup = require('./signup')
const userRouter = require('express').Router()

userRouter.post('/signup', userSignup)

module.exports = userRouter