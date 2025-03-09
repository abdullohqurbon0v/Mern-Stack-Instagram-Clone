const express = require('express')
const userController = require('../controllers/user.controller')
const router = express.Router()

router.post('/create', userController.create)
router.post('/login', userController.login)

module.exports = router