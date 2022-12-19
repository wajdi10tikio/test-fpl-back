const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const helmet = require("helmet")
const routerClient = require('./routes/client')
const routerCategorie = require('./controllers/categorie.controllers')
const routerLivre = require('./controllers/livre.controllers')
const passport = require("passport")
const app = express()

app.use(express.json())

app.use(helmet());

app.use(morgan('tiny'))

//routes

app.use('/api', routerClient)
app.use('/api', routerCategorie)
app.use('/api', routerLivre)

// passport
app.use(passport.initialize())
require('./security/Passport')(passport)


// connect to db

mongoose.connect("mongodb://localhost:27017/test-fpl", {
  useNewUrlParser: true
})
  .then(() => console.log("db connected"))
  .catch(err => console.log(err.message))




app.listen(6100, console.log("this app working in port 6100"))