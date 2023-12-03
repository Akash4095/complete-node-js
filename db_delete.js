const dbConnect = require('./dbconnect')

const deleteData = async () => {
    let data = await dbConnect()
    let result = await data.deleteOne(
        {name:"Glock-3"}
    )
    if(result.acknowledged){
        console.log('del-res',result)
        console.log('record deleted succesfully')
    }
    
}

const deleteMultipleData = async () => {
    let data = await dbConnect()
    let result = await data.deleteMany(
        {name:"Glock-2"}
    )
    if(result.acknowledged){
        console.log('all records with name Glock-2 are deleted')
    }
    
}

deleteData()
deleteMultipleData()