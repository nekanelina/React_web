const express = require('express')
const { registerUser, loginUser, updateUser } = require('../controllers/userController')

const router = express.Router()

// POST register user
router.post('/register', registerUser)

// POST login user
router.post('/login', loginUser)

// PUT update user
router.put('/update', updateUser)

module.exports = router