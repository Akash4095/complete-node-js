const dbConnect = require('./dbconnect')

const insertData = async () => {
    const db = await dbConnect();
    const single = await db.insertMany(
        { name: "Hunter-350", brand: "bullet", price: "350000", category: "Bike" }
    )
    console.log('res', result)
}


const insertMultipleData = async () => {
    const db = await dbConnect();

    const result = await db.insertMany(
        [
            { name: "Glock-1", brand: "bullet", price: "350000", category: "gun" },
            { name: "Glock-2", brand: "bullet", price: "350000", category: "gun" },
            { name: "Glock-3", brand: "bullet", price: "350000", category: "gun" },
        ]
    )
    // console.log('result', result)
}



// insertData()
// insertMultipleData()