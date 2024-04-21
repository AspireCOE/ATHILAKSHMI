const express=require('express')
const app=express()
const port=3000
//local host:3000

app.get('/',(req,res)=> res.send("Athila.com"))

app.listen(port,()=>console.log("Server is running"))
