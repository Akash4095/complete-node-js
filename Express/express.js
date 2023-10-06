const express = require('express')
const app = express()


// app.get('', (req, res) => {
//     res.send('Hello This Is Home Page')
// })

app.get('', (req, res) => {
    res.send(`<h1>Hello This Is Home Page</h1> <a href="/about" >Go To About Page</a>`)
})

app.get('/about', (req, res) => {
    res.send(`
    <input type="text" placeholder="User Name" />
    <button>Click Me</button>
    <a href="/" >Go To Home Page</a
    `)
})

app.get('/help', (req, res) => {
    res.send({
        name: "Akash",
        age: 26,
        email: "akashathnure40@gmail.com"
    })
})

app.listen(5000);
