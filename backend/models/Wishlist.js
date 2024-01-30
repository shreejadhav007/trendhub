const { Schema, default: mongoose } = require("mongoose");

const WishlistSchema = new Schema({
   
        id:{
            type:Number,
            required:true,
            unique:true
        },
        title:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
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
            required:true
        },
        thumbnail:{
            type:String,
            required:true
        },
        images:{
            type:Array,
            required:true
        },
        
    
    })

const wishlists = mongoose.model('wishlist',WishlistSchema);
// wishlist.createIndexes()

module.exports= wishlists