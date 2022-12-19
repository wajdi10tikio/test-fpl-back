const express = require('express')
const router = express.Router()
const passport = require("passport")
const { addLivre, livreFetch } = require('../controllers/livre.controllers')


// add livre
router.post('/livre/add', passport.authenticate('jwt', { session: false }), addLivre)


// get livre
router.get('/livres', passport.authenticate('jwt', { session: false }), livreFetch)

module.exports = router