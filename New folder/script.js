let btn=document.getElementById("btn");
btn.addEventListener("click", addtask);

function addtask(){
   let text= document.getElementById("name").value;
    let li=document.createElement("li");
    li.innerText=text;
    console.log(text);
    document.getElementById("list").appendChild(li);
}