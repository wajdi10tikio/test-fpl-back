const express = require('express')
const router = express.Router()
const passport = require("passport")
const { addCategorie, categoriesFetch } = require('../controllers/categorie.controllers')

// add categorie

router.post('/categorie/add', passport.authenticate('jwt', { session: false }), addCategorie)

// get categories

router.get('categories', passport.authenticate('jwt', { session: false }), categoriesFetch)

module.exports = router