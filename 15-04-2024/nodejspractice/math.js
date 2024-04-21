const add=(a,b)=>a+b;
const sub=(a,b)=>a-b;
const mul=(a,b)=>a*b;
const div=(a,b)=>a/b;
module.exports={add,sub,mul,div} //export
const math=require('./math') //import
console.log(math.add(3,3))
//const {add,sub,mul,div}=require(''./math') destructure another way to import
//exports.add=(a,b)=>a+b; this is alos one method to export