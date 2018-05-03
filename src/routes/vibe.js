const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/vibe')

// ===============================================
// GET ROUTES FOR USER PROFILE
// ===============================================

router.get('/', ctrl.getAllUsers)

router.get('/:id', ctrl.getUserById)

router.get('/media/:id', ctrl.getUserMedia)

router.get('/friends/:id', ctrl.getFriends)


// ===============================================
// POST ROUTES TO CREATE USER PROFILE
// ===============================================


router.get('/search/:input', ctrl.search)

router.post('/profile/', ctrl.createProfile)

// ===============================================
// PUT ROUTES TO UPDATE USER PROFILE
// ===============================================

router.put('/:id', ctrl.updateProfile)

router.post('/media/:id', ctrl.uploadMedia)

router.post('/friends', ctrl.follow)

// ===============================================
// DELETE ROUTES TO DESTROY
// ===============================================

router.delete('/media/:id', ctrl.deleteMedia)

module.exports = router