var express=require('express');
var server=express();


server.get("/",(request,response)=>{
    response.send("<h1> express js application</h1>")
})
server.get("/",(request,response)=>{
    response.send("<h1> landing on home page</h1>")
})
server.listen(5000,()=>{
    console.log("express server is waiting for client connections")
})