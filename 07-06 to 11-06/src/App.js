
import './App.css';
// import Hello from './Hello';
// import Welcome from './Welcome';
// import { Wishlabel } from './Wishlabel';
// import logiccontrol from './logincontrol'

import {Route,  BrowserRouter, Routes} from 'react-router-dom'
import Nav from './Nav';
import Home from './Home';
import ContactUs from './ContactUs';
import   Productpage  from './Productpage';
function App() {

  return (
    <div>
      <h1 style={{color:'orange'}}>Hi! Everyone...</h1>
      <BrowserRouter>
      <Nav/>
      <Routes>
<Route path='home' element={<Home/>}></Route>
<Route path='contactus' element={<ContactUs/>}></Route>
<Route path='product' element={<Productpage/>}></Route>
      </Routes>
      
      </BrowserRouter>
    
    </div>
  );
}

export default App;
