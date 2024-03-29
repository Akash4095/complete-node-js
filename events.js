const express = require('express')
const EventEmmiter = require('events')
const app = express()
const event = new EventEmmiter()


let count = 0
event.on("countAPI", () => {
    count++
    console.log("event called")
})

app.get("/", (req, res) => {
    res.send("api called")
    event.emit("countAPI")  // generating event
})

app.get("/search", (req, res) => {
    res.send("search api called")
    event.emit("countAPI")
})

app.get("/update", (req, res) => {
    res.send("update api called")
    event.emit("countAPI")
})

app.listen(5000)