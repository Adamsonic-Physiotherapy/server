const express = require('express')
const router = express.Router()

const {  loginUser, SigninLogins } = require('../controller/userController')

router.post ('/login', loginUser)
router.post ('/signup', SigninLogins)


module.exports = router