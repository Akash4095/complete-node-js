const dbConnect = require('./dbconnect')

const updateData = async () => {
    let data = await dbConnect()
    let result = await data.updateOne(
        { name: "hunter-360" }, {
        $set: { name: "hunter-350", price: 240000 }
    }

    )
    console.log('result', result)
}

const updateMultipleData = async ()=>{
    let data = await dbConnect()
    let result = await data.updateMany(
        { name: "Glock-1" }, {
            $set: { name: "Glock-s1", brand:"German", price:"95000" }
        }
    )
}

// updateData()
// updateMultipleData()