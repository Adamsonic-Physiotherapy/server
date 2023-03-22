const express = require('express')
const router = express.Router()

const {  loginUser,OTP, SigninCredentials, SigninLogins } = require('../controller/userController')

router.post ('/login', loginUser)
router.post ('/signup-logins', SigninLogins)


module.exports = router