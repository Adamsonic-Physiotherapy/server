const express = require('express')
const router = express.Router()
const requireAuth = require('../middleware/requireAuth')

const { UserPro } = require('../controller/profileController')

// require auth for all route
router.use(requireAuth)

router.get('/userprofile', UserPro)


module.exports = router