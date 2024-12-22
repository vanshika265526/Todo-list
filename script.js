const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list");
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveDATA();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveDATA();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveDATA();
    }
},false);

function saveDATA()
{
    localStorage.setItem("data",listContainer.innerHTML);
}
function showDATA()
{
    listContainer.innerHTML = localStorage.getItem("data");
}
showDATA();