const mongoose=require("mongoose")
const User=require('./user')
main().catch(err=>console.log(err.message))
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/aspire');
//const user=await User.find({});
//const user=await User.findById("663c1d2326b19b4f31e736b5")
//const user=await User.find({name:"Athila"})
//const user=await User.findOne({name:"Athila"})
//const user=await User.exists({name:"Athila"})
const user=await User.findOne({name:"Athila"})
console.log(user)
}
//const user1= new user({name:"Athila",age:22})
//user1.save(); //save() is promises
//new version not neccesaary to use save()