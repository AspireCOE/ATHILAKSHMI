import React from "react";


class Apple extends React.Component{
render(){
   const {appleInfo}= this.props; //in class component we use 'this' keyword, but func component pass props as a parameter
   const {type, color}= appleInfo;
    return(
      
        <h2>I'm a {color} {type} Apple!</h2>
    )
}
}
export default Apple;