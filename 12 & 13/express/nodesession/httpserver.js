var http=require('http');
var server=http.createServer((request,response)=>{

    response.write("<h1>Welcome to demo of http server</h1>")
});
server.listen(3000,()=>{
    console.log("http server is running");
})