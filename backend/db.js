
const  moongose  = require('mongoose');

const uri = "mongodb+srv://trendhub:admin@todo.bzgw1rz.mongodb.net/"
// const uri = "mongodb://localhost:27017/productdb?directConnection=true";
async function main() {
    await moongose.connect(uri);
    console.log("connected")
    }

module.exports = main;