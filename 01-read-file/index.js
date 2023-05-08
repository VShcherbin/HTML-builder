const path = require("path");
const fs = require("fs");

const readStream = fs.createReadStream(path.join(__dirname, "text.txt"));

readStream.on("data", chunk =>{
    console.log(chunk.toString())
})


// let textPath = path.join(__dirname, "text.txt");
// fs.readFile(textPath,"utf-8", (err, content) =>{
//     if(err) throw err;
//     console.log(content);
// });