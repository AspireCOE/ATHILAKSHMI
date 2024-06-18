
import {useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  const [posts,setPosts]=useState(null)
  // we need to store that varibale so need useState()
useEffect(() => {
 fetch('https://jsonplaceholder.typicode.com/posts')
 .then(data=>data.json())
 .then(data=>{
  setPosts(data);
 })
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
      <div class="card mt-3" >
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
