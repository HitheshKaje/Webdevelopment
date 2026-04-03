const func1 = async () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("tbhrere")
        },3000);
    })
}

async function main() {
    console.log("Heyy i am this")

    const promise1 = await func1()
    console.log(promise1)
}
console.log("helo mam")

main()