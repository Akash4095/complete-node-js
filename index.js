const app = require('./app')
const fs = require('fs')

console.log('first')
console.log('x', app.x)
fs.writeFileSync("hello0", "akash") 

console.log("....>", __dirname)   // finding directoryname

