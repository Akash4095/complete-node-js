const http = require('http')

const data = [
    { name: "Akash", email: "akash4095@gmail.com", mobile: "8095595412" },
    { name: "Sam", email: "sam@gmail.com" },
    { name: "Mak", email: "mak@gmail.com" }
]

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.write(JSON.stringify(data))
    res.end()
}).listen(5000)