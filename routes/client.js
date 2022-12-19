const express = require('express')

const router = express.Router()

const passport = require("passport")
const { Register, Login } = require('../controllers/client.controllers')


// adduser
router.post('/client/register', Register)

// login
router.post('/login', Login)

module.exports = router