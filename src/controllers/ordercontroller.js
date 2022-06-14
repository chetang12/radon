const UserModel= require("../models/userModel")
const productModel=require("../models/productModel")
const orderModel=require("../models/orderModel")


const createOrder= async function (req, res) {
    let userId=req.body.userId
    let productId=req.body.productId
    let appTypeFree=req.isFreeAppUser 
    let orderDate=Date()
    let user=await UserModel.findById(userId);
    let product= await productModel.findById(productId);
    if(!user){
        res.send({msg:"user does not exist.please provide valid userId"})
      }
      else if(!product){
        res.send({msg :"product does not exist.please provide valid productId"})
    }
    else if(!appTypeFree && user.balance < product.price){
      res.send({msg:"user does not have enough balance to purches the product"})
 }
   if(appTypeFree){
  orderAmount=0
} else{
  //paid app
  // orderAmount=product.price
  if( user.balance >= product.price){
    //sufficient balance
    user.balance =user.balance - product.price
    let updateuser =await user.save()
    // let orderCreated await orderModel.create(order)
  }
}
let orderDetails={
  userId:userId,
  productId:productId,
  Amount:orderAmount,
  isFreeAppUser:appTypeFree,
  date:orderDate      
}
let orderCreated=await orderModel.create(orderDetails)
if(!appTypeFree){
   await UserModel.findByIdAndUpdate({_id:userId},{balance:user.balance - product.price}) 
 
}
res.send({msg:orderCreated})
}
module.exports.createOrder=createOrder
