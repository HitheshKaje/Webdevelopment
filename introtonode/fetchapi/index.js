const url ="https://jsonplaceholder.typicode.com/posts/1"
const data =fetch(url)
data.then((value)=>{
    return value.json
}).then((response)=>{
console.log(response)
})