const express = require('express')
const router = express.Router()
const requireAuth = require('../middleware/requireAuth')

const { SingleUser, AddCart, Proceed } = require('../controller/profileController')

// require auth for all route
router.use(requireAuth)

router.get('/', SingleUser)
router.post('/cart', AddCart )
router.post('/proceed', Proceed )

module.exports = router