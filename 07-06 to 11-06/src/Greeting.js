import React from 'react'
import ReactDom from 'react-dom/client';
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';

export default function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting></UserGreeting>;
    }
    
        return <GuestGreeting></GuestGreeting>;
    }
  
    
  const root = ReactDom.createRoot(document.getElementById('root'));
  root.render(<Greeting isLoggedIn = {false}></Greeting>);