const path = require('path')
const express = require('express')
const reqFilter = require('./middleware')
const app = express()
const route = express.Router()


// app.use(reqFilter)  // application level middleware

route.use(reqFilter)  // single or multiple route middleware


app.get('', ((req, res) => {
    res.send("Welcome to Home Page")
}))

app.get('/users', ((req, res) => {
    res.send('Welcome To Users Page')
}))

route.get('/about', ((req, res) => {
    res.send('Welcome To About Page')
}))

route.get('/contact', ((req, res) => {
    res.send('Welcome To Contact Page')
}))

app.use('/',route)

app.listen(5000)

