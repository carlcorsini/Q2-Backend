const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/vibe')

router.get('/', ctrl.getAllUsers)

router.get('/:id', ctrl.getUserById)

module.exports = router