const mongoose=require("mongoose")
const User=require('./user')
main().catch(err=>console.log(err))
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/aspire');
const user=await User.create({
    name:"Athila",
    age:22,
email:"athi@gmail.com",
hobbies:["Coding","Cooking"],
address:{
    street:"Tenkasi"
}})
user.createdAt=9
console.log(user)
}
//const user1= new user({name:"Athila",age:22})
//user1.save(); //save() is promises
//new version not neccesaary to use save()