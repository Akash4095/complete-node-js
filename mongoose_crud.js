const mongoose = require('mongoose')


mongoose.connect("mongodb://localhost:27017/e-comm") // connecting db with mongoose
const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
});

const saveInDB = async () => {
    const ProductsModel = mongoose.model('products', ProductSchema) // model connect nodejs with mongodb
    let data = new ProductsModel({
        name: "MI-19",
        price: 52000,
        brand: "mi",
        category: "mobile"
    })
    let result = await data.save()
    console.log("result-->", result)
}



const updateInDB = async () => {
    const ProductsModel = mongoose.model('products', ProductSchema);
    let data = await ProductsModel.updateOne(
        { name: "MI-19" },
        {
            $set: { price: 65000, name: "MI-16" }
        }
    )
    console.log("updated result-->", data)
}

const deleteInDB = async () => {
    const Products = mongoose.model('products', ProductSchema);
    let data = await Products.deleteOne({ name: "m8" })
    console.log('delete-res', data)
}

const findInDB = async () => {
    const Products = mongoose.model('products', ProductSchema)
    let data = await Products.find()
    console.log('find-data', data)
}

// saveInDB()
// updateInDB()
// deleteInDB()
// findInDB()
