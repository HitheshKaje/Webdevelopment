const wait =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("helove")
    },5000);
})
console.log("End")
wait.then((value)=>{
console.log(value)    
})
wait.catch((eorro)=>{
    console.log("error",error)

})

console.log("end")