const fun=() =>{

    console.log("I am A fun function")
}
const callFunctiongreet=(thefunction)=>{
    console.log("Good morning")
    thefunction()
}
callFunctiongreet(fun)