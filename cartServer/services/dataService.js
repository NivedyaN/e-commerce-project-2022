
const db=require('./db')

//getAllProducts function
const getAllProducts=()=>{
   return db.Product.find()
   .then((data)=>{
      if(data){
        return{
            statusCode:200,
            result:data
        }
      }
      else{
        return{
            statusCode:404,
            message:"failed to fetch data from database"
      }
      
      }
   })

}
//add-to-wishlist
const addToWishlist=(id,title,price,description,image)=>{
     return db.Wishlist.findOne({
      id
     }).then((result)=>{
        if(result){
          return{
            statusCode:404,
            message:'product already in the wishlist',
          };
        }
        else {
          const newProduct = new db.Wishlist({
            id,
            title,
            price,
            description,
            image

           });
           newProduct.save()
           return{
            statusCode:200,
            message:'product successfully added to wishlist'
        }
      }
        
     });
};

//getWishlist
const getWishlist=()=>{
  return db.Wishlist.find()
  .then((data)=>{
     if(data){
       return{
           statusCode:200,
           result:data
       }
     }
     else{
       return{
           statusCode:404,
           message:"you'r wishlist is empty"
     };
     
     }
  });
}
//delete-item-wishlist
const deleteItemWlist=(id)=>{
  return db.Wishlist.deleteOne({
    id
  })
  .then(
    (data)=>{
      if(data){
      //  return{
      //    statusCode:200,
      //   message:"product removed from your wishlist",
      //};

      return db.Wishlist.find()
      .then((data)=>{
         if(data){
           return{
               statusCode:200,
               wishlist:data,
               message:"product removed from your wishlist"
           };
         }
         else{
           return{
               statusCode:404,
               message:"you'r wishlist is empty"
         };
         
         }
      });

      }
      else{
        return{
            statusCode:404,
            message:"product not available"
      };
    }
  }
  )
}

module.exports={
    getAllProducts,
    addToWishlist,
    getWishlist,
    deleteItemWlist
}