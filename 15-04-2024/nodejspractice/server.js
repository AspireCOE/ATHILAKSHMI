const fs=require('fs')
const path=require('path')
fs.readFile(path.join(__dirname,'files','start.txt'),'utf8', (err,data)=> {
    if(err) throw err;
    console.log(data);

});
//write file
//write file is faster than read file
fs.writeFile(path.join(__dirname,'files','aboutme.txt'),'Hello, This is Athi.I studied in Sri Krishna BE EEC. Now training at Aspire Systems.'  , 'utf8', (err)=> {
    if(err) throw err;
    console.log('write complete');
//update file
fs.appendFile(path.join(__dirname,'files','aboutme.txt'),' Thaksyou for visiting my page'  ,  (err)=> {
    if(err) throw err;
    console.log('append complete');
    //after write the file , you want to rename
    fs.rename(path.join(__dirname,'files','aboutme.txt'),path.join(__dirname,'files','myprofile.txt')  , (err)=> {
        if(err) throw err;
        console.log('rename complete');
    
    });

});

});
//using append create newfile also
fs.appendFile(path.join(__dirname,'files','about.txt'),' Thaksyou for visiting my page'  , 'utf8', (err)=> {
    if(err) throw err;
    console.log('append using newfile complete');

});
process.on('uncaughtException',err=>{
    console.error('There was an uncaught error:${err}')
    process.exit(1)
})
console.log("Hiiiii")
//file using commonJS module
 // when you run ES module file give full name with extension, but commonJS doesn't need to give extension