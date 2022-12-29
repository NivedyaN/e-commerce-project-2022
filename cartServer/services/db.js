const { numberFormat } = require('highcharts');
const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/onlineCart',()=>{
    console.log('mongodb connected successfully');
})
//product schema
const Product=mongoose.model('Product',{   
id:Number,
title:String,
price:Number,
description:String,
category:String,
image:String,

rating:{
    rate:Number,
    count:Number

}
})
// wishlist schema
const Wishlist=mongoose.model('Wishlist',{  
id:Number,
title:String,
price:Number,
description:String,
image:String,

})

module.exports={
    Product,
    Wishlist
}
