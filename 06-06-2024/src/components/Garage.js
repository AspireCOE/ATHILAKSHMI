import Car from './Car'
import Apple from './Apple';
function Garage(){
    const isDoorOpened=true;
    //props example
   // const brand='Ferrari';
   // const color='Black'
 //instead of giving many props, define object and send that.here example
const CarInfo={brand:"Ferrari", color:"Black"} //use this for function component
//const CarInfo={};
const AppleInfo={type:"Fuji", color:"Red"};
const carList=[
    {brand:"BMW", color:"red"},
    {brand:"Ford", color:"Grey"},
    {brand:"Tesla", color:"White"}
];
const numberList=[1,2,3,3,4,5];


const showCarInfo= CarInfo.brand!==undefined && CarInfo.color!==undefined 
    return(
        <>
        <h2>Who lives inside my Grarage?</h2>
        {/* <Car Carbrand={brand}  Carcolor={'Red'}/> */}
       {/* AND(&&) Operator example*/}
       {showCarInfo && <Car carInfo={  CarInfo}/>}
        <Apple  appleInfo={AppleInfo}/>
           {/* /conditional rendering and ternary operator example*/}
       {isDoorOpened? <h2>Garage door is open </h2>:<h2>Garage door is closed</h2>}

       {/* list creation  using map() function and list key*/}
       <ul>
        { carList.map ((CarInfo)=><li key={CarInfo.brand}><Car carInfo={CarInfo}/></li> )}
       </ul>
       <ul>
        {/* for number arraylist use index as a key */}
       {numberList.map((e,index)=><p key={index}>{e}</p>)} 
        
       </ul>
    </>
    )
}
export default Garage;