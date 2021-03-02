const express = require('express')
const router = express.Router()

const { protect } = require('../middleware/auth')
const { getPrivateData } = require('../controllers/private')

// router.route('/').get(protect, getPrivateData)

router.get('/', (req, res) => {
    res.send('Hello World')
})

module.exports = router