const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/vibe')

router.get('/', ctrl.getAllUsers)

router.get('/:id', ctrl.getUserById)

router.get('/images/:id', ctrl.getUserImages)

router.get('/friends/:id', ctrl.getFriends)

router.post('/profile/:id', ctrl.createProfile)

//update
router.put('/:id', ctrl.updateProfile)

module.exports = router