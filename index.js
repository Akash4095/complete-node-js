const app = require('./app')
const fs = require('fs')

console.log('first')
// console.log('x', app.x)
// fs.writeFileSync("hello", "akash") // creating file withname hello

console.log("....>", __dirname)   // finding directoryname

// createing server

const http = require('http') // http handles servers req and res

const dataControl = (req, res) => {
    res.write("<h1>Hello i am Akashaaaa</h1> <input />");
    res.end()
}
http.createServer(dataControl).listen(4500);


