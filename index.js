const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()

// console.log('first')
// console.log('x', app.x)
// fs.writeFileSync("hello", "akash") // creating file withname hello

// console.log("....>", __dirname)   // finding directoryname

// createing server

const http = require('http') // http handles servers req and res

const dataControl = (req, res) => {
    res.write("<h1>Hello i am Akashaaaa</h1> <input />");
    res.end()
}
http.createServer(dataControl).listen(4500);


// accessing html folder
const htmlpath = path.join(__dirname, "html")

// console.log('htmlpath', htmlpath)
// app.use(express.static(htmlpath))

app.set('view engine', 'ejs')

app.get('', (req, resp) => {
    resp.sendFile(`${htmlpath}/index.html`)
})
app.get('/about', (req, resp) => {
    resp.sendFile(`${htmlpath}/about.html`)
})

app.get('/profile', (req, resp) => {
    const user = {
        name: "Akash",
        email: "abbc@test.com",
        city: "Bidar",
        skills: ['php', 'js', 'c++']
    }
    resp.render('profile', { user })  // render is to render html file
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('*', (req, resp) => {
    resp.sendFile(`${htmlpath}/pageNotFound.html`)  // sendFile is to render html file
})

app.listen(5000)

