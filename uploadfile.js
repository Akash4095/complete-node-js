const express = require('express')
const multer = require('multer')
const app = express()

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, res, cb) {
            cb(null, 'uploads')
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + "-" + Date.now() + ".jpeg")
        }
    })
}).single("user")


app.post('/upload', upload, (req, res) => {
    res.send('file uploaded')
})

app.listen(5000)