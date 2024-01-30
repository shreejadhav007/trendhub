const { Schema, default: mongoose } = require("mongoose");

const CartSchema = new Schema({
    id:{
        type:Number,
        // required:true,
    },
    title:{
        type:String,
        // required:true,
    },
    description:{
        type:String,
        // required:true
    },
    price:{
        type:Number,
        // required:true
    },
    rating:{
        type:Number,
        // required:true
    },
    category:{
        type:String,
        // required:true
    },
    discountPercentage:{
        type:Number,
        // required:true
    },
    stock:{
        type:Number,
        // required:true
    },
    brand:{
        type:String,
        // required:true
    },
    thumbnail:{
        type:String,
        // required:true
    },
    images:{
        type:Array,
        // required:true
    },
    quantity:{
        type:Number,
        default:1
    },
    

})
const orders = mongoose.model('orders',CartSchema)
orders.createIndexes()

module.exports= orders;