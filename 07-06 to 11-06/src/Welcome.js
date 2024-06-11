import React, {Component} from 'react'
 class Welcome extends Component{
    render(){
        return(
            <div>Hello
            <h1 style={{color:'red'}}>Hi! You are welcom to learn React</h1>
            <h2>Hello {this.props.name} you are from {this.props.location} </h2>
            <h3>Today's topics {this.props.childern}</h3>
            </div>
        );
    }
}
export default Welcome;
