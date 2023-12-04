const express = require('express')
const dbConnect = require('./dbconnect')
const mongodb = require('mongodb')
const app = express();

app.use(express.json()) // to get posted  body data

// get API

app.get('/', async (req, res) => {
    let data = await dbConnect()
    data = await data.find().toArray()
    // console.log('data', data)
    res.send(data)
})


// Post API

app.post('/', async (req, res) => {
    // console.log(req.body)
    let data = await dbConnect()
    let result = await data.insertOne(req.body)
    res.send(result)
})

app.put('/', async (req, res) => {
    let data = await dbConnect()
    let result = await data.updateOne(
        { name: "Note20" },
        { $set: req.body }
    )
    res.send({ result: "updated" })
})

app.delete('/:id', async (req, res) => {
    console.log('req.params.id', req.params.id)
    let data = await dbConnect()
    let result = await data.deleteOne(
        { _id: new mongodb.ObjectId(req.params.id) } // for id make object id using mongodb
    )
    res.send(result)
})


app.listen(5000)