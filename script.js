function addTask(){
    let input =
    document.getElementById("taskInput");
    let task=input.value.trim();
    if(task==="")return;
    let li=document.createElement("li");
    li.textContent=task;
        li.addEventListener("click",function(){
            li.remove();
        });
    document.getElementById("taskList").appendChild(li);
    input.value="";
    }