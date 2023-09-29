const fs = require('fs')
const path = require('path')



const dirPath = path.join(__dirname, "files")

console.log('path', dirPath) // it becomes path/files


for (i = 0; i < 3; i++) {
    fs.writeFileSync(dirPath + `/hello${i + 1}.txt`, "Simple text file")  // creating files
}

fs.readdir(dirPath, (err, files) => {
    console.log('files', files)  // reading files
})

// crud  (create, read, update, delete, rename)

const directoryName = path.join(__dirname, 'crud') // E:\Node Js\complete-node-js\files\crud
const filePath = `${directoryName}/apple.txt`

fs.writeFileSync(filePath, 'this is a simple textfile')  // creating file

fs.readFile(filePath, 'utf8', ((err, data) => {         // reading file
    console.log('data-->', data)
}))

fs.appendFile(filePath, "and file name is apple.txt", ((err) => {  // updating file content
    if (!err) {
        console.log('file is updated')
    }
}))

fs.rename(filePath,`${directoryName}/fruits.txt`, ((err)=>{     // renaming file name
    if(!err){
        console.log('filename is renamed')
    }
}))

// fs.unlinkSync("filename")

// fs.unlinkSync(`${directoryName}/fruits.txt`)                // deleteing the file