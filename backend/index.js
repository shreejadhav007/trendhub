const main = require('./db')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
const products = require('./models/Product');

const cart = require('./models/Cart');
const wishlists = require('./models/Wishlist');
const orders = require('./models/Orders');




const app = express();
const port = 3001;
main()
app.use(express.json());
app.use(cors({
     origin:"https://trendii.netlify.app/",
    methods:["GET","POST","PUT","DELETE"]
}));

// all cart functions

app.get('/findcart',async(req,res)=>{
    const count = await cart.find({}).count()
    res.send({count})
    // console.log(count)
})

app.post('/addtocart/:id',async(req,res)=>{
    const id =req.params.id;
    const url = await fetch(`https://dummyjson.com/products/${id}`)
    const data  = await url.json();
    let cartadd  = await cart.create(data).catch((e)=> console.log(e))
    
    console.log(cartadd)
})

app.get('/cartitems',async(req,res)=>{

    const items = await cart.find({})
    // console.log({items})
    res.send(items)
    // return items;
})

app.delete('/deletecartitem/:id',async(req,res)=>{
    const id = req.params.id
    const carts = await cart.findOneAndDelete({id:id})
    // console.log(carts)
})

app.post('/updatecart/:id',async(req,res)=>{
    const id= req.params.id
    const {updatedprice,stock,lot} = req.body
    const updatecart = await cart.findOneAndUpdate({id:id},{price:updatedprice,stock:(stock-lot),quantity:lot})
    // console.log(updatecart);
})



// all wishlist items
app.get('/findwishlist',async(req,res)=>{
    const count = await wishlists.find({}).count()
    res.send({count})
    // console.log(count)
})

app.post('/addtowishlist/:id',async(req,res)=>{
    const id =req.params.id;
    const url = await fetch(`https://dummyjson.com/products/${id}`)
    const data  = await url.json();
    let wishlistadd  = await wishlists.create(data).catch((e)=> console.log(e))
    
    console.log(data)
})

app.get('/wishlistitems',async(req,res)=>{

    const items = await wishlists.find({})
    // console.log(items)
    res.send(items)
    // return items;
})

app.delete('/deletewishlist/:id',async(req,res)=>{
    const id = req.params.id
    const wishlist = await wishlists.findOneAndDelete({id:id})
    // console.log(wishlist)
})

app.post('/orderitem/:id',async(req,res)=>{
    const id = req.params.id
    const {lot} = req.body
    // console.log(lot)
    const url = await fetch(`https://dummyjson.com/products/${id}`)
    const data  = await url.json();
    const order = await orders.create({...data,quantity:lot})
    
})

app.get('/orders',async(req,res)=>{
    const ordrs = await orders.find({});
    res.send(ordrs)
    
    // console.log(ordrs)
})

app.get('/',(req,res)=>{
    res.status(200).send("hellow")
})


app.listen(port,()=>{console.log("Your website is live");})
