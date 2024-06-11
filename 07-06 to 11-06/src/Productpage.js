import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export  class Productpage extends Component {
  render() {
    return (
      <div>
       <h1 style={{color:'green'}}>Product</h1> 
       <Link to='/product/laptop'>view all products</Link>
       <ol>
       <li>Laptop brands
       </li> </ol>
      </div>
    )
  }
}
export default Productpage