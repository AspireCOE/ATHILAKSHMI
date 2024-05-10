const mongoose=require("mongoose")
//when you create new schema , it will create new objectId
const addressSchema=new mongoose.Schema({
    street:String,
    city:String,
})
const userSchema=new mongoose.Schema({
    name:String,
    age:{
        type:Number,
        min:1,
        max:120,
        //custom validation
        validate:{
            validator: v=>v%2===0, //check age is even num, === is the strict equality operator, it checks both the value and the type.
            //if validation fails only
            message:props=>`${props.value} is not an even num`
        }
        //props: This is an object that contains various properties related to the field being validated.
        // It typically includes information such as the field's value, its path, and its schema type.
//props.value: This specifically refers to the value of the field being validated. 
//For example, if you're validating the age field of a user document, props.value would represent the age value provided for validation.
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        minLength:10
    },
    createdAt:{
        type:Date,
        immutable:true, //cannot be changed once set
        default:()=>Date.now() //defaults to the current date and time.use func becoz when they crete at that time it gets the time
    },
    updatedAt:{
        type:Date,
        default:()=>Date.now()
    },
    bestFriend:mongoose.SchemaTypes.ObjectId,
    hobbies:[String],
    address:addressSchema
})
//use that schema
module.exports=mongoose.model("User",userSchema)
