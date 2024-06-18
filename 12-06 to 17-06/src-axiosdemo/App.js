import Header from './components/Header';
import './App.css';
import axios from 'axios';
import {useState, useEffect } from 'react';
function App() {
  const [posts,setPosts]=useState(null)
  // we need to store that varibale so need useState()
useEffect(() => {
 axios.get('https://jsonplaceholder.typicode.com/posts')
 .then(res=>{
 
  setPosts(res.data);
 });
},[]);
  return (
    <div className="App">
     <Header/>
     <div className="container" >
      {
        (posts)?
         (<ul>{
          posts.map(post=>{ 
     return (<li>
      <div class="card mt-3" key={post.id} >
  <div className="card-body">
    <h5 className="card-title">{post.title}</h5>
    <p className="card-text">{post.body}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </li>
          )
    })
   }
         </ul>):
       (<h3>Loading...</h3>)}
     </div>
    </div>
  );
}


export default App;
