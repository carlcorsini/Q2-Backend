const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/vibe')

// ===============================================
// GET ROUTES FOR USER PROFILE
// ===============================================

router.get('/', ctrl.getAllUsers)

router.get('/:id', ctrl.getUserById)

router.get('/images/:id', ctrl.getUserImages)

router.get('/friends/:id', ctrl.getFriends)

// ===============================================
// POST ROUTES TO CREATE USER PROFILE
// ===============================================

router.post('/profile/', ctrl.createProfile)

// ===============================================
// PUT ROUTES TO UPDATE USER PROFILE
// ===============================================

router.put('/:id', ctrl.updateProfile)

router.post('/images/:id', ctrl.uploadImage)

router.post('/friends', ctrl.follow)

// ===============================================
// DELETE ROUTES TO DESTROY
// ===============================================

router.delete('/images/:id', ctrl.deleteImage)

module.exports = router