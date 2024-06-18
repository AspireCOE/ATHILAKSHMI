import {useState} from "react";

import React from "react";
function FavoriteColor(){
    // let color='White';
    const [color,setColor] = useState('white')
    return  <>
    <h1>My fav color is {color}</h1>
    <button onClick={()=>{setColor('Red')}}>Chance color</button>
    </>
}
export default FavoriteColor;