//allows you to chain together multiple asynchronous tasks in a specific order.
//where one asynchronous task needs to be performed after the completion of a different asynchronous task.
const add=(a,b)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(a<0||b<0){
            return reject('Num must be non-negative')
        }
    resolve(a+b)
    }, 2000)
})
}
add(1,2).then((sum)=>{
    console.log(sum)
    return add(sum,4)
}).then ((sum2)=>{
    console.log(sum2)
    
}).catch((e)=>{
    console.log(e)
})