const fs=require('fs')
const path=require('path')
fs.writeFile(path.join(__dirname,'files','aboutmeee.txt'),'Hello, This is Athi.I studied in Sri Krishna BE EEC. Now training at Aspire Systems.'  , 'utf8', (err)=> {
    if(err) throw err;
    console.log('write complete');
//update file
fs.appendFile(path.join(__dirname,'files','aboutmeee.txt'),' Thaksyou for visiting my page'  ,  (err)=> {
    if(err) throw err;
    console.log('append complete');
    //after write the file , you want to rename
    fs.rename(path.join(__dirname,'files','aboutmeee.txt'),path.join(__dirname,'files','profile.txt')  , (err)=> {
        if(err) throw err;
       console.log('rename complete');
    
    });

});
});
process.on('uncaughtException',err=>{
    console.error('There was an uncaught error:${err}')
    process.exit(1)
})