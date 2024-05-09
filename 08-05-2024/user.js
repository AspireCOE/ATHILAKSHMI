const mongoose=require("mongoose")
//when you create new schema , it will create new objectId
const addressSchema=new mongoose.Schema({
    street:String,
    city:String,
})
const userSchema=new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    createdAt:Date,
    updatedAt:Date,
    bestFriend:mongoose.SchemaTypes.ObjectId,
    hobbies:[String],
    address:addressSchema
})
//use that schema
module.exports=mongoose.model("User",userSchema)
