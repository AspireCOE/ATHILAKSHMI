const{format}=require('date-fns')
const{v4:uuid}=require('uuid')
const fs=require('fs')
const fsPromis=require('fs').promises
const path=require('path')
const logEvents=async(message)=>{
    const dateTime=`${format(new Date(), 'ddMMyyyy\tHH:mm:ss')}`
    const logItem=`${dateTime}\t${uuid()}\t${message}`
    console.log(logItem)
    try{
        if(!fs.existsSync(path.join(__dirname,'logs'))){
            fsPromises.mkdir(path.join(__dirname,'logs'))
        }
await fsPromis.appendFile(path.join(__dirname,'logs','eventFile.txt'),logItem)
    }catch(err){
        console.log(err)
    }
    
}
module.exports=logEvents;