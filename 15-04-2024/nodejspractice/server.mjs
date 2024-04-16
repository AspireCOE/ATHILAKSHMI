
//const path=require('path');
//console.log(path.dirname(__filename) )
//file using ES Module
import { readFile } from 'node:fs';
readFile('./files/start.txt','utf8',  (err,data)=>{
    if(err)throw err;
    console.log(data);
});
// utf8 encode, if any raw data convert readable format
//err statement -if any error correct it
// without using utf8 we can use console.log(data.toString())

// exit on uncaught error -this statement display the error statement and then exit
process.on('uncaughtException',err=>{
    console.error('There was an uncaught error:${err}')
    process.exit(1)
})
console.log("Hiiiii")
 // 1st Hiiii will print after that line execute becoz this file asynchrous read
 // when you run ES module file give full name with extension, but commonJS doesn't need to give extension