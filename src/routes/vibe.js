const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/vibe')

router.get('/', ctrl.getAllUsers)

module.exports = router