import React, { Component } from 'react'
import ReactDom from 'react-dom/client'
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Greeting from './Greeting';

export default class LogicControl extends Component {
    constructor(props){
        super(props)
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);

        this.state = {
            isLoggedIn:false


        };
    }
    handleLoginClick(){
        this.setState({
            isLoggedIn:true
        });

    }
    handleLogoutClick(){
        this.setState({
            isLoggedIn:false
        });
        
    }
  render() {
    const isLoggedIn = this.isLoggedIn;
    let button;
    if(isLoggedIn){
        button=<LoginButton onclick = {this.handleLoginClick}/>
    }
    else {
        button = <LogoutButton onclick = {this.handleLogoutClick}/>
    }
    return (
      <div>
        <Greeting isLoggedIn = {isLoggedIn}></Greeting>
        {button}
      </div>
    );
  }
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<LogicControl></LogicControl>)