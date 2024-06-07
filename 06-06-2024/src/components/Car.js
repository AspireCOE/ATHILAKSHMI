import React from 'react';
function Car(props){
   // through destructure we are getting Carbrand variable from Garage component
  ////in class component we use 'this' keyword, but func component pass props as a parameter
   const {carInfo}=props;
   const {brand, color} =carInfo;
    const text=`Hi, I'm a  ${color} ${brand} Car`;
    return(
        <h2>{text}</h2>
    );
}
export default Car;  