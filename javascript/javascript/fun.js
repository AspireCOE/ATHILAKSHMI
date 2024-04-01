function funprac(){
    console.log("hello");
}
funprac();
let prac=function(){
    console.log("anonymous function");
}
prac();
var prac1=()=>{
    return "Arrow function";

}
console.log(prac1());
/*
callback function
function UserInput(Callback){
    const data=prompt("enter name:");
    Callback(data);
}
function Display(data){
    console.log(Name:${data});
}
UserInput(Display);
*/
/*
for each and map method
map syntax:
var newArray = array.map(function(currentValue, index, array) {
  // code to be executed for each element
  return result;
});
for each syntax:
array.forEach(function(currentValue, index, array) {
  // code to be executed for each element
});
*/
const names = ["Rohit","Aakash","Vinay","Ashish","Vasu"];

const newName =names.map(function(name, index, array) {
  return name + "DEV";
});
console.log(newName); // Output: ['RohitDEV', 'AakashDEV', 'VinayDEV', 'AshishDEV', 'VasuDEV']

console.log(names); // Output: ['Rohit', 'Aakash', 'Vinay', 'Ashish', 'Vasu']
/* for each method */
const names = ["Rohit","Aakash","Vinay","Ashish","Vasu"];

const newNames=name.forEach(function(name, index, array) {
  array[index] = name + "DEV";
});
console.log(newName) // Undefined

console.log(names); // Output: ['RohitDEV', 'AakashDEV', 'VinayDEV', 'AshishDEV', 'VasuDEV']